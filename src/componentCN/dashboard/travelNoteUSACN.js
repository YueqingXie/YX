import React, { Component } from 'react';
import Footer from '../layout/Footer';



class travelNoteUSACN extends Component {

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
    <li><a href="/travelNoteUSA" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelNoteUSA" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

           
            <div className="row hide-on-small-only" id="travelNoteUSA">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">奥兰多</div>
                            <li className="titleDate">
                                <a href="#title0">2017/02/21</a>
                            </li>
                            <li className="smallTitle">
                                <a>0.1/ </a>
                                <a href="#title0">抵达</a>
                            </li>
                            <li className="titleDate">
                                <a href="#title1">2017/02/22</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">环球影城</a>
                            </li>
                            <li className="titleDate">
                                <a href="#title2">2017/02/23</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.1/ </a>
                                <a href="#title2">冒险岛</a>
                            </li>
                            <li className="titleDate">
                                <a href="#title3">2017/02/24</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.1/ </a>
                                <a href="#title3">神奇王国</a>
                            </li>
                            <li className="titleDate">
                                <a href="#title4">2017/02/25</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.1/ </a>
                                <a href="#title4">未来世界</a>
                            </li>



                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteUSA">
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
                                    <span>2017-02-21</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>出行天数</span>
                                    <span> / </span>
                                    <span>6天</span>
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

                    <div className="titles" id="title0">
                        <h4 className="title">Holiday Inn Resort Orlando</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img13/0.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Holiday+Inn+Resort+Orlando+Lake+Buena+Vista/@28.3722121,-81.504916,17z/data=!3m1!4b1!4m9!3m8!1s0x88e769400504dd55:0x6a7b805e2371072d!5m3!1s2020-11-11!4m1!1i2!8m2!3d28.3722074!4d-81.5027273">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Holiday Inn Resort Orlando</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <p>酒店是Holiday Inn Resort Orlando - Lake Buena Vista</p>
                                <p>定了五晚，$1600。</p>
                                <p>有游泳池，打印机。晚上可以泡温泉。</p>
                                <p>酒店有通往各个景点的shuttle bus，问前台要时间表。</p>
                                <p>也可以打车前往，离的都没有很远。</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="titles" id="title1">
                        <h4 className="tooltipped title" data-tooltip="Universal Studios Florida">环球影城</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img13/1.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Universal+Studios+Florida/@28.4751631,-81.4692205,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77ec39415df75:0xf985d8fc7734a5a1!8m2!3d28.4751584!4d-81.4670318">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">环球影城</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal1">介绍</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">环球影城 - 介绍</h4>
                            <p>佛罗里达环球影城是位于佛罗里达奥兰多的主题公园和制作工作室。 公园于1990年6月7日开放，主题是娱乐业，尤其是电影和电视。 公园鼓励游客“骑电影”，并设有众多景点和现场表演。 它是更大的奥兰多环球影城度假村的一部分。 2017年，该公园接待了约1,020万游客，将其列为美国第六大主题公园和全球第九大主题公园。</p>
                            <p className="grey-text">Universal Studios Florida is a theme park and production studio located in Orlando, Florida. Opened on June 7, 1990, the park's theme is the entertainment industry, in particular movies and television. The park encourages its guests to "ride the movies" and features numerous attractions and live shows. It is a component of the larger Universal Orlando Resort. The park hosted an estimated 10.2 million visitors in 2017, ranking it as the sixth most attended theme park in the United States and the ninth most attended theme park worldwide.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Universal_Studios_Florida">
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
                            <h5>2017/02/22</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/1.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>地图</p>
                                    <p>推荐指数：❤️❤️❤️❤️</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/2.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Harry Potter and the Escape from Gringotts</p>
                                    <p>《哈利·波特与格林杰特的逃生》是由环球创意公司设计，位于哈利·波特的魔法世界–对角巷/伦敦，是由Intamin在佛罗里达环球影城建造的室内钢过山车。</p>
                                    <p>过山车在受控照明环境中利用特殊效果，并且还采用动画和实景序列的基于运动的3D投影来增强体验。</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Harry_Potter_and_the_Escape_from_Gringotts">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>   
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/3.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>哈利波特哥布林</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>园内风景</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/5.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>游行</p>
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="Universal's Islands of Adventure">冒险岛</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img13/2.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Universal's+Islands+of+Adventure/@28.4715157,-81.4732161,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77edfac4210bd:0x1364056e556d89f3!8m2!3d28.471511!4d-81.4710274">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">冒险岛</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal2">介绍</a>
                        <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">冒险岛 - 介绍</h4>
                            <p>环球冒险岛乐园（英文：Universal's Islands of Adventure）是一个位于美国佛罗里达州奥兰多的主题乐园。乐园在1999年5月28日与环球CityWalk同时开幕，属于奥兰多环球影城的一部份，它的开幕将奥兰多环球影城由一个乐园转变成为度假村。乐园的标语是「Live the Adventure」（享受冒险）。 
                            <br/>
<br/>
乐园的整体主题是一趟探索的旅程，游客从主要的港口出发前往六座分别有不同主题的岛屿，每座岛屿都强调了冒险的要素。第七座岛屿哈利波特的魔法世界在2010年6月8日开幕，以著名的小说和电影《哈利波特》系列为主题，这座岛屿是自乐园开幕以来最大的建设计划。在2012年，总共约有798万名游客造访了冒险岛乐园，令它成为全美国第七和全世界第十受欢迎的主题乐园。 
<br/>
<br/>
与临近的佛罗里达环球影城相同，冒险岛乐园的主题并不仅限于环球影业的相关作品。事实上，除了「失落的大陆」、「入口港」和「侏罗纪公园」之外，其他岛屿的主题都是来自不同电影公司的授权。许多这些电影公司并没有经营自己的主题乐园。这些岛屿包括苏斯港（Seuss Landing，来自苏斯博士企业）、哈利波特的魔法世界（来自华纳兄弟）、卡通礁湖（Toon Lagoon，来自派拉蒙影业）和漫威超级英雄岛（ Marvel Super Hero Island，来自漫威娱乐）。</p>

