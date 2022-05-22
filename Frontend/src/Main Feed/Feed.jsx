//react module
import React, {useState, useEffect} from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";

function Feed() {
    const domainName = "http://localhost:5000"
    
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

            <Item videoURL="AdityaBVideoResume.mp4" biography="this is my biography" name="Aditya" imageURL="Person1.png" user_id={1}/>

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person2.jpg" />

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person3.png" />

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person4.jpg"/>

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person5.jpg" />

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person6.jpg" />

            <Item videoURL="AdityaBVideoResume.mp4" imageURL="Person7.png" />

        </div>
    );
}

export default Feed;