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
                            {test.map(e => {
                                return(
                            <li>
                                test1
                                <img className='dog-pic' src={e.message} alt='a dog' />
                                <button>
                                    Delete
                                </button>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                    <div className='listdiv'>
                        <ul>
                        {test.map(e => {
                            return(
                        <li>
                            test1
                            <img className='dog-pic' src={e.message} alt='a dog' />
                            <button>
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