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
                                <Link className="nav-link" to='/backend/dshoadon' >Danh s??ch ho?? ????n</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh s??ch m???t h??ng</Link>
                            </li>
                            <li className="nav-item dropdown active dropend">
                            <li><Link className="nav-link" to='/backend/them'>Th??m m???t h??ng</Link></li>
                            <li><Link className="nav-link" to='/backend/capnhat' >S???a m???t h??ng</Link></li>
                            <li><Link className="nav-link" to='/backend/xoasp'>Xo?? m???t h??ng</Link></li>  
                            <hr />
                            <li className="nav-item">
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/khachhang' >Danh s??ch kh??ch h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themkhachhang' >Th??m kh??ch h??ng</Link>
                                <hr />
                            </li>
                                <Link className="nav-link" to='/backend/hang' >Danh s??ch h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themhang' >Th??m H??ng</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/gia' >Danh s??ch b???ng gi??</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themgia' >Th??m gi?? m???i</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/phanloai' >Ph??n lo???i m???t h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themphanloai' >Th??m ph??n lo???i</Link>
                                <hr />
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Quay l???i trang ch???</Link>
                            </li> 
                        </li>
                    </ul>
                    </nav>
                </div>
          <div className="container-fluid">
              <div className="row">
                  <h1 className="text-center text-capitalize col-lg-12 col-md-12 col-sm-12">Danh s??ch ho?? ????n</h1>
              <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col" >M?? ho?? ????n</th>
                            <th scope="col" >S??? ??i???n tho???i</th>
                            <th scope="col" >Ng??y mua</th>
                            <th scope="col" >?????a ch??? </th>
                            <th scope="col" >Ghi ch??</th>
                            <th scope="col" >T???ng ti???n</th>
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
