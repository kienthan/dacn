import React, { Component } from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Menutop from "./menutop";
import { DataContext } from "../../Context";

export default class SignIn extends Component {
  static contextType = DataContext;
  state = { sdt: "", mk: "" };
  xulynhap = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  xulyluutru = (e) => {
    e.preventDefault();
    this.context.Dangnhap(this.state.sdt, this.state.mk);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <div>
          <Menutop />
          <div className="container-fluid">
            <div className="row " id="__content">
              <div className="col-lg-6 col-md-6 text-center" id="content__left">
                <h1 style={{ marginTop: "50px" }}>
                  {" "}
                  ĐĂNG NHẬP <br />
                  NHẬN NGAY ƯU ĐÃI
                </h1>
                <div id="btn__more">
                  <button type="button" className="btn btn-warning">
                    <i className="fab fa-facebook-f mr-3"></i>
                    Xem thêm tại Facebook
                  </button>
                </div>
                <div id="btn__more">
                  <button type="button" className="btn btn-warning">
                    <i className="fab fa-instagram mr-2"></i>
                    Xem thêm tại Instagram
                  </button>
                </div>
                <div id="btn__more">
                  <button type="button" className="btn btn-warning">
                    <i className="fab fa-youtube mr-3"></i>
                    Xem thêm tại Youtube
                  </button>
                </div>
              </div>

              <div
                id=""
                style={{ backgroundColor: "rgba(244, 91, 105, 1)" }}
                className="col-lg-6 col-md-6 text-center"
              >
                <form onSubmit={this.xulyluutru}>
                  <h5 className="mt-5"> Đăng Nhập </h5>
                  <div className="mb-3 ">
                    <input
                      type="number"
                      placeholder="Nhập Số Điện Thoại"
                      className="form-control text-center"
                      id=""
                      name="sdt"
                      onChange={this.xulynhap}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control text-center"
                      name="mk"
                      id=""
                      placeholder="Mật khẩu"
                      onChange={this.xulynhap}
                    />
                  </div>
                  <Link to="/signup">
                    <p className="text-decoration-none text-dark">
                      Tạo tài khoản mới !
                    </p>
                  </Link>

                  <button type="submit" className="btn btn-success">
                    Đăng Nhập
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
