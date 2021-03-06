//react module
import React from "react";
import NavBar from "./NavBar";
import Footera from "./Footera";
//render Header function
function Pricing() {
    return (
        <body>
            <NavBar />
            <div class="container py-3">
            <header>
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Pricing</h1>
                <p class="fs-5 text-muted">Flexable pricing for all companies</p>
                </div>
            </header>

            <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Free</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>1 posting</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            </ul>
                            <a href="/SignupPage"><button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Pro</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$99<small class="text-muted fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>up to 3 postings</li>
                            <li>Advanced filters</li>
                            <li>Dedicated Account Manager</li>
                            </ul>
                            <a href="/SignupPage"><button type="button" class="w-100 btn btn-lg btn-primary">Get started</button></a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-white bg-primary border-primary">
                            <h4 class="my-0 fw-normal">Enterprise</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Custom pricing<small class="text-muted fw-light"></small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>More than 3 postings</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
                        </div>
                        </div>
                    </div>
                    </div>

            <Footera />
            </main>

            </div>


                
            

        </body>
    )
}

//export
export default Pricing;