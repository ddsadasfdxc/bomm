"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleWenRef = useRef<SVGTextElement>(null);
  const titleRuoRef = useRef<SVGTextElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        [titleWenRef.current, titleRuoRef.current],
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ paddingTop: "calc(45vh - 200px)" }}
    >
      <svg
        className="w-[300px] h-[135px] md:w-[380px] md:h-[170px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        viewBox="0 0 400 160"
        aria-label="温若"
      >
        <text
          ref={titleWenRef}
          x="28%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-[var(--text-paper)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "120px",
            fontWeight: 700,
            opacity: 0,
          }}
        >
          温
        </text>
        <text
          ref={titleRuoRef}
          x="72%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-[var(--text-paper)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "120px",
            fontWeight: 700,
            opacity: 0,
          }}
        >
          若
        </text>
      </svg>

      <p
        ref={subtitleRef}
        className="mt-6 md:mt-8 text-[var(--accent-indigo-light)] text-base md:text-lg tracking-[0.55em]"
        style={{ fontFamily: "var(--font-display)", opacity: 0 }}
      >
        散修 · 剑修
      </p>
      <p
        ref={quoteRef}
        className="mt-3 md:mt-4 text-[var(--text-muted)] text-sm md:text-base tracking-[0.15em] italic"
        style={{ opacity: 0 }}
      >
        一缕清风，半卷残云。
      </p>
      <span
        ref={descRef}
        className="mt-6 md:mt-8 inline-block px-6 py-2.5 text-xs md:text-sm tracking-[0.25em] text-[var(--text-muted)] border border-[var(--glass-border)] rounded-full bg-[var(--glass-bg)] backdrop-blur-sm transition-all duration-350 hover:border-[var(--glass-border-hover)] hover:bg-[rgba(245,240,230,0.06)] hover:-translate-y-0.5"
        style={{ opacity: 0 }}
      >
        技术测试站 · 个人 OC 站
      </span>
    </section>
  );
}
