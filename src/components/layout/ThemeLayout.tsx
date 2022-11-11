import useTheme from "../../hooks/useTheme";
import PropTypes from "prop-types";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ThemeLayout = ({ children }: Props) => {
  const { isDark } = useTheme();
  return <div data-theme={isDark}>{children}</div>;
};

ThemeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeLayout;