                            <p className="grey-text">Universal's Islands of Adventure (English: Universal's Islands of Adventure) is a theme park located in Orlando, Florida, USA. The park opened at the same time as Universal CityWalk on May 28, 1999. It is part of Universal Studios Orlando. Its opening transformed Universal Studios Orlando from a park into a resort. The slogan of the park is "Live the Adventure".
                            <br/>
<br/>
The overall theme of the park is a journey of exploration. Tourists depart from the main ports to six islands with different themes. Each island emphasizes the element of adventure. The Wizarding World of Harry Potter, the seventh island, opened on June 8, 2010. With the theme of the famous novel and movie "Harry Potter" series, this island is the largest construction project since the opening of the park. In 2012, about 7.98 million tourists visited MapleStory, making it the seventh most popular theme park in the United States and the tenth most popular theme park in the world.
<br/>
<br/>
Like the nearby Universal Studios Florida, the theme of Islands of Adventure is not limited to related works of Universal Pictures. In fact, apart from "Lost Continent", "Port of Entry" and "Jurassic Park", the themes of the other islands are all authorized by different film companies. Many of these film companies do not operate their own theme parks. These islands include Seuss Landing (from Dr. Seuss Enterprise), The Wizarding World of Harry Potter (from Warner Bros.), Toon Lagoon (from Paramount Pictures) and Marvel Superhero Island ( Marvel Super Hero Island, from Marvel Entertainment).</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%86%92%E9%9A%AA%E5%B3%B6%E6%A8%82%E5%9C%92#%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%96%E7%95%8C">
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
                            <h5>2017/02/23</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/6.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>地图</p>
                                    <p>推荐指数：❤️❤️❤️❤️❤️</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/7.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/8.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>哈利波特的魔法世界
