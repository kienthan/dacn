import React, { Component } from 'react';
import {DataContext} from '../../../Context';
import Footer from '../footer';
import Menutop from '../menutop';

export class Products extends Component {
    state ={sdt:'', diachi:'',ghichu:''};

    static contextType = DataContext;

    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault();
    }

   

    render() {
        const {cart,total,Thanhtoan,user} = this.context;
        if(user.length === 0 )
        return (window.location.href='/login');
        else
        return (
            <>
            <Menutop />
            <div className="container">
              <div className="row ">
                <table className='table text-justify' >
                    <thead>
                        <tr>
                        <th scope="col">Tên mặt hàng</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Giảm Giá</th>
                        <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    {/* {---------------------------------------------------------------} */}
                    <tbody>
                    {
                        cart.map(item =>(
                            
                            <tr key={item.mamh}>
                                <th>
                                    {item.tenmh}
                                </th>
                                <th>
                                    <img src={"./img/"+item.img} width='50px' alt={item.img} />
                                </th>
                                <th>{item.count} </th>
                                <th>{item.price}</th>
                                <th>{parseFloat(item.saleoff)*100} %</th>
                                <th>{((1-parseFloat(item.saleoff)) * (item.price * item.count)).toLocaleString() } VND</th>
                            </tr>
                         
                        ))
                        
                    }
                    
                    <tr>
                    
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Tổng tiền</th>
                    <th><p > <span style={{color:'red'}}>{total.toLocaleString()} VND</span></p></th>
                    </tr>
                    
                    </tbody>
                    
                </table>
                <div className="col-lg-12 col-md-12 col-sm-12"> 
                    <div class="mb-3 row">
                        <label class="col-sm-2 col-form-label">Số điện thoại</label>
                        <div class="col-sm-10">
                        <input type="text"  className="form-control" onChange={this.xulynhap} 
                         value={user[0].sdt} readOnly/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label  class="col-sm-2 col-form-label">Địa chỉ giao hàng</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control" onChange={this.xulynhap} 
                         value={user[0].diachi} readOnly/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label  class="col-sm-2 col-form-label">Ghi chú</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control" onChange={this.xulynhap} name="ghichu"/>
                        </div>
                    </div>
                </div>


                    <div className='col-lg-12 col-md-12 col-sm-12 text-center'>
                    <button className='btn btn-danger ' disabled={total === 0 ? true : false}
                    onClick={
                        () => {Thanhtoan(user[0].sdt,user[0].diachi,this.state.ghichu)}
                        } >Xác nhận đơn hàng</button>
                    </div>
              </div>
               
            </div>
            <Footer />
            </>
        )
    }
}

export default Products
