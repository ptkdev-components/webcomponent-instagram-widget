import React from 'react';
import './App.css';
require ("instagram-widget.min.js");
function App() {
  return (
    <div className="App">
		<instagram-widget username="@ptkdev" grid="3x3" items-limit="9" image-width="100%" image-height="100%" />
    </div>
  );
}

export default App;
