import React,{ Component} from 'react';
import Footer from './footer';
import {
    Link
  } from "react-router-dom";
import Menutop from './menutop'
import {DataContext} from '../../Context';


export default class SignIn extends Component{
    static contextType = DataContext;
    state = {passold:'',passnew:'',passnew1:''}
    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        const {passold,passnew,passnew1} = this.state;
        e.preventDefault(); 
        if( passold === '' && passnew ==='' && passnew1 ==='')
        alert('Phải nhập đủ các thuộc tính');
        else if(passnew.length <8 && passnew1.length <8)
        alert('Mật khẩu phải từ 8 kí tự trở lên');
        else if( passnew !== passnew1)
        alert ('Nhập lại sai mật khẩu');
        else{
            const obj = {
                sdt : this.props.match.params.sdt,
                passold : passold,
                passnew : passnew
            }
            fetch("http://localhost/php_react/thaydoimatkhau.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg);   
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
                e.target.reset();
        }
        
    }

    render() 
    {   
        
        return(
            <div>
                <div  >
            <Menutop />
            <div className="container-fluid">
           <div className="row"> 
            <div style={{backgroundColor:'rgba(90, 155, 1, 1)',padding:'30px 400px'}} className="col-lg-12 col-md-12 col-sm-12 text-center">

            <form onSubmit={this.xulyluutru} style={{padding:'30px 70px',backgroundColor:'#fff',borderRadius:'10px'}}>
                <div className="mb-3 row">
                    <input type="password" placeholder="Nhập mật khẩu cũ"  className="form-control text-center" 
                     name='passold' onChange={this.xulynhap}/>
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control text-center" name='passnew' 
                    placeholder="Mật khẩu" onChange={this.xulynhap} />
                </div>
                <div className="mb-3 row">
                    <input type="password" className="form-control text-center" name='passnew1' 
                    placeholder=" Nhập Lại Mật khẩu" onChange={this.xulynhap} />
                </div>

                <button type="submit" className="btn btn-success text-center">
                    Thay Đổi</button>
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