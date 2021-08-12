import React, { Component } from 'react'
import {DataContext} from '../../Context'
import {Link, NavLink} from 'react-router-dom';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Giỏ Hàng Chưa Có Gì </h2>
        }else{
            return (
                <>
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
                                        <span>${item.price * item.count}</span>
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
                    <div className="total" style={{float:'right', marginRight:'10%'}}>
                        <NavLink to="/payment" activeClassName="btn btn-primary" >Thanh Toán</NavLink>
                        <h3>Tổng tiền: {total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
