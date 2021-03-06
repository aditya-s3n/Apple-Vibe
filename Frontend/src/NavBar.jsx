import React from "react"


function NavBar() {
    return (
        
        <nav class="p-3 mb-3 border-bottom sticky-top navbar-light bg-light">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src="Logo.png" width="50" height="50" alt="Company PFP"/>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/feed" class="nav-link px-2 link-dark">Feed</a></li>
                    <li><a href="/star" class="nav-link px-2 link-dark">Starred</a></li>
                    <li><a href="/pricing" class="nav-link px-2 link-dark">Pricing</a></li>
                </ul>

                <div class="dropdown text-end">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src="Rijul.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="/UserImage">My Profile</a></li>
                    <li><a class="dropdown-item" href="/star">Starred</a></li>
                    <li><a class="dropdown-item" href="/feed">Feed</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;