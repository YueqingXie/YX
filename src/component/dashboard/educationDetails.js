import React, { Component } from 'react';


class educationDetails extends Component {



    render() {
        



        return (
            <section>
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
            {/* <ul className="right hide-on-small-only"> */}
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
            {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">arrow_drop_down</i></a></li> */}
            <li><a href="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownloadCN" className="btn btn-floating transparent">CN</a></li>

            </ul>


    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travel" className="sidenavtext">Travel</a></li>
        <li><a href="/music" className="sidenavtext">Music</a></li>
        <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
        <li><a href="/cat" className="sidenavtext">My Cat</a></li>
        <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
            <br/>
            <li><a href="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownloadCN" className="sidenavtext">CN</a></li>

    </ul>
            
            
            </div>
            </nav>


        </header> 
   
       
            <section className="container section">
            <h4 className="titleENG center">YX-Education</h4>
                <div className="row">
                    <div className="col s12 l6">
                        <img src="../imgeducation/1.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h4 className="black-text school">High School</h4>
                        <p className="YXdetailP">William Lyon Mackenzie C.I.</p>
                        <p className="YXdetailP">Graduated on June 29, 2016.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l6 push-l6">
                        <img src="../imgeducation/2.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l4 offset-l1 pull-l7 right-align">
                        <h4 className="black-text school">University</h4>
                        <p className="YXdetailP">University of Ottawa</p>
                        <p className="YXdetailP">Joint honours in Computer Science and Mathematics.</p>
                        <p className="YXdetailP">Graduated on October 7, 2020.</p>
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
  
            </section>
        )
    }
}




export default educationDetails;