<br/>
<br/>
在2010年6月18日，哈利波特的魔法世界正式开幕，它是乐园的第七个岛屿，也是乐园投资最大的建设。哈利波特的魔法世界根据英国畅销小说《哈利波特》的故事和角色而设计的主题乐园。园区分为三部份，由霍格华兹城堡（Hogwarts castle）、活米村（The village of Hogsmeade）以及禁忌森林（Forbidden Forest）所组成。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/9.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                <p>活米村是乐园的商店和服务区，这里有各种参考原著的特色商店及餐厅等。
<br/>
<br/>
三根扫帚酒吧（Three Broomsticks）— 餐厅，售卖小说中深受巫师们喜爱的「奶油啤酒」（Butterbeer）等饮品及食物
桑科的店（Zonko's）— 售卖各种恶作剧玩具
蜂蜜公爵（Honeydukes）— 糖果店，售卖「巧克力蛙」和「柏蒂全口味豆」等糖果
德维与班吉（Dervish and Banges）— 礼品店，售卖各式商品，例如「魔杖」、「飞天扫帚」等等。
猫头鹰邮局（Owl Post）— 能寄出盖有「霍格华兹」邮戳的信件</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%96%E7%95%8C">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="grey-text">[Source From...]</span>
                            </a> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/10.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/11.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>The incredible hulk coaster</p>
                                    <p>不可思议的绿巨人过山车是一艘发射过山车，位于奥兰多环球影城度假村内的环球冒险岛上。 过山车由Werner Stengel设计，由Bolliger＆Mabillard制造，以Marvel's Hulk为主题，并于1999年5月28日向公众开放。</p>
                                    
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/The_Incredible_Hulk_Coaster">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="grey-text">[Source From...]</span>
                            </a> 
                            <br/>
                        
                            <p>很好玩，我玩了大概四五次。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title3">
                        <h4 className="tooltipped title" data-tooltip="Magic Kingdom">神奇王国</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img13/3.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Magic+Kingdom+Park/@28.4176845,-81.5832537,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd7e536aa54b81:0x66b8bcd58da841a!8m2!3d28.417663!4d-81.581212">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">神奇王国</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal3">介绍</a>
                        <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">神奇王国 - 介绍</h4>
                            <p>神奇王国又称为奥兰多迪士尼乐园、佛州迪士尼乐园，是美国佛罗里达州里的世界第一个神奇王国型的经典迪士尼乐园，也是世界上第二座、美国本土第二座的迪士尼乐园；
<br/>
<br/>
它开始时的主题到现在一直都是“世界上最具魔力的国度”，与世界第一个元祖迪士尼乐园的“世界上最具欢乐的国度”相对。 另外，2008年有1,700万游客来访，从2008年开始它就超越了世界第一个迪士尼、成为世界上游客最多的主题乐园，直到现在。
<br/>
<br/>
神奇王国的象征、也是自2006年6月起华特迪士尼影业的电影作品开头的场景——灰姑娘城堡，已经成为整个华特迪士尼公司和迪士尼影业的代表性标志。
<br/>
<br/>
最后，它还是世界其他地区的迪士尼乐园——东京迪士尼乐园、巴黎迪士尼乐园、香港迪士尼乐园、上海迪士尼乐园的规划模板，其他非美国的迪士尼乐园都是按照神奇王国的规划而建造、而不是世界第一座迪士尼乐园。</p>

                            <p className="grey-text">Magic Kingdom, also known as Orlando Disneyland and Florida Disneyland, is the world's first Magic Kingdom-style classic Disneyland in Florida, USA, and the second Disneyland in the world and the second in the United States;
<br/>
<br/>
Its theme at the beginning has always been "the most magical country in the world", as opposed to "the most joyous country in the world" in the world's first ancestor Disneyland. In addition, 17 million tourists visited in 2008. Since 2008, it has surpassed the world's first Disneyland and has become the world's most visited theme park until now.
<br/>
<br/>
The symbol of the Magic Kingdom and the opening scene of Walt Disney Pictures' movie works since June 2006-Cinderella Castle, has become a representative symbol of the entire Walt Disney Company and Disney Pictures.
<br/>
<br/>
Finally, it is also a planning template for Disney parks in other parts of the world-Tokyo Disneyland, Disneyland Paris, Hong Kong Disneyland, and Shanghai Disneyland. Other non-US Disney parks are built according to the plan of the Magic Kingdom, not the world. The first Disneyland.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E7%A5%9E%E5%A5%87%E7%8E%8B%E5%9C%8B">
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
                            <h5>2017/02/24</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/12.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>地图</p>
                                    <p>推荐指数：❤️❤️❤️</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/13.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>魔法王国更适合小孩子玩。过山车没有那么刺激，到处都有卖米奇玩具。</p>
                                    <p>是一个适合拍照的地方。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/14.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/15.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>
                            



                        </div>
                        
                    </div>

                    <div className="titles" id="title4">
                        <h4 className="tooltipped title" data-tooltip="Epcot">未来世界</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img13/4.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Epcot/@28.3746987,-81.5515927,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd7fafde6c311b:0xea245263cb7597bd!8m2!3d28.374694!4d-81.549404">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">未来世界</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal4">介绍</a>
                        <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">未来世界 - 介绍</h4>
                            <p>Epcot、或者未来世界，是一座位于美国佛罗里达州布埃纳文图拉湖华特迪士尼世界度假区里的迪士尼主题公园，它是该度假区内的第二座主题公园，艾波卡特在1982年10月1日开启，当时叫做EPCOT Center，艾波卡特是全世界第二大的迪士尼主题乐园，其面积大小为121.4公顷，前一名是迪士尼动物王国。它的设计中处处使用完美对称法、不偏不倚，从卫星地图看也是完美的上北下南形制，另外此迪士尼主题乐园是唯一扩建后不会改变其原有形状的迪士尼主题乐园。
