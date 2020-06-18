import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QualCard from './Components/QualCard';
import qualifiers from './Components/Qualifiers';
import worlds from './Components/Worlds';
import Navbar from './Components/Navbar';
import ChooseCharacter from './Components/PickCharacter';
import Login from './Components/Login';
import './App.css';

class App extends Component {
  state = {
    quals: [],
    chal: [],
    flags: [],
    userCharacter: {},
    userFlag: {}
  }

  componentDidMount() {
    this.setState({ quals: qualifiers })
    this.setState({ flags: worlds })
  }

  handleAddToChallenge = (qual, chal) => {
    this.setState((prevState)  => {
      const updatedChal = prevState[chal].includes(qual) ?
        prevState[chal].filter((element) => element!==qual) :
        [...prevState[chal], qual];

      return {
        ...prevState,
        [chal]: updatedChal
      }
    })
  }

  selectCharacter = event => {
    const clickedStr = event.target.value;
    const clickedChar = this.state.quals.find(char => char.name === clickedStr);
    this.setState({ userCharacter: clickedChar || {} });
  }

  selectFlag = event => {
    const clickedStr = event.target.value;
    const clickedFlag = this.state.flags.find(char => char.worldName === clickedStr);
    this.setState({ userFlag: clickedFlag || {} });
  }

  render () {
    const { quals, chal } = this.state;

    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <nav>
                <ul class="nav">
                  <li class="navlink">
                    <Link to="/">
                      <p>Login</p>
                    </Link>
                  </li>
                </ul>
              </nav>
              <ChooseCharacter
              userCharacter={this.state.userCharacter}
              selectCharacter={this.selectCharacter}
              userFlag={this.state.userFlag}
              selectFlag={this.selectFlag}
              Link={Link}
              />
            </Route>

            <Route exact path="/challenge">
              <nav>
                <ul class="nav">
                  <li class="navlink">
                    <Link to="/">
                      <p>Login</p>
                    </Link>
                  </li>
                  <li class="navlink">
                    <Link to="/challenge">
                      <p>Challenge</p>
                    </Link>
                  </li>
                  <Login userCharacter={this.state.userCharacter} userFlag={this.state.userFlag} />
                  <Navbar chal={chal}/>
                </ul>
              </nav>
              <div className="qualifiers">
                <h1 class="QualTitle">Who would you like to challenge?</h1>
                {
                  quals.map(qual => (
                    <QualCard
                      qual={qual}
                      userCharacter={this.state.userCharacter}
                      isChallenged={chal.includes(qual)}
                      onAddToChallenge={this.handleAddToChallenge}
                    />
                  ))
                }
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
