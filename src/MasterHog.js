import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'


export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }
 

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }

  eyeColorPic = () => {
    switch (this.state.eyeColor) {
      case "blue":
         return BlueBaby
          console.log("blue eyes")
        break;

     case "sun":
         return SunBaby
         console.log("sun eyes")
        break;

     case "glowing":
         return GlowingBaby
         console.log("glowing eyes")
        break;
        
      default:
         normalBaby

        break;
    }
  }



  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          <BabyHog 
            name = {offspring[0].name} 
            hobby = {offspring[0].hobby} 
            eyeColor = {this.state.eyeColor} 
            eyeColorPic = {this.eyeColorPic()}
          />
          <BabyHog 
            name = {offspring[1].name} 
            hobby = {offspring[1].hobby} 
            eyeColor = {this.state.eyeColor} 
            eyeColorPic = {this.eyeColorPic()}
          />
          <BabyHog 
            name = {offspring[2].name} 
            hobby = {offspring[2].hobby} 
            eyeColor = {this.state.eyeColor} 
            eyeColorPic = {this.eyeColorPic()}
          />
        </ul>

      </div>
    )
  }

}
