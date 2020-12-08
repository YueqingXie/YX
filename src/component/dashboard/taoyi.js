import React, { Component } from 'react';


class taoyi extends Component {
    // state = {

    // }
    // handleChange = (e) => {
    //     console.log(e);
    // }
    // handleSubmit = (e) => {
    //     console.log(e);
    // }
    render() {


        return (
            <body>

<header>


<nav className="nav-wrapper black">
<div className="container">
    <a href="/" className="brand-logo ">
        <span>Y.X.</span>
    </a>
    
    <a href="" className="sidenav-trigger" data-target="mobile-menu">
    <i className="material-icons">menu</i>
    </a>
    <ul className="right hide-on-med-and-down">
    <li><a href="/travel">Travel</a></li>
    <li><a href="/music">Music</a></li>
    <li><a href="/calligraphy">Calligraphy</a></li>
    
    <li><a href="/cat">🐈</a></li>

    <li><a href="https://www.instagram.com/crys___7" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a></li>
    <li><a href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
    </a></li>
    <li><a href="https://www.facebook.com/profile.php?id=100006981077508" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
    </a></li>
    <li><a href="https://twitter.com/YueqingXie" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
    </a></li>
    <li><a href="/taoyiCN" className="btn btn-floating transparent">CN</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travel" className="sidenavtext">Travel</a></li>
        <li><a href="/music" className="sidenavtext">Music</a></li>
        <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
        <li><a href="/cat" className="sidenavtext">My Cat</a></li>
        <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
            <br/>
            <li><a href="/taoyiCN" className="sidenavtext">CN</a></li>

    </ul>
</div>
</nav>
</header>


            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h4 className="black-text taoyititle">Travel</h4>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s4">
                    <a href="#xiangxunbei" className="active black-text ">Fragrance Cup</a>
                    </li>
                    <li className="tab col s4">
                    <a href="#caihui" className="black-text ">Painted</a>
                    </li>
                    <li className="tab col s4">
                    <a href="#shaizi" className="black-text ">Dice</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>


            <section className="container section" id="xiangxunbei">
                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/1.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Clay molding machine</h4>
                        <p>Put the clay on the clay molding machine and shape the clay into the shape you want with your hands and water.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/2.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Forming</h4>
                    <p>After forming, we should keep it well preserved and let it dry.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/3.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Semi-dry</h4>
                        <p>In one to three days, the work was half dry.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/4.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Outline</h4>
                    <p>When it was half dry, used a pencil to trace out the areas that need to be carved.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/5.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Carving</h4>
                        <p>Like a pumpkin lantern.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/6.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Carving(back)</h4>
                    <p>The engraving area on the back is larger, which is convenient for putting candles in.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/7.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Brush</h4>
                        <p>Mix pottery clay and water, and use a small brush to moisten the muddy water to fill up the cracked areas and smooth the uneven areas.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/8.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Coloring</h4>
                    <p>Color it based on your preferences.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/9.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Firing</h4>
                        <p>The black paint was spread, but it's okay.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/10.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Finished product</h4>
                    <p>My name was engraved on the top, but I can't see it clearly now.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/11.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Finished product(back)</h4>
                        <p></p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/12.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">Put in the candle</h4>
                    <p></p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/13.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >Put in the candle(back)</h4>
                        <p></p>
                    </div>
                </div>

                <a href="#top" className="ToTheTopIcon">
                    <i className="material-icons">arrow_upward</i>
                </a>

                
            </section>   

            <section className="container section" id="caihui">
            <h4 className="title">Outline</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/14.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/15.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/16.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">Coloring</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/17.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/18.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/19.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">Firing</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/20.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/21.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/22.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            </section>   

            <section className="container section" id="shaizi">
            <h4 className="title">Forming</h4>
                <div className="row">
                <div className="col s4">
                    <img src="../img29/23.jpg" alt="" className="responsive-img materialboxed"></img>
                </div>
                </div>

            <h4 className="title">Carving</h4>
                <div className="row">
                <div className="col s4">
                    <img src="../img29/24.jpg" alt="" className="responsive-img materialboxed"></img>
                </div>
                </div>

            <h4 className="title">Coloring</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/25.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/26.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/27.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/28.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/29.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/30.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">Firing</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/31.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/32.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/33.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/34.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/35.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/36.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            </section>   
    
            <footer className="page-footer black darken-3">
                <div className="container">
                <div className="row">

                    <div className="flex text-xs-center col l1 m2 s12">
                        {/* <img src="../img/me_small.png"></img> */}
                        <p className="center">Y.X.</p>
                    </div>

                    <div className="col l5 offset-l1 m5 s12 hide-on-small-only">
                    <h5>Who is Y.X.?</h5>
                    <p>Y.X. graduated from uOttawa in 2020. She studied computer science and mathematics. She enjoys programming, travelling & playing instruments.</p>
                    </div>
              

                    <div className="col l4 offset-l1 m5 s12">
                    {/* <h5 className="white-text">Connect</h5> */}
                    <div className="text-xs-center mx my social-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/crys___7" className=" btn-floating btn-small transparent" >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ" className=" btn-floating btn-small transparent">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100006981077508" className=" btn-floating btn-small transparent">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/YueqingXie" className=" btn-floating btn-small transparent">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container copyright center-align">Copyright &copy; 2020 Y.X.</div>
                </div>
            </footer>
  
            </body>
        )
    }
}





export default taoyi