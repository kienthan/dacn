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

    XoaSP(id){

        if(window.confirm("Bạn có chắc là xoá mặt hàng này ?"))
        {   
            fetch("http://localhost/php_react/xoasp.php",{
            method:"POST",
            headers: {"Content-Type" : "application/json",},
            body: JSON.stringify({mamh : id}),
            }).then((res) => {return res.json();
            }).then((data) =>
            { 
            if(data.id){
                alert(data.msg);
                window.location.href = "/backend";
            }
            else{
                alert(data.msg);
            }
            }).catch((err) => {console.log(err);
            });
            window.location.href = "/backend/xoasp";
        }
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
                        <th scope="col" width='5%'>Mã</th>
                        <th scope="col" width='10%'>Tên Mặt Hàng</th>
                        <th scope="col" width='10%'>IMG</th>
                        <th scope="col" width='10%'>Tình trạng</th>
                        <th scope="col" width='10%'>Hãng</th>
                        <th scope="col" width='10%'>Giá</th>
                        <th scope="col" width='10%'>Giảm giá</th>
                        <th scope="col" width='25%'>Mô tả</th>
                        <th scope="col" width='10%'>Chức năng</th>
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
                        <td className="text-break text-wrap">
                            <button className='btn btn-danger' onClick={() => this.XoaSP(item.mamh)}>Xoá mặt hàng</button>
                        </td>
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
