import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../../Context'
import Footer from './footer';
import Menutop from './menutop';

export class Products extends Component {

    static contextType = DataContext;
    state = {
        product: [],
    }

    getProduct = () =>{
        var kq;
        if(this.props.match.params.idphanloai){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.idphanloai === this.props.match.params.idphanloai
            })
             kq = data.map(item =>{
                  return(
                      <div key={item.mamh} className="col-lg-3 mb-3">   
                              <div className="card" >
                                <img src={'./img/'+item.img} className="card-img" alt={item.img}/>
                                <div className="card-body">
                                    <p className="text-truncate"><b>{item.tenmh}</b></p>
                                    <p className="">Giá: {item.price}  VNĐ</p>
                                    <Link to={"/chitiet/"+item.url}  className="btn btn-primary btn-block">Xem Chi Tiet</Link> 
                                </div>
                          </div>
                      </div>
                  )
              });
        }
        return kq;
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
    //   const {products} = this.context;
        return (
            <div>
                <Menutop />
                <div className="container">
                    <div className="row">

                    {
                        this.getProduct()
                    }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products
