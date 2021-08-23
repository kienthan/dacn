import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer(){
    return(
        <div>
            <footer className="page-footer font-small unique-color-dark mt-2">


            <div className="container-fluid text-center text-md-left"
             style={{backgroundColor:'#39364D', color:'white'}}>

                <div className="row">

    
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-3">

    
                    <h6 className="text-uppercase font-weight-bold">Cửa hàng bán quần áo</h6>
                    <hr id="hr" />

                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit.</p>

                </div>
    

    
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">


                    <h6 className="text-uppercase font-weight-bold">Thông Tin Thêm</h6>
                    <hr id="hr" />
                    <p>
                    <Link className="ml-3" href="#">
                        <img src="../img/fb.png" alt="Facebook"
                        width='30px' height='30px'/>
                    </Link>
                    </p>
                    <p>
                    <Link className="ml-3" href="#">
                        <img src="../img/google.png" alt="Google"
                        width='30px' height='30px'/>
                    </Link>
                    </p>
                    <p>
                    <Link className="ml-3" href="#">
                        <img src="../img/linkedin.png" alt="Linkedin"
                        width='30px' height='30px'/>
                    </Link>
                    </p>
                    <p>         
                    <Link className="ml-3" href="#">
                        <img src="../img/instagram.png" alt="Instagram"
                        width='30px' height='30px'/>
                    </Link>
                    </p>
                </div>
            

            
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">

                
                    <h6 className="text-uppercase font-weight-bold">Sản phẩm đặc trưng</h6>
                    <hr id="hr" />
                    <p>
                    <Link  to="/3">Áo Polo</Link>
                    </p>
                    <p>
                    <Link to="/1">Áo Thun</Link>
                    </p>
                    <p>
                    <Link to="/4">T-Shirt</Link>
                    </p>
                    <p>
                    <Link to="/5">Quần Jeans</Link>
                    </p>

                </div>
            
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3">

                
                    <h6 className="text-uppercase font-weight-bold">Liên hệ</h6>
                    <hr id="hr" />  
                    <p>
                    <i className="fas fa-home mr-3"></i> 331 Quốc Lộ 1,An Phú Đồng, Quận 12 TP.HCM</p>
                    <p>
                    <i className="fas fa-envelope mr-3"></i> ntt@ntt.edu.vn</p>
                    <p>
                    <i className="fas fa-phone mr-3"></i> 1900 2039</p>
                    <p>
                    <i className="fas fa-print mr-3"></i> 028 39 404 759</p>

                </div>
            

            </div>
        

            </div>
            </footer>
        </div>

    )
}