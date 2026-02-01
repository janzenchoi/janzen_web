import { Card } from "../../content/Card";
import { Puppet } from "../../stuff/human/Puppet";

/**
 * Activities page
 * @param {boolean} mobileMode whether to use mobile or desktop view
 * @param {boolean} darkMode whether to use dark or light mode
 * @returns activities page
 */
export const Activities = ({ mobileMode, darkMode }) => {
  return (
    <div>
      <Card mobileMode={mobileMode} title={"NOTHING"}/>
      <Puppet/>
    </div>
  );
}