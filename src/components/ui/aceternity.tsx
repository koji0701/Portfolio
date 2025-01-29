import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      controls.start({
        background: [
          "radial-gradient(circle at 0% 0%, #1e293b 0%, transparent 50%)",
          "radial-gradient(circle at 100% 100%, #1e293b 0%, transparent 50%)",
          "radial-gradient(circle at 100% 0%, #1e293b 0%, transparent 50%)",
          "radial-gradient(circle at 0% 100%, #1e293b 0%, transparent 50%)",
          "radial-gradient(circle at 0% 0%, #1e293b 0%, transparent 50%)",
        ],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    }
  }, [animate, controls]);

  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        animate={controls}
        className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 transition duration-500"
      />
      <div className={`relative ${className}`}>{children}</div>
    </div>
  );
};

export const TextReveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </div>
  );
};