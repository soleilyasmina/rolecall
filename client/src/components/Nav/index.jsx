import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Header, Heading, Menu } from "grommet";
import { Context } from "context";

const Nav = () => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Header>
      <Link to="/">
        <Heading>RoleCall</Heading>
      </Link>
      <Menu
        dropAlign={{"top": "top", "right": "right"}}
        justifyContent="end"
        items={
          user
            ? [
              {
                label: "Dashboard",
                onClick: () => history.push("/dashboard"),
              },
              {
                label: "Add Role",
                onClick: () => history.push("/new"),
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
      />
    </Header>
  );
};

export default Nav;
