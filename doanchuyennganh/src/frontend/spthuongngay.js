import React from "react"
import Footer from "./footer";

class SPThuongNgay extends React.Component {
    render() {
      return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card" style={{width: '18rem;'}}>
                        <img src="https://catsa.vn/web/image/product.template/80870/image_1024/x,P5BASN161,P5D,P20,PC3,P81o,P20s,PC6,PA1,P20mi,P20tr,PE1,PBA,PAFng,P20in,P20ch,PE1,PBB,PAF,qunique=4be677e.pagespeed.ic.v5Z1uaq_Le.webp" className="card-img-top" alt="test" width="50%" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="text-center">
                        <a href="#" class="btn btn-primary">Xem chi tiết</a>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card" style={{width: '18rem;'}}>
                        <img src="https://catsa.vn/web/image/product.template/80870/image_1024/x,P5BASN161,P5D,P20,PC3,P81o,P20s,PC6,PA1,P20mi,P20tr,PE1,PBA,PAFng,P20in,P20ch,PE1,PBB,PAF,qunique=4be677e.pagespeed.ic.v5Z1uaq_Le.webp" className="card-img-top" alt="test" width="100px" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div class="card" style={{width: '18rem;'}}>
                        <img src="https://catsa.vn/web/image/product.template/80870/image_1024/x,P5BASN161,P5D,P20,PC3,P81o,P20s,PC6,PA1,P20mi,P20tr,PE1,PBA,PAFng,P20in,P20ch,PE1,PBB,PAF,qunique=4be677e.pagespeed.ic.v5Z1uaq_Le.webp" className="card-img-top" alt="test" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div >
                    <Footer />
                    </div>
              </div>
             
            
        </div>
      )
    }
  }

export default SPThuongNgay;