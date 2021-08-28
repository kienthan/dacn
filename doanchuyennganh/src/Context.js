import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
    
    state = {
        products: [],
        cart: [],
        total: 0,
        user:[],admin:[],
        mahdnew: []
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
                item.count =    parseInt(item.count === 10 ? item.count = 10 : item.count += 1);
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
            return prev + ((1 - item.saleoff) * item.price *item.count );
        },0)
        this.setState({total: res})
    };

    Dangnhap = (a,b) => {
        if(a !== '' && b !== '')
        {
            const obj = {user: a, pass:b};
                fetch("http://localhost/php_react/dangnhap.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if (data.success) {
                    this.setState({user : data.khachhang})
                    if(this.state.user.length > 0 )
                    {
                        alert('Đăng nhập thành công');
                    }
                    else{
                        alert('Đăng nhập thất bại');
                    }
                }
                }).catch((err) => {console.log(err);
                });

        }
        else
        {alert('Tên đăng nhập hoặc mật khẩu không được để trống')}
    }
    Dangxuat = () => {
        const {user} = this.state;
        user.splice(0, user.length);
    }


    Thanhtoan = (a,b,c) => {
         const {total,mahdnew} = this.state;
        // //------------ Code nhap vao hoa don-------------------------------
        var donhang = {
            mahd : mahdnew[0].mahd,
            sdt : a,
            diachigiaohang :b,
            ghichu : c,
            tongtien: total
        }
        console.log(donhang);
            //------- Fetch vao don hang-----------------------------
        fetch("http://localhost/php_react/hoadon.php",{
            method:"POST",
            headers: {"Content-Type" : "application/json",},
            body: JSON.stringify(donhang),
            }).then((res) => {return res.json();
            }).then((data) =>
            { 
            if(data.id){
                alert(data.msg);
                alert("Đơn hàng đã đặt thành công");
            }
            else{
                alert(data.msg);
            }
            }).catch((err) => {console.log(err);
            });
        // //--------------O day bat dau code chi tiet hoa don-----------------------
        this.CTHD();
        
        alert('Đặt hàng thành công');
        localStorage.clear();
        window.location.href ='/'
    }
    CTHD = () => {
        const {cart,mahdnew} = this.state;
        for (var i =0 ; i < cart.length; i++)
        {
            var ctdonhang = {
                mahd : mahdnew[0].mahd,
                mamh :cart[i].mamh,
                soluong : parseInt(cart[i].count),
                thanhtien : ((1-parseFloat(cart[0].saleoff)) * (cart[0].price * cart[0].count))
            };
            console.log(ctdonhang)
            //--------------- Fetch CTHOADOn-----------------------
                fetch("http://localhost/php_react/chitiethoadon.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(ctdonhang),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if(data.id){
                    alert(data.msg);   
                }
                else{
                    alert(data.msg);
                }
                }).catch((err) => {console.log(err);
                });
        }  
    }

    Admin = (a,b) =>{
        if(a ==='' || b==='')
        {
            alert('Tên đăng nhập và mật khẩu không được để trống')
        }
        else{
            const obj = {admin : a, pass: b}
            fetch("http://localhost/php_react/admin.php",{
                method:"POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify(obj),
                }).then((res) => {return res.json();
                }).then((data) =>
                { 
                if (data.success) {
                    this.setState({admin : data.admin})
                    alert('Đăng nhập vai trò quản trị thành công')
                }
                }).catch((err) => {console.log(err);
                });
        }
    }
    Exit =() =>{
        const {admin} = this.state;
        if(window.confirm("Bạn có chắc thoát khỏi trang này ?"))
        {
            admin.splice(0, admin.length)
        }
        window.location.href='/loginforadmin';
    }
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        
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
        //-------------lay tat ca mat hang --------------------
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
              //---------lay ma hoa don--------------------------
              fetch("http://localhost/php_react/laymahd.php")
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (data.success) {
                    this.setState({mahdnew : data.mahd})
                }
              })
              .catch((err) => {
                console.log(err);
              });
    }
   

    render() {
        const {products, cart,total,user,phanloai,saleoff,admin} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,Dangnhap,Thanhtoan,Admin,CTHD,Dangxuat,Exit} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,Dangnhap,user,Thanhtoan,Admin,CTHD,phanloai,saleoff,Dangxuat,admin,Exit}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


