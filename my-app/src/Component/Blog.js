import React from "react";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <div className="container" style={{ marginTop: '130px' }} >
                <h1>Blog List</h1>
            </div>
            <div className="container mt-5 ">
                <div className="row  ">
                    <div className="col-md-4 mb-3 ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1684221689/blogImage/efwcqsvjkijmh72i9y9j.jpg"
                                alt="" />
                            <div className="card-body">
                                <p>"RAM", <span>05/05/2023</span> </p>
                                <h3>rdtfgyuh</h3>
                                <p>sdcfgvbh</p> <br /><br />
                                <Link to="./ram.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3  ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683733733/blogImage/ftlk1kt1551jndz2rs2r.jpg"
                                alt="" />
                            <div className="card-body">
                                <p>"RAMESH", <span>08/10/2023</span> </p>
                                <h3> news title goes here</h3>
                                <p> news title goes here</p> <br /><br />
                                <Link to="./ramesh.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3  ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683536319/blogImage/vdf0trn7spssyafnawdx.png"
                                alt="" />
                            <div className="card-body">
                                <p>"SAGAR", <span>10/02/2023</span> </p>
                                <h3>BJP moves EC, seeks action against Cong, Sonia over Karnataka 'sovereignty'</h3>
                                <p>Karnataka Elections 2023 News Live Updates (May 8): The Bharatiya Janata Party (BJP) on
                                    Monday filed</p> <br /><br />
                                <Link to="./sagar.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 ">
                <div className="row  ">
                    <div className="col-md-4 mb-3 ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683535750/blogImage/rwilptxeoewaxhiatf6s.png"
                                alt="" />
                            <div className="card-body">
                                <p>"HIMANSHU", <span>30/12/2001</span> </p>
                                <h3>
                                    IAF's MiG-21 crashes near Hanumangarh in Rajasthan; three villagers killed, pilot safe
                                </h3>
                                <p>
                                    NEW DELHI: A MiG 21 fighter aircraft of the Indian A ..
                                    Read more at:
                                    http://timesofindia.indiat
                                </p> <br /><br />
                                <Link to="./himanshu.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3  ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683523082/blogImage/nmjxg98nooivjhvlrajg.png"
                                alt="" />
                            <div className="card-body">
                                <p>"RAHUL", <span>01/01/2002</span> </p>
                                <h3>
                                    22 dead, many missing after boat capsizes in Kerala’s Malappuram
                                </h3>
                                <p>
                                    Kerala Boat tragedy: A tourist boat overturned in the river late on Sunday night nea
                                </p> <br /><br />
                                <Link to="./rahul.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3  ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683522456/blogImage/yib0nj08jtns2y1pwmg4.png"
                                alt="" />
                            <div className="card-body">
                                <p>"VIKASH JAIN", <span>10/02/2023</span> </p>
                                <h3>
                                    The Kerala Story box office collection Day 3: Sudipto Sen’s film soon to join Rs 40 crore
                                    club
                                </h3>
                                <p>
                                    The Kerala Story box office collection Day 3: Since the film opened in theatres this week,
                                    The Keral
                                </p> <br /><br />
                                <Link to="./vikash.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 " >
                <div className="row  ">
                    <div className="col-md-4 mb-3 ">
                        <div className="card shadow-lg h-100 ">
                            <img style={{ height: '200px' }}
                                src="https://res.cloudinary.com/dbteh0acf/image/upload/v1683522179/blogImage/xtgjozirtdrcweppfbvj.png"
                                alt="" />
                            <div className="card-body">
                                <p>"Petrol", <span>02/05/2023</span> </p>
                                <h3>
                                    Petrol-diesel price 8 May 2023: Fresh rate of fuel released; check rate list here                            </h3>
                                <p>
                                    Petrol-diesel price 8 May 2023: The Indian oil companies have kept the rate of petrol and diesel ste
                                </p> <br /><br />
                                <Link to="./pertol.html"> <button className="btn btn-danger">READ MORE...</button> </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

        </>
    )
}

export default Blog;