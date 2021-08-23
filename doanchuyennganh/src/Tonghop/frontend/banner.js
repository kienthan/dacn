import React from "react"

export default function Banner(){
    return(
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./img/b1.jpg" className="d-block " alt="..." width="100%"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./img/b2.jpg" className="d-block " alt="..." width="100%" />
                    </div>
                    <div className="carousel-item">
                    <img src="./img/b3.jpg" className="d-block " alt="..." width="100%" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
    )
}