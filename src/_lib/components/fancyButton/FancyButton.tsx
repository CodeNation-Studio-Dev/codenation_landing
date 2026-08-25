"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./FancyButton.css";

export default function FancyButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !flairRef.current) return;
    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100),
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100),
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const mouseEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const mouseLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const mouseMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", mouseEnter);
    button.addEventListener("mouseleave", mouseLeave);
    button.addEventListener("mousemove", mouseMove);

    return () => {
      button.removeEventListener("mouseenter", mouseEnter);
      button.removeEventListener("mouseleave", mouseLeave);
      button.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={"button button--stroke " + (className ? ` ${className}` : "")}
      onClick={onClick}
      data-block="button"
    >
      <span ref={flairRef} className="button__flair"></span>
      <span className="button__label">{children}</span>
    </button>
  );
}
