//react module
import React, {useState, useEffect} from "react";
//react component
import Welcome from "./Main Feed/Welcome Page/Weclome";
import Feed from "./Main Feed/Feed";
import UserUpdatePage from './UserUpdatePage';
import SignupPage from './SignupPage';
import Pricing from "./Pricing";
import UserImage from "./UserImage";
import Footera from "./Footera";
import Star from "./Starred/Star";

function App() {
  //get the domain name and path name
  const domainName = "https://us-east1-apple-vibe.cloudfunctions.net/apple-vibe-backend"
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
    
    case "UserUpdatePage":
      return <UserUpdatePage />

    case "SignupPage":
      return <SignupPage />

    case "Pricing":
      return <Pricing />

    case "Footer":
        return <Footera />
      
    case "UserImage":
      return <UserImage />
      
    case "Star":
      return <Star />

    default:
      return null;

  }
}

export default App;