import React, {Component} from 'react';
import './middle.css'

class Middle extends Component{
    // constructor(){
    //     super()
    //     this.state{

    //     }
    // }

    render(){
        return(
            <div className='middle-pane'>
                <div>
                        <button onClick={() =>{
                            this.props.switchButton();
                            this.props.postDog('dislike');
                        }} disabled={this.props.disableButton} >
                            Dislike
                        </button>
                </div>
                <div className='pic-div' >
                    <img className='dog-pic' src={this.props.currDog.link} alt='a dog' />
                </div>
                <div>
                        <button onClick={() => this.props.postDog('like')} disabled={this.props.disableButton}>
                            Like
                        </button>
                </div>
            </div>
        )
    }
}
export default Middle;