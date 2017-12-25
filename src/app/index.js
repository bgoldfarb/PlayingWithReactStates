import React, {Component} from "react";
import {render} from "react-dom"
import { Header } from "./components/Header"
import { Home } from "./components/Home";

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet(){
        alert('Hello!')
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        })

    }


    render(){
        var user = {
            hobby: ["Programming", 'Sports', 'Foods']
        }
        
        return(
            <div className = "container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <Header homeLink = {this.state.homeLink} />
                     </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <Home 
                        name={"Brian"} 
                        initialAge = {23} 
                        user = {user} 
                        greet={this.onGreet}
                        changeLink = {this.onChangeLinkName.bind(this)}
                        initialLinkName = {this.state.homeLink} />
                     </div>
                </div>
            </div>
        )
    }
}

render(<App />, window.document.getElementById("app"))