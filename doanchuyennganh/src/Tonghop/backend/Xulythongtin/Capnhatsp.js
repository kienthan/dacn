import React, { Component } from 'react'
import {DataContext} from '../../../Context'
import {Link} from 'react-router-dom';


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        phanloai:[],
        saleoff:[],
        brand:[],
        gia:[],
        manh:'',tenmh:'',idphanloai:'',idsale:'',url:'',mota:'',idprice:'',soluong:'',tinhtrang:'',
    }

    getProduct = () =>{
        if(this.props.match.params.mamh){
            const res = this.context.products;
            
            const data = res.filter(item =>{
                return item.url === this.props.match.params.url
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
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
        mamh: this.props.match.params.mamh,
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
    fetch("http://localhost:80/php_react/capnhatsp.php",{
            method:"POST",
            headers: {"Content-Type" : "application/json",},
            body: JSON.stringify(obj),
            }).then((res) => {return res.json();
            }).then((data) =>
            { 
            if(data.id){
                alert(data.msg);
                window.location.href = "/backend";
            }
            else{
                alert(data.msg);
            }
            }).catch((err) => {console.log(err);
            });
            e.target.reset();
            window.location.href = "/backend/capnhat";
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
                    {/* {-------------------------------------------------------------------------} */}
              <div className="container-fluid" style={{minHeight:'1050px',background:'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'}}>
                  <div className="row " >
                  <form onSubmit={this.xulyluutru} className="col-lg-12 col-md-12 col-sm-12">
                        <div className="mb-3">
                            <label  className="form-label">T??n M???t H??ng</label>
                            <input type="text" className="form-control" onChange={this.xulynhap} 
                            name="tenmh" />
                        </div>
                        <div class="mb-3">
                            <label  className="form-label">
                                Ph??n Lo???i
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
                                Gi???m Gi??
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
                                T??n H??ng
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
                                M?? t???
                            </label>
                            <textarea type="text" className="form-control"   
                            onChange={this.xulynhap}  name="mota"  />
                        </div>

                        <div class="mb-3">
                            <label  className="form-label">
                            Gi?? ti???n
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
                                S??? l?????ng
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
                                T??nh Tr???ng
                            </label>
                            <input type="text" className="form-control" min="1" max="5" step="1" 
                            onChange={this.xulynhap}  name="tinhtrang"  />
                        </div>

                        <button type="submit" className="btn btn-primary">L??u Tr???</button>
                        </form>
                  </div>
                  </div>
                </div>
            )
        }
    }
    
    export default Details
    
