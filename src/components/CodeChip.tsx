import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  float?: boolean;
};

const CodeChip = ({ text, className = "", delay = 0, float = false }: Props) => {
  const baseClasses =
    "inline-block font-mono text-xs bg-chip px-3 py-1 rounded-full";

  if (!float) {
    return (
      <span aria-hidden className={`${baseClasses} ${className}`}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      aria-hidden
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`${baseClasses} pointer-events-none ${className}`}
    >
      {text}
    </motion.span>
  );
};

export default CodeChip;