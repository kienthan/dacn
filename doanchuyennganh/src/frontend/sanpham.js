import React from 'react';
import { useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Footer from './footer';

const ProductList = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost/php_react/all_mathang.php")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success) {
                setProducts(data.products.reverse());
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return(
          <div className=''>
              <table>
                  <tbody>
                  <div className="container-fluid" >
                    <div className="row">
                  {products.map(item =>{
                      return(
                          <div key={item.mamh} className="col-lg-3 mb-3">   
                                  <div className="card" >
                                    <img src={'./img/'+item.img} className="card-img" alt={item.img}/>
                                    <div className="card-body">
                                        <p className="text-truncate"><b>{item.tenmh}</b></p>
                                        <p className="">Giá: {item.price}  VNĐ</p>
                                        <Link to={"/chitiet/"+item.mamh} className="btn btn-primary btn-block">Xem Chi Tiet</Link> 
                                    </div>
                              </div>
                          </div>
                      )
                  })}
                  </div>
                  </div>
                  </tbody>
                  
              </table>
              <Footer />
          </div>
      );
      

}
export default ProductList