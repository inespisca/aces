import React, { Component }  from 'react';
import QualCard from './Components/QualCard';
import qualifiers from './Components/Qualifiers';
import './App.css';

class App extends Component {
  state = {
    qual: [],
    //chal: [],
  }

  componentDidMount() {
    this.setState({ qual: qualifiers })
  }

  //handleAddToChallenge = (qual, chal) => {
  //  this.setState((prevState)  => {
  //    // if it's there remove it
  //    // if it's not, add it
  //    const updatedChal = prevState[chal].includes(qual) ?
  //      prevState[chal].filter((element) => element!==qual) :
  //      [...prevState[chal], qual];
//
  //    return {
  //      ...prevState,
   //     [chal]: updatedChal
  //    }
  //  })
  //}

  render () {
    const { qual } = this.state;

    return (
      <>
        <h1 class="QualTitle">Qualifiers</h1>
        <div className="qualifiers">
          {
            qual.map(qual => (
              <QualCard
                qualifiers={qual}
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
