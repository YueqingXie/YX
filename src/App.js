import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import travel from './component/dashboard/travel';
import dance from './component/dashboard/dance';
import music from './component/dashboard/music';
import calligraphy from './component/dashboard/calligraphy';
import procreate from './component/dashboard/procreate';

import cat from './component/dashboard/cat';
import dog from './component/dashboard/dog';
import YX from './component/dashboard/YX';
import education from './component/dashboard/education';
import educationDetails from './component/dashboard/educationDetails';

import taoyi from './component/dashboard/taoyi';
import mugong from './component/dashboard/mugong';
import hua from './component/dashboard/hua';
import cai from './component/dashboard/cai';

import dashboard from './component/dashboard/dashboard';
import travelPictures1 from './component/dashboard/travelPictures1';
import travelPictures2 from './component/dashboard/travelPictures2';
import travelPictures3 from './component/dashboard/travelPictures3';
import travelPictures4 from './component/dashboard/travelPictures4';
import travelNoteBeijing from './component/dashboard/travelNoteBeijing';
import travelNoteShanxiShandong from './component/dashboard/travelNoteShanxiShandong';
import travelNoteQuebec from './component/dashboard/travelNoteQuebec';
import travelNoteXianYunnan from './component/dashboard/travelNoteXianYunnan';
import travelNoteOttawa from './component/dashboard/travelNoteOttawa';
import travelNoteChongqingChengdu from './component/dashboard/travelNoteChongqingChengdu';
import travelNoteThailand from './component/dashboard/travelNoteThailand';
import travelNoteUSA from './component/dashboard/travelNoteUSA';
import travelNoteToronto from './component/dashboard/travelNoteToronto';
import travelNoteVancouver from './component/dashboard/travelNoteVancouver';
import travelNoteMontreal from './component/dashboard/travelNoteMontreal';

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header /> 

          <Switch>
            <Route exact path="/" component={dashboard} />
            <Route path="/travel" component={travel} />
            <Route path="/dance" component={dance} />
            <Route path="/music" component={music} />
            <Route path="/calligraphy" component={calligraphy} />
            <Route path="/procreate" component={procreate} />
            
            <Route path="/cat" component={cat} />
            <Route path="/dog" component={dog} />
            <Route path="/YX" component={YX} />
            <Route path="/education" component={education} />
            <Route path="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownload" component={educationDetails} />

            <Route path="/taoyi" component={taoyi} />
            <Route path="/mugong" component={mugong} />
            <Route path="/hua" component={hua} />
            <Route path="/cai" component={cai} />
          </Switch>

          <Footer /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
