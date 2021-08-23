import React, { Component } from 'react'
import {DataContext} from '../../Context'
import {Link} from 'react-router-dom'
import Footer from './footer';
import Menutop from './menutop';


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
    }

    getProduct = () =>{
        if(this.props.match.params.url){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.url === this.props.match.params.url
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }
    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <div>
                <Menutop/>
            {
                
                product.map((item) =>{
                    const giamgia = () =>{
                        let kq='';
                        let gia = parseFloat(item.saleoff)*100
                        if ( gia !== 0 )
                        {
                            kq= <p>Giảm giá : {gia} %</p>
                        }
                        else
                        {
                            kq =''
                        }
                        return kq;
                    }
                    return(
                        <div key={item.mamh} className="container-fluid mt-3">
                                <div className="row">
                                    {/* <div className="col-lg-3">
                                    
                                    </div> */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-center" >
                                    <img src={'/img/'+item.img} alt={item.tenmh} width="300px" style={{border:'2px solid #efefef'}}/>
                                    </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <h4>{item.tenmh}</h4>
                                    <h4>{item.tinhtrang}</h4>
                                    <h5>Giá tiền: {parseFloat(item.price).toLocaleString()} VNĐ</h5>
                                    {/* {<p>Giảm giá : {parseFloat(item.saleoff) *100 }%</p>} */}
                                    {giamgia()}
                                    <div >
                                        <hr />
                                    <h4>Thông tin sản phẩm</h4>
                                    <p>{item.mota}</p>
                                    <p>Hãng sản xuất: {item.brandname}</p>
                                    
                                </div>
                                <Link type="submit" className="btn btn-warning mt-3" to="/sanpham" onClick={() => addCart(item.mamh) } >
                                    Thêm Vào Giỏ Hàng
                                </Link>
                               
                           </div>
                           </div>
                           </div>
                    )
                })
            }
            <Footer /> 
         </div>
        )
    }
}

export default Details
