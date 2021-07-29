import React from 'react';


function Detail(props){
        return(
           this.props.DS.map(item => {
               return(
                   <div key={item.mamh} className="container-fluid mt-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={'./img/'+item.img} alt={item.tenmh} />
                            </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5>{item.gia}</h5>
                        <form>
                            <input type="radio" value="M" name="size" className="mr-1"/> <b>M</b> <br />
                            <input type="radio" value="L" name="size" className="mr-1"/> <b>L</b> <br />
                            <input type="radio" value="XL" name="size" className="mr-1"/>  <b>XL</b> <br />
                            <input type="radio" value="XLL" name="size" className="mr-1"/>  <b>XLL</b> <br />
                        </form>
                        <button type="button" className="btn btn-warning btn-block">
                            Thêm Vào Giỏ Hàng
                        </button>
                        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                             Mô tả
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
                        <div class="modal-dialog modal-lg modal-dialog-scrollable ">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Thông tin mô tả sản phẩm</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <p>{item.mota}</p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Đóng</button>
                            </div>
                            </div>
                        </div>
                        </div>
                   </div>
                   </div>
                   </div>
               )
           })
        );
    }
export default Detail;