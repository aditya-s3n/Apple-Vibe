import React from "react";
import NavBar from "../NavBar";

import StarItem from "./StarItem";

function Star() {
    return (
        <div>
            <NavBar />
            <div class="list-group">
                <StarItem />
            </div>
        </div>
    );
}

export default Star;