<br/>
<br/>
艾波卡特的英文--EPCOT,是根据Experimental Prototype Community of Tomorrow（未来社区的实验原型）的缩写，所以根据此主题、园区内分为两个部分：
<br/>
<br/>
一个切合未来的主题园区，内容基本和生态环保、太空航天有关，和迪士尼乐园中拥有相近概念的明日世界不同的是艾波卡特拥娱乐性更少教育性更强，而且因为是1980年代建造的“未来园区”,所以以现在的眼光来看非但不未来、里面的很多科技介绍和游乐设施还有点老旧了；
<br/>
<br/>
另外一个是表达“世界一家、实验性的国际社区”的概念、把地球各国文化整合的园区，内涵地球11个国家的建筑、商店、传统工艺品和餐厅（美国、日本、中国、加拿大、墨西哥、英国、法国、德国、意大利、摩洛哥、挪威），在里面相当于小型的世界万博会。</p>

                            <p className="grey-text">Epcot is a Disney theme park located in the Walt Disney World Resort in Lake Buenaventura, Florida, USA. It is the second theme park in the resort. Epcot in 1982 It opened on October 1, and was called EPCOT Center at the time. Epcot is the second largest Disney theme park in the world, with an area of ​​121.4 hectares. The former is Disney Animal Kingdom. Its design uses perfect symmetry and unbiasedness everywhere. From the satellite map, it is also a perfect north-south shape. In addition, this Disney theme park is the only Disney theme park that will not change its original shape after expansion.
                            <br/>
<br/>
EPCOT, is an abbreviation based on Experimental Prototype Community of Tomorrow, so according to this theme, the park is divided into two parts:
<br/>
<br/>
A theme park suitable for the future. The content is basically related to ecological and environmental protection, space and aerospace. The difference from Tomorrowland, which has similar concepts in Disneyland, is that Epcot has less entertainment and is more educational, and it was built in the 1980s "Future Park", so from the current perspective, not only is it not the future, many of the technology introductions and amusement facilities in it are still a bit old;
<br/>
<br/>
The other is a park that expresses the concept of “one world, an experimental international community” and integrates the cultures of all countries on the earth. It contains buildings, shops, traditional crafts and restaurants in 11 countries on the earth (the United States, Japan, China, Canada, Mexico, Britain, France, Germany, Italy, Morocco, Norway), which is equivalent to a small World Expo.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E8%89%BE%E6%B3%A2%E5%8D%A1%E7%89%B9">
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
                            <h5>2017/02/25</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img14/16.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>地图</p>
                                    <p>推荐指数：❤️❤️</p>
                                    <p>表达了“世界一家、实验性的国际社区”的概念、把地球各国文化整合的园区，内涵地球11个国家的建筑、商店、传统工艺品和餐厅（美国、日本、中国、加拿大、墨西哥、英国、法国、德国、意大利、摩洛哥、挪威），相当于小型的世界万博会。</p>
                                    <p>娱乐性很小，更多的是教育性。</p>
                                {/* <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                                <span className="grey-text">[Source From...]</span>
                                </a>   */}
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
            

            <div className="row hide-on-med-and-up" id="travelNoteUSA">

<div className="col s12 m12 l12 noteUSA">
    
