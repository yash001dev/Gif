import React from "react";
import { connect } from "react-redux";
import Giphy from "./Giphy";
import Home from "./Home";
import Mainpg from "./Mainpg";
import { setCurrentUser } from "./redux/user-actions"
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  render() {
    return (
      <>
        {/* <Home /> */}
        {/* <Mainpg /> */}
        <Giphy />
      </>
    );
  }
}
export default App;