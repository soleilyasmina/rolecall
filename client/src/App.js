import { Route } from 'react-router-dom';
import { Box, Main } from 'grommet';
import Nav from 'components/Nav';
import Create from 'views/Create';
import Dashboard from 'views/Dashboard';
import Detail from 'views/Detail';
import Edit from 'views/Edit';
import Login from 'views/Login';
import Register from 'views/Register';

function App() {
  return (
    <Main pad="small">
      <Nav />
      <Box width="xlarge" margin="auto">
        <Route exact path="/"></Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/role/:id">
          <Detail />
        </Route>
        <Route path="/new">
          <Create />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Box>
    </Main>
  );
}

export default App;
