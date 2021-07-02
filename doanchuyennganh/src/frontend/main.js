import React from "react"
import Banner from "./banner"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

export default function Main(){
    return(
        <div>
           <Banner />
           <Content />
           <Footer />
        </div>
    )
}