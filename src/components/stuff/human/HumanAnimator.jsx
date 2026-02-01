import React, { useEffect, useRef, useState } from "react";
import { Human } from "./Human";

export const HumanAnimator = ({
  targetPose,
  x = 0,
  y = 0,
  duration = 500,
  debug = false,
  humanScale = 1,
  darkMode = false,
}) => {
  const [currentPose, setCurrentPose] = useState(() => ({
    x,
    y,
    foreHandRotation: 180,
    hindHandRotation: 180,
    ...targetPose,
  }));

  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startPoseRef = useRef({ ...currentPose });
  const lastPoseRef = useRef({ ...currentPose });
  const targetRef = useRef({ ...currentPose });

  const shortestAngleDelta = (from, to) => ((to - from + 540) % 360) - 180;
  const isAngleKey = (key) => !["x", "y"].includes(key);

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const t = Math.min(elapsed / duration, 1);

    const nextPose = {};

    for (const key in targetRef.current) {
      const start = startPoseRef.current[key];
      const end = targetRef.current[key];

      if (!isAngleKey(key)) {
        // linear interpolation for offsets
        nextPose[key] = start + (end - start) * t;
      } else {
        // shortest-path interpolation for rotations
        const delta = shortestAngleDelta(start, end);
        nextPose[key] = (start + delta * t + 360) % 360;
      }
    }

    setCurrentPose(nextPose);

    if (t < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      lastPoseRef.current = { ...nextPose };
      startPoseRef.current = { ...nextPose };
      startTimeRef.current = null;
    }
  };

  useEffect(() => {
    cancelAnimationFrame(animationRef.current);

    // Include x and y in the target
    const adjustedTarget = {
      ...targetPose,
      x,
      y,
    };

    targetRef.current = { ...lastPoseRef.current, ...adjustedTarget };
    startPoseRef.current = { ...lastPoseRef.current };
    startTimeRef.current = null;

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [targetPose, x, y, duration]);

  return (
    <Human
      humanRotation={currentPose.humanRotation}
      headRotation={currentPose.headRotation}
      foreUpperArmRotation={currentPose.foreUpperArmRotation}
      foreLowerArmRotation={currentPose.foreLowerArmRotation}
      foreHandRotation={currentPose.foreHandRotation}
      hindUpperArmRotation={currentPose.hindUpperArmRotation}
      hindLowerArmRotation={currentPose.hindLowerArmRotation}
      hindHandRotation={currentPose.hindHandRotation}
      hipRotation={currentPose.hipRotation}
      foreUpperLegRotation={currentPose.foreUpperLegRotation}
      foreLowerLegRotation={currentPose.foreLowerLegRotation}
      foreFootRotation={currentPose.foreFootRotation}
      hindUpperLegRotation={currentPose.hindUpperLegRotation}
      hindLowerLegRotation={currentPose.hindLowerLegRotation}
      hindFootRotation={currentPose.hindFootRotation}

      x={currentPose.x}
      y={currentPose.y}

      debug={debug}
      humanScale={humanScale}
      darkMode={darkMode}
    />
  );
};
