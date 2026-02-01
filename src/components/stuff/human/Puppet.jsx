import React, { useState } from "react";
import { HumanAnimator } from "./HumanAnimator";
import { Draggable } from "./Draggable";

export const Puppet = ({ darkMode }) => {
  const DEFAULTS = {
    humanRotation: 0,
    headRotation: 0,
    foreUpperArmRotation: 180,
    foreLowerArmRotation: 0,
    foreHandRotation: 0,
    hindUpperArmRotation: 180,
    hindLowerArmRotation: 0,
    hindHandRotation: 0,
    hipRotation: 200,
    foreUpperLegRotation: -20,
    foreLowerLegRotation: 0,
    foreFootRotation: 70,
    hindUpperLegRotation: -20,
    hindLowerLegRotation: 0,
    hindFootRotation: 70,
  };

  const RANGES = {
    humanRotation: [0, 360],
    headRotation: [-40, 30],
    foreUpperArmRotation: [0, 360],
    foreLowerArmRotation: [0, 150],
    foreHandRotation: [-20, 20],
    hindUpperArmRotation: [0, 360],
    hindLowerArmRotation: [0, 150],
    hindHandRotation: [-20, 20],
    hipRotation: [190, 220],
    foreUpperLegRotation: [-60, 70],
    foreLowerLegRotation: [-150, 0],
    foreFootRotation: [30, 90],
    hindUpperLegRotation: [-60, 70],
    hindLowerLegRotation: [-150, 0],
    hindFootRotation: [30, 90],
  };

  const OFFSET_RANGE = [-300, 300];
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const [joints, setJoints] = useState({ ...DEFAULTS });
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Single joint setter
  const setJoint = (key) => (e) => {
    const [min, max] = RANGES[key] ?? [0, 360];
    const value = clamp(Number(e.target.value), min, max);
    setJoints((s) => ({ ...s, [key]: value }));
  };

  // Reset single joint
  const resetJoint = (key) => () =>
    setJoints((s) => ({ ...s, [key]: DEFAULTS[key] }));

  // Reset everything
  const resetAll = () => {
    setJoints({ ...DEFAULTS });
    setOffsetX(0);
    setOffsetY(0);
  };

  // Compact slider component
  const Slider = ({ label, joint }) => {
    const [min, max] = RANGES[joint] ?? [0, 360];
    return (
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 12, marginBottom: 1 }}>
          {label}: {joints[joint]}°
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="range"
            min={min}
            max={max}
            value={joints[joint]}
            onChange={setJoint(joint)}
            style={{ flexGrow: 1, marginRight: 4, height: 12 }}
          />
          <button
            onClick={resetJoint(joint)}
            style={{
              width: 36,
              padding: "1px 3px",
              fontSize: 9,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  // Offset slider component
  const OffsetSlider = ({ label, value, setValue }) => {
    const [min, max] = OFFSET_RANGE;
    return (
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 12, marginBottom: 1 }}>
          {label}: {value}px
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ flexGrow: 1, marginRight: 4, height: 12 }}
          />
          <button
            onClick={() => setValue(0)}
            style={{
              width: 36,
              padding: "1px 3px",
              fontSize: 9,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Draggable Human */}
      <Draggable initialX={300} initialY={200}>
        <div
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transition: "transform 0.3s ease", // <-- smooth offset transition
          }}
        >
          <HumanAnimator
            targetPose={joints}
            duration={300}
            debug={true}
            humanScale={2}
            darkMode={darkMode}
          />
        </div>
      </Draggable>

      {/* Draggable Slider Panel */}
      <Draggable initialX={520} initialY={200}>
        <div
          style={{
            width: 280,
            background: "var(--colour-6)",
            color: "var(--colour-1)",
            fontFamily: "monospace",
            borderRadius: 6,
            padding: 12,
          }}
        >
          <div
            style={{
              cursor: "grab",
              fontWeight: "bold",
              marginBottom: 6,
              userSelect: "none",
            }}
          >
            Puppet Controls
          </div>

          {/* Reset All Button */}
          <div style={{ textAlign: "center", marginBottom: 6 }}>
            <button
              onClick={resetAll}
              style={{
                padding: "4px 4px",
                fontSize: 12,
                cursor: "pointer",
                borderRadius: 4,
                background: "var(--colour-2)",
                color: "var(--colour-6)",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Reset All
            </button>
          </div>

          {/* Offset Controls */}
          <OffsetSlider label="Offset X" value={offsetX} setValue={setOffsetX} />
          <OffsetSlider label="Offset Y" value={offsetY} setValue={setOffsetY} />
          <hr />

          {/* Joint Controls */}
          <Slider label="Human" joint="humanRotation" />
          <hr />
          <Slider label="Head" joint="headRotation" />
          <hr />

          <Slider label="Fore Upper Arm" joint="foreUpperArmRotation" />
          <Slider label="Fore Lower Arm" joint="foreLowerArmRotation" />
          <Slider label="Fore Hand" joint="foreHandRotation" />
          <hr />

          <Slider label="Hind Upper Arm" joint="hindUpperArmRotation" />
          <Slider label="Hind Lower Arm" joint="hindLowerArmRotation" />
          <Slider label="Hind Hand" joint="hindHandRotation" />
          <hr />

          <Slider label="Hip" joint="hipRotation" />
          <hr />

          <Slider label="Fore Upper Leg" joint="foreUpperLegRotation" />
          <Slider label="Fore Lower Leg" joint="foreLowerLegRotation" />
          <Slider label="Fore Foot" joint="foreFootRotation" />
          <Slider label="Hind Upper Leg" joint="hindUpperLegRotation" />
          <Slider label="Hind Lower Leg" joint="hindLowerLegRotation" />
          <Slider label="Hind Foot" joint="hindFootRotation" />
        </div>
      </Draggable>
    </>
  );
};
