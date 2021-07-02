import React from 'react'
import "./footer.css";
export default function Footer(){
    return(
        <div>
            <footer className="page-footer font-small unique-color-dark mt-2">

            <div style={{backgroundColor: '#6351ce'}}>
                <div className="container">

                <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0" style={{color:'white'}}>
                        Get connected with us on social networks!</h6>
                    </div>
                    <div className="col-md-6 col-lg-7 text-center text-md-right">
                    
                    <a className="ml-3" href="#">
                        <img src="./img/fb.png" alt="Facebook"
                        width='30px' height='30px'/>
                    </a>
    
                    <a className="ml-3" href="#">
                        <img src="./img/twitter.png" alt="Twitter"
                        width='30px' height='30px'/>
                    </a>
            
                    <a className="ml-3" href="#">
                        <img src="./img/google.png" alt="Google"
                        width='30px' height='30px'/>
                    </a>
        
                    <a className="ml-3" href="#">
                        <img src="./img/linkedin.png" alt="Linkedin"
                        width='30px' height='30px'/>
                    </a>
            
                    <a className="ml-3" href="#">
                        <img src="./img/instagram.png" alt="Instagram"
                        width='30px' height='30px'/>
                    </a>

                    </div>
        

                </div>
        

                </div>
            </div>


            <div className="container-fluid text-center text-md-left"
             style={{backgroundColor:'#39364D', color:'white'}}>

                <div className="row">

    
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-3">

    
                    <h6 className="text-uppercase font-weight-bold">Company name</h6>
                    <hr />

                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit.</p>

                </div>
    

    
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">


                    <h6 className="text-uppercase font-weight-bold">Products</h6>
                    <hr/>
                    <p>
                    <a href="#!">MDBootstrap</a>
                    </p>
                    <p>
                    <a href="#!">MDWordPress</a>
                    </p>
                    <p>
                    <a href="#!">BrandFlow</a>
                    </p>
                    <p>
                    <a href="#!">Bootstrap Angular</a>
                    </p>

                </div>
            

            
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">

                
                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                    <hr/>
                    <p>
                    <a href="#!">Your Account</a>
                    </p>
                    <p>
                    <a href="#!">Become an Affiliate</a>
                    </p>
                    <p>
                    <a href="#!">Shipping Rates</a>
                    </p>
                    <p>
                    <a href="#!">Help</a>
                    </p>

                </div>
            
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3">

                
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr/>
                    <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

                </div>
            

            </div>
        

            </div>
                <div className="footer-copyright text-center py-3" 
                    style={{backgroundColor:'#080808', color:'#989898'}}>
                    © 2021 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            

            </footer>
        </div>

    )
}