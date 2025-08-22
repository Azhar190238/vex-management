import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { SparklesText } from "../magicui/sparkles-text";
import { TypingAnimation } from "../magicui/typing-animation";
import { FlipText } from "../magicui/flip-text";

interface CommonHeadingProps {
  icon: ReactNode;
  heading: string;
  subheading?: string; // NEW
  description: string;
  headingClassName?: string;
  subheadingClassName?: string; // NEW
  descriptionClassName?: string;
  containerClassName?: string;
}

const CommonHeading: React.FC<CommonHeadingProps> = ({
  icon,
  heading,
  subheading,
  description,
  headingClassName = "text-3xl md:text-4xl font-bold",
  descriptionClassName = "text-gray-600 text-lg md:text-sm mt-6",
  containerClassName = "max-w-3xl mx-auto text-center mb-8",
}) => {
  const subRef = useRef<HTMLDivElement | null>(null);
  const [showSub, setShowSub] = useState(false);

  // Trigger subheading visibility on scroll
  useEffect(() => {
    if (!subRef.current || !subheading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSub(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(subRef.current);

    return () => observer.disconnect();
  }, [subheading]);

  return (
    <div className={containerClassName}>
      {/* Icon + Heading in same row */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="animate-bounce">{icon}</span>
        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <SparklesText>
          <AnimatedGradientText
            className={`${headingClassName} relative bottom-3`}
          >
            {heading}
          </AnimatedGradientText>
        </SparklesText>
      </div>

      {/* Subheading - shows only when section scrolls into view */}
      {subheading && (
        <div
          ref={subRef}
          className={` transition-all duration-700 ${
            showSub ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <FlipText className="text-2xl font-bold -tracking-widest text-black dark:text-white md:text-4xl">
            {subheading}
          </FlipText>
        </div>
      )}

      {/* Description with typing animation */}
      <p className={descriptionClassName}>
        <TypingAnimation startOnView={true}>
          {description}
        </TypingAnimation>
      </p>
    </div>
  );
};

export default CommonHeading;
