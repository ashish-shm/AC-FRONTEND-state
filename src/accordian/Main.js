import React from 'react'
import Accordian from './Components/Accordian'


let first = 
  {
    title:"Valorant",
    text:"Valorant is a free-to-play multiplayer first-person shooter developed and published by Riot Games, for Microsoft Windows. The game was announced under the codename Project A in October 2019, and was released on June 2, 2020.",
    
  };

let second =
  {
    title:"Apex Legends",
    text:"Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4 and Xbox One on February 4, 2019, without any prior announcement or marketing.",
  }  

let third =
  {
    title:"PlayerUnknown's Battlegrounds",
    text:"PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
  }  
  

export default class Main extends React.Component{

  render() {
    return (
      <>
      <h1 className="acchead">React Accordian</h1>
      <Accordian title={first.title} text={first.text} />
      <Accordian title={second.title} text={second.text} />
      <Accordian title={third.title} text={third.text} />
      </>
    )

  }
}