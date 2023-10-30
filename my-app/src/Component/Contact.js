import React from "react";
function Contact() {
    return (
        <>
            <div className="container" style={{marginTop: '130px',marginBottom: '150px'}} >
                <div className="row justify-content-center " >
                    <div className="col-md-8">
                        <h1 style={{fontSize: '2.5rem'}} >Contact</h1>
                        <form action="/contactinsert" method="post">

                            <div className="form-group" style={{marginBottom: '1rem'}}>
                                <input type="text" name="name" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group" style={{marginBottom: '1rem'}}>
                                <input type="text" name="email" className="form-control" placeholder="E-Mail"/>
                            </div>
                            <div className="form-group" style={{marginBottom: '1rem'}}>
                                <input type="text" name="phone" className="form-control" placeholder="Phone"/>
                            </div>
                            <div className="form-group" style={{marginBottom: '1rem'}}>
                                <textarea name="message" rows="5" className="form-control" placeholder="Message"></textarea>
                            </div> <br/>
                                <div className="form-group">
                                    <button className="btn btn-success">Send Message</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact;