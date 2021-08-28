import React, {Component} from 'react';
import './signup.css'
import Footer from './footer';
import Menutop from './menutop';

export default class Dangky extends Component{
    state ={sdt:'',email:'', matkhau:'', gioitinh:'',diachi:'',hoten:'',ngaysinh:''}
    
    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault();

        const obj = {
            dienthoai : this.state.sdt,
            email:this.state.email,
            matkhau:this.state.matkhau,
            gioitinh:this.state.gioitinh,
            diachi:this.state.diachi,
            hoten:this.state.hoten,
            ngaysinh:this.state.ngaysinh
        }
        fetch("http://localhost/php_react/dangki.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg); 
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
                window.location.href = "/login";  
    }

    render(){   
        return(
        <div  >
            <Menutop />
            <div className="container-fluid"> 
                <form className="row" onSubmit={this.xulyluutru}>
                    <div className="col-lg-6 col-md-6" id="__content" style={{padding:'40px 100px'}}>
                        <h3 className=" mt-3"> ĐĂNG KÍ TÀI KHOẢN </h3>
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nhập Số Điện Thoại" name='sdt'  
                        className="form-control "  onChange={this.xulynhap} />
                        </div>
                        <div className="mb-3 ml-5 row">
                            <input type="email" className="form-control" name='email' 
                             placeholder="Nhập Email" onChange={this.xulynhap}/>
                        </div>
                        <div className="mb-3 ml-5 row ">
                        <input type="password" placeholder="Nhập Mật Khẩu" name='matkhau' className="form-control "
                          onChange={this.xulynhap}/>
                        </div>  
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nhập Họ Tên" name='hoten'  className="form-control " 
                         onChange={this.xulynhap} />
                        </div> 
                    </div>

                    <div className ="col-lg-6 col-md-6 " id="content__left--bg" style={{padding:'40px 100px'}}>
                    <div className="mb-3 ml-5 row " id="content_left">
                        <input type="date" placeholder="Nhập Ngày Sinh" name='ngaysinh'  className="form-control " 
                          onChange={this.xulynhap}/>
                        </div>
                        <div className="mb-3 ml-5 row">
                        <select  className="form-control  mt-2" name='gioitinh' onChange={this.xulynhap} >
                        <option value="Nam">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        </div>
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nhập Địa Chỉ" name='diachi'  className="form-control " 
                         onChange={this.xulynhap}/>
                        </div>  
                        <button type="submit" className="btn btn-success" style={{marginLeft:'40%'}}>Đăng kí</button>
                    </div>
                </form>
            </div>
            <Footer />
            </div>
        );
    }
}

    
    

  