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
                <Leftlist />
            </div>
        )
    }
}
export default Left;