import React from 'react'
import "./PublicProfile.css";


function PublicProfile() {
    return (
        <div className="container">
            <div className="row" gutters-sm>
                <div className="col-md-4 d-none d-md-black">
                    <div className="card">
                        <div className="card-body">
                            <nav className="nav flex-column nav-pills nav -gay-y-1">
                                <a
                                    href="#"
                                    data-toggle="tab"
                                    className="nav-item nav-link has-icon nav-link-faded active"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-user mr-2"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                     Profile Information
                                    </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default PublicProfile
