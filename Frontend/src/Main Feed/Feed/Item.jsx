//react modules
import React, {useState} from "react";
//react components
import Tag from "./Tag";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import { yellow } from "@mui/material/colors";

function Item (props) {
    //set state of favourite list
    const [favourite, setFavourite] = useState(props.favourite);

    function clickFavourite() {
        if (favourite === true) {
            setFavourite(false);
        }
        else {
            setFavourite(true);
        }
    }

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <h1 className="display-5 fw-bold"><img src={props.imageURL} alt="PFP" width="75" height="75" class="rounded-circle me-5" />{props.name}</h1>
            <hr />
            
            <div className="container-fluid py-2">
                <p className="col-md-8 fs-5 fw-bold">Biography:</p>
                <p className="col-md-8">{props.biography}</p>

                <p className="col-md-8 fs-5 fw-bold">Video Resume:</p>

                <video width="320" height="240" autoplay controls>
                    <source src={props.videoURL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <br />
                <button className="btn btn-outline-dark btn-lg my-3 me-2" type="button">View More</button>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={clickFavourite}>
                    {favourite ? <StarIcon fontSize="large" sx={{ color: yellow[700] }}/> : <StarBorderIcon fontSize="large" sx={{ color: yellow[700] }}/>}
                </IconButton>

                <hr />
                <p>Looking for...</p>
                <Tag name="Developer" />
                {/* {props.tagMap.map(value => {
                    return <Tag name={value} />
                })} */}

            </div>
        </div>
    );
}

export default Item;