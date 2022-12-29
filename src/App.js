import "./App.css";
import React from "react";
import "./components/styles.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <h1>Hello Kawan!!</h1>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
