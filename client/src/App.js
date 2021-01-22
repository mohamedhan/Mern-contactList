import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Button } from "reactstrap";
import ContactList from "./components/ContactList";
import AddForm from "./components/AddForm";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Link to="/list">
          {" "}
          <Button color="info">Contact list</Button>
        </Link>
        <Link to="/form">
          <Button color="info">Add Contact </Button>
        </Link>
      </div>
      <Route exact path="/" render={() => <h2>see you contact list</h2>} />
      <Route path="/list" render={() => <ContactList />} />
      <Route path="/form" render={() => <AddForm />} />
    </BrowserRouter>
  );
}

export default App;
