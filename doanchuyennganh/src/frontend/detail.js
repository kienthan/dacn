import React, {Component} from 'react';
import xuly from './Xulychitietmathang/xulychitietmathang'
  
class TaskDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            DS :[],mamh:'',size:'',soluong:''
        };
    }

    componentDidMount()
        {     
            const obj = {mamh: this.props.match.params.mamh};
            fetch("http://localhost/php_react/chitietmathang.php",
            {method:"POST",headers: {"Content-Type" : "application/json",},body: JSON.stringify(obj), })
            .then((res) => {return res.json();})
            .then((data) =>{
            if (data.success){
                this.setState({DS : data.chitietsp})
            }
        }).catch((err) =>{
            console.log(err);
        })
    }
    xulynut = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    Xulythongtin = (e) => {
        e.preventDefault();

        const obj = {
            size : this.state.size,
            soluong : this.state.soluong
        }
        console.log(obj)
    }
    
    HienthiDS(){
        const sp = this.state.DS.map(item =>{
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
                            <div className="col-lg-3">
                            <div className="ml-5">
                            <h4>Thông tin sản phẩm</h4>
                            <p>{item.mota}</p>
                            <p>Hãng sản xuất: {item.brandname}</p>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center" >
                            <img src={'/img/'+item.img} alt={item.tenmh} width="300px" style={{border:'2px solid #efefef'}}/>
                            </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h4>{item.tenmh}</h4>
                            <h5>Giá tiền: {parseFloat(item.price).toLocaleString()} VNĐ</h5>
                            {/* {<p>Giảm giá : {parseFloat(item.saleoff) *100 }%</p>} */}
                            {giamgia()}
                        <form onSubmit={this.Xulythongtin}>
                            <label>Chọn Size cho sản phẩm</label> <br />
                            <input type="radio" value='M'  name="size" defaultChecked="M" className="" onChange={this.xulynut}/> <b>M</b> <br />
                            <input type="radio" value="L" name="size" className="" onChange={this.xulynut}/> <b>L</b> <br />
                            <input type="radio" value="XL" name="size" className="" onChange={this.xulynut}/>  <b>XL</b> <br />
                            <input type="radio" value="XLL" name="size" className="" onChange={this.xulynut}/>  <b>XXL</b> <br />
                            <label className="mt-2">Số lượng mua</label>
                            <input type="number"  name="soluong" className="form-control" min="0" max="10" onChange={this.xulynut}
                                    style={{width:'150px'}}/> 
                            <button type="submit" className="btn btn-warning mt-3">
                            Thêm Vào Giỏ Hàng
                        </button>
                        </form >
                        
                        
                   </div>
                   </div>
                   </div>
            )
        })
        return sp;
    }
      render() {
          return (
            <div>
               {this.HienthiDS()} 
            </div>
          );
      }
  }
  
  export default TaskDetail;

  