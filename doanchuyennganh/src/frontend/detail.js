import React from 'react';

class Detail extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1>Day la hinh anh san pham</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1> Hien ten và giá tiền</h1>
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
                Xem chi tiet
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
                <div class="modal-dialog modal-lg modal-dialog-scrollable ">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Thong tin chi tiet san pham</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       Day la noi mo ta san pham quan ao
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                    </div>
                </div>
                </div>

                    </div>
                </div>
                
            </div>
        );
    }
}
export default Detail    
