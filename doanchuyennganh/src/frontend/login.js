import React from 'react';
import './login.css'

export default function SignIn(){
    return(
        <div className="container " >
            <div className="text-center col-lg-12 mb-3">
                    <img src="./img/logo.jpg" width="200px" alt="logo" />    
                </div>
            <div >
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
            
            <div id="login__content" className="col-lg-6 col-md-6 text-center">
            <form onSubmit={handleSubmit}>
                <h3> Đăng Nhập </h3>
            <div className="mb-3 row ">
                    <input type="text" placeholder="Nhập Số Điện Thoại"  className="form-control text-center" id="sdt" />
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control text-center" id="mk" placeholder="Mật khẩu"/>
                </div>
                <button type="submit" className="btn btn-success" after >Đăng Nhập</button>
                </form>
            </div>
            
            </div>
           </div>
        </div>
    );
}

    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
        alert("đang nhap thanh cong")
    }
  