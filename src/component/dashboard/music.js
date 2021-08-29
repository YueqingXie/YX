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
    <li><a href="/musicCN" className="btn btn-floating transparent">CN</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travel" className="sidenavtext">Travel</a></li>
        <li><a href="/music" className="sidenavtext">Music</a></li>
        <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
        <li><a href="/cat" className="sidenavtext">My Cat</a></li>
        <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
            <br/>
            <li><a href="/musicCN" className="sidenavtext">CN</a></li>

    </ul>
</div>
</nav>
</header>

            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h2 className="indigo-text text-darken-4">Travel</h2>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s3">
                    <a href="#guitar" className="active black-text">Guitar</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#piano" className="black-text">Piano</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#guzheng" className="black-text">GuZheng</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#flute" className="black-text">Flute</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>

            <section className="container section" id="guitar">

            <div className="row">
                <div className="col s12 m6 l3">
                    {<div className="video" id="video56">
                        <video controls src="../video_music/64_有点甜.mp4" width="200" height="280"></video>
                    </div>}
                </div>

                <div className="col s12 m6 l3">
                    {<div className="video" id="video55">
                        <video controls src="../video_music/63_LastChristmas.mp4" width="200" height="280"></video>
                    </div>}
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video54">
                        <video controls src="../video_music/54_我要你.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video53">
                        <video controls src="../video_music/53_我好像掉进爱情海里.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video52">
                        <video controls src="../video_music/52_LetMeDownSlowly.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video51">
                        <video controls src="../video_music/51_ChildhoodDream.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video50">
                        <video controls src="../video_music/50_FlyMeToTheMoon.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video49">
                        <video controls src="../video_music/49_Lonely.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video48">
                        <video controls src="../video_music/48_幻听.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video47">
                        <video controls src="../video_music/47_WonderfulU.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video45">
                        <video controls src="../video_music/45_后会无期.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video44">
                        <video controls src="../video_music/44_Older.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video42">
                        <video controls src="../video_music/42_PriceTag.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video41">
                        <video controls src="../video_music/41_SourCandy.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video40">
                        <video controls src="../video_music/40_喜欢你_7_你是对的人.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video39">
                        <video controls src="../video_music/39_Stay.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video38">
                        <video controls src="../video_music/38_Ilomilo.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video37">
                        <video controls src="../video_music/37_夏天的风.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video36">
                        <video controls src="../video_music/36_ComingHome.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video34">
                        <video controls src="../video_music/34_我怎么这么好看.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video33">
                        <video controls src="../video_music/33_SomeoneYouLoved.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video32">
                        <video controls src="../video_music/32_Whistle.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video31">
                        <video controls src="../video_music/31_TakeItOff.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video30">
                        <video controls src="../video_music/30_CantTakeMyEyesOffYou.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video29">
                        <video controls src="../video_music/29_Attention.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video28">
                        <video controls src="../video_music/28_巴赫旧约.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video27">
                        <video controls src="../video_music/27_OhMyGod.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video26">
                        <video controls src="../video_music/26_LOVE.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video25">
                        <video controls src="../video_music/25_简单爱.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video24">
                        <video controls src="../video_music/24_SayYouWontLetGo.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video23">
                        <video controls src="../video_music/23_Psycho.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video22">
                        <video controls src="../video_music/22_IDontWannaBeYouAnymore.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video21">
                        <video controls src="../video_music/21_GirlsLikeYou.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video20">
                        <video controls src="../video_music/20_DancingWithYourGhost.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video19">
                        <video controls src="../video_music/19_蒲公英的约定.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video18">
                        <video controls src="../video_music/18_暴风雨.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video17">
                        <video controls src="../video_music/17_LookWhatYouMadeMeDo.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video16">
                        <video controls src="../video_music/16_修炼爱情.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video14">
                        <video controls src="../video_music/14_Havana.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video13">
                        <video controls src="../video_music/13_一笑倾城.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video12">
                        <video controls src="../video_music/12_关键词.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video11">
                        <video controls src="../video_music/11_甜甜的.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video10">
                        <video controls src="../video_music/10_贰叁.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video9">
                        <video controls src="../video_music/9_无语.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video8">
                        <video controls src="../video_music/8_城府.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video7">
                        <video controls src="../video_music/7_有何不可.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video6">
                        <video controls src="../video_music/6_给我一首歌的时间.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video5">
                        <video controls src="../video_music/5_退后.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video4">
                        <video controls src="../video_music/4_岁月神偷.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video3">
                        <video controls src="../video_music/3_SureThing.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video2">
                        <video controls src="../video_music/2_病变.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video1">
                        <video controls src="../video_music/1_WishYouWereGay.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>



            </section>   

            <section className="container section" id="piano">
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video46">
                        <video controls src="../video_music/46_CityOfStars.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video43">
                        <video controls src="../video_music/43_MoonlightSonata.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video35">
                        <video controls src="../video_music/35_Cater2U.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video15">
                        <video controls src="../video_music/15_SixFeetUnder.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>
 
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video58">
                        <video controls src="../video_music/58_秋日私语.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video57">
                        <video controls src="../video_music/57_花水月间奏.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video56">
                        <video controls src="../video_music/56_梦中的婚礼.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video55">
                        <video controls src="../video_music/55_花水月.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>
 
 
            </section>   

            <section className="container section" id="guzheng">
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="video" id="video62">
                        <video controls src="../video_music/62_寒鸦戏水.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video61">
                        <video controls src="../video_music/61_月儿高.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video60">
                        <video controls src="../video_music/60_雪山春晓.mp4" width="200" height="280"></video>
                    </div>
                </div>

                <div className="col s12 m6 l3">
                    <div className="video" id="video59">
                        <video controls src="../video_music/59_井冈山上太阳红.mp4" width="200" height="280"></video>
                    </div>
                </div>
            </div>
 
            </section>   

            <section className="container section" id="flute">
            
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





export default music
