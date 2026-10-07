import React from "react";
import { motion } from "framer-motion";

const BUBBLES = [
  { top: "12%", left: "28%", width: 70, height: 70 },
  { top: "20%", left: "62%", width: 100, height: 100 },
  { top: "62%", left: "32%", width: 85, height: 85 },
  { top: "68%", left: "58%", width: 110, height: 110 },
  { top: "38%", left: "22%", width: 50, height: 50 },
  { top: "32%", left: "72%", width: 60, height: 60 },
];

export default function FloatingBubbles({ accentColor }) {
  return (
    <div className="bubbles-container">
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className="bubble"
          style={{
            top: b.top,
            left: b.left,
            width: `${b.width}px`,
            height: `${b.height}px`,
            backgroundColor: accentColor,
          }}
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}