<a href="" className="sidenav-trigger" data-target="mobile-menu999">
        <i className="material-icons smallnotenav" >menu</i>
    </a>
    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
            
    <div className="bigTitle">奥兰多</div>
            <li className="titleDate">
                <a href="#title5">2017/02/21</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title5">抵达</a>
            </li>
            <li className="titleDate">
                <a href="#title6">2017/02/22</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title6">环球影城</a>
            </li>
            <li className="titleDate">
                <a href="#title7">2017/02/23</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title7">冒险岛</a>
            </li>
            <li className="titleDate">
                <a href="#title8">2017/02/24</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title8">神奇王国</a>
            </li>
            <li className="titleDate">
                <a href="#title9">2017/02/25</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title9">未来世界</a>
            </li>
    </ul>


        <div className="row">
            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
            <div className="row travelDetail">
                <div className="time col s12 m4 l4">
                    <i className=" material-icons left">access_time</i>
                    <span>出发时间</span>
                    <span> / </span>
                    <span>2017-02-21</span>
                </div>
                <div className="day col s12 m4 l4">
                    <i className=" material-icons left">wb_sunny</i>
                    <span>出行天数</span>
                    <span> / </span>
                    <span>6天</span>
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

    <div className="titles" id="title5">
        <h4 className="title">Holiday Inn Resort Orlando</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img13/0.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Holiday+Inn+Resort+Orlando+Lake+Buena+Vista/@28.3722121,-81.504916,17z/data=!3m1!4b1!4m9!3m8!1s0x88e769400504dd55:0x6a7b805e2371072d!5m3!1s2020-11-11!4m1!1i2!8m2!3d28.3722074!4d-81.5027273">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Holiday Inn Resort Orlando</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
                <p>酒店是Holiday Inn Resort Orlando - Lake Buena Vista</p>
                <p>定了五晚，$1600。</p>
                <p>有游泳池，打印机。晚上可以泡温泉。</p>
                <p>酒店有通往各个景点的shuttle bus，问前台要时间表。</p>
                <p>也可以打车前往，离的都没有很远。</p>
            </div>
        </div>
        
    </div>

    <div className="titles" id="title6">
        <h4 className="tooltipped title" data-tooltip="Universal Studios Florida">环球影城</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img13/1.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Universal+Studios+Florida/@28.4751631,-81.4692205,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77ec39415df75:0xf985d8fc7734a5a1!8m2!3d28.4751584!4d-81.4670318">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">环球影城</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9991">介绍</a>
        <div id="modal9991" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">环球影城 - 介绍</h4>
            <p>佛罗里达环球影城是位于佛罗里达奥兰多的主题公园和制作工作室。 公园于1990年6月7日开放，主题是娱乐业，尤其是电影和电视。 公园鼓励游客“骑电影”，并设有众多景点和现场表演。 它是更大的奥兰多环球影城度假村的一部分。 2017年，该公园接待了约1,020万游客，将其列为美国第六大主题公园和全球第九大主题公园。</p>
            <p className="grey-text">Universal Studios Florida is a theme park and production studio located in Orlando, Florida. Opened on June 7, 1990, the park's theme is the entertainment industry, in particular movies and television. The park encourages its guests to "ride the movies" and features numerous attractions and live shows. It is a component of the larger Universal Orlando Resort. The park hosted an estimated 10.2 million visitors in 2017, ranking it as the sixth most attended theme park in the United States and the ninth most attended theme park worldwide.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Universal_Studios_Florida">
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
            <h5>2017/02/22</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/1.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>地图</p>
                    <p>推荐指数：❤️❤️❤️❤️</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/2.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>Harry Potter and the Escape from Gringotts</p>
                    <p>《哈利·波特与格林杰特的逃生》是由环球创意公司设计，位于哈利·波特的魔法世界–对角巷/伦敦，是由Intamin在佛罗里达环球影城建造的室内钢过山车。</p>
                    <p>过山车在受控照明环境中利用特殊效果，并且还采用动画和实景序列的基于运动的3D投影来增强体验。</p>
                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Harry_Potter_and_the_Escape_from_Gringotts">
                        <span className="grey-text">[Source From...]</span>
                    </a>   
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/3.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>哈利波特哥布林</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/4.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>园内风景</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/5.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>游行</p>
                </div>
            </div>


        </div>
        
    </div>

    <div className="titles" id="title7">
        <h4 className="tooltipped title" data-tooltip="Universal's Islands of Adventure">冒险岛</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img13/2.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Universal's+Islands+of+Adventure/@28.4715157,-81.4732161,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77edfac4210bd:0x1364056e556d89f3!8m2!3d28.471511!4d-81.4710274">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">冒险岛</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9992">介绍</a>
        <div id="modal9992" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">冒险岛 - 介绍</h4>
            <p>环球冒险岛乐园（英文：Universal's Islands of Adventure）是一个位于美国佛罗里达州奥兰多的主题乐园。乐园在1999年5月28日与环球CityWalk同时开幕，属于奥兰多环球影城的一部份，它的开幕将奥兰多环球影城由一个乐园转变成为度假村。乐园的标语是「Live the Adventure」（享受冒险）。 
            <br/>
