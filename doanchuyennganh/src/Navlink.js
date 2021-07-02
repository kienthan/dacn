import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    NavLink
  } from "react-router-dom";
import Main from "./frontend/main";
import SPThuongNgay from "./frontend/spthuongngay";

export default function Header(){
    return(
        <Router>
        <div>
            
          <div >
           <div className="text-center">
               <img src="./img/logo.jpg" alt="logo quần áo" width="200" />
           </div>
           <hr />
           <nav className="navbar navbar-expand-lg navbar-light  container">
  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/" activeClassName="nav-link" >Trang Chủ</NavLink>
                        
                    </li>
                    
                    <li className="nav-item dropdown active">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SẢN PHẨM
                        </Link>
                        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/thuongngay">THƯỜNG NGÀY</Link>
                        <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/congso">CÔNG SỞ</Link>
                        <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/spbanchay">SẢN PHẨM BÁN CHẠY</Link>
                        <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/sale">SALE</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown active">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bộ Sưu Tập
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">SUMMER MOOD ON</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">WAVE SURFING </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">BACK IN classNameIC</Link>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                    <form className="form-inline">
                        <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Tìm kiếm" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark mr-1" type="button" >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="ml-3"><i className="fas fa-shopping-cart"></i></div>
                    </div>
                   
                    </form>
                </nav>
        </div>
          <Switch>
            <Route path="/thuongngay">
              <SPThuongNgay />
            </Route>
            <Route path="">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
      
    )
}