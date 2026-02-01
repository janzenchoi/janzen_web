import { Stick } from "./Stick";

// Images
import foreFootImage from "../../../assets/stuff/human/fore_foot.png";
import foreLowerArmImage from "../../../assets/stuff/human/fore_lower_arm.png";
import foreLowerLegImage from "../../../assets/stuff/human/fore_lower_leg.png";
import foreUpperArmImage from "../../../assets/stuff/human/fore_upper_arm.png";
import foreUpperLegImage from "../../../assets/stuff/human/fore_upper_leg.png";
import headImage from "../../../assets/stuff/human/head.png";
import hindFootImage from "../../../assets/stuff/human/hind_foot.png";
import hindLowerArmImage from "../../../assets/stuff/human/hind_lower_arm.png";
import hindLowerLegImage from "../../../assets/stuff/human/hind_lower_leg.png";
import hindUpperArmImage from "../../../assets/stuff/human/hind_upper_arm.png";
import hindUpperLegImage from "../../../assets/stuff/human/hind_upper_leg.png";
import hipImage from "../../../assets/stuff/human/hip.png";
import torsoImage from "../../../assets/stuff/human/torso.png";

/**
 * A hierarchical human puppet composed of stick-based body parts.
 * All joints are rotated relative to their parent joint.
 *
 * @param {number} headRotation rotation of the head (degrees)
 * @param {number} foreUpperArmRotation rotation of the front upper arm / shoulder (degrees)
 * @param {number} foreLowerArmRotation rotation of the front lower arm / elbow (degrees)
 * @param {number} hindUpperArmRotation rotation of the rear upper arm / shoulder (degrees)
 * @param {number} hindLowerArmRotation rotation of the rear lower arm / elbow (degrees)
 * @param {number} hipRotation rotation of the pelvis / hip joint (degrees)
 * @param {number} foreUpperLegRotation rotation of the front upper leg / thigh (degrees)
 * @param {number} foreLowerLegRotation rotation of the front lower leg / knee (degrees)
 * @param {number} foreFootRotation rotation of the front foot / ankle (degrees)
 * @param {number} hindUpperLegRotation rotation of the rear upper leg / thigh (degrees)
 * @param {number} hindLowerLegRotation rotation of the rear lower leg / knee (degrees)
 * @param {number} hindFootRotation rotation of the rear foot / ankle (degrees)
 * @param {boolean} debug enable debug output / visual aids
 * @param {boolean} human_scale factor to scale everything
 * @returns human object
 */
