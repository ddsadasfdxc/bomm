"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(196, 90, 74, 0.08) 0%, transparent 45%),
            radial-gradient(ellipse at 70% 80%, rgba(91, 122, 118, 0.06) 0%, transparent 45%),
            radial-gradient(ellipse at center, #1a1f18 0%, #0c0f0a 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(12, 15, 10, 0.2) 0%, transparent 30%, transparent 70%, rgba(12, 15, 10, 0.35) 100%),
            radial-gradient(ellipse at 50% 0%, rgba(245, 240, 230, 0.03) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
