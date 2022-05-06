//react module
import React from "react";
//react components
import Item from "./Feed/Item"
import NavBar from "../NavBar";

function Feed() {
    return (
        <div>
            <NavBar />

            <Item />

            <Item />

            <Item />

            <Item />

            <Item />

            <Item />
        </div>
    );
}

export default Feed;