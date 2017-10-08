import React, {Component} from 'react';
import {test} from './test.js'
import './list.css';

class Rightlist extends Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <div className='main' >
                <div className='title'>
                    <h1>
                        Like
                    </h1>
                </div>
                <div className='list'>
                    <div className='listdiv' >
                        <ul>
                        {this.props.like.length > 0 &&
                            this.props.like.filter((curr, i, arr)=> i% 2 === 0).map(e => {
                                return(
                            <li>
                                {e.breed}
                                <img className='dog-pic' src={e.link} alt='a dog' />
                                <button value={e.id} onClick={e=> this.props.deleteDog('like', e.target.value)}>
                                    Delete
                                </button>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                    <div className='listdiv'>
                        <ul>
                        {this.props.like.length > 0 &&
                            this.props.like.filter((curr, i, arr)=> i% 2).map(e => {
                                return(
                            <li>
                                {e.breed}
                                <img className='dog-pic' src={e.link} alt='a dog' />
                                <button value={e.id} onClick={e=> this.props.deleteDog('like', e.target.value)}>
                                    Delete
                                </button>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Rightlist;