import React from "react"

export default function Header(){
    return(
        <div >
           <div className="text-center">
               <img src="./img/logo.jpg" alt="logo quần áo" width="200" />
           </div>
           <hr />
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Trang Chủ <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SẢN PHẨM
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">THƯỜNG NGÀY</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">CÔNG SỞ </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">SẢN PHẨM BÁN CHẠY</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">SALE OFF</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bộ Sưu Tập
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">SUMMER MOOD ON</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">WAVE SURFING </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">BACK IN CLASSIC</a>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                    <form className="form-inline">
                        <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Tìm kiếm" />
                        <div className="input-group-append">
                            <button className="btn btn-primary  mr-1" type="button" ><i className="fas fa-search"></i></button>
                        </div>
                        <div className="ml-3"><i className="fas fa-shopping-cart"></i></div>
                    </div>
                   
                    </form>
                </nav>
        </div>
    )
}