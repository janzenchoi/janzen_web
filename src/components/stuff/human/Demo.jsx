import React, { useState } from "react";
import { HumanAnimator } from "./HumanAnimator";

export const Demo = () => {
  const straightPose = {
    humanRotation: 0,
    headRotation: 0,
    foreUpperArmRotation: 180,
    foreLowerArmRotation: 0,
    hindUpperArmRotation: 180,
    hindLowerArmRotation: 0,
    hipRotation: 200,
    foreUpperLegRotation: -20,
    foreLowerLegRotation: 0,
    foreFootRotation: 70,
    hindUpperLegRotation: -20,
    hindLowerLegRotation: 0,
    hindFootRotation: 70,
  };

  const runPose1 = {
    humanRotation: 320,
    headRotation: 0,
    foreUpperArmRotation: 180,
    foreLowerArmRotation: 0,
    hindUpperArmRotation: 180,
    hindLowerArmRotation: 0,
    hipRotation: 200,
    foreUpperLegRotation: -20,
    foreLowerLegRotation: 0,
    foreFootRotation: 70,
    hindUpperLegRotation: -20,
    hindLowerLegRotation: 0,
    hindFootRotation: 70,
  };

  const [pose, setPose] = useState(straightPose);
  const [duration, setDuration] = useState(100);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  // Animate function
  const animate = async () => {
    setDuration(100);
    setPose(straightPose);      // reset to initial pose
    await wait(100);            // wait for 200ms so it actually renders
    setDuration(100);
    setPose(runPose1);          // animate to run pose
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <button onClick={animate}>Start</button>
      <HumanAnimator targetPose={pose} duration={duration} />
    </div>
  );
};
