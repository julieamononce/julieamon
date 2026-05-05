import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

const CodeChip = ({ text, className = "", delay = 0 }: Props) => {
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
      className={`absolute font-mono text-xs md:text-sm text-muted/70
                  bg-chip/80 backdrop-blur-sm px-3 py-1.5 rounded-full
                  pointer-events-none ${className}`}
    >
      {text}
    </motion.span>
  );
};

export default CodeChip;