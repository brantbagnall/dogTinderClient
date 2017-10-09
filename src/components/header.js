import React, {Component} from 'react';
import './header.css';
import dog from './dog.png'

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
            <img className='dinder-icon' src={dog} alt='dinder icon' /> Dinder
            </h1>
           <div className='user' >
              <div>
                    Breed:&nbsp;
                    <select onChange={(e)=> this.props.changeBreed(e.target.value)}>
                      <option value='All' key='All'>
                        All
                      </option>
                      {this.props.header.breed.map(e => {
                        return (
                          <option value={e} key={e}>
                            {e}
                          </option>
                        )
                      })}
                    </select>
              </div>
              <div>
                Sub-breed:&nbsp;
                <select onChange={(e)=> this.props.changeSubBreed(e.target.value)} disabled={this.props.subList.length === 0 || this.props.disableSub} value={this.props.header.subBreed}>
                  <option value='None' key='None'>
                    None
                  </option>
                    {this.props.subList.length > 0 &&
                    this.props.subList.map(e => {
                      return (
                        <option value={e} key={e}>
                          {e}
                        </option>
                      )
                    })
                    }
                  </select>
              </div>
           </div>
          </div>
      )  
    }
}

export default Header;