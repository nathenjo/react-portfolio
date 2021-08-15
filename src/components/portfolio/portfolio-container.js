import { directive } from "babel-types";
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: 'Devcamp Fries', category: "eCommerce"},
                {title: 'This Portfolio', category: "React"},
                {title: 'Python Projects', category: 'Coding'},
                {title: 'Javascript Projects', category: 'Coding'}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('React')}>React</button>
                <button onClick={() => this.handleFilter('Coding')}>Coding</button>

                {this.portfolioItems()}
            </div>
        )
    }
}