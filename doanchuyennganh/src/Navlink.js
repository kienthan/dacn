import React, {Component} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Detail from "./Tonghop/frontend/detail";
import Main from "./Tonghop/frontend/main";
import SanPham from './Tonghop/frontend/sanpham'
import {DataProvider,DataContext} from './Context';
import Shoppingcart from './Tonghop/frontend/ShoppingCart/Shoppingcart';
import Payment from './Tonghop/frontend/Thanhtoan/Payment';
import Phanloaisp from './Tonghop/frontend/phanloaisp';
import Timkiem from './Tonghop/frontend/timkiem';
import Admin from './Tonghop/backend/Section/Header';
import AllAdmin from './Tonghop/backend/Xulythongtin/Tatcasp';
import ThemSP from './Tonghop/backend/Xulythongtin/ThemMatHang';
import DSCapnhat from './Tonghop/backend/Xulythongtin/HienDS';
import CapnhatSP from './Tonghop/backend/Xulythongtin/Capnhatsp';
import XoaSP from './Tonghop/backend/Xulythongtin/XoaMatHang';
import Hang from './Tonghop/backend/Xulythongtin/DSHang';
import Gia from './Tonghop/backend/Xulythongtin/DSGia';
import PhanLoai from './Tonghop/backend/Xulythongtin/DSPhanLoai';
import CapnhatGia from './Tonghop/backend/Xulythongtin/CapnhatGia';
import ThemGiaMoi from './Tonghop/backend/Xulythongtin/ThemGiaMoi';
import UpdateBrand from './Tonghop/backend/Xulythongtin/UpdateBrand';
import AddBrand from './Tonghop/backend/Xulythongtin/AddBrand';
import UpdatePhanLoai from './Tonghop/backend/Xulythongtin/CapnhatPhanLoai';
import ThemPhanLoai from './Tonghop/backend/Xulythongtin/ThemPhanLoai';


class Duongdan extends Component{
    static contextType = DataContext;
    
    render(){
        return(
            <DataProvider>
            <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Main}>
                </Route>

                <Route exact path="/chitiet/:url" component={Detail} ></Route>

                <Route exact  path="/sanpham" component={SanPham} ></Route>

                <Route exact  path="/backend" component={Admin} ></Route>

                <Route exact  path="/backend/all" component={AllAdmin} ></Route>

                <Route exact  path="/backend/them" component={ThemSP} ></Route>

                <Route exact  path="/backend/themhang" component={AddBrand} ></Route>

                <Route exact  path="/backend/themphanloai" component={ThemPhanLoai} ></Route>

                <Route exact  path="/backend/themgia" component={ThemGiaMoi} ></Route>

                <Route exact  path="/backend/capnhat" component={DSCapnhat} ></Route>

                <Route exact  path="/backend/xoasp" component={XoaSP} ></Route>

                <Route exact  path="/backend/capnhatsp/:mamh" component={CapnhatSP} ></Route>
                
                <Route exact  path="/backend/capnhatgia/:price" component={CapnhatGia} ></Route>

                <Route exact  path="/backend/updatebrand/:brandname" component={UpdateBrand} ></Route>

                <Route exact  path="/backend/capnhatphanloai/:phanloai" component={UpdatePhanLoai} ></Route>

                <Route exact  path="/backend/hang" component={Hang} ></Route>

                <Route exact  path="/backend/gia" component={Gia} ></Route>

                <Route exact  path="/backend/phanloai" component={PhanLoai} ></Route>

                <Route exact  path="/cart" component={Shoppingcart} ></Route>  

                <Route exact  path="/payment" component={Payment} ></Route>        

                <Route exact  path="/:idphanloai" component={Phanloaisp} ></Route> 

                <Route exact  path="/timkiem/:tenmh" component={Timkiem} ></Route>     

                
            </Switch>
            </div>
        </Router>
        </DataProvider>
        )
    }
}
export default Duongdan;