<br/>
乐园的整体主题是一趟探索的旅程，游客从主要的港口出发前往六座分别有不同主题的岛屿，每座岛屿都强调了冒险的要素。第七座岛屿哈利波特的魔法世界在2010年6月8日开幕，以著名的小说和电影《哈利波特》系列为主题，这座岛屿是自乐园开幕以来最大的建设计划。在2012年，总共约有798万名游客造访了冒险岛乐园，令它成为全美国第七和全世界第十受欢迎的主题乐园。 
<br/>
<br/>
与临近的佛罗里达环球影城相同，冒险岛乐园的主题并不仅限于环球影业的相关作品。事实上，除了「失落的大陆」、「入口港」和「侏罗纪公园」之外，其他岛屿的主题都是来自不同电影公司的授权。许多这些电影公司并没有经营自己的主题乐园。这些岛屿包括苏斯港（Seuss Landing，来自苏斯博士企业）、哈利波特的魔法世界（来自华纳兄弟）、卡通礁湖（Toon Lagoon，来自派拉蒙影业）和漫威超级英雄岛（ Marvel Super Hero Island，来自漫威娱乐）。</p>

            <p className="grey-text">Universal's Islands of Adventure (English: Universal's Islands of Adventure) is a theme park located in Orlando, Florida, USA. The park opened at the same time as Universal CityWalk on May 28, 1999. It is part of Universal Studios Orlando. Its opening transformed Universal Studios Orlando from a park into a resort. The slogan of the park is "Live the Adventure".
            <br/>
<br/>
The overall theme of the park is a journey of exploration. Tourists depart from the main ports to six islands with different themes. Each island emphasizes the element of adventure. The Wizarding World of Harry Potter, the seventh island, opened on June 8, 2010. With the theme of the famous novel and movie "Harry Potter" series, this island is the largest construction project since the opening of the park. In 2012, about 7.98 million tourists visited MapleStory, making it the seventh most popular theme park in the United States and the tenth most popular theme park in the world.
<br/>
<br/>
Like the nearby Universal Studios Florida, the theme of Islands of Adventure is not limited to related works of Universal Pictures. In fact, apart from "Lost Continent", "Port of Entry" and "Jurassic Park", the themes of the other islands are all authorized by different film companies. Many of these film companies do not operate their own theme parks. These islands include Seuss Landing (from Dr. Seuss Enterprise), The Wizarding World of Harry Potter (from Warner Bros.), Toon Lagoon (from Paramount Pictures) and Marvel Superhero Island ( Marvel Super Hero Island, from Marvel Entertainment).</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%86%92%E9%9A%AA%E5%B3%B6%E6%A8%82%E5%9C%92#%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%96%E7%95%8C">
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
            <h5>2017/02/23</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/6.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>地图</p>
                    <p>推荐指数：❤️❤️❤️❤️❤️</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/7.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/8.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>哈利波特的魔法世界
