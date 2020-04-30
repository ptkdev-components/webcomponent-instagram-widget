import React from 'react';
import logo from './logo.svg';
import '@ptkdev/webcomponent-instagram-widget';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  	<div style={{width: "600px", margin: "0 auto"}}>
        	<instagram-widget username="@ptkdev" grid="3x3" image-width="200px" image-height="200px" />
		</div>
      </header>
    </div>
  );
}

export default App;
