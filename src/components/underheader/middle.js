import React, {Component} from 'react';
import './middle.css'

class Middle extends Component{
    constructor(props){
        super(props)
        this.state={
            disableButtonMiddle: false
        }
    }

    render(){
        return(
            <div className='middle-pane'>
                <div>
                        <button onClick={() =>{
                            this.setState({
                                disableButtonMiddle: true
                            })
                            this.props.postDog('dislike');
                            }} disabled={this.state.disableButtonMiddle} >
                            Dislike
                        </button>
                </div>
                <div className='pic-div' >
                    <img className='dog-pic' onLoad={()=> {
                        if(this.state.disableButtonMiddle === true){
                            this.setState({
                                disableButtonMiddle: false
                            })
                        }
                    }} src={this.props.currDog.link} alt='a dog' />
                </div>
                <div>
                        <button onClick={() => {
                            this.setState({
                                disableButtonMiddle: true
                            })
                            this.props.postDog('like')
                            }} disabled={this.state.disableButtonMiddle}>
                            Like
                        </button>
                </div>
            </div>
        )
    }
}
export default Middle;