import React from 'react';
import Footer from './footer';
import './login.css';
import {
    Link
  } from "react-router-dom";


export default function SignIn(){
    return(
        <div  >
            
            <div className="container-fluid">
           <div className="row" id="__content"> 

            <div className="col-lg-6 col-md-6 text-center" id="content__left">
                <h1> ĐĂNG NHẬP <br />
                NHẬN NGAY ƯU ĐÃI</h1>
                <div id="btn__more">
                <button type="button" className="btn btn">
                    <i className="fab fa-facebook-f mr-3"></i>
                    Xem thêm tại Facebook</button>
                </div>
                <div id="btn__more">
                <button type="button" className="btn btn"><i className="fab fa-instagram mr-2"></i>
                    Xem thêm tại Instagram</button>
                </div>
                <div id="btn__more">
                <button type="button" className="btn btn"><i className="fab fa-youtube mr-3"></i>
                    Xem thêm tại Youtube</button>
                </div>
            </div>
            
            <div id="login__content" style={{marginTop:'0', backgroundColor:'rgba(244, 91, 105, 1)'}} className="col-lg-6 col-md-6 text-center">

            <form onSubmit={handleSubmit}>
                <h3> Đăng Nhập </h3>
            <div className="mb-3 row" style={{marginLeft:'10%'}}>
                    <input type="text" placeholder="Nhập Số Điện Thoại"  className="form-control text-center" id="sdt" />
                </div>
                <div className="mb-3 row"style={{marginLeft:'10%'}}>
                    <input type="password" className="form-control text-center" id="mk" placeholder="Mật khẩu"/>
                </div>
                <Link to="/signup">
                    <p className="text-decoration-none text-dark">Tạo tài khoản mới !</p>
                </Link>

                <button type="submit" className="btn btn-success">Đăng Nhập</button>
                </form>
            </div>
            
            </div>
           </div>
           <Footer />
        </div>
    );
}

    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
        alert("đang nhap thanh cong")
    }
  