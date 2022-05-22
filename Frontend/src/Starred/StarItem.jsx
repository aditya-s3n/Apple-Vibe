import React from "react";

function StarItem(props) {
    return (
        <a href="#" class="container list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <img src={props.imageURL} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
            <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
                <h6 class="mb-0">{props.name}</h6>
                <p class="mb-0 opacity-75">{props.biography}</p>
            </div>
            <small class="opacity-50 text-nowrap">now</small>
            </div>
        </a>
    );
}

export default StarItem;