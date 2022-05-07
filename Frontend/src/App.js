//react module
import React, {useState, useEffect} from "react";
//react component
import Welcome from "./Main Feed/Welcome Page/Weclome";
import Feed from "./Main Feed/Feed";

function App() {
  //get the domain name and path name
  const domainName = "http://localhost:5000"
  let pathName = window.location.pathname;
  

  //page to render state
  const [page, setPage] = useState(null);

  //get the page to render from Flask Backend
  useEffect(() => {
    fetch(`${domainName}${pathName}`)
      .then(response => response.json())
      .then(data => {
        setPage(data.page);
      });
  });

  switch (page) {
    case "Home":
      return <Welcome />

    case "Feed":
      return <Feed />

    default:
      return <Feed />
  }
}

export default App;