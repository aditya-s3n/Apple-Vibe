//react module
import React, {useState, useEffect} from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";

async function getStarInfo() {
    const domainName = "http://localhost:5000"
    let response = await fetch(`${domainName}/starinfo`)
    
    return response.json();
}
function Feed() {
    const domainName = "http://localhost:5000"

    const [starArray, setStarArray] = useState([]);
    
    useEffect(() => {
        setStarArray(getStarInfo());
        
    }, []);

    return (
        <div>
            <NavBar />

            <Item biography="this is my biography" name="Aditya" imageURL="https://github.com/mdo.png" starred={starArray[0]}/>

            <Item starred={starArray[1]}/>

            <Item starred={starArray[2]}/>

            <Item starred={starArray[3]}/>

            <Item starred={starArray[4]}/>

            <Item starred={starArray[5]}/>

            <Item starred={starArray[6]}/>
        </div>
    );
}

export default Feed;