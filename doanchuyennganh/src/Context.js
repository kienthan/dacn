import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
    
    state = {
        products: [],
        cart: [],
        total: 0,
        user:''
    };


    addCart = (mamh) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.mamh !== mamh
        })
        if(check){
            const data = products.filter(product =>{
                return product.mamh === mamh
            })
            this.setState({cart: [...cart,...data]})
        }
        else{
            alert("Sản phẩm này đã có trong giỏ hàng")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.mamh === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
       
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.mamh === id){
                parseInt(item.count);
                item.count === 1 ? item.count +=1 : item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Bạn có chắc là xoá mặt hàng này ?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.mamh === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    Dangnhap = () => {
        // const {user} = this.state;
        // this.setState({user:tk})
        // this.setState({ user: user})
        alert('asdsadas')
    }
    Dangxuat = () => {

    }
    Thanhtoan = (a,b) => {
        const {cart} = this.state;
        var d = new Date();
        var n = d.toLocaleDateString();
        for (var i =0 ; i < cart.length; i++)
        {
            var donhang = {
                mamh :cart[i].mamh,
                sdt: a,
                diachi: b,
                ngaymua: n,
                thanhtien : cart[i].count * cart[i].price
            };
            console.log(donhang);
        }  
        alert("Đơn hàng đã đặt thành công");
        localStorage.clear();
        window.location.href ='/'
    }
    Admin = (a,b) =>{
        const {products} = this.state;
        if( a !== products.mamh && b ==='')
        alert('Thanh cong')
        else 
        alert('that bai');
    }
    
    componentDidUpdate(){
        // localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        // localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
        //-------------------------------------------

        fetch("http://localhost/php_react/all_mathang.php")
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                    this.setState({products : data.products})
                }
              })
              .catch((err) => {
                console.log(err);
              });
    }
   

    render() {
        const {products, cart,total,user} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,Dangnhap,Thanhtoan,Admin} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,Dangnhap,user,Thanhtoan,Admin}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


