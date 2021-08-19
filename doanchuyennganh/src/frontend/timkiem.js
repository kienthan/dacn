import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Menutop from './menutop';

class Timkiem extends Component{

    state ={products :[]}

    componentDidMount(){
        const obj = {tenmh: this.props.match.params.tenmh};
                    fetch("http://localhost/php_react/timkiem.php",
                    {method:"POST",headers: {"Content-Type" : "application/json",},body: JSON.stringify(obj), })
                    .then((res) => {return res.json();})
                    .then((data) =>{
                    if (data.success){
                        this.setState({products : data.timkiem})
                    }
                }).catch((err) =>{
                    console.log(err);
                })
    }

    componentDidUpdate(){
        const obj = {tenmh: this.props.match.params.tenmh};
                    fetch("http://localhost/php_react/timkiem.php",
                    {method:"POST",headers: {"Content-Type" : "application/json",},body: JSON.stringify(obj), })
                    .then((res) => {return res.json();})
                    .then((data) =>{
                    if (data.success){
                        this.setState({products : data.timkiem})
                    }
                }).catch((err) =>{
                    console.log(err);
                })
    }

    render() {
        

        return(
            <div>
                <Menutop />
                
                <div className='container'>
                <h3 className="text-center" >Kết quả tìm kiếm: {this.props.match.params.tenmh}</h3>
                    <div className="row">
                   
                    {
                        this.state.products.map(item =>{
                        return(
                            <div key={item.mamh} className="col-lg-3 mb-3">   
                                    <div className="card" >
                                        <img src={'../img/'+item.img} className="card-img" alt={item.img}/>
                                        <div className="card-body">
                                            <p className="text-truncate"><b>{item.tenmh}</b></p>
                                            <p className="">Giá: {item.price}  VNĐ</p>
                                            <Link to={"/chitiet/"+item.url}  className="btn btn-primary btn-block">Xem Chi Tiet</Link> 
                                        </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Timkiem