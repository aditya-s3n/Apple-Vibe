//react module
import React from "react";

//render Header function
function UserUpdatePage() {
    return (
        <div class="container">
            <main>
                <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="Logo.png" alt="" width="57" height="57"/>
                
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Update your profile</h4>
                    <form class="needs-vali`dation" novalidate>
                    <div class="row g-3">
                        <div class="col-sm-6">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input type="text" class="form-control" id="username" placeholder="Username" required/>
                        <div class="invalid-feedback">
                            Your username is required.
                            </div>
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                        <div class="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                        </div>
                    </div>

                    <button class="w-100 btn btn-primary btn-lg mx-auto mt-2" type="submit">Update</button>
                    </form>
                </div>
                </div>
            </main>
            </div>
    )
}

//export
export default UserUpdatePage;