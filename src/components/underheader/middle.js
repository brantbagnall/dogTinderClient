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
                        <button onClick={() => this.props.postDog('dislike')} >
                            Dislike
                        </button>
                </div>
                <div className='pic-div' >
                    <img className='dog-pic' src={this.props.currDog.link} alt='a dog' />
                </div>
                <div>
                        <button onClick={() => this.props.postDog('like')}>
                            Like
                        </button>
                </div>
            </div>
        )
    }
}
export default Middle;