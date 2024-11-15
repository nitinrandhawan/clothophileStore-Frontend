const GetItems = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null; 
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
    return null;
  }
};

const SetItems = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

export {GetItems,SetItems}