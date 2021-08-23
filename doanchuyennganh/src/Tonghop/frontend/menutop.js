import React,  {Component} from 'react';
import {
    Link, 
    NavLink
  } from "react-router-dom";
  import {DataContext} from '../../Context'

class Menutop extends Component {
    static contextType = DataContext;
    state ={timkiem:''}

    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault();

    }
    render(){
        const {cart} = this.context;
        return(
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
                            <NavLink to="/sanpham">Tất Cả Sản Phẩm</NavLink>
                            
                        </li>
                    
                        
                        <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Các Loại áo
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/1">Áo Thun</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/2">Áo Sơ Mi</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/3">Áo Polo</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/4">T-Shirt</Link>
                           
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/8">Áo Blazer</Link>
                            </div>
                            
                        </li>

                        <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Các loại quần
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">   
                                <Link className="dropdown-item"  to="/5">Quần Jean</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/6">Quần Kaki</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"  to="/7">Quần Short</Link>
                            </div>
                            
                        </li>
                        <li className="nav-item active nav-link" >
                            <NavLink to="/backend">Quản lý sản Phẩm</NavLink>
                            
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
                        <form  className="form-inline">
                            
                            <div className="input-group input-group-md">
                            <input type="text" className="form-control" placeholder="Tìm kiếm" onChange={this.xulynhap} name='timkiem' />
                            <div className="input-group-append">
                            <NavLink activeClassName="input-group-append" to={'/timkiem/'+this.state.timkiem}>
                                <button className="btn btn-outline-primary mr-1" type="Submit" >
                                    <i className="fas fa-search"></i>
                                </button>
                            </NavLink>
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
                        <div className="ml-3">
                                <Link to='/cart'>
                                    <i className="fas fa-shopping-cart"></i>({cart.length})
                                </Link>
                            </div>
                    </nav>
            </div>
        )
    }
}
export default Menutop;