import React,{ Component} from 'react';
import Footer from './footer';
import {
    Link
  } from "react-router-dom";
import Menutop from './menutop'
import {DataContext} from '../../Context';


export default class SignIn extends Component{
    static contextType = DataContext;
    state = {admin:'',pass:''}
    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault(); 
        this.context.Admin(this.state.admin,this.state.pass);
        e.target.reset();
    }

    render() 
    {
        return(
            <div>
                <div  >
            <Menutop />
            <div className="container-fluid">
           <div className="row"> 
            <div style={{backgroundColor:'rgba(244, 91, 105, 1)',padding:'30px 400px'}} className="col-lg-12 col-md-12 col-sm-12 text-center" >

            <form onSubmit={this.xulyluutru} style={{padding:'30px 70px',backgroundColor:'#fff',borderRadius:'10px'}}>
                <h5 className="text-center"> Đăng Nhập cho trang quản trị </h5>
                <div className="mb-3 row">
                    <input type="text" placeholder="Nhập tài khoản admin"  className="form-control text-center" 
                     name='admin' onChange={this.xulynhap}/>
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control text-center" name='pass' 
                    placeholder="Mật khẩu" onChange={this.xulynhap} />
                </div>
                <button type="submit" className="btn btn-success" style={{marginBottom:'20px'}}>Đăng Nhập</button>
            </form>
            </div>
            
            </div>
           </div>
           <Footer />
        </div>
            </div>
        )
    }
}