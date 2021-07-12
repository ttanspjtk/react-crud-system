import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
