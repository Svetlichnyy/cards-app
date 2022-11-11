import {
  useMemo,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import PropTypes from "prop-types";

interface Context {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}
export const ThemeContext = createContext<Context>({
  isDark: false,
  setIsDark: (value) => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
