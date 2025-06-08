import React, { Component } from 'react';



class music extends Component {
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
            <section>

            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h2 className="indigo-text text-darken-4">Travel</h2>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s3">
                        <a href="#one-person-ensemble" className="active black-text">One-Person Ensemble</a>
                    </li>
                    <li className="tab col s3">
                        <a href="#guzheng" className="black-text">GuZheng</a>
                    </li>
                    <li className="tab col s3">
                        <a href="#guitar" className="black-text">Guitar</a>
                    </li>
                    <li className="tab col s3">
                        <a href="#piano" className="black-text">Piano</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>

            <section className="container section" id="one-person-ensemble">
              <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video1">
                        <video controls src="../one-person-ensemble/2.mp4" width="250" height="350"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                     
                </div>

                <div className="col s12 m6 l3">
             
                </div>

                <div className="col s12 m6 l3">
              
                </div>
             </div>
            </section>   

            <section className="container section" id="guzheng">
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video2">
                        <video controls src="../guzheng/雪山春晓.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video3">
                        <video controls src="../guzheng/月儿高.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">

                </div>

                <div className="col s12 m6 l3">

                </div>
            </div>
 
            </section>   

            <section className="container section" id="guitar">

            <div className="row">
                <div className="col s12 m6 l3">
                    {<div className="video" id="video4">
                        <video controls src="../guitar/茉莉雨.mp4" width="250" height="350"></video>
                    </div>}
                </div>

                <div className="col s12 m6 l3">
                    {<div className="video" id="video5">
                        <video controls src="../guitar/ComingHome.mp4" width="250" height="350"></video>
                    </div>}
                </div>

                <div className="col s12 m6 l3">

                </div>

                <div className="col s12 m6 l3">

                </div>
            </div>

            </section>   

            <section className="container section" id="piano">
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video6">
                        <video controls src="../piano/想自由.mp4" width="250" height="350"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">

                </div>

                <div className="col s12 m6 l3">

                </div>

                <div className="col s12 m6 l3">

                </div>
            </div>
  
            </section>   

            </section>
        )
    }
}





export default music
