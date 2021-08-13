import { directive } from "babel-types";
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

    render() {
        return (
            <div>
                <h2>Portfolio Items Go Here...</h2>

                <PortfolioItem />
            </div>
        )
    }
}