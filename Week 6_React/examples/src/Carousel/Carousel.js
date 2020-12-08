import React, { Component } from 'react';
import './Carousel.css';

//Putting a space in the className creates two classes
// const Carousel = ()=>{
//     return(<div className = "Carousel">
//         <div className="green block"></div>
//         <div className="yellow block"></div>
//         <div className="blue block"></div>
//     </div>)
// }

// class Carousel extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             changeGreen:"",
//             changeYellow:"",
//             changeBlue:""
//         }
//     }

//     greenClick = ()=>{
//         this.setState({
//             changeGreen:"salmon"
//         })
//     }

//     greenClick = ()=>{
//         this.setState({
//             changeGreen:"gray"
//         })
//     }

//     blueClick = ()=>{
//         this.setState({
//             changeGreen:"black"
//         })
//     }

//     render(){
//         return(<div className = "Carousel">
//             <div className="green block"
//                 style = {{
//                     backgroundcolor:this.state.changeGreen
//                 }} onClick = {this.greenClick}
//             ></div>
//             <div className="yellow block"
//                 style = {{
//                     backgroundcolor:this.state.changeYellow
//                 }} onClick = {this.yellowClick}
//             ></div>
//             <div className="blue block"
//                 style = {{
//                     backgroundcolor:this.state.changeBlue
//                 }} onClick = {this.blueClick}
//             ></div>
//         </div>)
//     }
// }

export default Carousel;