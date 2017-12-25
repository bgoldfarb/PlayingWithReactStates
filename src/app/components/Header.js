import React, {Component} from "react"

//Componnent without state, a stateless component, only has props..
//Many stateless components makes it perform better

export const Header = (props) => {
        return(
            <nav className = "navbar navbar-light bg-faded">
                <div className="container">
                    <div className="navbar-header">
                        <ul className = "nav navbar-nav navbar-brand">
                            <li><a href = "#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};