import React, { Component }  from 'react';
import QualCard from './Components/QualCard';
import qualifiers from './Components/Qualifiers';
import Navbar from './Components/Navbar';
import ChooseCharacter from './Components/PickCharacter';
import './App.css';

class App extends Component {
  state = {
    quals: [],
    chal: [],
    userCharacter: {}
  }

  componentDidMount() {
    this.setState({ quals: qualifiers })
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

  render () {
    const { quals, chal } = this.state;

    return (
      <>
        <Navbar chal={chal}/>
        <ChooseCharacter
            userCharacter={this.state.userCharacter}
            selectCharacter={this.selectCharacter}
          />
        <div className="qualifiers">
          <h1 class="QualTitle">Who would you like to challenge?</h1>
          {
            quals.map(qual => (
              <QualCard
                qual={qual}
                isChallenged={chal.includes(qual)}
                onAddToChallenge={this.handleAddToChallenge}
                userCharacter={this.state.userCharacter}
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
