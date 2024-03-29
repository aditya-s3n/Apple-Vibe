//react module
import React, {useState, useEffect} from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";


async function getUserData() {
    const domainName = "https://us-east1-apple-vibe.cloudfunctions.net/apple-vibe-backend";
    let response = await fetch(`${domainName}/userinfo`);
    let data = await response.json();

    return data;
}
function Feed() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        let data = getUserData();
        data.then(value => {
            setUserInfo(value.user_info)
        })
    }, [])

    return (
        <div className="container">
        
            <NavBar />
            
            {
                userInfo.map(values => {
                    return <Item starred={values.starred} tags={values.tags} videoURL="AdityaBVideoResume.mp4" biography={values.biography} imageURL={values.picture} user_id={values.id} name={`${values.fullName.firstName} ${values.fullName.lastName}`}/>
                })
            }

        </div>
    );
}

export default Feed;