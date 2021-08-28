import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={giacu:'',giamoi:''}

    
    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
        }
    
        xulyluutru = (e) =>{
        e.preventDefault();
        const obj = {
            giacu: this.props.match.params.price,
            giamoi: this.state.giamoi,
        }
        fetch("http://localhost/php_react/updateprice.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg);
                    window.location.href = "/backend/gia";
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
                e.target.reset();
                window.location.href = "/backend/gia";
    }



    render() {
        return (
          <div className="">
              
            <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'2000px',minHeight:'2000px',float:'left',backgroundColor:'#fff000'}}>
            <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='../img/logo.jpg' width='200px' alt='logo_fashion' />
                            <li className="nav-item" >
                                <Link to="/backend" className="nav-link" >Trang admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh sách mặt hàng</Link>
                            </li>
                            <li className="nav-item dropdown active dropend">
                            <Link className="nav-link">
                            Mặt hàng
                            </Link>
                            <li><Link className="nav-link" to='/backend/them'>Thêm mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/capnhat' >Sửa mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/xoasp'>Xoá mặt hàng</Link></li>  
                            <li className="nav-item">
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/khachhang' >Danh sách khách hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themkhachhang' >Thêm khách hàng</Link>
                            </li>
                                <Link className="nav-link" to='/backend/hang' >Danh sách hãng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themhang' >Thêm Hãng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/gia' >Danh sách bảng giá</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themgia' >Thêm giá mới</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/phanloai' >Phân loại mặt hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themphanloai' >Thêm phân loại</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Quay lại trang chủ</Link>
                            </li> 
                        </li>
                    </ul>
                    </nav>
                </div>
          <div className="container-fluid">
              <div className="row">
              <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12 mt-3">
                <div className="mb-3">
                    <label  className="form-label">Giá Cũ</label>
                    <input type="text" className="form-control" onChange={this.xulynhap} 
                    name="giacu" value={this.props.match.params.price} readOnly/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Giá mới</label>
                    <input type="text" className="form-control" onChange={this.xulynhap} 
                    name="giamoi" />
                </div>
                <button type="submit" className="btn btn-primary">Lưu Trữ</button>
                </form>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
