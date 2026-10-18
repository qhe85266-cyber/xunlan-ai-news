// 2026-10-18：讯澜字标与信息汇流标记。Wordmark 保持既有接口，RingMark 用于加载动画。
// 这里用站名排字；有自己的 Logo 时，把 Wordmark 换成你的 SVG（保持同样的参数）。
import { SITE } from "../site.ts";

export function Wordmark({ size = 24, className = "", title = SITE.name }: { size?: number; className?: string; title?: string }) {
  return (
    <span className={`inline-flex items-center font-black leading-none tracking-[-0.03em] ${className}`} style={{ fontSize: Math.round(size * 0.92) }} aria-label={title} role="img">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-[0.3em] h-[0.9em] w-[0.9em]" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M2 5h8l4 7-4 7H2M18 5h4M18 12h4M18 19h4" /></svg>
      <span aria-hidden="true">{SITE.name}</span>
    </span>
  );
}

/** Xunlan information-stream mark; the historical RingMark export is retained for compatibility. */
export function RingMark({ className = "", spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g style={spinning ? { transformOrigin: "12px 12px", animation: "spin-slow 1.1s linear infinite" } : undefined}>
        <path d="M3 4h8l5 8-5 8H3M20 5h2M20 12h2M20 19h2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
