import React, { useState, useEffect } from "react";
import fetch from "unfetch";
import "./App.css";

function App() {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchCount = async () => {
      let pangramCount = 0;

      try {
        const res = await fetch(
          "https://us-central1-development-246523.cloudfunctions.net/pangram"
        );

        pangramCount = await res.json();
      } catch (e) {
        console.log(e);
      }

      console.log(pangramCount);
      setCount(pangramCount.count);
    };

    fetchCount();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          Thank you for visiting! Have a great day. 
        </p>
        <p>
              <code>{count}</code> pangram{count > 1 ? "s" : ""} today!
        </p>
        <a
          className="App-link"
          href="https://www.nytbee.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the answers and analysis at nytbee.com
        </a>
      </header>
    </div>
  );
}

export default App;
