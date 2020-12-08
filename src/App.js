import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import travel from './component/dashboard/travel';
import music from './component/dashboard/music';
import calligraphy from './component/dashboard/calligraphy';
import cat from './component/dashboard/cat';
import YX from './component/dashboard/YX';
import education from './component/dashboard/education';
import educationDetails from './component/dashboard/educationDetails';
import projects from './component/dashboard/projects';
import contact from './component/dashboard/contact';
import contactDetails from './component/dashboard/contactDetails';
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




//ENG
import travelCN from './componentCN/dashboard/travelCN';
import musicCN from './componentCN/dashboard/musicCN';
import calligraphyCN from './componentCN/dashboard/calligraphyCN';
import catCN from './componentCN/dashboard/catCN';
import YXCN from './componentCN/dashboard/YXCN';
import educationCN from './componentCN/dashboard/educationCN';
import educationDetailsCN from './componentCN/dashboard/educationDetailsCN';
import projectsCN from './componentCN/dashboard/projectsCN';
import contactCN from './componentCN/dashboard/contactCN';
import contactDetailsCN from './componentCN/dashboard/contactDetailsCN';
import taoyiCN from './componentCN/dashboard/taoyiCN';
import mugongCN from './componentCN/dashboard/mugongCN';
import huaCN from './componentCN/dashboard/huaCN';
import caiCN from './componentCN/dashboard/caiCN';


import dashboardCN from './componentCN/dashboard/dashboardCN';
import travelPictures1CN from './componentCN/dashboard/travelPictures1CN';
import travelPictures2CN from './componentCN/dashboard/travelPictures2CN';
import travelPictures3CN from './componentCN/dashboard/travelPictures3CN';
import travelPictures4CN from './componentCN/dashboard/travelPictures4CN';
import travelNoteBeijingCN from './componentCN/dashboard/travelNoteBeijingCN';
import travelNoteShanxiShandongCN from './componentCN/dashboard/travelNoteShanxiShandongCN';
import travelNoteQuebecCN from './componentCN/dashboard/travelNoteQuebecCN';
import travelNoteXianYunnanCN from './componentCN/dashboard/travelNoteXianYunnanCN';
import travelNoteOttawaCN from './componentCN/dashboard/travelNoteOttawaCN';
import travelNoteChongqingChengduCN from './componentCN/dashboard/travelNoteChongqingChengduCN';
import travelNoteThailandCN from './componentCN/dashboard/travelNoteThailandCN';
import travelNoteUSACN from './componentCN/dashboard/travelNoteUSACN';
import travelNoteTorontoCN from './componentCN/dashboard/travelNoteTorontoCN';
import travelNoteVancouverCN from './componentCN/dashboard/travelNoteVancouverCN';
import travelNoteMontrealCN from './componentCN/dashboard/travelNoteMontrealCN';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">

        <Switch>


          <Route exact path="/" component={dashboard} />
          <Route path="/travel" component={travel} />
          <Route path="/music" component={music} />
          <Route path="/calligraphy" component={calligraphy} />
          <Route path="/cat" component={cat} />
          <Route path="/YX" component={YX} />
          <Route path="/education" component={education} />
          <Route path="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownload" component={educationDetails} />
          <Route path="/projects" component={projects} />
          <Route path="/contact" component={contact} />
          <Route path="/contact8732881026" component={contactDetails} />
          <Route path="/taoyi" component={taoyi} />
          <Route path="/mugong" component={mugong} />
          <Route path="/hua" component={hua} />
          <Route path="/cai" component={cai} />


          <Route path="/travelPicturesChina" component={travelPictures1} />
          <Route path="/travelPicturesThailand" component={travelPictures2} />
          <Route path="/travelPicturesCanada" component={travelPictures3} />
          <Route path="/travelPicturesUSA" component={travelPictures4} />

          <Route path="/travelNoteBeijing" component={travelNoteBeijing} />
          <Route path="/travelNoteShanxiShandong" component={travelNoteShanxiShandong} />
          <Route path="/travelNoteQuebec" component={travelNoteQuebec} />
          <Route path="/travelNoteXianYunnan" component={travelNoteXianYunnan} />
          <Route path="/travelNoteOttawa" component={travelNoteOttawa} />
          <Route path="/travelNoteChongqingChengdu" component={travelNoteChongqingChengdu} />
          <Route path="/travelNoteThailand" component={travelNoteThailand} />
          <Route path="/travelNoteUSA" component={travelNoteUSA} />
          <Route path="/travelNoteToronto" component={travelNoteToronto} />
          <Route path="/travelNoteVancouver" component={travelNoteVancouver} />
          <Route path="/travelNoteMontreal" component={travelNoteMontreal} />

          {/* ENG */}

          <Route exact path="/CN" component={dashboardCN} />
          <Route path="/travelCN" component={travelCN} />
          <Route path="/musicCN" component={musicCN} />
          <Route path="/calligraphyCN" component={calligraphyCN} />
          <Route path="/catCN" component={catCN} />
          <Route path="/YXCN" component={YXCN} />
          <Route path="/educationCN" component={educationCN} />
          <Route path="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownloadCN" component={educationDetailsCN} />
          <Route path="/projectsCN" component={projectsCN} />
          <Route path="/contactCN" component={contactCN} />
          <Route path="/contact8732881026CN" component={contactDetailsCN} />
          <Route path="/taoyiCN" component={taoyiCN} />
          <Route path="/mugongCN" component={mugongCN} />
          <Route path="/huaCN" component={huaCN} />
          <Route path="/caiCN" component={caiCN} />


          <Route path="/travelPicturesChinaCN" component={travelPictures1CN} />
          <Route path="/travelPicturesThailandCN" component={travelPictures2CN} />
          <Route path="/travelPicturesCanadaCN" component={travelPictures3CN} />
          <Route path="/travelPicturesUSACN" component={travelPictures4CN} />

          <Route path="/travelNoteBeijingCN" component={travelNoteBeijingCN} />
          <Route path="/travelNoteShanxiShandongCN" component={travelNoteShanxiShandongCN} />
          <Route path="/travelNoteQuebecCN" component={travelNoteQuebecCN} />
          <Route path="/travelNoteXianYunnanCN" component={travelNoteXianYunnanCN} />
          <Route path="/travelNoteOttawaCN" component={travelNoteOttawaCN} />
          <Route path="/travelNoteChongqingChengduCN" component={travelNoteChongqingChengduCN} />
          <Route path="/travelNoteThailandCN" component={travelNoteThailandCN} />
          <Route path="/travelNoteUSACN" component={travelNoteUSACN} />
          <Route path="/travelNoteTorontoCN" component={travelNoteTorontoCN} />
          <Route path="/travelNoteVancouverCN" component={travelNoteVancouverCN} />
          <Route path="/travelNoteMontrealCN" component={travelNoteMontrealCN} />

        </Switch>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