<br/>
<br/>
在2010年6月18日，哈利波特的魔法世界正式开幕，它是乐园的第七个岛屿，也是乐园投资最大的建设。哈利波特的魔法世界根据英国畅销小说《哈利波特》的故事和角色而设计的主题乐园。园区分为三部份，由霍格华兹城堡（Hogwarts castle）、活米村（The village of Hogsmeade）以及禁忌森林（Forbidden Forest）所组成。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/9.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                <p>活米村是乐园的商店和服务区，这里有各种参考原著的特色商店及餐厅等。
<br/>
<br/>
三根扫帚酒吧（Three Broomsticks）— 餐厅，售卖小说中深受巫师们喜爱的「奶油啤酒」（Butterbeer）等饮品及食物
桑科的店（Zonko's）— 售卖各种恶作剧玩具
蜂蜜公爵（Honeydukes）— 糖果店，售卖「巧克力蛙」和「柏蒂全口味豆」等糖果
德维与班吉（Dervish and Banges）— 礼品店，售卖各式商品，例如「魔杖」、「飞天扫帚」等等。
猫头鹰邮局（Owl Post）— 能寄出盖有「霍格华兹」邮戳的信件</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E7%9A%84%E9%AD%94%E6%B3%95%E4%B8%96%E7%95%8C">
                {/* <i className="material-icons left">details</i>   */}
                <span className="grey-text">[Source From...]</span>
            </a> 
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/10.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/11.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>The incredible hulk coaster</p>
                    <p>不可思议的绿巨人过山车是一艘发射过山车，位于奥兰多环球影城度假村内的环球冒险岛上。 过山车由Werner Stengel设计，由Bolliger＆Mabillard制造，以Marvel's Hulk为主题，并于1999年5月28日向公众开放。</p>
                    
                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/The_Incredible_Hulk_Coaster">
                {/* <i className="material-icons left">details</i>   */}
                <span className="grey-text">[Source From...]</span>
            </a> 
            <br/>
        
            <p>很好玩，我玩了大概四五次。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title8">
        <h4 className="tooltipped title" data-tooltip="Magic Kingdom">神奇王国</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img13/3.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Magic+Kingdom+Park/@28.4176845,-81.5832537,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd7e536aa54b81:0x66b8bcd58da841a!8m2!3d28.417663!4d-81.581212">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">神奇王国</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9993">介绍</a>
        <div id="modal9993" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">神奇王国 - 介绍</h4>
            <p>神奇王国又称为奥兰多迪士尼乐园、佛州迪士尼乐园，是美国佛罗里达州里的世界第一个神奇王国型的经典迪士尼乐园，也是世界上第二座、美国本土第二座的迪士尼乐园；
<br/>
<br/>
它开始时的主题到现在一直都是“世界上最具魔力的国度”，与世界第一个元祖迪士尼乐园的“世界上最具欢乐的国度”相对。 另外，2008年有1,700万游客来访，从2008年开始它就超越了世界第一个迪士尼、成为世界上游客最多的主题乐园，直到现在。
<br/>
<br/>
神奇王国的象征、也是自2006年6月起华特迪士尼影业的电影作品开头的场景——灰姑娘城堡，已经成为整个华特迪士尼公司和迪士尼影业的代表性标志。
<br/>
<br/>
最后，它还是世界其他地区的迪士尼乐园——东京迪士尼乐园、巴黎迪士尼乐园、香港迪士尼乐园、上海迪士尼乐园的规划模板，其他非美国的迪士尼乐园都是按照神奇王国的规划而建造、而不是世界第一座迪士尼乐园。</p>

            <p className="grey-text">Magic Kingdom, also known as Orlando Disneyland and Florida Disneyland, is the world's first Magic Kingdom-style classic Disneyland in Florida, USA, and the second Disneyland in the world and the second in the United States;
<br/>
<br/>
Its theme at the beginning has always been "the most magical country in the world", as opposed to "the most joyous country in the world" in the world's first ancestor Disneyland. In addition, 17 million tourists visited in 2008. Since 2008, it has surpassed the world's first Disneyland and has become the world's most visited theme park until now.
<br/>
<br/>
The symbol of the Magic Kingdom and the opening scene of Walt Disney Pictures' movie works since June 2006-Cinderella Castle, has become a representative symbol of the entire Walt Disney Company and Disney Pictures.
<br/>
<br/>
Finally, it is also a planning template for Disney parks in other parts of the world-Tokyo Disneyland, Disneyland Paris, Hong Kong Disneyland, and Shanghai Disneyland. Other non-US Disney parks are built according to the plan of the Magic Kingdom, not the world. The first Disneyland.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E7%A5%9E%E5%A5%87%E7%8E%8B%E5%9C%8B">
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
            <h5>2017/02/24</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/12.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>地图</p>
                    <p>推荐指数：❤️❤️❤️</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/13.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>魔法王国更适合小孩子玩。过山车没有那么刺激，到处都有卖米奇玩具。</p>
                    <p>是一个适合拍照的地方。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/14.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/15.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>
            



        </div>
        
    </div>

    <div className="titles" id="title9">
        <h4 className="tooltipped title" data-tooltip="Epcot">未来世界</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img13/4.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Epcot/@28.3746987,-81.5515927,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd7fafde6c311b:0xea245263cb7597bd!8m2!3d28.374694!4d-81.549404">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">未来世界</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9994">介绍</a>
        <div id="modal9994" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">未来世界 - 介绍</h4>
            <p>Epcot、或者未来世界，是一座位于美国佛罗里达州布埃纳文图拉湖华特迪士尼世界度假区里的迪士尼主题公园，它是该度假区内的第二座主题公园，艾波卡特在1982年10月1日开启，当时叫做EPCOT Center，艾波卡特是全世界第二大的迪士尼主题乐园，其面积大小为121.4公顷，前一名是迪士尼动物王国。它的设计中处处使用完美对称法、不偏不倚，从卫星地图看也是完美的上北下南形制，另外此迪士尼主题乐园是唯一扩建后不会改变其原有形状的迪士尼主题乐园。
