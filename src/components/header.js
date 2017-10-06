import React, {Component} from 'react';
import {test, test2} from './test.js'
import './header.css'

class Header extends Component {
    // constructor(){
    //     super()

    //     this.state({

    //     })
    // }

    render(){
      return(
          <div className="header_start">
            <h1>
              Dinder
            </h1>
           <div className='user' >
              <div>
                    Breed:&nbsp;
                    <select>
                      <option>
                        All
                      </option>
                      {test.message.map(e => {
                        return (
                          <option>
                            {e}
                          </option>
                        )
                      })}
                    </select>
              </div>
              <div>
                Sub-breed:&nbsp;
                <select>
                  <option>
                    All
                  </option>
                    {test2.message.map(e => {
                      return (
                        <option>
                          {e}
                        </option>
                      )
                    })}
                  </select>
              </div>
              <div>
                Random? <input type="checkbox" />
              </div>
           </div>
          </div>
      )  
    }
}

export default Header;