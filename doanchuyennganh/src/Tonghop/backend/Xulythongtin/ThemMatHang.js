import React, { Component } from 'react'
import {DataContext} from '../../../Context'
import { Link } from 'react-router-dom';

export class Products extends Component {
    state = {   manh:'',tenmh:'',idphanloai:'',idsale:'',url:'',mota:'',idprice:'',soluong:'',tinhtrang:'',
                phanloai:[],
                saleoff:[],
                brand:[],
                gia:[]
    };

    static contextType = DataContext;

    componentDidMount(){
                      //-------------lay bang phan loai -------------------
                      fetch("http://localhost/php_react/layidphanloai.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({phanloai : data.phanloai})
        
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                      //---------lay bang giam gia---------------
                      fetch("http://localhost/php_react/layidsale.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({saleoff : data.saleoff})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                      //---------lay bang brand----------------------
                      fetch("http://localhost/php_react/layidbrand.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({brand : data.brand})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                      //---------lay bang gia tien---------------------
                      fetch("http://localhost/php_react/layidgia.php")
                      .then((res) => {
                        return res.json();
                      })
                      .then((data) => {
                        if (data.success) {
                            this.setState({gia : data.gia})
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });

    }

    xulynhap = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    xulyluutru = (e) =>{
        e.preventDefault();
        const obj = {
            mamh: this.context.products.length+1,
            tenmh: this.state.tenmh,
            idphanloai : this.state.idphanloai,
            idsale	: this.state.idsale,
            url : this.state.tenmh.replaceAll(' ','-'),
            idbrand : this.state.idbrand,
            mota : this.state.mota,
            idprice : this.state.idprice,
            soluongton : this.state.soluong,
            img : this.state.img,
            tinhtrang : this.state.tinhtrang
        }
        console.log(obj);
        fetch("http://localhost/php_react/themmathang.php",{
            method:"POST",
            headers: {"Content-Type" : "application/json",},
            body: JSON.stringify(obj),
            }).then((res) => {return res.json();
            }).then((data) =>
            { 
            if(data.id){
                alert(data.msg);
                alert("Thêm mặt hàng mới thành công");
            }
            else{
                alert(data.msg);
            }
            }).catch((err) => {console.log(err);
            });
    }

    render() {
        const {phanloai,saleoff,brand,gia} = this.state;

        return (
          <div className="">
            <div style={{minWidth:'250px',maxWidth:'250px',minHeight:'1050px',float:'left',backgroundColor:'#fff000',color:'#fff'}}>
            <nav className="navbar">
                    <ul className="nav flex-column text-decoration-none ">
                        <img src='../../img/logo.jpg' width='200px' alt='logo_fashion' />
                            <li className="nav-item" >
                                <Link to="/backend" className="nav-link" >Trang admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/all' >Danh sách mặt hàng</Link>
                            </li>
                            <li className="nav-item dropdown active dropend">
                            <Link className="nav-link">
                            Mặt hàng
                            </Link>
                            <li><Link className="nav-link" to='/backend/them'>Thêm mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/capnhat' >Sửa mặt hàng</Link></li>
                            <li><Link className="nav-link" to='/backend/xoasp'>Xoá mặt hàng</Link></li>  
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/hang' >Danh sách hãng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themhang' >Thêm Hãng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/gia' >Danh sách bảng giá</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themgia' >Thêm giá mới</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/phanloai' >Phân loại mặt hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/backend/themphanloai' >Thêm phân loại</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >Quay lại trang chủ</Link>
                            </li> 
                        </li>
                    </ul>
                    </nav>
                </div>
                {/* {-------------------------------------------------------------------------} */}
          <div className="container-fluid" style={{minHeight:'1050px',background:'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'}}>
              <div className="row " >
              <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12">

                <div className="mb-3">
                    <label  className="form-label">Tên Mặt Hàng</label>
                    <input type="text" className="form-control" onChange={this.xulynhap} 
                    name="tenmh" />
                </div>
                <div class="mb-3">
                    <label  className="form-label">
                        Phân Loại
                    </label>
                    <select className="form-select form-control" onChange={this.xulynhap} name='idphanloai' >
                    {phanloai.map (t => {
                        return(
                        <option className="form-select" key={t.idphanloai} value={t.idphanloai}
                         >{t.phanloai}</option>
                        )
                    })}
                    </select>
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                        Giảm Giá
                    </label>
                    <select className="form-select form-control" onChange={this.xulynhap} name='idsale'>
                    {saleoff.map (t => {
                        return(
                                <option className="form-select" key={t.idsale} 
                                value={t.idsale} >
                                    {parseFloat(t.saleoff) *100}%
                                    </option>
                        )
                    })}
                    </select>
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                        Tên Hãng
                    </label>
                    <select className="form-select form-control"onChange={this.xulynhap} name='idbrand' >
                    {brand.map (t => {
                        return(
                                <option className="form-select" key={t.idbrand} 
                                value={t.idbrand}  >
                                    {t.brandname}
                                    </option>
                        )
                    })}
                    </select>
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                        Mô tả
                    </label>
                    <textarea type="text" className="form-control"   
                    onChange={this.xulynhap}  name="mota"  />
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                       Giá tiền
                    </label>
                    <select className="form-select form-control" onChange={this.xulynhap} name='idprice'>
                    {gia.map (t => {
                        return(
                                <option className="form-select" key={t.idprice}  
                                value={t.idprice}  >{parseFloat(t.price).toLocaleString()} VND
                                </option>
                        )
                    })}
                    </select>
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                        Số lượng
                    </label>
                    <input type="number" className="form-control" min="1" max="100" step="1" 
                    onChange={this.xulynhap}  name="soluong"  />
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                       IMG
                    </label>
                    <input type="text" className="form-control"
                    onChange={this.xulynhap}  name="img"  />
                </div>

                <div class="mb-3">
                    <label  className="form-label">
                        Tình Trạng
                    </label>
                    <input type="text" className="form-control" min="1" max="5" step="1" 
                    onChange={this.xulynhap}  name="tinhtrang"  />
                </div>
                
                <button type="submit" className="btn btn-primary">Lưu Trữ</button>
                </form>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
