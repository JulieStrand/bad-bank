function NavBar () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "MidnightBlue"}}>
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#" data-bs-toggle="tooltip" title="Go back to the Home page">BadBank Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav" style={{marginRight:"1em"}}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/createaccount/" data-bs-toggle="tooltip" title="Create an account with BadBank">
                        Create Account
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" title="Deposit funds into your account here">Deposit</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" title="Withdraw funds from your account here">Withdraw</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" title="See information about all users here">All Data</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}