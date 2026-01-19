import { useState, useEffect } from "react";
import { getStoredValue } from "./storage";

/**
 * Returns the correct colour based on dark mode stored in localStorage.
 * Automatically updates if the value changes in other tabs/windows or in the same tab.
 *
 * @param {string} lightColour - colour to use in light mode
 * @param {string} darkColour - colour to use in dark mode
 * @returns {string} current colour
 */
export function useDarkModeColour(lightColour, darkColour) {
  const [darkMode, setDarkMode] = useState(getStoredValue("settingDarkMode") === "true");

  //Updates colours based on changes to local storage
  useEffect(() => {
    const listener = (e) => {
      if (!e || e.key === "settingDarkMode") {
        setDarkMode(getStoredValue("settingDarkMode") === "true");
      }
    };

    // Listen for other tabs
    window.addEventListener("storage", listener);

    // Monkey-patch localStorage.setItem to detect same-tab changes
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (key === "settingDarkMode") listener();
    };

    // Restores original local storage value
    return () => {
      window.removeEventListener("storage", listener);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  return darkMode ? darkColour : lightColour;
}