<br/>
<br/>
艾波卡特的英文--EPCOT,是根据Experimental Prototype Community of Tomorrow（未来社区的实验原型）的缩写，所以根据此主题、园区内分为两个部分：
<br/>
<br/>
一个切合未来的主题园区，内容基本和生态环保、太空航天有关，和迪士尼乐园中拥有相近概念的明日世界不同的是艾波卡特拥娱乐性更少教育性更强，而且因为是1980年代建造的“未来园区”,所以以现在的眼光来看非但不未来、里面的很多科技介绍和游乐设施还有点老旧了；
<br/>
<br/>
另外一个是表达“世界一家、实验性的国际社区”的概念、把地球各国文化整合的园区，内涵地球11个国家的建筑、商店、传统工艺品和餐厅（美国、日本、中国、加拿大、墨西哥、英国、法国、德国、意大利、摩洛哥、挪威），在里面相当于小型的世界万博会。</p>

            <p className="grey-text">Epcot is a Disney theme park located in the Walt Disney World Resort in Lake Buenaventura, Florida, USA. It is the second theme park in the resort. Epcot in 1982 It opened on October 1, and was called EPCOT Center at the time. Epcot is the second largest Disney theme park in the world, with an area of ​​121.4 hectares. The former is Disney Animal Kingdom. Its design uses perfect symmetry and unbiasedness everywhere. From the satellite map, it is also a perfect north-south shape. In addition, this Disney theme park is the only Disney theme park that will not change its original shape after expansion.
            <br/>
<br/>
EPCOT, is an abbreviation based on Experimental Prototype Community of Tomorrow, so according to this theme, the park is divided into two parts:
<br/>
<br/>
A theme park suitable for the future. The content is basically related to ecological and environmental protection, space and aerospace. The difference from Tomorrowland, which has similar concepts in Disneyland, is that Epcot has less entertainment and is more educational, and it was built in the 1980s "Future Park", so from the current perspective, not only is it not the future, many of the technology introductions and amusement facilities in it are still a bit old;
<br/>
<br/>
The other is a park that expresses the concept of “one world, an experimental international community” and integrates the cultures of all countries on the earth. It contains buildings, shops, traditional crafts and restaurants in 11 countries on the earth (the United States, Japan, China, Canada, Mexico, Britain, France, Germany, Italy, Morocco, Norway), which is equivalent to a small World Expo.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E8%89%BE%E6%B3%A2%E5%8D%A1%E7%89%B9">
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
            <h5>2017/02/25</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img14/16.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>地图</p>
                    <p>推荐指数：❤️❤️</p>
                    <p>表达了“世界一家、实验性的国际社区”的概念、把地球各国文化整合的园区，内涵地球11个国家的建筑、商店、传统工艺品和餐厅（美国、日本、中国、加拿大、墨西哥、英国、法国、德国、意大利、摩洛哥、挪威），相当于小型的世界万博会。</p>
                    <p>娱乐性很小，更多的是教育性。</p>
                {/* <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%AF%E5%9D%A6%E5%88%A9%E5%85%AC%E5%9B%AD/1543282?fr=aladdin">
                <span className="grey-text">[Source From...]</span>
                </a>   */}
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

    




export default travelNoteUSACN;