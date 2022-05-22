//react module
import React, {useState, useEffect} from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";

function Feed() {
    const domainName = "http://localhost:5000"
    const [starArray, setStarArray] = useState([]);
    
    useEffect(() => {
        fetch(`${domainName}/starinfo`)
            .then(response => response.json())
            .then(data => setStarArray(data));
    }, []);

    return (
        <div>
            {console.log(setStarArray)}
            <NavBar />

            <Item biography="this is my biography" name="Aditya" imageURL="Person1.png" starred={starArray[0]}/>

            <Item imageURL="Person2.jpg" starred={starArray[1]}/>

            <Item imageURL="Person3.png" starred={starArray[2]}/>

            <Item imageURL="Person4.jpg" starred={starArray[3]}/>

            <Item imageURL="Person5.jpg" starred={starArray[4]}/>

            <Item imageURL="Person6.jpg" tarred={starArray[5]}/>

            <Item imageURL="Person7.png" starred={starArray[6]}/>
        </div>
    );
}

export default Feed;