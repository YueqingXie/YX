import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class education extends Component {
    state = {
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password); 
    }
    render() {
        if( this.state.password == "8918308"){
            return <Redirect to = '/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownload'/>
        }

        return (
            <section>
   
            <section className="container section">
            <h4 className="titleENG center">YX-Education</h4>
                <div className="row">
                    <div className="col s12 l5">
                    <h4 className="black-text school">High School</h4>
                        {/* <p className="YXdetailP">William Lyon Mackenzie C.I.</p> */}
                        <p className="YXdetailP">Graduated in Toronto on June 29, 2016.</p>                    
                </div>
                    <div className="col s12 l5 offset-l2">
                    <h4 className="black-text school">University</h4>
                        {/* <p className="YXdetailP">University of Ottawa</p> */}
                        <p className="YXdetailP">Joint honours in Computer Science and Mathematics.</p>
                        <p className="YXdetailP">Graduated on October 7, 2020.</p>
                    </div>
                </div>

                

            </section>

            <section className="educationAuthform container ">

                <form onSubmit={this.handleSubmit} className="transparent ">
                    <div className="input-field">
                        <label htmlFor="password" className="numAuthTitle black-text">Enter Password to see schools and diplomas:</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                </form>

            </section> 


        
            </section>
        )
    }
}




export default education;