import { useEffect } from "react";

import { getLastUser } from "../../../features/userFeatures";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/userSlice";
import useTheme from "../../../hooks/useTheme";

import "./Navbar.scss";
import NavbarComponent from "./NavbarComponent";

function Navbar() {
  const { setIsDark, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { setAuthedUser } = userSlice.actions;

  useEffect(() => {
    const lastUser = getLastUser();
    if (lastUser) dispatch(setAuthedUser(lastUser));
  }, []);

  const isUserloggedIn = useAppSelector(
    (state) => state.userReducer.isUserLoggedIn
  );

  return (
    <NavbarComponent
      isUserloggedIn={isUserloggedIn}
      setIsDark={setIsDark}
      isDark={isDark}
    />
  );
}

export default Navbar;
