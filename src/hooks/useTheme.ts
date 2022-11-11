import { useContext } from "react";
import { ThemeContext } from "../features/ThemeProvider";

const useTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};

export default useTheme;
