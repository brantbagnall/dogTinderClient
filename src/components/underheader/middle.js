import React, {Component} from 'react';
import './middle.css'
import dog from './dog.jpg'
import dog2 from './dog2.jpg'

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
                        <button>Dislike</button>
                </div>
                <div className='pic-div' >
                    <img className='dog-pic' src={dog2} alt='a dog' />
                </div>
                <div>
                        <button>Like</button>
                </div>
            </div>
        )
    }
}
export default Middle;