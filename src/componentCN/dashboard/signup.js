// import React,  { Component } from 'react';


// class signup extends Component{


//     state = {
//         email: '',
//         password: '',
//         firstName: '',
//         lastName: ''
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//     }

//     render(){


//         return(
//             <header>
//             <nav className="nav-wrapper black">
//             <div className="container">
            
//             <a href="" className="brand-logo ">
//                 {/* <img src="./img/me.png" height="22px" width="22px" padding-right="20px"></img> */}
//                 <span>Y.X.</span>
//             </a>
//             <a href="" className="sidenav-trigger" data-target="mobile-menu">
//             <i className="material-icons">menu</i>
//             </a>
//             <ul className="right hide-on-med-and-down">
//             {/* <ul className="right hide-on-small-only"> */}
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
//             <li><a href="/signin" className=" btn-floating btn-small transparent tooltipped" data-tooltip="Sign In">
//                 <i className="fas fa-sign-in-alt"></i>
//             </a></li>
//             </ul>
//             <ul className="sidenav grey lighten-2" id="mobile-menu">
//                 <li><a href="" className="sidenavtext">Travel</a></li>
//                 <li><a href="" className="sidenavtext">Music</a></li>
//                 <li><a href="" className="sidenavtext">Calligraphy</a></li>
//                 <li><a href="" className="sidenavtext">My Cat</a></li>
//                 <li><a href="" className="sidenavtext">About Me</a></li>
//                     <br/>
//                 <li><a href="/signin" className="sidenavtext">Signin</a></li>
//             </ul>
//             </div>
//             </nav>

            

//                 <section className="signupform">

//                     <form onSubmit={this.handleSubmit} className="transparent">
//                         <h5 className="white-text signTitle">Sign Up</h5> 
//                         <div className="input-field">
//                             <label htmlFor="email" className="signTitle">Email</label>
//                             <input type="email" id="email" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             <label htmlFor="password" className="signTitle">Password</label>
//                             <input type="password" id="password" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             <label htmlFor="firstName">First Name</label>
//                             <input type="text" id="firstName" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             <label htmlFor="lastName">Last Name</label>
//                             <input type="text" id="lastName" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             {/* <button className="btn transparent signTitle">LogIn</button> */}
//                             <a href="/" className="btn transparent signTitle">
//                                 LogIn
//                             </a>
//                         </div>
//                     </form>

//                     </section> 


//         </header>
            
//          )
//      }
//  }





// export default signup;