import React from "react";

function Tag(props) {
    return (
        <button type="button" class="btn btn-success" disabled>{props.name}</button>
    );
}

export default Tag;