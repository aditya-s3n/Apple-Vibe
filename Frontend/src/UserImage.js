//react module
import React from "react";
import NavBar from "./NavBar";
import Footera from "./Footera";
//render Header function
function UserImage() {
    return (
        <main>
        <div class="container p-3 mb-2 bg-light text-dark">
        <div class="row">
            <NavBar />
            <div class="col-md-4">
                <img src="Rijul.png" class="rounded-circle img-fluid" alt="Cinque Terre" width="200" height="100" ></img>
                
                <h1>Full Name<span class="badge badge-secondary"></span></h1>
                <h4>@username<span class="label label-default"></span></h4>
                <h6>Ontario, Canada<span class="label label-default"></span></h6>
                <button type="button" class="btn btn-default bg-dark text-light">Update</button>
                <div class="btn-group">
                <button type="button" class="btn btn-primary">Unemployed</button>
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Employed, but looking</a></li>
                    <li><a href="#">Employed</a></li>
                </ul>
                </div>
                </div>

            <div class="col-md-4"> 
                <h6>Video Resume:<span class="label label-default"></span></h6>
                <video width="300" height="500" autoplay controls>
                    </video>
                </div>
            
            <div class="col-md-4 form-group bg-light text-dark">
                <label for="comment">Bio:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
            <div class="alert alert-dismissible alert-danger fade in">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Word limit reached</strong> Your bio can have a maximum of 180 words.
            </div>
            </div>  
            <Footera />
      </div>
      </div>
      </main>
    )
}


//export
export default UserImage;