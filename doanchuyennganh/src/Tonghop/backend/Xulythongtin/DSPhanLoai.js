import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={phanloai:[]}
    componentDidMount(){
        fetch("http://localhost/php_react/layidphanloai.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({phanloai : data.phanloai})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
    }

    DeletePhanLoai =(theID) => {
        if(window.confirm("Bạn có chắc là xoá mặt hàng này ?"))
        {
            fetch("http://localhost/php_react/deletephanloai.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify({idphanloai : theID}),
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
                window.location.href = "/backend/phanloai";
        }
    }

    render() {

        const Hienthi = () => {
            const {phanloai} = this.state;
            var kq = phanloai.map(item => {
                return(
                    <tbody>
                            <tr>
                            <th>{item.idphanloai}</th>
                            <td>{item.phanloai}</td>
                            <td><Link to={"/backend/capnhatphanloai/"+item.phanloai}><button className='btn btn-success'>Cập nhật</button></Link></td>
                            <td><button className='btn btn-danger' onClick={() => {this.DeletePhanLoai(item.idphanloai)}}>Xoá</button></td>
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
              <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col" >Mã</th>
                            <th scope="col" >Tên Hãng</th>
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
