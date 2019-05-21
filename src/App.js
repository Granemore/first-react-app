import React from 'react';
import Search from "./components/Search"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes app</h1>
  
        <Search />
      </div>
    );
  }
}

export default App;