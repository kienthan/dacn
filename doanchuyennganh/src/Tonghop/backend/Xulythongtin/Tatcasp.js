import React, { Component } from 'react'
import {DataContext} from '../../../Context'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={ activePage: 1,SPCuoi:10,SPDau:1,products: []}

    static contextType = DataContext;

    handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber});
      this.setState({SPCuoi: pageNumber *10});
      this.setState({SPDau: pageNumber *10 - 10 +1});
    }

    render() {
       const {products} = this.context;

      const xuatsp = () => {
        var kq;
        var begin, end;
        begin = this.state.SPDau;
        end = this.state.SPCuoi;
        kq =  products.map(item =>{
           if(item.mamh <= end && item.mamh >= begin)
                  return(
                        <tr>
                        <th scope="row">{item.mamh}</th>
                        <td className="text-break">{item.tenmh}</td>
                        <td className="text-break">{item.img}</td>
                        <td className="text-break">{item.tinhtrang}</td>
                        <td className="text-break">{item.brandname}</td>
                        <td className="text-break">{item.price}</td>
                        <td className="text-break">{item.saleoff}</td>
                        <td className="text-break text-wrap">{item.mota}</td>
                        </tr>

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
              <div class='col-lg-12 col-md-12 col-sm-12 mt-3'>
              <div style={{float:'right'}}>
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={products.length}
                  pageRangeDisplayed={6}
                  onChange={this.handlePageChange.bind(this)}
                  itemClass="page-item"
                  linkClass="page-link"
                  hideNavigation
                />
              </div>
              </div>
              <table className="table table-striped">
                        <thead>
                        <tr>
                        <th scope="col" width='20px'>STT</th>
                        <th scope="col">T??n M???t H??ng</th>
                        <th scope="col">IMG</th>
                        <th scope="col">T??nh tr???ng</th>
                        <th scope="col">H??ng</th>
                        <th scope="col">Gi??</th>
                        <th scope="col">Gi???m gi??</th>
                        <th scope="col" width='40%'>M?? t???</th>
                        </tr>
                    </thead>
                    <tbody>
                        {xuatsp()}
                        </tbody>
                      </table>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
