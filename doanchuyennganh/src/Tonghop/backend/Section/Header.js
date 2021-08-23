import React from 'react';
import {
    Link,
    BrowserRouter as Router,
  } from "react-router-dom";

export default function Header()
{   
    return(
        <div >
            <div>
                <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'1500px',minHeight:'660px',float:'left',backgroundColor:'#fff000'}}>
                    <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='./img/logo.jpg' width='200px' alt='logo_fashion' />
                            <li className="nav-item" >
                                <Link to="/" className="nav-link" >Trang admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh sách mặt hàng</Link>
                            </li>
                            <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mặt hàng
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" >Thêm mặt hàng</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Sửa mặt hàng</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Xoá mặt hàng</Link>    
                            </div>
                            
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}