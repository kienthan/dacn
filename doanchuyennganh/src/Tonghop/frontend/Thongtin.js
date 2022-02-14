import React, { Component } from "react";
import { DataContext } from "../../Context";
import Footer from "./footer";
import Menutop from "./menutop";
import { Link } from "react-router-dom";

export class Products extends Component {
  state = { hoadon: [], user: [] };
  componentDidMount() {
    this.LayHoaDon();
  }

  LayHoaDon() {
    const user = JSON.parse(this.context.getToken());
    const obj = { sdt: user[0].sdt };
    fetch("http://localhost/php_react/hoadonkh.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          this.setState({ hoadon: data.hoadon });
          console.log(this.state.hoadon);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static contextType = DataContext;

  render() {
    const { hoadon } = this.state;
    const { getToken } = this.context;
    const getUser = JSON.parse(getToken());
    console.log(getUser.length);
    if (getUser.length === 0) return (window.location.href = "/login");
    else
      return (
        <>
          <Menutop />
          <div className="container">
            <div className="row ">
              <table className="table col-lg-12 col-md-12 col-sm-12 text-justify">
                {/* {---------------------------------------------------------------} */}
                <h2> Thông tin khách hàng</h2>
                {getUser.map((info) => [
                  <tbody key={info.sdt}>
                    <tr>
                      <th scope="row">Email</th>
                      <td>
                        <b>{info.email}</b>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Số điện thoại</th>
                      <td>
                        <b>{info.sdt}</b>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Địa chỉ</th>
                      <td>
                        <b>{info.diachi}</b>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Họ tên</th>
                      <td>
                        <b>{info.hoten}</b>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Ngày sinh</th>
                      <td>
                        <b>{info.ngaysinh}</b>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Giới tính</th>
                      <td>
                        <b>{info.gioitinh}</b>
                      </td>
                    </tr>
                    <tr>
                      <Link to={"/thaydoimatkhau/" + info.sdt}>
                        Thay đổi mật khẩu
                      </Link>
                    </tr>
                  </tbody>,
                ])}
              </table>
              <h5>Lịch sử mua hàng</h5>
              <table className="table table-striped">
                <tr>
                  <th scope="col">Số hoá đơn</th>
                  <th scope="col">Ngày mua</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
                {hoadon.map((t) => {
                  if (hoadon.length > 0)
                    return (
                      <tbody>
                        <td>
                          <b>{t.mahd}</b>
                        </td>
                        <td>
                          <b>{t.ngaymua}</b>
                        </td>
                        <td>
                          <b>{t.sdt}</b>
                        </td>
                        <td>
                          <b>{t.diachigiaohang}</b>
                        </td>
                        <td>
                          <b>{parseFloat(t.tongtien).toLocaleString()} VND</b>
                        </td>
                      </tbody>
                    );
                  else return <h5>Bạn chưa có hoá đơn nào cả</h5>;
                })}
              </table>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}

export default Products;
