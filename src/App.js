import React from 'react';
import { EPJSimulator } from './components/EPJSimulator.jsx';

export const App = class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">
        <EPJSimulator />
      </div>
    )
  }
}

export default App;