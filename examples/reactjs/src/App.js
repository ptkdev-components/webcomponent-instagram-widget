import React from 'react';
import logo from './logo.svg';
import '@ptkdev/webcomponent-instagram-widget';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  	<div style={{width: "600px", margin: "0 auto"}}>
		  <instagram-widget username="@ptkdev" grid="3x3" force-square="yes" items-limit="9" image-width="100%" image-height="100%" border-corners="5" border-spacing="2px"></instagram-widget>
		</div>
      </header>
    </div>
  );
}

export default App;
