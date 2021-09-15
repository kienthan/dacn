import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={khachhang:[]}
    componentDidMount(){
        fetch("http://localhost/php_react/khachhang.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({khachhang : data.khachhang})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
    }

    XoaKhachHang =(theID) => {
        if(window.confirm("Bạn có chắc là xoá mặt hàng này ?"))
        {
            fetch("http://localhost/php_react/xoakhachhang.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify({sdt : theID}),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg);
                    window.location.href = "/backend/phanloai";
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
                window.location.href = "/backend/khachhang";
        }
    }

    render() {

        const Hienthi = () => {
            const {khachhang} = this.state;
            var kq = khachhang.map(item => {
                return(
                    <tbody>
                            <tr>
                            <th>{item.sdt}</th>
                            <td>{item.email}</td>
                            <td>{item.hoten}</td>
                            <td>{item.diachi}</td>
                            <td>{item.ngaysinh}</td>
                            <td>{item.gioitinh}</td>
                            <td><Link to={"/backend/capnhatkhach/"+item.sdt}>
                                <button className='btn btn-success'>Cập nhật</button>
                                </Link>
                            </td>
                            <td><button className='btn btn-danger' onClick={() => {this.XoaKhachHang(item.sdt)}}>Xoá</button></td>
                            </tr>
                    </tbody>
                )
            })
            return kq;
      }
        return (
          <div className="">
            <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'2000px',minHeight:'2000px',float:'left',backgroundColor:'#fff000'}}>
            <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='../img/logo.jpg' width='200px' alt='logo_fashion' />
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
          <div className="container-fluid">
              <div className="row">
                  <h1 className="text-center text-capitalize col-lg-12 col-md-12 col-sm-12">Danh sách khách hàng</h1>
              <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col" >Điện thoại</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >Họ tên</th>
                            <th scope="col" >Địa chỉ</th>
                            <th scope="col" >Ngày sinh</th>
                            <th scope="col" >Giới tính</th>
                            <th scope="col" >Cập nhật</th>
                            <th scope="col" >Xoá</th>
                            </tr>
                        </thead>
                        {Hienthi()}
                    </table>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
