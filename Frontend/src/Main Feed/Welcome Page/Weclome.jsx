//react modules
import React from "react";
import NavBar from "../../NavBar"

//render Welcome function
function Welcome() {

    return (
      <div>
      
      <NavBar />

      <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="" alt="" width="72" height="57" />
        <h1 class="display-5 fw-bold">Orange</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Quickly make a match between a company and talent! Creating quick, efficient, and effective communication between potential companies and talent.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Log In</button>
          </div>
        </div>
      </div>

      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">The Future Awaits</h1>
            <p class="col-lg-10 fs-4">Sign up and make connections! Providing quick information that makes you appealing to companies and finding new talent.</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
              <hr class="my-4" />
              <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>

      </div>
      
    );
}

//export
export default Welcome;