"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({
  target,
  duration,
  animation,
}: {
  target: number;
  duration?: number;
  animation?: gsap.EaseString | gsap.EaseFunction;
}) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    gsap.fromTo(
      el,
      { val: 0 },
      {
        val: target,
        duration: duration || 2,
        ease: animation || "power1.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top bottom",
          toggleActions: "restart",
        },
        onUpdate: function () {
          if (el.current) {
            el.current.innerText = Math.floor(this.targets()[0].val).toString();
          }
        },
      },
    );
  }, [target, animation, duration]);

  return <span ref={el}>0</span>;
}
