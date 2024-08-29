import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../../hooks/useMedia/useMedia";

import UserPhotos from "../../../assets/images/feed.svg?react";
import Statistics from "../../../assets/images/estatisticas.svg?react";
import AddPhoto from "../../../assets/images/adicionar.svg?react";
import Logout from "../../../assets/images/sair.svg?react";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <UserPhotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Statistics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
