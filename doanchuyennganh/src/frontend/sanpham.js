import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

export class Products extends Component {

    static contextType = DataContext;

    render() {
      const {products,addCart} = this.context;
        // const pageHT =1;
        // const spmoitrang = 8;
        // const sotrang = Math.ceil (products.length/ spmoitrang);
        // const SPCuoi = pageHT * spmoitrang;
        // const SPDau = SPCuoi -spmoitrang +1;
        return (
            <div className="container">
              <div className="row">

              {
                products.map(item =>{
                  return(
                      <div key={item.mamh} className="col-lg-3 mb-3">   
                              <div className="card" >
                                <img src={'./img/'+item.img} className="card-img" alt={item.img}/>
                                <div className="card-body">
                                    <p className="text-truncate"><b>{item.tenmh}</b></p>
                                    <p className="">Giá: {item.price}  VNĐ</p>
                                    <Link to={"/chitiet/"+item.mamh}  className="btn btn-primary btn-block">Xem Chi Tiet</Link> 
                                </div>
                          </div>
                      </div>
                  )
              })
              }
              </div>
               
            </div>
        )
    }
}

export default Products
