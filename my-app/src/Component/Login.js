import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="container" style={{ marginTop: '180px', marginBottom: '200px' }}>
                <div className="row justify-content-center " >
                    <div className="col-md-6" >
                        <div className="card" >
                            <div className="card-body" >
                                <div className="login-box">
                                    <h1 style={{ fontSize: '25px', textAlign: 'center', marginBottom: '1rem' }}>Login</h1>
                                    <form action="/verifylogin" method="post" >
                                        <div className="form-group" style={{marginBottom: '1rem'}} >
                                            <input type="email" name="email" className="form-control" placeholder=" Email or Username" required="" />
                                        </div>
                                        <div className="form-group" style={{marginBottom: '1rem'}}>
                                            <input type="password" name="password" className="form-control" placeholder="Password" required="" />
                                        </div><br />
                                        <div className="form-group" style={{marginBottom: '1rem'}} >
                                            <button className="btn btn-primary">Log In</button>
                                        </div><br />
                                        <div className="form-group" style={{marginBottom: '1rem'}} >
                                            <Link className="btn btn-primary" href="./registration.html">SIGN IN</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        

        </>
    )
}

export default Login;