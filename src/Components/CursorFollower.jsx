import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function CursorFollower() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999]"
      animate={{
        x: mouse.x - 6,
        y: mouse.y - 6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      style={{
        width: 12,
        height: 12,
      }}
    />
  );
}

export default CursorFollower;
