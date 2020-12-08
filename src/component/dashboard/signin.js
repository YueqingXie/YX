// import React,  { Component } from 'react';



// class signin extends Component{

//     state = {
//         email: '',
//         password: ''
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

//             <li><a href="/signup" className=" btn-floating btn-small transparent tooltipped" data-tooltip="Sign Up">
//                 <i className="fas fa-user-plus"></i>
//             </a></li>
            
//             </ul>
//             <ul className="sidenav grey lighten-2" id="mobile-menu">
//                 <li><a href="" className="sidenavtext">Travel</a></li>
//                 <li><a href="" className="sidenavtext">Music</a></li>
//                 <li><a href="" className="sidenavtext">Calligraphy</a></li>
//                 <li><a href="" className="sidenavtext">My Cat</a></li>
//                 <li><a href="" className="sidenavtext">About Me</a></li>
//                     <br/>
//                 <li><a href="/signup" className="sidenavtext">Signup</a></li>
//             </ul>
//             </div>
//             </nav>

             

//             <section className="signinform">

//                     <form onSubmit={this.handleSubmit} className="transparent">
//                         <h5 className="white-text signTitle">Sign In</h5> 
//                         <div className="input-field">
//                             <label htmlFor="email" className="signTitle">Email</label>
//                             <input type="email" id="email" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             <label htmlFor="password" className="signTitle">Password</label>
//                             <input type="password" id="password" onChange={this.handleChange}/>
//                         </div>
//                         <div className="input-field">
//                             <button className="btn transparent signTitle">LogIn</button>
//                             {/* <div className="red-text right">
//                                 { authError ? <p>{authError}</p> : null}
//                             </div> */}

//                         </div>
//                     </form>

//             </section> 





//         </header> 


                    
//          )
//      }
//  }



// export default signin