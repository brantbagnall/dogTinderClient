import React, { Component } from 'react';
import './reset.css';
import axios from 'axios';
import './App.css';
import Header from './components/header.js'
import Underheader from './components/Underheader.js'
// import {breedList} from './controller/controller.js'

class App extends Component {
  constructor(){
    super()
    this.state=({
      apiUrl:'http://localhost:3001/api/',
      header:{
        breed: [],
        subBreed:'None',
        selectedBreed: 'All'
      },
      disableSub: true,
      subBreedList:[],
      like: [],
      dislike:[],
      currDog:{},
      disableButton: false
    })
    this.changeBreed = this.changeBreed.bind(this);
    this.changeSubBreed = this.changeSubBreed.bind(this);
    this.postDog = this.postDog.bind(this);
    this.deleteDog = this.deleteDog.bind(this);
    this.switchButton = this.switchButton.bind(this);
  }

  componentDidMount(){
    this.breedList();
    this.changeCurrDog(this.state.header.selectedBreed, this.state.header.subBreed);
    this.getLike();
    this.getDislike();
  }

  breedList(){
    axios.get(this.state.apiUrl + 'breedlist').then(e =>{
      this.setState({
        header:{
          breed: e.data,
          subBreed: this.state.header.subBreed,
          selectedBreed: this.state.header.selectedBreed
        }
      })
    })
  }
  subBreedList(breed){
    axios.get(this.state.apiUrl + `subList/${breed}`).then(e=> {
      this.setState({
        subBreedList: e.data
      })
    })
  }

  changeBreed(breedParam){
    this.setState({
      header:{
        breed: this.state.header.breed,
        subBreed: this.state.header.subBreed,
        selectedBreed: breedParam
      }
    })
    if(breedParam !== 'All'){
      this.subBreedList(breedParam);
      this.setState({
        disableSub: false
      })
    } else {
      this.setState({
        disableSub: true,
        header:{
          breed: this.state.header.breed,
          subBreed: 'None',
          selectedBreed: this.state.header.selectedBreed
        }
      })
    }
    this.changeCurrDog(breedParam, this.state.header.subBreed);
  }

  changeSubBreed(subParam){
    this.setState({
      header:{
        breed: this.state.header.breed,
        subBreed: subParam,
        selectedBreed: this.state.header.selectedBreed
      }
    })
    this.changeCurrDog(this.state.header.selectedBreed, subParam)
  }

  changeCurrDog(breed, sub){
    if(breed !== 'All'){
      if(sub === 'None'){
        axios.get(this.state.apiUrl + breed).then(e => {
          this.setState({
            currDog: e.data
          })
        })
      } else{
        axios.get(this.state.apiUrl + breed + '/' + sub).then(e => {
          this.setState({
            currDog: e.data
          })
        })
      }
    }else {
      axios.get(this.state.apiUrl + 'All').then(e => {
        this.setState({
          currDog: e.data
        })
      })
    }
  }

  getLike(){
    axios.get(this.state.apiUrl + 'like').then((e)=>{
      this.setState({
        like: e.data
      })
    })
  }

  getDislike(){
    axios.get(this.state.apiUrl + 'dislike').then((e)=>{
      this.setState({
        dislike: e.data
      })
    })
  }

  postDog(list){
    axios.post(this.state.apiUrl + 'list', {list: list}).then(e=>{
      if(list === 'like'){
        this.setState({
          like: e.data
        })
      }else{
        this.setState({
          dislike: e.data
        })
      }
      this.setState({
        disableButton:false
      })
      this.changeCurrDog(this.state.header.selectedBreed, this.state.header.subBreed);
    })
  }

  deleteDog(list, id){
    axios.delete(this.state.apiUrl + `delete/${list}/${id}`).then(e => {
      if (list === 'like'){
        this.setState({
          like: e.data
        })
      }else {
        this.setState({
          dislike: e.data
        })
      }
    })
  }

  switchButton(){
    this.setState({
      disableButton:true
    })
  }

  render() {
    return (
      <div>
        <Header header={this.state.header} changeBreed={this.changeBreed} disableSub={this.state.disableSub} changeSubBreed={this.changeSubBreed} subList={this.state.subBreedList}/>
        <Underheader header={this.state.header} currDog={this.state.currDog} like={this.state.like} dislike={this.state.dislike} postDog={this.postDog} deleteDog={this.deleteDog} disableButton={this.state.disableButton} switchButton={this.switchButton} />
      </div>
    );
  }
}

export default App;
