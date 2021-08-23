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
                      <table className="table table-striped">
                        <thead>
                        <tr>
                        <th scope="col" width='20px'>STT</th>
                        <th scope="col">Tên Mặt Hàng</th>
                        <th scope="col">IMG</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Hãng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Giảm giá</th>
                        <th scope="col" width='40%'>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                      </table>
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
                                <Link to="/" className="nav-link" >Trang admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh sách mặt hàng</Link>
                            </li>
                            <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mặt hàng
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" >Thêm mặt hàng</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Sửa mặt hàng</Link>
                            <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Xoá mặt hàng</Link>    
                            </div>
                            
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
              {xuatsp()}
              </div>
              </div>
            </div>
        )
    }
}

export default Products
