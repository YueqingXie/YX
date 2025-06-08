import React, {Component} from 'react';



class dashboard extends Component{
    render(){

        return(
            <section>

                <nav className="main-nav" id="aboutmenav">
                    <ul>
                        <li><a href="/YX" className="join center">About Me</a></li>
                        <li><a href="/education" className="center">Education</a></li>
                        <li><a href="/cat" className="center">My Cat</a></li>
                        <li><a href="/dog" className="center">My Dog</a></li>
                    </ul>
                </nav>

                <section className="container section portfolio" id="photos" style={{ marginTop: '20px' }}>
                    <h3>Some of my interests</h3>
                    <div className="projects grid" style={{ marginTop: '60px' }}>
                        <a href="/travel">
                            <img src="img/1-new.png" alt=""></img>
                            <p style={{ fontFamily: 'Parisienne', fontSize: '1.5em', fontWeight: 'lighter' }}>Travel</p>
                        </a>
                        <a href="/dance">
                            <img src="img/7.png" alt=""></img>
                            <p style={{ fontFamily: 'Parisienne', fontSize: '1.5em', fontWeight: 'lighter' }}>Dance</p>
                        </a>
                        <a href="/music">
                            <img src="img/2.png" alt=""></img>
                            <p style={{ fontFamily: 'Parisienne', fontSize: '1.5em', fontWeight: 'lighter' }}>Music</p>
                        </a>
                        <a href="/calligraphy">
                            <img src="img/3.png" alt=""></img>
                            <p style={{ fontFamily: 'Parisienne', fontSize: '1.5em', fontWeight: 'lighter' }}>Calligraphy</p>
                        </a>
                        <a href="/procreate">
                            <img src="img/6.png" alt=""></img>
                            <p style={{ fontFamily: 'Parisienne', fontSize: '1.5em', fontWeight: 'lighter' }}>Procreate</p>
                        </a>
                    </div>
                </section>

                <section className="interests" style={{ marginTop: '-30px' }}>
                    <h3>Other hobbies</h3>
                    <ul className="grid">
                        <li>
                            <a href="/taoyi">
                                <img src="img/taoyi.jpg" alt=""></img>
                                <p>Pottery</p>
                            </a>
                        </li>
                        <li>
                            <a href="/mugong">
                                <img src="img/mugong.jpg" alt=""></img>
                                <p>Woodworking</p>
                            </a>
                        </li>
                        <li>
                            <a href="/hua">
                                <img src="img/hua.jpg" alt=""></img>
                                <p>Sketch</p>
                            </a>
                        </li>
                        <li>
                            <a href="/cai">
                                <img src="img/cai.jpg" alt=""></img>
                                <p>Cooking</p>
                            </a>
                        </li>
                    </ul>
                </section>

            </section>
            
        )
    }
}




export default dashboard;