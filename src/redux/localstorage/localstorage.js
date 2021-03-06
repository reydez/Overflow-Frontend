export const loadstate = () => {
  try {
    const serializedState = localStorage.getItem("questions");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("questions", serializedState);
  } catch (error) {}
};
