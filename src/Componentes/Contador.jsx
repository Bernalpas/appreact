
import { Component } from "react";


export class Counter extends Component{

    constructor(){
        super();
        this.state = {
            contador: 1
        }
    }

    handleIncrement = () => {
        this.setState(state => ({ contador: state.contador + 1}))
    }

    render(){
        return(
            <>
                <div>
                    <h1>
                        {this.state.contador}
                        
                    </h1>
                </div>                
                <div>
                    <button onClick={this.handleIncrement} type="button" class="btn btn-success"> Incrementar el Contador </button>
                        
                </div>
            </>
        );
    }

}

/* export default Counter; */





