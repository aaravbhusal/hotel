import { Component } from "react";

class Header2 extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
            <h1>I am Header</h1>
            {this.state.name}
            {this.state.id}
            {this.state.hobby}

            </>
        )
    }
}
export default Header2;