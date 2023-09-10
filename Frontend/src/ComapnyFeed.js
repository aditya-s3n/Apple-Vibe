//react module
import React, {useState, useEffect} from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";
import Footera from "./Footera";

function ComapnyFeed() {
    const domainName = "https://us-east1-apple-vibe.cloudfunctions.net/apple-vibe-backend"
    
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        fetch(`${domainName}/userinfo`)
            .then(response => response.json())
            .then(data => {
                setUserInfo(data);
            });
    }, [])

    return (
        <div>
        
            <NavBar />

            <Item videoURL="" biography="This is about our company" name="Startup1" imageURL="Person1.png" user_id={1}/>

            <Item videoURL="" imageURL="Person2.jpg" />

            <Item videoURL="" imageURL="Person3.png" />

            <Footera />
        </div>
    );
}

export default ComapnyFeed;