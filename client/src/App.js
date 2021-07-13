import { Route } from 'react-router-dom';
import { Main } from 'grommet';
import Nav from 'components/Nav';
import Create from "views/Create";
import Login from 'views/Login';
import Register from 'views/Register';

function App() {
  return (
    <Main pad="small">
      <Nav />
      <Route exact path="/"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/new">
        <Create />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Main>
  );
}

export default App;
