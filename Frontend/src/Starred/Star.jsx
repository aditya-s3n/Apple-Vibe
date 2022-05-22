import React, {useState, useEffect} from "react";
import NavBar from "../NavBar";

import StarItem from "./StarItem";

async function getUserData() {
    const domainName = "http://localhost:5000";
    let response = await fetch(`${domainName}/userinfo`);
    let data = await response.json();

    return data;
}
function Star() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        let data = getUserData();
        data.then(value => {
            setUserInfo(value.user_info)
        })

    }, [])

    return (
        <div>
            <NavBar />
            <div class="list-group">
                {
                    userInfo.map(values => {
                        if (values.starred === true) {
                            return <StarItem imageURL={values.picture} name={`${values.fullName.firstName} ${values.fullName.lastName}`} biography={values.biography} />
                        }
                    })    
                }
            </div>
        </div>
    );
}

export default Star;