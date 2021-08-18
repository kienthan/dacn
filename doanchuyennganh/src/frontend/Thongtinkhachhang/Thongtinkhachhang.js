import React, { Component } from 'react';
import {DataContext} from '../../Context';
import Footer from '../footer';

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {user} = this.context;
        return (
            <>
            <div className="container-fluid">
              <div className="row text-center">
                <table className='table'>
                    {user}
                </table>
              </div>
               
            </div>
            <Footer />
            </>
        )
    }
}

export default Products
