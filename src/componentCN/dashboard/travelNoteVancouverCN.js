import React, { Component } from 'react';
import Footer from '../layout/Footer';


class travelNoteVancouverCN extends Component {

    render() {

        return ( 
            <section>
<header>


<nav className="nav-wrapper black">
<div className="container">
    <a href="/CN" className="brand-logo ">
        <span>Y.X.</span>
    </a>
    
    <a href="" className="sidenav-trigger" data-target="mobile-menu">
    <i className="material-icons">menu</i>
    </a>
    <ul className="right hide-on-med-and-down">
    <li><a href="/travelCN" >旅游</a></li>
    <li><a href="/musicCN">音乐</a></li>
    <li><a href="/calligraphyCN">书法</a></li>
    
    <li><a href="/catCN">🐈</a></li>

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
    <li><a href="/travelNoteVancouver" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelNoteVancouver" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <div className="row hide-on-small-only" id="travelNoteVancouver">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">温哥华</div>
                            <li className="titleDate">
                                <a href="#title1">2016/07/01</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">蒸汽钟</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.2/ </a>
                                <a href="#title2">枫树广场</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.3/ </a>
                                <a href="#title3">中国城</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.4/ </a>
                                <a href="#title4">史丹利公园</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.5/ </a>
                                <a href="#title5">英吉利湾&日落海滩</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.6/ </a>
                                <a href="#title6">布勒桥&格兰维尔街大桥</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.7/ </a>
                                <a href="#title7">温哥华公共图书馆</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.8/ </a>
                                <a href="#title8">加拿大广场</a>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteVancouver">
                    {/* <div className="video" id="video1">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div>
                    <div className="video" id="video2">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div>
                    <div className="video" id="video3">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div>
                    <div className="video" id="video4">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div>
                    <div className="video" id="video5">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div>
                    <div className="video" id="video6">
                        <video controls src="../video/1.mp4" width="560" height="315"></video>
                    </div> */}

                        <div className="row">
                            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
                            <div className="row travelDetail">
                                <div className="time col s12 m4 l4">
                                    <i className=" material-icons left">access_time</i>
                                    <span>出发时间</span>
                                    <span> / </span>
                                    <span>2016-07-01</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>出行天数</span>
                                    <span> / </span>
                                    <span>1天</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>人物</span>
                                    <span> / </span>
                                    <span>一个人</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>

                    <div className="titles" id="title1">
                        <h4 className="tooltipped title" data-tooltip="Gastown Steam Clock">蒸汽钟</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/1.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Gastown+Steam+Clock/@49.2844031,-123.1110412,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e7bde5acdf:0x83edcdd77145500!8m2!3d49.2843996!4d-123.1088525">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">蒸汽钟</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal1">介绍</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">蒸汽钟 - 介绍</h4>
                            <p>蒸汽钟位于温哥华Gastown街区的Cambie和Water街的转角处。 这个钟的来历很有趣。当年的水街采用蒸汽集中供热，一条条供热管将中心锅炉产生的热蒸汽输送到各家各户。为了散去多余的蒸汽，人们不得不在街上开了3个散蒸汽口，可其中一个恰好位于最繁华的水街路口，既不雅观，也不方便。1854年，一个叫桑德斯的聪明人巧妙地利用这个散蒸汽口的废蒸汽，建成了这座当时世界上独一无二的蒸汽钟。</p>

                            <p className="grey-text">The Steam Clock is located at the corner of Cambie and Water Streets in the Gastown neighborhood of Vancouver. The origin of this clock is very interesting. At that time, the water street used steam central heating, and the heating pipes transported the hot steam produced by the central boiler to each household. In order to dissipate the excess steam, people had to open three steam outlets on the street, but one of them happened to be located at the most prosperous Shuijie intersection, which was both unsightly and inconvenient. In 1854, a clever man named Sanders cleverly used the waste steam from the steam outlet to build this unique steam clock in the world at that time.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%92%B8%E6%B1%BD%E9%92%9F/2987407?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/1.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>高中毕业那年暑假，从多伦多回国，中转温哥华一天。正好赶上7月1号国庆节，来温哥华看看烟花。</p>
                                    <p>在温哥华落地已经是下午，在机场乘坐styline到waterfront。</p>
                                    <p>先来到Gastown，这个蒸汽钟用蒸汽作动力，高2米，四面有钟面，钟盘以下完全透明，可以清晰看见零部件的运作。每隔15分钟，它们就会惊天动地嘶叫上好一会儿，并喷射出蒸汽来。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="Maple Tree Square">枫树广场</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/2.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Maple+Tree+Square,+Vancouver,+BC/@49.2834016,-123.1061831,17z/data=!3m1!4b1!4m5!3m4!1s0x548671774ec789ed:0x8f0ba62a2d67e218!8m2!3d49.2833664!4d-123.104129">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">枫树广场</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal2">介绍</a>
                        <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">枫树广场 - 介绍</h4>
                            <p>枫树广场坐落在温哥华水道，鲍威尔，亚历山大和Carrall街交汇处，是温哥华拍摄最多，历史最悠久的十字路口之一。</p>

                            <p className="grey-text">Maple Tree Square sits at one of the most photographed, and most historic, intersections in Vancouver where Water, Powell, Alexander, and Carrall streets meet.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://miss604.com/2016/01/maple-tree-square-in-gastown.html">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/2.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Gassy Jack statue</p>
                                    <p>就在蒸汽钟的旁边，是枫树广场。枫树广场坐落在温哥华水道，鲍威尔，亚历山大和Carrall街交汇处，是温哥华拍摄最多，历史最悠久的十字路口之一。</p>
                                    <p>这个雕像叫Gassy Jack statue，它向19世纪城市最初的盖斯镇定居点的创始人致敬。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title3">
                        <h4 className="tooltipped title" data-tooltip="China Town">中国城</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/3.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Dr.+Sun+Yat-Sen+Classical+Chinese+Garden/@49.2797972,-123.1062925,17z/data=!3m2!4b1!5s0x5486717af328724d:0x56d516fa8638d3dd!4m5!3m4!1s0x5486717a910c3af1:0x2ad3b98f246a262!8m2!3d49.2797937!4d-123.1041038">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">中山公园</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal3">介绍</a>
                        <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">中山公园 - 介绍</h4>
                            <p>被称为唐人街象征的温哥华中山公园坐落于唐人街的入口处。这是一座明朝样式的中国传统庭园，是模仿苏州庭园兴建而成，为纪念国父孙中山先生便以中山命名。传统中国的古典花园韵味，就在亭台楼阁、岁寒三友松竹梅和水池小溪中，身处异乡，却在此观得苏州之美，感觉说不出的奇妙。</p>

                            <p className="grey-text">Dr. Sun Yat-Sen Classical Chinese Garden, known as the symbol of Chinatown, is located at the entrance of Chinatown. This is a traditional Chinese garden in the style of the Ming Dynasty. It was built after imitating the Suzhou garden. It was named after Zhongshan in memory of the founding father Sun Yat-sen. The charm of the classical garden of traditional China lies in the pavilions, three friends of Sui Han, pine, bamboo and plum, and pools and creeks. Living in a foreign land, but seeing the beauty of Suzhou here, it feels indescribable.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%B1%B1%E5%85%AC%E5%9B%AD/3560852?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/3.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>中山公园有着传统中国的古典花园韵味。在亭台楼阁、岁寒三友松竹梅和水池小溪中，身处异乡，却在此观得苏州之美。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title4">
                        <h4 className="tooltipped title" data-tooltip="Stanley Park">史丹利公园</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/4.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Stanley+Park/@49.3042619,-123.1464409,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718cad26e4a3:0x364a639db409e216!8m2!3d49.3042584!4d-123.1442523">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">史丹利公园</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal4">介绍</a>
                        <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">史丹利公园 - 介绍</h4>
                            <p>闻名世界的史丹利公园离温哥华市区只有十五分钟步行路程。以红杉等针叶树木为主的原始森林是公园最知名的美景。</p>

                            <p className="grey-text">The world-famous Stanley Park is only a 15-minute walk from downtown Vancouver. The primeval forest dominated by coniferous trees such as redwoods is the most famous beauty of the park.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>斯坦利公园的环岛道路是游人散步和自行车爱好者的天堂，在两侧景色优美的道路上，还时可见到滑轮好手的身姿。而公园中的网球场和高尔夫球场是喜爱运动的温哥华市民常到的地方。
                                    <br/>
                                    <br/>
                                    除了森林美景，濒临英国湾的斯坦利公园还有几个长长的海滩，让人体验海滩美景，在这里不管是欣赏海景，还是体味沙滩乐趣，都是一种享受。</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="grey-text">[Source From...]</span>
                            </a>  
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title5">
                        <h4 className="tooltipped title" data-tooltip="English Bay & Sunset Beach">英吉利湾&日落海滩</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/5.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/English+Bay/@49.2848575,-123.1768664,14z/data=!3m1!4b1!4m5!3m4!1s0x54867239831d561d:0x369eb4823ccb8325!8m2!3d49.2871809!4d-123.1614389">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">英吉利湾</span>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Sunset+Beach+Park/@49.2799563,-123.1409304,17z/data=!3m1!4b1!4m5!3m4!1s0x5486722db4346a01:0x6ee8acb0cf88be00!8m2!3d49.2799528!4d-123.1387417">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">日落海滩</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal5">介绍</a>
                        <div id="modal5" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">英吉利湾&日落海滩 - 介绍</h4>
                            <p>英吉利湾位于加拿大不列颠哥伦比亚省的温哥华市，在市区半岛和福溪附近。 它由Burrard入口的南侧组成，从西南的Point Grey延伸到东北的Prospect Point。
                            <br/>
                            <br/>
                            日落海滩位于西区，靠近伯拉德街大桥和温哥华国际旅馆。 温哥华水上运动中心位于日落海滩的东端，紧邻伯拉德街大桥的北端。 在温暖的月份，海滩上有救生员值班。 公共洗手间和特许摊位就在附近。 自行车道，步行道和直排轮滑道蜿蜒蜿蜒在海滩区上方，一个方向通往斯坦利公园，另一个方向通往耶鲁镇。 温哥华规模的游泳馆温哥华水上运动中心的南部有一个无牵引绳的区域。 这是观看温哥华烟花的热门地点。
                            </p>

                            <p className="grey-text">English Bay is located in Vancouver, British Columbia, Canada, west of the downtown peninsula and False Creek. It consists of the south side of the Burrard Inlet, extending from Point Grey in the southwest to Prospect Point in the northeast.
                            <br/>
                            <br/>
                            Sunset Beach is situated in the West End near the Burrard Street Bridge and Vancouver International Hostel. The Vancouver Aquatic Centre lies at the East end of Sunset beach right next to the North end of Burrard Street Bridge. The beach has lifeguards on duty in the warm months. Public washrooms and concession stands are nearby. Biking, walking and inline skating paths wind above the beach area, leading to Stanley Park in one direction and Yaletown in the other. There is an off leash area to the south of the Vancouver Aquatic Centre, an Olympic size natatorium. It is a popular location for watching Vancouver fireworks.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/English_Bay,_Vancouver">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>  
                            <br/>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Sunset_Beach_(Vancouver)">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/5.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>随后我来到英吉利湾和日落海滩。温哥华的气候非常温暖舒适，人们三三两两悠闲自在地坐在海滩边。</p>
                                    <p>我沿着海岸线从北走到南，吹着海风，十分惬意。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title6">
                        <h4 className="tooltipped title" data-tooltip="Burrard Street Bridge & Granville Bridge">布勒桥&格兰维尔街大桥</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/6.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Burrard+Street+Bridge/@49.2753244,-123.1397086,17z/data=!3m1!4b1!4m5!3m4!1s0x548673cd73ffa317:0x74f6d019649bcfba!8m2!3d49.2753209!4d-123.1375199">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">布勒桥</span>
                                </a>

                                
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal6">介绍</a>
                        <div id="modal6" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">布勒桥&格兰维尔街大桥 - 介绍</h4>
                            <p>布勒桥是加拿大卑诗省温哥华市内一条桁架桥，横越福溪的西端，连接温哥华市中心及基斯兰奴区。大桥现时有5条行车线，贯通两岸的布勒街，并设于行车线两旁设有行人及自行车通道。大桥的装饰艺术风格令其成为温市的主要地标之一。
                                <br/><br/>
                            格兰维尔街大桥不列颠哥伦比亚省温哥华的8车道大桥。大桥高27.4米，横跨福溪和格兰维尔岛。99号公路通行其上。此处原来的大桥于1889年建成。这是一座732米长的低矮木栈桥。靠近北端的通航孔是一个木桁架回转开启孔，两端由钢索斜拉挂在中央木塔上。大桥的主要设计由加拿大和平铁路公司完成，耗资一点六万美元。大桥于1891年改造加宽，在两侧设置了电车轨道，而在回转孔范围内，两侧的轨道交汇到了一起。第二座桥于1909年建成。这是一座更长的钢桥，通航孔是一个下承式桁架回转开启孔。
                            </p>

                            <p className="grey-text">Burrard Street Bridge is a truss bridge in Vancouver, British Columbia, Canada. It crosses the western end of False Creek and connects downtown Vancouver and Kitsilano District. The bridge currently has 5 traffic lanes running through Buller Street on both sides of the strait. Pedestrian and bicycle lanes are provided on both sides of the traffic lane. The Art Deco style of the bridge makes it one of the main landmarks of Vancouver.
                            <br/><br/>
                            Granville Bridge An 8-lane bridge in Vancouver, British Columbia. The bridge is 27.4 meters high and spans False Creek and Granville Island. Highway 99 runs through it. The original bridge here was completed in 1889. This is a low wooden trestle bridge with a length of 732 meters. The navigation hole near the north end is a wooden truss swing opening hole, and both ends are hung on the central wooden tower by steel cables. The main design of the bridge was completed by the Canadian Peace Railway Company at a cost of 16,000 US dollars. The bridge was remodeled and widened in 1891. Tram tracks were set on both sides, and within the revolving hole, the tracks on both sides merged together. The second bridge was completed in 1909. This is a longer steel bridge, and the navigation hole is a through-type truss turning opening hole.
                            </p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%B8%83%E5%8B%92%E6%A1%A5/14484441?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.mipang.com/places/2626/photos/1314812.2b94ce077d">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/6.jpg" alt="" className="responsive-img"></img>
                                    <br></br>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Granville+Bridge/@49.2726183,-123.1353376,17z/data=!3m1!4b1!4m5!3m4!1s0x548673ce1bbf24af:0xa61bd203d6fdec42!8m2!3d49.2726148!4d-123.1331489">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">格兰维尔街大桥</span>
                                </a>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>从英吉利湾一直走到格兰维尔街大桥，天越来越暗，人也有些乏了。</p>
                                    <p>随后，我回到downtown吃晚饭。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title7">
                        <h4 className="tooltipped title" data-tooltip="Vancouver Public Library">温哥华公共图书馆</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/7.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Vancouver+Public+Library,+Central+Library+(Open+with+Limited+Services+-+Children%E2%80%99s+Library,+Level+2+and+Level+3)/@49.2765089,-123.1358956,14z/data=!4m8!1m2!2m1!1svancouver+public+library!3m4!1s0x5486717e9849da43:0xb9df0be6adeff97b!8m2!3d49.2797275!4d-123.1156216">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">温哥华公共图书馆</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal7">介绍</a>
                        <div id="modal7" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">温哥华公共图书馆 - 介绍</h4>
                            <p>温哥华公共图书馆是加拿大不列颠哥伦比亚省温哥华的公共图书馆系统，经费由温哥华市政府提供。总馆位于温哥华市中心的图书馆广场，市内还有另外21间分馆。 系统收纳资料包括书籍、视听资料、报章、期刊、只读光碟数据库及缩微资料等，总藏量超过267万项，当中约一半藏于总馆。
<br/>
<br/>
温哥华公共图书馆是加拿大不列颠哥伦比亚省温哥华的公共图书馆系统，经费由温哥华市政府提供。总馆位于温哥华市中心的图书馆广场，市内还有另外21间分 馆。系统收纳资料包括书籍、视听资料、报章、期刊、只读光碟数据库及缩微资料等，总藏量超过267万项，当中约一半藏于总馆。持有温哥华公共图书馆图书证 的用户超过37万3千人，而系统旗下的物资每年被用户借阅逾900万次。</p>

                            <p className="grey-text">The Vancouver Public Library is a public library system in Vancouver, British Columbia, Canada, funded by the City of Vancouver. The main library is located in Library Plaza in downtown Vancouver, and there are 21 other branches in the city. The system includes books, audiovisual materials, newspapers, periodicals, CD-ROM databases and microfilm materials, etc. The total collection of more than 2.67 million items, of which about half is in the main library.
                            <br/>
<br/>
The Vancouver Public Library is a public library system in Vancouver, British Columbia, Canada, funded by the City of Vancouver. The main library is located in Library Plaza in downtown Vancouver, and there are 21 other branches in the city. The system includes books, audiovisual materials, newspapers, periodicals, CD-ROM databases and microfilm materials, etc. The total collection of more than 2.67 million items, of which about half is in the main library. There are more than 373,000 users who hold library cards of the Vancouver Public Library, and the materials under the system are borrowed by users over 9 million times each year.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.senseluxury.com/guides/Canada-Vancouver/scenery-1909">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        
                    </div>

                    <div className="titles" id="title8">
                        <h4 className="tooltipped title" data-tooltip="Canada Place">加拿大广场</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img11/8.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Canada+Place/@49.2888283,-123.1133096,17z/data=!3m1!4b1!4m5!3m4!1s0x5486719d24e2e021:0xb7057fe085c86109!8m2!3d49.2888248!4d-123.1111209">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">加拿大广场</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal8">介绍</a>
                        <div id="modal8" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">加拿大广场 - 介绍</h4>
                            <p>加拿大广场是一栋位于不列颠哥伦比亚省温哥华的Burrard Inlet滨水区的建筑。 它是温哥华会议中心，泛太平洋温哥华酒店，温哥华世界贸易中心和虚拟飞行加拿大FlyOver的所在地。 建筑物的外部被类似帆的织物屋顶所覆盖。 它也是该地区的主要游轮客运码头，始发至阿拉斯加。 该建筑是由建筑师Zeidler Roberts Partnership与Musson Cattell Mackey Partnership和DA Architects + Planners合资设计的。
<br/><br/>
可以通过附近的海滨车站终点站的轻轨线或温哥华的西科尔多瓦街到达加拿大广场。 建筑的白色帆使它成为城市的重要地标，并且与澳大利亚悉尼的悉尼歌剧院和科罗拉多州丹佛的丹佛国际机场进行了比较。</p>

                            <p className="grey-text">Canada Place is a building situated on the Burrard Inlet waterfront of Vancouver, British Columbia. It is the home of the Vancouver Convention Centre, the Pan Pacific Vancouver Hotel, Vancouver's World Trade Centre, and the virtual flight ride FlyOver Canada. The building's exterior is covered by fabric roofs resembling sails. It is also the main cruise ship passenger terminal for the region, where cruises to Alaska originate. The building was designed by architects Zeidler Roberts Partnership in joint venture with Musson Cattell Mackey Partnership and DA Architects + Planners.
                            <br/><br/>
Canada Place can be reached via the SkyTrain line at the nearby Waterfront Station terminus or via West Cordova Street in Vancouver. The white sails of the building have made it a prominent landmark for the city, as well as drawing comparisons to the Sydney Opera House in Sydney, Australia and the Denver International Airport in Denver, Colorado.
</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Canada_Place">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        <div className="titleContent">
                            <h5>2016/07/01</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img12/7.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>国庆节烟花</p>
                                    <p>逛了一天，又回到了Canada Place。今天是国庆节，来凑个热闹。来看烟花的人非常多。</p>
                                    <p>这次转机时间有限，只逛了逛市中心的景点，下次有时间再来更深入地了解这个美丽的城市。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>


                    <h4 className="title"> </h4>

                    {/* <div className="Comment">
                    
                        <div className="row">   
                        <div className="col s1 m1 l1">
                            <a className="btn btn-floating black lighten-1 ">YX</a>
                        </div>
                        <div className="col s11 m11 l11 commentContent">
                            <form action="">
                                <div className="input-field">
                                    <textarea id="message" className="materialize-textarea"></textarea>
                                    <label htmlFor="message">发表评论</label>
                                </div>
                            </form>
                        </div>
                        </div>

                      

                    </div> */}
                    


                </div>
            </div>

            <div className="row hide-on-med-and-up" id="travelNoteVancouver">

<div className="col s12 m12 l12 noteVancouver">
 
<a href="" className="sidenav-trigger" data-target="mobile-menu999">
        <i className="material-icons smallnotenav" >menu</i>
    </a>
    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
    <div className="bigTitle">温哥华</div>
            <li className="titleDate">
                <a href="#title9">2016/07/01</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title9">蒸汽钟</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title10">枫树广场</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title11">中国城</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title12">史丹利公园</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title13">英吉利湾&日落海滩</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title14">布勒桥&格兰维尔街大桥</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title15">温哥华公共图书馆</a>
            </li>
            <li className="smallTitle">
                
                <a href="#title16">加拿大广场</a>
            </li>
    </ul>


        <div className="row">
            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
            <div className="row travelDetail">
                <div className="time col s12 m4 l4">
                    <i className=" material-icons left">access_time</i>
                    <span>出发时间</span>
                    <span> / </span>
                    <span>2016-07-01</span>
                </div>
                <div className="day col s12 m4 l4">
                    <i className=" material-icons left">wb_sunny</i>
                    <span>出行天数</span>
                    <span> / </span>
                    <span>1天</span>
                </div>
                <div className="people col s12 m4 l4">
                    <i className=" material-icons left">account_circle</i>
                    <span>人物</span>
                    <span> / </span>
                    <span>一个人</span>
                </div>
            </div>
            <div className="col s1 m1 l1"></div>
            </div>
        </div>

    <div className="titles" id="title9">
        <h4 className="tooltipped title" data-tooltip="Gastown Steam Clock">蒸汽钟</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/1.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Gastown+Steam+Clock/@49.2844031,-123.1110412,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e7bde5acdf:0x83edcdd77145500!8m2!3d49.2843996!4d-123.1088525">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">蒸汽钟</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9991">介绍</a>
        <div id="modal9991" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">蒸汽钟 - 介绍</h4>
            <p>蒸汽钟位于温哥华Gastown街区的Cambie和Water街的转角处。 这个钟的来历很有趣。当年的水街采用蒸汽集中供热，一条条供热管将中心锅炉产生的热蒸汽输送到各家各户。为了散去多余的蒸汽，人们不得不在街上开了3个散蒸汽口，可其中一个恰好位于最繁华的水街路口，既不雅观，也不方便。1854年，一个叫桑德斯的聪明人巧妙地利用这个散蒸汽口的废蒸汽，建成了这座当时世界上独一无二的蒸汽钟。</p>

            <p className="grey-text">The Steam Clock is located at the corner of Cambie and Water Streets in the Gastown neighborhood of Vancouver. The origin of this clock is very interesting. At that time, the water street used steam central heating, and the heating pipes transported the hot steam produced by the central boiler to each household. In order to dissipate the excess steam, people had to open three steam outlets on the street, but one of them happened to be located at the most prosperous Shuijie intersection, which was both unsightly and inconvenient. In 1854, a clever man named Sanders cleverly used the waste steam from the steam outlet to build this unique steam clock in the world at that time.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%92%B8%E6%B1%BD%E9%92%9F/2987407?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/1.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>高中毕业那年暑假，从多伦多回国，中转温哥华一天。正好赶上7月1号国庆节，来温哥华看看烟花。</p>
                    <p>在温哥华落地已经是下午，在机场乘坐styline到waterfront。</p>
                    <p>先来到Gastown，这个蒸汽钟用蒸汽作动力，高2米，四面有钟面，钟盘以下完全透明，可以清晰看见零部件的运作。每隔15分钟，它们就会惊天动地嘶叫上好一会儿，并喷射出蒸汽来。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title10">
        <h4 className="tooltipped title" data-tooltip="Maple Tree Square">枫树广场</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/2.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Maple+Tree+Square,+Vancouver,+BC/@49.2834016,-123.1061831,17z/data=!3m1!4b1!4m5!3m4!1s0x548671774ec789ed:0x8f0ba62a2d67e218!8m2!3d49.2833664!4d-123.104129">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">枫树广场</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9992">介绍</a>
        <div id="modal9992" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">枫树广场 - 介绍</h4>
            <p>枫树广场坐落在温哥华水道，鲍威尔，亚历山大和Carrall街交汇处，是温哥华拍摄最多，历史最悠久的十字路口之一。</p>

            <p className="grey-text">Maple Tree Square sits at one of the most photographed, and most historic, intersections in Vancouver where Water, Powell, Alexander, and Carrall streets meet.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://miss604.com/2016/01/maple-tree-square-in-gastown.html">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/2.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>Gassy Jack statue</p>
                    <p>就在蒸汽钟的旁边，是枫树广场。枫树广场坐落在温哥华水道，鲍威尔，亚历山大和Carrall街交汇处，是温哥华拍摄最多，历史最悠久的十字路口之一。</p>
                    <p>这个雕像叫Gassy Jack statue，它向19世纪城市最初的盖斯镇定居点的创始人致敬。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title11">
        <h4 className="tooltipped title" data-tooltip="China Town">中国城</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/3.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Dr.+Sun+Yat-Sen+Classical+Chinese+Garden/@49.2797972,-123.1062925,17z/data=!3m2!4b1!5s0x5486717af328724d:0x56d516fa8638d3dd!4m5!3m4!1s0x5486717a910c3af1:0x2ad3b98f246a262!8m2!3d49.2797937!4d-123.1041038">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">中山公园</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9993">介绍</a>
        <div id="modal9993" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">中山公园 - 介绍</h4>
            <p>被称为唐人街象征的温哥华中山公园坐落于唐人街的入口处。这是一座明朝样式的中国传统庭园，是模仿苏州庭园兴建而成，为纪念国父孙中山先生便以中山命名。传统中国的古典花园韵味，就在亭台楼阁、岁寒三友松竹梅和水池小溪中，身处异乡，却在此观得苏州之美，感觉说不出的奇妙。</p>

            <p className="grey-text">Dr. Sun Yat-Sen Classical Chinese Garden, known as the symbol of Chinatown, is located at the entrance of Chinatown. This is a traditional Chinese garden in the style of the Ming Dynasty. It was built after imitating the Suzhou garden. It was named after Zhongshan in memory of the founding father Sun Yat-sen. The charm of the classical garden of traditional China lies in the pavilions, three friends of Sui Han, pine, bamboo and plum, and pools and creeks. Living in a foreign land, but seeing the beauty of Suzhou here, it feels indescribable.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%B1%B1%E5%85%AC%E5%9B%AD/3560852?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/3.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>中山公园有着传统中国的古典花园韵味。在亭台楼阁、岁寒三友松竹梅和水池小溪中，身处异乡，却在此观得苏州之美。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title12">
        <h4 className="tooltipped title" data-tooltip="Stanley Park">史丹利公园</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/4.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Stanley+Park/@49.3042619,-123.1464409,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718cad26e4a3:0x364a639db409e216!8m2!3d49.3042584!4d-123.1442523">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">史丹利公园</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9994">介绍</a>
        <div id="modal9994" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">史丹利公园 - 介绍</h4>
            <p>闻名世界的史丹利公园离温哥华市区只有十五分钟步行路程。以红杉等针叶树木为主的原始森林是公园最知名的美景。</p>

            <p className="grey-text">The world-famous Stanley Park is only a 15-minute walk from downtown Vancouver. The primeval forest dominated by coniferous trees such as redwoods is the most famous beauty of the park.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/4.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>斯坦利公园的环岛道路是游人散步和自行车爱好者的天堂，在两侧景色优美的道路上，还时可见到滑轮好手的身姿。而公园中的网球场和高尔夫球场是喜爱运动的温哥华市民常到的地方。
                    <br/>
                    <br/>
                    除了森林美景，濒临英国湾的斯坦利公园还有几个长长的海滩，让人体验海滩美景，在这里不管是欣赏海景，还是体味沙滩乐趣，都是一种享受。</p>
                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="grey-text">[Source From...]</span>
            </a>  
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title13">
        <h4 className="tooltipped title" data-tooltip="English Bay & Sunset Beach">英吉利湾&日落海滩</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/5.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/English+Bay/@49.2848575,-123.1768664,14z/data=!3m1!4b1!4m5!3m4!1s0x54867239831d561d:0x369eb4823ccb8325!8m2!3d49.2871809!4d-123.1614389">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">英吉利湾</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Sunset+Beach+Park/@49.2799563,-123.1409304,17z/data=!3m1!4b1!4m5!3m4!1s0x5486722db4346a01:0x6ee8acb0cf88be00!8m2!3d49.2799528!4d-123.1387417">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">日落海滩</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9995">介绍</a>
        <div id="modal9995" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">英吉利湾&日落海滩 - 介绍</h4>
            <p>英吉利湾位于加拿大不列颠哥伦比亚省的温哥华市，在市区半岛和福溪附近。 它由Burrard入口的南侧组成，从西南的Point Grey延伸到东北的Prospect Point。
            <br/>
            <br/>
            日落海滩位于西区，靠近伯拉德街大桥和温哥华国际旅馆。 温哥华水上运动中心位于日落海滩的东端，紧邻伯拉德街大桥的北端。 在温暖的月份，海滩上有救生员值班。 公共洗手间和特许摊位就在附近。 自行车道，步行道和直排轮滑道蜿蜒蜿蜒在海滩区上方，一个方向通往斯坦利公园，另一个方向通往耶鲁镇。 温哥华规模的游泳馆温哥华水上运动中心的南部有一个无牵引绳的区域。 这是观看温哥华烟花的热门地点。
            </p>

            <p className="grey-text">English Bay is located in Vancouver, British Columbia, Canada, west of the downtown peninsula and False Creek. It consists of the south side of the Burrard Inlet, extending from Point Grey in the southwest to Prospect Point in the northeast.
            <br/>
            <br/>
            Sunset Beach is situated in the West End near the Burrard Street Bridge and Vancouver International Hostel. The Vancouver Aquatic Centre lies at the East end of Sunset beach right next to the North end of Burrard Street Bridge. The beach has lifeguards on duty in the warm months. Public washrooms and concession stands are nearby. Biking, walking and inline skating paths wind above the beach area, leading to Stanley Park in one direction and Yaletown in the other. There is an off leash area to the south of the Vancouver Aquatic Centre, an Olympic size natatorium. It is a popular location for watching Vancouver fireworks.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/English_Bay,_Vancouver">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>  
            <br/>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Sunset_Beach_(Vancouver)">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/5.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>随后我来到英吉利湾和日落海滩。温哥华的气候非常温暖舒适，人们三三两两悠闲自在地坐在海滩边。</p>
                    <p>我沿着海岸线从北走到南，吹着海风，十分惬意。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title14">
        <h4 className="tooltipped title" data-tooltip="Burrard Street Bridge & Granville Bridge">布勒桥&格兰维尔街大桥</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/6.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Burrard+Street+Bridge/@49.2753244,-123.1397086,17z/data=!3m1!4b1!4m5!3m4!1s0x548673cd73ffa317:0x74f6d019649bcfba!8m2!3d49.2753209!4d-123.1375199">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">布勒桥</span>
                </a>

                
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9996">介绍</a>
        <div id="modal9996" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">布勒桥&格兰维尔街大桥 - 介绍</h4>
            <p>布勒桥是加拿大卑诗省温哥华市内一条桁架桥，横越福溪的西端，连接温哥华市中心及基斯兰奴区。大桥现时有5条行车线，贯通两岸的布勒街，并设于行车线两旁设有行人及自行车通道。大桥的装饰艺术风格令其成为温市的主要地标之一。
                <br/><br/>
            格兰维尔街大桥不列颠哥伦比亚省温哥华的8车道大桥。大桥高27.4米，横跨福溪和格兰维尔岛。99号公路通行其上。此处原来的大桥于1889年建成。这是一座732米长的低矮木栈桥。靠近北端的通航孔是一个木桁架回转开启孔，两端由钢索斜拉挂在中央木塔上。大桥的主要设计由加拿大和平铁路公司完成，耗资一点六万美元。大桥于1891年改造加宽，在两侧设置了电车轨道，而在回转孔范围内，两侧的轨道交汇到了一起。第二座桥于1909年建成。这是一座更长的钢桥，通航孔是一个下承式桁架回转开启孔。
            </p>

            <p className="grey-text">Burrard Street Bridge is a truss bridge in Vancouver, British Columbia, Canada. It crosses the western end of False Creek and connects downtown Vancouver and Kitsilano District. The bridge currently has 5 traffic lanes running through Buller Street on both sides of the strait. Pedestrian and bicycle lanes are provided on both sides of the traffic lane. The Art Deco style of the bridge makes it one of the main landmarks of Vancouver.
            <br/><br/>
            Granville Bridge An 8-lane bridge in Vancouver, British Columbia. The bridge is 27.4 meters high and spans False Creek and Granville Island. Highway 99 runs through it. The original bridge here was completed in 1889. This is a low wooden trestle bridge with a length of 732 meters. The navigation hole near the north end is a wooden truss swing opening hole, and both ends are hung on the central wooden tower by steel cables. The main design of the bridge was completed by the Canadian Peace Railway Company at a cost of 16,000 US dollars. The bridge was remodeled and widened in 1891. Tram tracks were set on both sides, and within the revolving hole, the tracks on both sides merged together. The second bridge was completed in 1909. This is a longer steel bridge, and the navigation hole is a through-type truss turning opening hole.
            </p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%B8%83%E5%8B%92%E6%A1%A5/14484441?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a> 
            <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.mipang.com/places/2626/photos/1314812.2b94ce077d">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/6.jpg" alt="" className="responsive-img"></img>
                    <br></br>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Granville+Bridge/@49.2726183,-123.1353376,17z/data=!3m1!4b1!4m5!3m4!1s0x548673ce1bbf24af:0xa61bd203d6fdec42!8m2!3d49.2726148!4d-123.1331489">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">格兰维尔街大桥</span>
                </a>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>从英吉利湾一直走到格兰维尔街大桥，天越来越暗，人也有些乏了。</p>
                    <p>随后，我回到downtown吃晚饭。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title15">
        <h4 className="tooltipped title" data-tooltip="Vancouver Public Library">温哥华公共图书馆</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/7.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Vancouver+Public+Library,+Central+Library+(Open+with+Limited+Services+-+Children%E2%80%99s+Library,+Level+2+and+Level+3)/@49.2765089,-123.1358956,14z/data=!4m8!1m2!2m1!1svancouver+public+library!3m4!1s0x5486717e9849da43:0xb9df0be6adeff97b!8m2!3d49.2797275!4d-123.1156216">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">温哥华公共图书馆</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9997">介绍</a>
        <div id="modal9997" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">温哥华公共图书馆 - 介绍</h4>
            <p>温哥华公共图书馆是加拿大不列颠哥伦比亚省温哥华的公共图书馆系统，经费由温哥华市政府提供。总馆位于温哥华市中心的图书馆广场，市内还有另外21间分馆。 系统收纳资料包括书籍、视听资料、报章、期刊、只读光碟数据库及缩微资料等，总藏量超过267万项，当中约一半藏于总馆。
<br/>
<br/>
温哥华公共图书馆是加拿大不列颠哥伦比亚省温哥华的公共图书馆系统，经费由温哥华市政府提供。总馆位于温哥华市中心的图书馆广场，市内还有另外21间分 馆。系统收纳资料包括书籍、视听资料、报章、期刊、只读光碟数据库及缩微资料等，总藏量超过267万项，当中约一半藏于总馆。持有温哥华公共图书馆图书证 的用户超过37万3千人，而系统旗下的物资每年被用户借阅逾900万次。</p>

            <p className="grey-text">The Vancouver Public Library is a public library system in Vancouver, British Columbia, Canada, funded by the City of Vancouver. The main library is located in Library Plaza in downtown Vancouver, and there are 21 other branches in the city. The system includes books, audiovisual materials, newspapers, periodicals, CD-ROM databases and microfilm materials, etc. The total collection of more than 2.67 million items, of which about half is in the main library.
            <br/>
<br/>
The Vancouver Public Library is a public library system in Vancouver, British Columbia, Canada, funded by the City of Vancouver. The main library is located in Library Plaza in downtown Vancouver, and there are 21 other branches in the city. The system includes books, audiovisual materials, newspapers, periodicals, CD-ROM databases and microfilm materials, etc. The total collection of more than 2.67 million items, of which about half is in the main library. There are more than 373,000 users who hold library cards of the Vancouver Public Library, and the materials under the system are borrowed by users over 9 million times each year.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.senseluxury.com/guides/Canada-Vancouver/scenery-1909">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        
    </div>

    <div className="titles" id="title16">
        <h4 className="tooltipped title" data-tooltip="Canada Place">加拿大广场</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img11/8.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Canada+Place/@49.2888283,-123.1133096,17z/data=!3m1!4b1!4m5!3m4!1s0x5486719d24e2e021:0xb7057fe085c86109!8m2!3d49.2888248!4d-123.1111209">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">加拿大广场</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9998">介绍</a>
        <div id="modal9998" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">加拿大广场 - 介绍</h4>
            <p>加拿大广场是一栋位于不列颠哥伦比亚省温哥华的Burrard Inlet滨水区的建筑。 它是温哥华会议中心，泛太平洋温哥华酒店，温哥华世界贸易中心和虚拟飞行加拿大FlyOver的所在地。 建筑物的外部被类似帆的织物屋顶所覆盖。 它也是该地区的主要游轮客运码头，始发至阿拉斯加。 该建筑是由建筑师Zeidler Roberts Partnership与Musson Cattell Mackey Partnership和DA Architects + Planners合资设计的。
<br/><br/>
可以通过附近的海滨车站终点站的轻轨线或温哥华的西科尔多瓦街到达加拿大广场。 建筑的白色帆使它成为城市的重要地标，并且与澳大利亚悉尼的悉尼歌剧院和科罗拉多州丹佛的丹佛国际机场进行了比较。</p>

            <p className="grey-text">Canada Place is a building situated on the Burrard Inlet waterfront of Vancouver, British Columbia. It is the home of the Vancouver Convention Centre, the Pan Pacific Vancouver Hotel, Vancouver's World Trade Centre, and the virtual flight ride FlyOver Canada. The building's exterior is covered by fabric roofs resembling sails. It is also the main cruise ship passenger terminal for the region, where cruises to Alaska originate. The building was designed by architects Zeidler Roberts Partnership in joint venture with Musson Cattell Mackey Partnership and DA Architects + Planners.
            <br/><br/>
Canada Place can be reached via the SkyTrain line at the nearby Waterfront Station terminus or via West Cordova Street in Vancouver. The white sails of the building have made it a prominent landmark for the city, as well as drawing comparisons to the Sydney Opera House in Sydney, Australia and the Denver International Airport in Denver, Colorado.
</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Canada_Place">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        <div className="titleContent">
            <h5>2016/07/01</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img12/7.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>国庆节烟花</p>
                    <p>逛了一天，又回到了Canada Place。今天是国庆节，来凑个热闹。来看烟花的人非常多。</p>
                    <p>这次转机时间有限，只逛了逛市中心的景点，下次有时间再来更深入地了解这个美丽的城市。</p>
                </div>
            </div>



        </div>
        
    </div>


    <h4 className="title"> </h4>

    {/* <div className="Comment">
    
        <div className="row">   
        <div className="col s1 m1 l1">
            <a className="btn btn-floating black lighten-1 ">YX</a>
        </div>
        <div className="col s11 m11 l11 commentContent">
            <form action="">
                <div className="input-field">
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">发表评论</label>
                </div>
            </form>
        </div>
        </div>

      

    </div> */}
    


</div>
</div>
          
            
<Footer/>
            </section>
        )
    }
}

   




export default travelNoteVancouverCN;