"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Kopieer resultaat" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard niet beschikbaar
    }
  }
  return (
    <button type="button" onClick={copy} className="btn-secondary">
      {copied ? "Gekopieerd ✓" : label}
    </button>
  );
}
