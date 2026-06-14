"use client";

import {
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  direction: RevealDirection;
  delay?: number;
  className?: string;
};

type RevealChildProps = {
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  direction,
  delay = 0,
  className,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (!isValidElement<RevealChildProps>(children)) {
    return children;
  }

  const child = children as ReactElement<RevealChildProps>;
  const revealClassName = [
    child.props.className,
    className,
    "viewport-reveal",
    `viewport-reveal-${direction}`,
    isVisible ? "is-visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    ...child.props.style,
    "--reveal-delay": delay ? `${delay}ms` : undefined,
  } as CSSProperties;

  return cloneElement(child, {
    ref: elementRef,
    className: revealClassName,
    style,
  } as RevealChildProps & { ref: typeof elementRef });
}
