import React, { Component } from 'react';


class educationDetails extends Component {



    render() {
        



        return (
            <section>
       
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

            </section>
        )
    }
}




export default educationDetails;