//react modules
import React from "react";
//react components
import Tag from "./Tag";

function Item (props) {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <hr />
            <div className="container-fluid py-5">
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <p>Biography:</p>
                <p>Resume:</p>
                <button className="btn btn-primary btn-lg my-3" type="button">View More</button>
                <hr />
                <Tag name="Developer"/>
            </div>
        </div>
    );
}

export default Item;