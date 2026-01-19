// Sets the value of a stored value (always stored as string)
export function setStoredValue(field, value) {
  localStorage.setItem(field, String(value));
}

// Gets the raw stored value (string or null)
export function getStoredValue(field) {
  return localStorage.getItem(field);
}

// Toggles a boolean value (expects "true" or "false")
export function toggleStoredValue(field) {
  const oldValue = getStoredValue(field) === "true";
  const newValue = !oldValue;
  setStoredValue(field, newValue);
  return newValue; // boolean
}

// Increment the stored numeric value by 1
export function incrementStoredValue(field) {
  const oldValue = parseInt(getStoredValue(field), 10) || 0;
  const newValue = oldValue + 1;
  setStoredValue(field, newValue);
  return newValue;
}

// Decrement the stored numeric value by 1, minimum 0
export function decrementStoredValue(field) {
  const oldValue = parseInt(getStoredValue(field), 10) || 0;
  const newValue = Math.max(0, oldValue - 1);
  setStoredValue(field, newValue);
  return newValue;
}
