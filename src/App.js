import React from 'react';
import './App.css';
import RealStateList from "./RealState/RealStateList";
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Typography variant="h1">Real State</Typography>
           <hr />
          <RealStateList />
      </header>
    </div>
  );
}

export default App;
