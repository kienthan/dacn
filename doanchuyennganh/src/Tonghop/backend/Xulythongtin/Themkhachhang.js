import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Dangky extends Component{
    state ={sdt:'',email:'', matkhau:'', gioitinh:'',diachi:'',hoten:'',ngaysinh:''}
    
    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault();

        const obj = {
            dienthoai : this.state.sdt,
            email:this.state.email,
            matkhau:this.state.matkhau,
            gioitinh:this.state.gioitinh,
            diachi:this.state.diachi,
            hoten:this.state.hoten,
            ngaysinh:this.state.ngaysinh
        }
        fetch("http://localhost/php_react/dangki.php",{
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
                window.location.href = "/login";  
    }

    render(){   
        return(
            <div className="" >
                <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'1500px',minHeight:'660px',float:'left',backgroundColor:'#fff000'}}>
                <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='../../img/logo.jpg' width='200px' alt='logo_fashion' />
                            <li className="nav-item" >
                                <Link to="/backend" className="nav-link" >Trang admin</Link>
                                <hr />
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/dshoadon' >Danh s??ch ho?? ????n</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh s??ch m???t h??ng</Link>
                            </li>
                            <li className="nav-item dropdown active dropend">
                            <li><Link className="nav-link" to='/backend/them'>Th??m m???t h??ng</Link></li>
                            <li><Link className="nav-link" to='/backend/capnhat' >S???a m???t h??ng</Link></li>
                            <li><Link className="nav-link" to='/backend/xoasp'>Xo?? m???t h??ng</Link></li>  
                            <hr />
                            <li className="nav-item">
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/khachhang' >Danh s??ch kh??ch h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themkhachhang' >Th??m kh??ch h??ng</Link>
                                <hr />
                            </li>
                                <Link className="nav-link" to='/backend/hang' >Danh s??ch h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themhang' >Th??m H??ng</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/gia' >Danh s??ch b???ng gi??</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themgia' >Th??m gi?? m???i</Link>
                                <hr />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/phanloai' >Ph??n lo???i m???t h??ng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themphanloai' >Th??m ph??n lo???i</Link>
                                <hr />
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Quay l???i trang ch???</Link>
                            </li> 
                        </li>
                    </ul>
                    </nav>
                </div>
            <div className="container"> 
                <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12">
                    <div className="">
                        <h4 className='text-center'> Th??m kh??ch h??ng m???i</h4>
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nh???p S??? ??i???n Tho???i" name='sdt'  
                        className="form-control "  onChange={this.xulynhap} />
                        </div>
                        <div className="mb-3 ml-5 row">
                            <input type="email" className="form-control" name='email' 
                             placeholder="Nh???p Email" onChange={this.xulynhap}/>
                        </div>
                        <div className="mb-3 ml-5 row ">
                        <input type="password" placeholder="Nh???p M???t Kh???u" name='matkhau' className="form-control "
                          onChange={this.xulynhap}/>
                        </div>  
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nh???p H??? T??n" name='hoten'  className="form-control " 
                         onChange={this.xulynhap} />
                        </div> 
                    <div className="mb-3 ml-5 row " >
                        <input type="date" placeholder="Nh???p Ng??y Sinh" name='ngaysinh'  className="form-control " 
                          onChange={this.xulynhap}/>
                        </div>
                        <div className="mb-3 ml-5 row">
                        <select  className="form-control  mt-2" name='gioitinh' onChange={this.xulynhap} >
                        <option value="Nam">Ch???n gi???i t??nh</option>
                            <option value="Nam">Nam</option>
                            <option value="N???">N???</option>
                        </select>
                        </div>
                        <div className="mb-3 ml-5 row ">
                        <input type="text" placeholder="Nh???p ?????a Ch???" name='diachi'  className="form-control " 
                         onChange={this.xulynhap}/>
                        </div>  
                        <button type="submit" className="btn btn-success" style={{marginLeft:'40%'}}>????ng k??</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

    
    

  