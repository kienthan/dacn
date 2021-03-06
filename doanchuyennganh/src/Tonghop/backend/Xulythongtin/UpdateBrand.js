import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export class Products extends Component {

    state ={brandold:'',brandnew:''}

    

    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
        }
    
        xulyluutru = (e) =>{
        e.preventDefault();
        const obj = {
            brandold: this.props.match.params.brandname,
            brandnew: this.state.brandnew,
        }
        console.log(obj)
        fetch("http://localhost/php_react/updatebrand.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg);
                    window.location.href = "/backend/hang";
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
                e.target.reset();
                window.location.href = "/backend/hang";
    }



    render() {
        return (
          <div className="">
              
            <div style={{minWidth:'250px',maxWidth:'250px',maxHeight:'2000px',minHeight:'2000px',float:'left',backgroundColor:'#fff000'}}>
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
          <div className="container-fluid">
              <div className="row">
              <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12 mt-3">
                <div className="mb-3">
                    <label  className="form-label">T??n h??ng c??</label>
                    <input type="text" className="form-control" onChange={this.xulynhap} 
                    name="giacu" value={this.props.match.params.brandname} readOnly/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">T??n c???p nh???t</label>
                    <input type="text" className="form-control" onChange={this.xulynhap} 
                    name="brandnew" />
                </div>
                <button type="submit" className="btn btn-primary">L??u Tr???</button>
                </form>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
