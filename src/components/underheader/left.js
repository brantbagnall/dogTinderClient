import React, {Component} from 'react';
import Leftlist from './list/leftlist.js'
import './left.css'

class Left extends Component{
    // constructor(){
    //     super()
    //     this.state{

    //     }
    // }

    render(){
        return(
            <div className='left-pane'>
                <Leftlist dislike={this.props.dislike} deleteDog={this.props.deleteDog}  />
            </div>
        )
    }
}
export default Left;