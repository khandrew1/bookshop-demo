import { useState } from "react";
import type { ModelContextOperationResult } from "mcp-use/react";

/** Each explicit attachment action owns only its own button's busy/error state. */
export function AttachButton({
  label,
  onAttach,
}: {
  /** Human-readable action label. */
  label: string;
  /** Attach the selected evidence only after the reader clicks. */
  onAttach: () => Promise<ModelContextOperationResult>;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function attach() {
    setBusy(true);
    setError("");
    try {
      await onAttach();
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Could not add context."
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="attachment-action">
      <button
        disabled={busy}
        onClick={() => {
          void attach();
        }}
      >
        {busy ? "Adding…" : label}
      </button>
      {error && <small role="alert">{error}</small>}
    </div>
  );
}
