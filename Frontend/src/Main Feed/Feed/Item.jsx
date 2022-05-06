//react modules
import React from "react";
//react components
import Tag from "./Tag";

function Item (props) {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <h1 className="display-5 fw-bold"><img src="https://github.com/mdo.png" alt="mdo" width="75" height="75" class="rounded-circle me-5" />{props.name}</h1>
            <hr />
            <div className="container-fluid py-2">
                <p className="col-md-8 fs-5 fw-bold">Biography:</p>
                <p className="col-md-8">{props.biography}</p>

                <p className="col-md-8 fs-5 fw-bold">Video Resume:</p>
                <button className="btn btn-outline-dark my-3" type="button">View More</button>

                <hr />
                <p>Looking for...</p>
                <Tag name="Developer"/>
            </div>
        </div>
    );
}

export default Item;