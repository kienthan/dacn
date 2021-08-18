import React, {Component} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    NavLink
  } from "react-router-dom";
import Detail from "./frontend/detail";
import Main from "./frontend/main";
import SanPham from './frontend/sanpham'
import {DataProvider,DataContext} from './Context';
import Shoppingcart from './frontend/ShoppingCart/Shoppingcart';
import Payment from './frontend/Thanhtoan/Payment';
import Thongtinkhachhang from './frontend/Thongtinkhachhang/Thongtinkhachhang';
import Phanloaisp from './frontend/phanloaisp';

class Duongdan extends Component{
    static contextType = DataContext;
    
    render(){
        return(
            <DataProvider>
            <Router>
            <div>
                
            <div >
            <div className="text-center">
                <img src="../img/logo.jpg" alt="logo quần áo" width="200" />
            </div>
            <hr />
            <nav className="navbar navbar-expand-lg navbar-light  container">
    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="" activeClassName="nav-link" >Trang Chủ</NavLink>
                            
                        </li>
                        <li className="nav-item active nav-link" >
                            <NavLink to="/sanpham"  activeStyle={{color:'#000',textDecoration:'none'}}>Sản Phẩm</NavLink>
                            
                        </li>
                    
                        
                        <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Phân Loại
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/1">Áo Thun</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/2">Áo Cơ Mi</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/3">Áo Polo</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/4">T-Shirt</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/5">Quần Jean</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/6">Quần Kaki</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/7">Quần Short</Link>
                            </div>
                        </li>

                        {/* {Dropdown list bo suu tap dang cap nhat} */}
                        {/* <li className="nav-item dropdown active">
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
                        </li> */}
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
                            <div className="ml-3">
                                <Link to='/cart'>
                                    <i className="fas fa-shopping-cart"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                        {/* {Dropdown list page dang nhap } */}
                        {/* <div className="dropdown active">
                            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" to="/login"
                            role="button" data-toggle="dropdown" >
                            <i class="fas fa-user-alt"></i>
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/login">Đăng Nhập </Link>
                                <Link className="dropdown-item" to="/info">Thông tin </Link>
                                <Link className="dropdown-item" >Đăng xuất</Link>
                            </div>
                        </div> */}
                    
                        </form>
                    </nav>
            </div>
            <Switch>
                <Route exact path="/" component={Main}>
                </Route>
                <Route exact path="/chitiet/:url" component={Detail} ></Route>

                <Route exact  path="/sanpham" component={SanPham} ></Route>

                <Route exact  path="/cart" component={Shoppingcart} ></Route> 

                <Route exact  path="/payment" component={Payment} ></Route>        

                <Route exact  path="/info" component={Thongtinkhachhang} ></Route>     

                <Route exact  path="/:idphanloai" component={Phanloaisp} ></Route>            
            </Switch>
            </div>
        </Router>
        </DataProvider>
        )
    }
}
export default Duongdan;