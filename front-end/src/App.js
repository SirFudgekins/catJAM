import React from "react";
import { Switch, Route } from "react-router-dom";
import AddSongPage from "./components/AddSongPage";
import LoginPage from "./components/LoginPage";
import AboutUsPage from "./components/AboutUsPage";
import DisplayPlaylists from "./components/DisplayPlaylists";
import "./styles.css";
import WelcomePage from "./components/WelcomePage";
import PageNotFound from "./components/PageNotFound";

function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/addsong" component={AddSongPage} />
        <Route path="/playlists" component={DisplayPlaylists} />
        <Route path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: "AboutUs"
//     };
//     this.redirectToLogin = this.redirectToLogin.bind(this);
//     this.redirectToAddSong = this.redirectToAddSong.bind(this);
//     this.redirectToAboutUs = this.redirectToAboutUs.bind(this);
//     this.redirectToDisplayPlaylists = this.redirectToDisplayPlaylists.bind(this);
//   }

//   redirectToLogin() {
//     this.setState({
//       currentPage: "Login"
//     });
//   }

//   redirectToAddSong() {
//     this.setState({
//       currentPage: "AddSong"
//     });
//   }

//   redirectToAboutUs() {
//     this.setState({
//       currentPage: "AboutUs"
//     });
//   }

//   redirectToDisplayPlaylists() {
//     this.setState({
//       currentPage: "DisplayPlaylists"
//     });
//   }

//   render() {
//     let page = null;
//     if (this.state.currentPage === "Login") {
//       page = <LoginPage 
//         redirectToDisplayPlaylists={this.redirectToDisplayPlaylists}/>;
//     } else if (this.state.currentPage === "AddSong") {
//       page = <AddSongPage />;
//     } else if (this.state.currentPage === "AboutUs") {
//       page = <AboutUsPage />;
//     } else if (this.state.currentPage === "DisplayPlaylists") {
//       page = <DisplayPlaylists />;
//     }
//     return (
//       <div className="App">
//         {page}
//         <button onClick={this.redirectToLogin}>Login</button>
//         <button onClick={this.redirectToAddSong}>AddSong</button>
//         <button onClick={this.redirectToAboutUs}>AboutUs</button>
//         <button onClick={this.redirectToDisplayPlaylists}>DisplayPlaylists</button>
//       </div>
//     );
//   }
// }
export default App;