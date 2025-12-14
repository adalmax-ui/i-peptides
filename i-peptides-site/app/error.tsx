"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="glass rounded-xl2 p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-2xl font-semibold mb-2">Oops! Something went wrong</h2>
        <p className="text-slate-600 mb-6">
          We're sorry for the inconvenience. Please try again.
        </p>
        <div className="space-y-2">
          <Button className="w-full" onClick={reset}>
            Try again
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => (window.location.href = "/")}
          >
            Go to homepage
          </Button>
        </div>
        {error.message && (
          <details className="mt-4 text-left">
            <summary className="text-sm text-slate-500 cursor-pointer hover:text-slate-700">
              Error details
            </summary>
            <pre className="mt-2 text-xs text-slate-600 bg-slate-50 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
