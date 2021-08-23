import React from "react"
import Banner from "./banner"
import Content from "./content"
import Footer from "./footer"
import Menutop from "./menutop"

export default function Main(){
    return(
        <div>
            <Menutop />
           <Banner />
           <Content />
           <Footer />
        </div>
    )
}