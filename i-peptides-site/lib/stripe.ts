import Stripe from "stripe";

function createStripeInstance(): Stripe | null {
  // Don't initialize during build if no key is present
  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn("STRIPE_SECRET_KEY not set - Stripe functionality will be disabled");
    return null;
  }

  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
}

// Lazy initialization
let stripeInstance: Stripe | null | undefined = undefined;

function getStripeInstance(): Stripe | null {
  if (stripeInstance === undefined) {
    stripeInstance = createStripeInstance();
  }
  return stripeInstance;
}

// Export with Proxy to enable lazy loading
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const instance = getStripeInstance();
    if (!instance) {
      // During build time, return undefined to prevent errors
      // At runtime, this will throw when actually used
      if (typeof prop === 'string' && prop !== 'then') {
        return undefined;
      }
      return undefined;
    }
    return (instance as any)[prop];
  },
});
