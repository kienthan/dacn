import React, {Component} from 'react';
import { Link } from 'react-router-dom';


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
            <div className="" >
                <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'1500px',minHeight:'660px',float:'left',backgroundColor:'#fff000'}}>
                <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='../../img/logo.jpg' width='200px' alt='logo_fashion' />
                            <li className="nav-item" >
                                <Link to="/backend" className="nav-link" >Trang admin</Link>
                                <hr />
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/dshoadon' >Danh sách hoá đơn</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh sách mặt hàng</Link>
                            </li>
                            <li className="nav-item dropdown active dropend">
                            <li><Link className="nav-link" to='/backend/them'>Thêm mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/capnhat' >Sửa mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/xoasp'>Xoá mặt hàng</Link></li>  
                            <hr />
                            <li className="nav-item">
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/khachhang' >Danh sách khách hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themkhachhang' >Thêm khách hàng</Link>
                                <hr />
                            </li>
                                <Link className="nav-link" to='/backend/hang' >Danh sách hãng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themhang' >Thêm Hãng</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/gia' >Danh sách bảng giá</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themgia' >Thêm giá mới</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/phanloai' >Phân loại mặt hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themphanloai' >Thêm phân loại</Link>
                                <hr />
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Quay lại trang chủ</Link>
                            </li> 
                        </li>
                    </ul>
                    </nav>
                </div>
            <div className="container"> 
                <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12">
                    <div className="">
                        <h4 className='text-center'> Thêm khách hàng mới</h4>
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
                    <div className="mb-3 ml-5 row " >
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
            </div>
        );
    }
}

    
    

  