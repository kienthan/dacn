import React, { Component } from 'react'
import {DataContext} from '../../../Context'
import { Link } from 'react-router-dom';
import Menutop  from '../menutop';

export class Cart extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal();
    }

    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <><Menutop /><h2 style={{textAlign:"center"}}>Giỏ Hàng Chưa Có Gì </h2></>
        }else{
            return (
                <div>
                <Menutop />
                    {
                        cart.map(item =>(
                            <div className="container" key={item.mamh}>
                               <div className="row">
                                   <div className="col-lg-3 col-md-6 col-sm-12">
                                   <img src={'./img/'+item.img} alt="" width="250px"/>
                                   </div>

                                   {/* ---------------------------------------------------- */}

                                   <div className="col-lg-9">
                                    <div className="m-auto">
                                        <h2>{item.tenmh}</h2>
                                        <p>Giảm giá {parseFloat(item.saleoff)*100} %</p>
                                        <p>Giá tiền: {(item.price * item.count).toLocaleString()} VND</p>
                                        <p>Còn lại {((1-parseFloat(item.saleoff)) * (item.price * item.count)).toLocaleString() } VND </p>
                                    </div>
                                    <div className="amount"> 
                                        <button className="count btn btn-success mr-2" onClick={() => reduction(item.mamh)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count btn btn-success ml-2" onClick={() => increase(item.mamh)}> + </button>
                                    </div>
                                    
                                    <div className="btn btn-primary mt-3" onClick={() => removeProduct(item.mamh)}>Xoá mặt hàng</div>
                                </div>
                               </div>
                               <hr />
                            </div>
                            
                        ))
                    }
                    <div className="mb-5" style={{float:'right', marginRight:'10%'}}>
                    <h5>Tổng tiền: <span style={{color:'red'}}>{total.toLocaleString()} VNĐ</span></h5>
                        <Link to="/payment"   ><button className="btn btn-info mb-3">Thanh toán</button></Link>
                    </div>
                </div>
                )
            }
        }
}

export default Cart
