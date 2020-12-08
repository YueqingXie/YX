// import React,  { Component } from 'react';
// import { Redirect } from 'react-router-dom';



// class auth extends Component{

//     state = {
//         password: ''
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state.password); 
//     }

//     render(){

//         if( this.state.password == "810487584"){
//             return <Redirect to = '/' />
//         }

//         return(
            
//             <header> 
            
//             <nav className="nav-wrapper black">
//             <div className="container">
            
//             <a href="" className="brand-logo ">
//                 <span>Y.X.</span>
//             </a>
            

//             <ul className="right hide-on-med-and-down">
//             <li><a href="">Travel</a></li>
//             <li><a href="">Music</a></li>
//             <li><a href="">Calligraphy</a></li>
            
//             <li><a href="">🐈</a></li>

//             <li><a href="" className=" btn-floating btn-small transparent" >
//                 <i className="fab fa-instagram"></i>
//             </a></li>
//             <li><a href="" className=" btn-floating btn-small transparent" >
//                 <i className="fab fa-youtube"></i>
//             </a></li>
//             <li><a href="" className=" btn-floating btn-small transparent" >
//                 <i className="fab fa-facebook"></i>
//             </a></li>
//             <li><a href="" className=" btn-floating btn-small transparent" >
//                 <i className="fab fa-twitter"></i>
//             </a></li>
            
//             </ul>
            
//             </div>
//             </nav>

             

//             <section className="numAuthform">

//                     <form onSubmit={this.handleSubmit} className="transparent">
//                         <div className="input-field">
//                             <label htmlFor="password" className="numAuthTitle black-text">Password:</label>
//                             <input type="password" id="password" onChange={this.handleChange}/>
//                         </div>
//                     </form>

//             </section> 





//         </header> 
      
//         )
//      }
//  }



// export default auth;