import React, {Component} from 'react';
import Left from './underheader/left.js'
import Right from './underheader/right.js'
import Middle from './underheader/middle.js'
import './underheader.css'

class Underheader extends Component{
    // constructor(){
    //     super()
    //     this.state{

    //     }
    // }

    render(){
        return(
            <div className='flex-start2'>
                <Left />
                <Middle />
                <Right />
            </div>
        )
    }
}
export default Underheader;