"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { copy, type Locale } from "../content";
export function Code({
  value,
  lang,
  label,
}: {
  value: string;
  lang: Locale;
  label: string;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="codebox">
      <div className="code-head">
        <span>{label}</span>
        <button
          className="btn small"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(value);
              setDone(true);
              setError(false);
              setTimeout(() => setDone(false), 1800);
            } catch {
              setError(true);
            }
          }}
        >
          {done ? <Check size={12} /> : <Copy size={12} />}{" "}
          {done ? copy[lang].copied : copy[lang].copy}
        </button>
      </div>
      <pre>{value}</pre>
      {error && (
        <small>
          {lang === "zh"
            ? "请手动选择并复制代码。"
            : "Select the code to copy manually."}
        </small>
      )}
    </div>
  );
}
