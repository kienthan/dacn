import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={hoadon:[]}
    componentDidMount(){
        fetch("http://localhost/php_react/dshoadon.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({hoadon : data.hoadon})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
    }


    render() {

        const Hienthi = () => {
            const {hoadon} = this.state;
            var kq = hoadon.map(item => {
                return(
                    <tbody>
                            <tr>
                            <th>{item.mahd}</th>
                            <td>{item.sdt}</td>
                            <td>{item.ngaymua}</td>
                            <td>{item.diachigiaohang}</td>
                            <td>{item.ghichu}</td>
                            <td>{item.tongtien}</td>
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
                  <h1 className="text-center text-capitalize col-lg-12 col-md-12 col-sm-12">Danh sách hoá đơn</h1>
              <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col" >Mã hoá đơn</th>
                            <th scope="col" >Số điện thoại</th>
                            <th scope="col" >Ngày mua</th>
                            <th scope="col" >Địa chỉ </th>
                            <th scope="col" >Ghi chú</th>
                            <th scope="col" >Tổng tiền</th>
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
