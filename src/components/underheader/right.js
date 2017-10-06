import React, {Component} from 'react';
import Rightlist from './list/rightlist.js'
import './right.css'

class Right extends Component{
    // constructor(){
    //     super()
    //     this.state{

    //     }
    // }

    render(){
        return(
            <div className='right-pane'>
                <Rightlist />
            </div>
        )
    }
}
export default Right;