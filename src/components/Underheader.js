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
                <Left dislike={this.props.dislike} deleteDog={this.props.deleteDog}  />
                <Middle currDog={this.props.currDog} postDog={this.props.postDog} />
                <Right like={this.props.like} deleteDog={this.props.deleteDog}  />
            </div>
        )
    }
}
export default Underheader;