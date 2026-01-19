import { outerContainerStyle, rowContainerStyle, columnContainerStyle } from '../helper/container';
import LocalToggle from '../components/buttons/LocalToggle';

export const Settings = () => {
  return (
    <div style={{ ...outerContainerStyle, ...rowContainerStyle }}>
      <div style={{ ...columnContainerStyle }}>
        <LocalToggle field="settingDarkMode"/>
      </div>
    </div>
  );
}