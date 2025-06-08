import React, { Component } from 'react';



class dance extends Component {
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

            <section className="container section">
              <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video4">
                        <video controls src="../video_dance/4-new.mp4" width="243" height="432"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video3">
                        <video controls src="../video_dance/3.mp4" width="243" height="432"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video2">
                        <video controls src="../video_dance/2.mp4" width="243" height="432"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video1">
                        <video controls src="../video_dance/1.mp4" width="243" height="432"></video>
                    </div>
                </div>
             </div>
            </section>   

            </section>
        )
    }
}





export default dance
