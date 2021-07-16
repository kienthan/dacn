import React from 'react';
import './signup.css'

export default function SignUp(){
    return(
        <div className="container " >
            <div className=" col-lg-12 mb-3 text-center">
                    <img src="./img/logo.jpg" width="200px" alt="logo" />    
                </div>
           <div > 
                <form className="row" onSubmit={handleSubmit} >
                    <div className="col-lg-6 col-md-6" id="__content">
                        <h3 className=" mt-3"> ĐĂNG KÍ TÀI KHOẢN </h3>
                        <div className="mb-3 row ">
                        <input type="text" placeholder="Nhập Số Điện Thoại"  className="form-control " id="sdt" />
                        </div>
                        <div className="mb-3 row">
                            <input type="email" className="form-control " id="mk" placeholder="Nhập Email"/>
                        </div>
                        <div className="mb-3 row ">
                        <input type="password" placeholder="Nhập Mật Khẩu"  className="form-control " id="sdt" />
                        </div>  
                        <div className="mb-3 row ">
                        <input type="text" placeholder="Nhập Họ Tên"  className="form-control " id="sdt" />
                        </div> 
                    </div>

                    <div className ="col-lg-6 col-md-6 " id="content__left--bg">
                    <div className="mb-3 row " id="content_left">
                        <input type="date" placeholder="Nhập Ngày Sinh"  className="form-control " id="sdt" />
                        </div>
                        <div className="mb-3 row">
                        <select id="gioitinh" className="form-control  mt-2">
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        </select>
                        </div>
                        <div className="mb-3 row ">
                        <input type="text" placeholder="Nhập Địa Chỉ"  className="form-control " id="sdt" />
                        </div>  
                        <button type="submit" className="btn btn-warning">Đăng Ký</button>
                    </div>
                </form>
            
            </div>
           </div>
    );
}

    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
        alert("Ban Dang Ky Thanh cong")
    }
  