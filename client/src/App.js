import { Route } from "react-router-dom";
import { Main } from "grommet";
import Nav from "components/Nav";

function App() {
  return (
    <Main pad="small">
      <Nav />
      <Route exact path="/">
      </Route>
      <Route path="/dashboard">
      </Route>
      <Route path="/new">
      </Route>
      <Route path="/login">
      </Route>
      <Route path="/register">
      </Route>
    </Main>
  );
}

export default App;
