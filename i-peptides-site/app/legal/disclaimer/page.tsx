export default function DisclaimerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Disclaimer</h1>
        <p className="mt-1 text-slate-600">
          Template only. Replace with your legal text verified for your jurisdiction and business model.
        </p>
      </div>

      <div className="glass rounded-xl2 p-6 space-y-3 text-sm text-slate-700">
        <p>
          Information on this website is provided for educational purposes and does not constitute medical advice.
          Do not use this website content to diagnose or treat any condition. Always consult qualified professionals.
        </p>
        <p>
          Product availability, regulatory status, and permitted sales vary by jurisdiction. Ensure you comply with
          local laws and the policies of your payment and hosting providers.
        </p>
      </div>
    </div>
  );
}
