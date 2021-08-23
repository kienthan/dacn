import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import Footer from './footer';
import Menutop from './menutop';
import Pagination from "react-js-pagination";

export class Products extends Component {

    state ={ activePage: 1,SPCuoi:20,SPDau:1}

    static contextType = DataContext;

    handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber});
      this.setState({SPCuoi: pageNumber *20});
      this.setState({SPDau: pageNumber *20 - 20 +1});
    }

    render() {
      const {products,activePage,SPCuoi} = this.context;
      const xuatsp = () => {
        var kq;
        var begin, end;
        begin = this.state.SPDau;
        end = this.state.SPCuoi;
        console.log(begin + '-----' + end);
        kq =  products.map(item =>{
           if(item.mamh <= end && item.mamh >= begin)
                  return(
                      <div key={item.mamh} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">   
                              <div className="card" >
                                <img src={'./img/'+item.img} className="card-img" alt={item.img}/>
                                <div className="card-body">
                                    <p className="text-truncate"><b>{item.tenmh}</b></p>
                                    <p className="">Giá: {parseFloat(item.price).toLocaleString()}  VNĐ</p>
                                    <Link to={"/chitiet/"+item.url}  className="btn btn-primary btn-block">Xem Chi Tiet</Link> 
                                </div>
                          </div>
                      </div>
                  )
              })
              return kq;
      }
        return (
          <div>
            <Menutop />
          <div className="container">
              <div className="row">
              {xuatsp()}
              <div class='col-lg-12 col-md-12 col-sm-12'>
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={20}
                  totalItemsCount={products.length}
                  pageRangeDisplayed={4}
                  onChange={this.handlePageChange.bind(this)}
                  itemClass="page-item"
                  linkClass="page-link"
                  hideNavigation
                />
              </div>
              </div>
              </div>
              <Footer />
            </div>
        )
    }
}

export default Products
