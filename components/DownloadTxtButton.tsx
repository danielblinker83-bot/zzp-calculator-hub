"use client";

export default function DownloadTxtButton({ text, filename }: { text: string; filename: string }) {
  function download() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button type="button" onClick={download} className="btn-secondary">
      Download als .txt
    </button>
  );
}