export const Human = ({
  headRotation = 0,           // [-40, 30]
  foreUpperArmRotation = 180,
  foreLowerArmRotation = 0,
  hindUpperArmRotation = 180,
  hindLowerArmRotation = 0,
  hipRotation = 200,          // [190, 220]
  foreUpperLegRotation = -20, // [-60, 70]
  foreLowerLegRotation = 0,   // [0, -150]
  foreFootRotation = 70,      // [30, 90]
  hindUpperLegRotation = -20, // [-60, 70]
  hindLowerLegRotation = 0,   // [0, -150]
  hindFootRotation = 70,      // [30, 90]
  debug = false,
  human_scale = 1,
}) => {

  // Define head
  const Head = () => {
    return <Stick
      length={45*human_scale}
      rotation={headRotation}
      image={<img src={headImage} style={{ height: 63 * human_scale }} draggable={false} alt="Janzen's head"/>}
      imageOffset={{ x: 3 * human_scale, y: -40 * human_scale, r: 90 }}
      debug={debug}
    />
  };

  // Define torso
  const Torso = () => {
    return <Stick
      length={90*human_scale}
      rotation={0}
      image={<img src={torsoImage} style={{ height: 100*human_scale }} alt="Janzen's torso"/>}
      imageOffset={{ x: 25*human_scale, y: -55*human_scale, r: 90 }}
      childAxes={[90*human_scale, 80*human_scale]}
      debug={debug}
    />
  };
  
  // Define fore upper arm
  const ForeUpperArm = ({ children }) => {
    return <Stick
      length={45*human_scale}
      rotation={foreUpperArmRotation}
      image={<img src={foreUpperArmImage} style={{ height: 60*human_scale }} alt="Janzen's fore upper arm"/>}
      imageOffset={{ x: 12*human_scale, y: -30*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define fore lower arm
  const ForeLowerArm = () => {
    return <Stick
      length={45*human_scale}
      rotation={foreLowerArmRotation}
      image={<img src={foreLowerArmImage} style={{ height: 75*human_scale }} alt="Janzen's fore lower arm"/>}
      imageOffset={{ x: 22*human_scale, y: -36*human_scale, r: -90 }}
      debug={debug}
    />
  };

  // Define hind upper arm
  const HindUpperArm = ({ children }) => {
    return <Stick
      length={45*human_scale}
      rotation={hindUpperArmRotation}
      image={<img src={hindUpperArmImage} style={{ height: 58*human_scale }} alt="Janzen's hind upper arm"/>}
      imageOffset={{ x: 12*human_scale, y: -28*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define hind lower arm
  const HindLowerArm = () => {
    return <Stick
      length={45*human_scale}
      rotation={hindLowerArmRotation}
      image={<img src={hindLowerArmImage} style={{ height: 73*human_scale }} alt="Janzen's hind lower arm"/>}
      imageOffset={{ x: 22*human_scale, y: -36*human_scale, r: -90 }}
      debug={debug}
    />
  };

  // Define hip
  const Hip = ({ children }) => {
    return <Stick
      length={15*human_scale}
      rotation={hipRotation}
      image={<img src={hipImage} style={{ height: 50*human_scale }} alt="Janzen's hip"/>}
      imageOffset={{ x: -20*human_scale, y: -20*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define fore upper leg
  const ForeUpperLeg = ({ children }) => {
    return <Stick
      length={60*human_scale}
      rotation={foreUpperLegRotation}
      image={<img src={foreUpperLegImage} style={{ height: 80*human_scale }} alt="Janzen's fore upper leg"/>}
      imageOffset={{ x: 12*human_scale, y: -38*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define fore lower leg
  const ForeLowerLeg = ({ children }) => {
    return <Stick
      length={50*human_scale}
      rotation={foreLowerLegRotation}
      image={<img src={foreLowerLegImage} style={{ height: 70*human_scale }} alt="Janzen's fore lower leg"/>}
      imageOffset={{ x: 10*human_scale, y: -35*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define fore foot
  const ForeFoot = ({ children }) => {
    return <Stick
      length={20*human_scale}
      rotation={foreFootRotation}
      image={<img src={foreFootImage} style={{ height: 20*human_scale }} alt="Janzen's fore foot"/>}
      imageOffset={{ x:-15*human_scale, y: -15*human_scale, r: 200 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define hind upper leg
  const HindUpperLeg = ({ children }) => {
    return <Stick
      length={60*human_scale}
      rotation={hindUpperLegRotation}
      image={<img src={hindUpperLegImage} style={{ height: 80*human_scale }} alt="Janzen's hind upper leg"/>}
      imageOffset={{ x: 12*human_scale, y: -38*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define hind lower leg
  const HindLowerLeg = ({ children }) => {
    return <Stick
      length={50*human_scale}
      rotation={hindLowerLegRotation}
      image={<img src={hindLowerLegImage} style={{ height: 70*human_scale }} alt="Janzen's hind lower leg"/>}
      imageOffset={{ x: 10*human_scale, y: -35*human_scale, r: -90 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Define hind foot
  const HindFoot = ({ children }) => {
    return <Stick
      length={20*human_scale}
      rotation={hindFootRotation}
      image={<img src={hindFootImage} style={{ height: 20*human_scale }} alt="Janzen's hind foot"/>}
      imageOffset={{ x:-15*human_scale, y: -15*human_scale, r: 200 }}
      debug={debug}
    >
      {children}
    </Stick>
  };

  // Render object
  return (
    <Stick
      length={10*human_scale}
      rotation={-90}
      childAxes={[82*human_scale, 90*human_scale, 0*human_scale, 0*human_scale, 82*human_scale]}
      debug={debug}
    >

      <HindUpperArm>
        <HindLowerArm/>
      </HindUpperArm>
      <Head/>
      <Hip>
        <HindUpperLeg>
          <HindLowerLeg>
            <HindFoot/>
          </HindLowerLeg>
        </HindUpperLeg>
        <ForeUpperLeg>
          <ForeLowerLeg>
            <ForeFoot/>
          </ForeLowerLeg>
        </ForeUpperLeg>
      </Hip>
      <Torso/>
      <ForeUpperArm>
        <ForeLowerArm/>
      </ForeUpperArm>

    </Stick>
  );
};
