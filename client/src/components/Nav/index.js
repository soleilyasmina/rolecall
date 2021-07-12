import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Header, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { Context } from "context";

const Nav = () => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Header>
      <Link to="/">
        <h1>RoleCall</h1>
      </Link>
      <Menu
        items={
          user
            ? [
                {
                  label: "Dashboard",
                  onClick: () => history.push("/dashboard"),
                },
                {
                  label: "Add Role",
                  onClick: () => history.push("/dashboard"),
                },
                {
                  label: "Search",
                  onClick: () => history.push("/search"),
                },
                {
                  label: "Logout",
                  onClick: () => history.push("/"),
                },
              ]
            : [
                { label: "Login", onClick: () => history.push("/login") },
                { label: "Register", onClick: () => history.push("/register") },
              ]
        }
      >
      <MenuIcon />
      </Menu>
    </Header>
  );
};

export default Nav;
