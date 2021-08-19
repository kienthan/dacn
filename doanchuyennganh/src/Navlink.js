import React, {Component} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Detail from "./frontend/detail";
import Main from "./frontend/main";
import SanPham from './frontend/sanpham'
import {DataProvider,DataContext} from './Context';
import Shoppingcart from './frontend/ShoppingCart/Shoppingcart';
import Payment from './frontend/Thanhtoan/Payment';
import Phanloaisp from './frontend/phanloaisp';
import Timkiem from './frontend/timkiem';


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