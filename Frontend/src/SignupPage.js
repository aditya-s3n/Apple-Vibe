//react module
import React from "react";

//render Header function
function SignupPage() {
    return (
                <body class="text-center">
        <main class="form-signin">
            
        <form action="/feed">
        <div class="row me-auto mt-5">
            <div class="col-md-4"></div>
            <div class="col-md-4">
            <img class="mb-4" src="Logo.png" alt="" width="100" height="100"/>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2022</p>
            </div>
        
        </div>
        </form>
        </main>
        
</body>
    )
}

//export
export default SignupPage;