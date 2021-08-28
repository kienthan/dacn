import React, { Component } from 'react';
import {DataContext} from '../../Context';
import Footer from './footer';
import Menutop from './menutop';

export class Products extends Component {

    static contextType = DataContext;


   

    render() {
        const {user} = this.context;
        if(user.length === 0 )
        return (window.location.href='/login');
        else
        return (
            <>
            <Menutop />
            <div className="container">
              <div className="row ">
                <table className='table col-lg-12 col-md-12 col-sm-12 text-justify'>
                    {/* {---------------------------------------------------------------} */}
                    <h2 > Thông tin khách hàng</h2>
                    {
                        user.map(info => [
                            <tbody key={info.sdt}>
                                <tr>
                                    <th scope='row'>Email</th>
                                    <td><b>{info.email}</b></td>
                                </tr>
                                <tr>
                                    <th scope='row'>Số điện thoại</th>
                                    <td><b>{info.sdt}</b></td>
                                </tr>
                                <tr>
                                    <th scope='row'>Địa chỉ</th>
                                    <td><b>{info.diachi}</b></td>
                                </tr>
                                <tr>
                                    <th scope='row'>Họ tên</th>
                                    <td><b>{info.hoten}</b></td>
                                </tr>
                                <tr>
                                    <th scope='row'>Ngày sinh</th>
                                    <td><b>{info.ngaysinh}</b></td>
                                </tr>
                                <tr>
                                    <th scope='row'>Giới tính</th>
                                    <td><b>{info.gioitinh}</b></td>
                                </tr>
                            </tbody>

                           
                        ])
                    }
                    
                </table>
              </div>
               
            </div>
            <Footer />
            </>
        )
    }
}

export default Products
