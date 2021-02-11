import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [results, setResults] = useState('');
  const [apiWorking, setApiWorking] = useState(true);

  useEffect(() => {
    // fetch("https://api.yannismate.de/rank/XBox/Tainted2097?playlists=tournaments", { method: "GET", mode: 'no-cors', headers: { accept: "*/*" }})
    fetch("https://api.yannismate.de/rank/XBox/Tainted2097?playlists=tournaments", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        // "cookie": "__cfduid=d3f254f51e2c67485a8c8e4cd931149831612904598"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "no-cors"
    })
      //.then(res => res.text())
    .then(res => {
        console.log(res);
        const text = res.text();
        console.log(text);        
        return text;
      })
      .then(
        (result) => {     
          console.log('working')     
          setResults(result);
          setApiWorking(true);
        },       
        (error) => {
          console.log('not working')     
          setResults('Api not working');
          setApiWorking(false);
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Results: [{results}]
        </p>
        <p>
          Api working: {apiWorking ? 'yes' : 'no'}
        </p>
      </header>
    </div>
  );
}

export default App;
