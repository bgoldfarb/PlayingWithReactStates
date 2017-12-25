import React, {Component} from 'react'
import PropTypes from 'prop-types';


export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLinkName
        }
    }
    
    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(){
        this.setState({
            homeLink: event.target.value
        })
    }


    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>You're name is {this.props.name} and your age is {this.state.age}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobby.map((el, i) => <li key={i} >{el} </li>)}
                    </ul>
                </div>
                {this.props.children}
                <hr/>
                <button className = "btn btn-primary" onClick = {() => this.onMakeOlder() }>Make me Older</button>
                <hr/>
                <button onClick = {this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type = "text" value = {this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/> 
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>

            </div>
        ) 
    }
}

 
Home.propTypes = {
    name: PropTypes.string, 
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    initalLinkName :PropTypes.string
}