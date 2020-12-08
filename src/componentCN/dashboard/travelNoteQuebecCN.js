import React, { Component } from 'react';
import Footer from '../layout/Footer';


class travelNoteQuebecCN extends Component {

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
    <li><a href="/travelNoteQuebec" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelNoteQuebec" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <div className="row hide-on-small-only" id="travelNoteQuebec">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">魁北克</div>
                            {/* <li className="titleDate">
                                <a href="#title0">2018/09/02</a>
                            </li>
                            <li className="smallTitle">
                                <a>0.1/ </a>
                                <a href="#title0">抵达</a>
                            </li> */}
                            <li className="titleDate">
                                <a href="#title1">2018/09/03</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">魁北克老城</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.2/ </a>
                                <a href="#title2">文明博物馆</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.3/ </a>
                                <a href="#title3">星型城堡</a>
                            </li>
                            <li className="titleDate">
                                <a href="#title4">2018/09/04</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.1/ </a>
                                <a href="#title4">蒙特伦西瀑布</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title5">其他</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.1/ </a>
                                <a href="#title5">Parc Omega动物园</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.2/ </a>
                                <a href="#title6">Mont Tremblant赏枫</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.3/ </a>
                                <a href="#title7">Mont Cascades滑雪</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.4/ </a>
                                <a href="#title8">Nordik Spa温泉</a>
                            </li>



                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteQuebec">
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
                                    <span>2018-09-02</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>出行天数</span>
                                    <span> / </span>
                                    <span>3天</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>人物</span>
                                    <span> / </span>
                                    <span>和同学</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>
{/* 
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
                        
                    </div> */}

                    <div className="titles" id="title1">
                        <h4 className="tooltipped title" data-tooltip="Old Quebec">魁北克老城</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/1.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Old+Quebec,+Quebec+City,+QC/@46.8104657,-71.2167008,15z/data=!3m1!4b1!4m5!3m4!1s0x4cb895d63bcbbf2b:0x42b3b6f9896f550!8m2!3d46.8121818!4d-71.2064933">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">魁北克老城</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal1">介绍</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">魁北克老城 - 介绍</h4>
                            <p>魁北克老城位于加拿大魁北克省的省府魁北克市市内。面积约1.35平方千米。原是北美印第安人部落的村聚。 1608年法国一名探险家率先对魁北克地进行开发建成，随后其成为新法兰西的首府。英法七年战争后归英国所有，1791年，成为英属北美下加拿大省的首府。
<br/>
<br/>
魁北克古城的城中心位于一块高地上，并保留着北美地区唯一留存至今的古城墙，全长4.6公里。古城区分上城区于下城区两大部分。作为魁北克历史城区的标志建筑的魁北克古堡（1892年建立）就坐落于上城区，耸立于戴蒙德角的最高点。
<br/>
<br/>
魁北克历史城区作为北美殖民化以及近代化进程的重要历史见证，于1985年被列入世界文化遗产。
<br/>
<br/>
魁北克历史城区到处禁行摩托车，持有通行证的住民以及工作者除外，但此摩托车禁令不在boulevard Champlain, rue Dalhousie, quai Saint-André, 或者 rue Saint-Paul实施。 </p>
                            <p className="grey-text">Old Quebec is located in Quebec City, the capital of Quebec Province, Canada. The area is about 1.35 square kilometers. It was originally a village gathering of North American Indian tribes. In 1608, a French explorer took the lead in developing and building Québec, which later became the capital of New France. After the Seven Years' War between Britain and France, it was owned by the United Kingdom. In 1791, it became the capital of the Canadian province of British North America.
<br/>
<br/>
The center of the ancient city of Quebec is located on a high ground, and retains the only ancient city wall in North America, which is 4.6 kilometers long. The ancient city is divided into two parts: Shangcheng District and Xiacheng District. The Quebec Castle (established in 1892), a landmark of Quebec’s historic district, is located in the Upper City, towering at the highest point of Cape Diamond.
<br/>
<br/>
As an important historical witness to the process of colonization and modernization in North America, the Historic District of Quebec was listed as a World Cultural Heritage in 1985.
<br/>
<br/>
Motorbikes are banned everywhere in the historic city of Quebec, except for residents and workers who hold passes. However, the motorcycle ban is not enforced on boulevard Champlain, rue Dalhousie, quai Saint-André, or rue Saint-Paul.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E9%AD%81%E5%8C%97%E5%85%8B%E8%80%81%E5%9F%8E">
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
                            <h5>2018/09/03</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/1.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/2.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/3.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>




                        </div>
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="Musée de la civilisation">文明博物馆</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/2.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Museum+of+Civilization/@46.8152942,-71.2044844,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e78305f25b:0x31fc070dab20df10!8m2!3d46.8152905!4d-71.2022957">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">文明博物馆</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal2">介绍</a>
                        <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">文明博物馆 - 介绍</h4>
                            <p>魁北克文明博物馆是加拿大魁北克省魁北克市的一个博物馆，位于历史悠久的魁北克老城，邻近圣劳伦斯河。它是由建筑师摩西·萨夫迪设计，1988年12月19日开幕。
<br/>
<br/>
博物馆建筑内整合了圣彼得街的前巴黎银行大楼和Maison Estèbe。博物馆举行永久和临时展览，通常是人文学科。此外还有儿童发现区，纪念品商店，餐厅和休闲室，并提供导览服务。</p>

                            <p className="grey-text">The Quebec Civilization Museum is a museum in Quebec City, Quebec, Canada. It is located in the historic Old City of Quebec, near the Saint Lawrence River. It was designed by the architect Moses Safdie and opened on December 19, 1988.
<br/>
<br/>
The museum building integrates the former BNP Paribas building and Maison Estèbe on St. Peter Street. The museum holds permanent and temporary exhibitions, usually in the humanities. There are also children’s discovery areas, souvenir shops, restaurants and lounges, and guided tours are provided.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E9%AD%81%E5%8C%97%E5%85%8B%E6%96%87%E6%98%8E%E5%8D%9A%E7%89%A9%E9%A6%86">
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
                            <h5>2018/09/03</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>博物馆以玻璃塔装饰构成令人印象深刻的外观。馆内以10个主题分别展示5万件呈现魁北克昔日生活的服饰、运动用品等。除了魁北克的历史，还触及世界名人对历史的影响，让参访者能够清楚得知文明的变化。</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E9%AD%81%E5%8C%97%E5%85%8B%E6%96%87%E6%98%8E%E5%8D%9A%E7%89%A9%E9%A6%86/15716937?fr=aladdin">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="grey-text">[Source From...]</span>
                            </a>  
                                </div>
                            </div>

                        



                        </div>
                        
                    </div>

                    <div className="titles" id="title3">
                        <h4 className="tooltipped title" data-tooltip="Citadelle of Quebec">星型城堡</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/3.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/La+Citadelle+de+Qu%C3%A9bec/@46.8078034,-71.2090873,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895da5c2dfc3b:0x98716b346f618306!8m2!3d46.8077997!4d-71.2068986">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">星型城堡</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal3">介绍</a>
                        <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">星型城堡 - 介绍</h4>
                            <p>魁北克城的星形城堡是北美大陆上最著名的军事防御要塞，城堡耸立于圣劳伦斯河的断崖上，扼守着圣劳伦斯运输河道的咽喉，被称作是当年大英帝国在北美最坚固的要塞之一。
                            <br/>
<br/>
                            星型城堡是北美最大的城堡，占地面积约达2.3平方公里，1745年由法国人建筑。英国人于1850年将这座城堡完工，将其视为城市防御系统的重点。这座城堡还是加拿大皇军22军团的驻地。每逢夏季期间，每天早上10:00进行守卫队换岗仪式，收尾队在准时撤岗时会敲响他们的战鼓。星形城堡要塞现在已成为游客们探寻古迹的好地方，城堡要塞将魁北克老城围住，漫步于于老城区内，顺着蜿蜒崎岖的小巷，漫步或是坐老式马拉轿车，都别具一番情趣。除此之外，游客还可参观老城的小博物馆和蜡像馆。
                            <br/>
<br/>
鉴于这座要塞目前仍为加拿大唯一的法语部队——加拿大皇家陆军22团的驻地，旅游者必须在导游的带领下才可以进入城堡，参观要塞内的营地、博物馆、总督府和炮台等等外，夏天来到这里还可以观赏到卫兵换岗的传统仪式。
<br/>
<br/>
导游分为英语讲解和法语讲解两种，每种语言的游客凑够了20人，由导游带领大家集体参观。</p>

                            <p className="grey-text">
                            Citadelle of Quebec is the most famous military fortress on the North American continent. The castle stands on the cliff of the St. Lawrence River and guards the throat of the St. Lawrence transportation channel. It is known as one of the strongest fortresses of the British Empire in North America. One.
                            <br/>
<br/>
                            Citadelle of Quebec is the largest castle in North America, covering an area of ​​approximately 2.3 square kilometers. It was built by the French in 1745. The British completed the castle in 1850 and regarded it as the focal point of the city's defense system. The castle is also the resident of the 22nd Regiment of the Royal Canadian Army. During the summer, the guard changing ceremony is held every morning at 10:00, and the finishing team will sound their drums when they are removed on time. Citadelle of Quebec fortress has now become a good place for tourists to explore the historical sites. The castle fortress surrounds the Old City of Quebec, strolling in the old city, along the winding and rugged alleys, strolling or riding in the old horse-drawn sedan. Have a special taste. In addition, tourists can also visit the small museum and wax museum in the old city.
                            <br/>
<br/>
Given that this fortress is still Canada’s only French-speaking force, the 22nd Regiment of the Royal Canadian Army, tourists must be guided by a guide to enter the castle and visit the camps, museums, governor’s house and fort in the fort, etc. In summer, you can also watch the traditional ceremony of changing the guard when you come here in summer.
<br/>
<br/>
The tour guide is divided into two types: English and French. There are enough tourists in each language to make up 20 people. The tour guide will lead everyone to visit.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%98%9F%E5%9E%8B%E5%9F%8E%E5%A0%A1">
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
                            <h5>2018/09/03</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/5.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>可以俯瞰魁北克老城。</p>
                                </div>
                            </div>
                            



                        </div>
                        
                    </div>

                    <div className="titles" id="title4">
                        <h4 className="tooltipped title" data-tooltip="Montmorency Falls">蒙特伦西瀑布</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/4.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Montmorency+Falls/@46.8881859,-71.1523985,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb8bea29e1000ab:0xd54275f120d61923!8m2!3d46.8881823!4d-71.1502098">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">蒙特伦西瀑布</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal4">介绍</a>
                        <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">蒙特伦西瀑布 - 介绍</h4>
                            <p>蒙特伦西瀑布位于加拿大魁北克省的西边，是蒙特伦西河注入圣罗伦斯河时所形成的瀑布。
<br/>
<br/>
蒙特伦西瀑布的声势非常之浩大，因为它落差有83米，是尼亚加拉瀑布的1.5倍，大量的水从峭立的悬崖倾泻直落圣罗伦斯河，发出震耳欲聋的声响，气势相当雄伟。瀑布前方的湖面在冬季也会结冰，如果冰层够厚，可在上面骑雪上摩托车、行走或攀登冰瀑。在瀑布旁沿着山壁建有阶梯，还有许多近距离的观瀑小径、凉亭、桥梁，可以让游客更易感受到瀑布的壮观景色。</p>

                            <p className="grey-text">Montmorency Falls is located in the west of Quebec, Canada. It is a waterfall formed when the Montmorency River flows into the Saint Lawrence River.
<br/>
<br/>
The momentum of Montmorency Falls is very majestic, because it has a drop of 83 meters, which is 1.5 times that of Niagara Falls. A large amount of water pours from the steep cliffs straight down the St. Lawrence River, making a deafening sound, and the momentum is quite majestic. The lake in front of the waterfall also freezes in winter. If the ice layer is thick enough, you can ride a snowmobile, walk or climb an ice waterfall on it. There are steps built along the mountain wall beside the waterfall, and there are many close waterfall viewing paths, pavilions, and bridges, which can make visitors more easily feel the spectacular scenery of the waterfall.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%92%99%E7%89%B9%E4%BC%A6%E8%A5%BF%E7%80%91%E5%B8%83/7316878?fr=aladdin">
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
                            <h5>2018/09/04</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/6.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>蒙特伦西瀑布的落差有83米，是尼亚加拉瀑布的1.5倍。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/7.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/8.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title5">
                        <h4 className="title">Parc Omega</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/5.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Parc+Omega/@45.6826026,-74.9459987,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce5770d9c031cf:0xbdc98c0f0eee9151!8m2!3d45.6825989!4d-74.94381">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Parc Omega</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal5">介绍</a>
                        <div id="modal5" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Parc Omega - 介绍</h4>
                            <p>欧米茄公园（Parc Omega）是位于加拿大魁北克圣母院（位于蒙特贝洛（Montebello）以北）的野生动物园。沿着12公里（7.5英里）的自然路线是湖泊，草地，小山谷，森林和岩石山丘。它是许多野生动物物种的家园，包括海狸，麋鹿，浣熊，狼，土狼，麝鼠，鹿，乌龟，野猪，赤狐，高山高地山羊，驯鹿，黑熊，驼鹿，野火鸡和野牛。在夏季，有表演以featuring鸟，特别是秃头鹰为特色。该地点还设有一家全景餐厅。该公园全年无休。
                            <br/>
<br/>
公园是一种直通车道的体验，这意味着游客可以坐在车里，然后沿着蜿蜒的小径驶过公园。他们还提供了三个步行道，游乐场和野餐区。
<br/>
<br/>
该公园设有两个低功率FM广播电台，以英语和法语提供指导和指示。完整的体验大约需要两到三个小时。
<br/>
<br/>
旅游开始时，可​​以在游客中心购买袋装胡萝卜；在整个旅游过程中，将它们喂给“安全”动物（麋鹿等）。</p>

                            <p className="grey-text">Parc Omega is a safari park in Notre-Dame-de-Bonsecours, Quebec, Canada (just north of Montebello). Along a 12-kilometre (7.5 mi) nature route are lakes, meadows, small valleys, forests, and rocky hills. It is home to many wildlife species including beaver, elk, raccoon, timber wolf, coyote, muskox, deer, turtle, boar, red fox, Alpine ibex, caribou, black bear, moose, wild turkey, and bison. During the summer there are shows featuring birds of prey especially bald eagles. The site also has a restaurant with a panoramic view. The park is open daily, year round.
                            <br/>
<br/>
The park is a drive-through experience, meaning visitors stay in their cars and drive through the park on a winding trail. They also offer three walking trails, playgrounds and picnic areas.
<br/>
<br/>
The park runs two low-power FM radios stations that provide guidance and direction, in English and French. The complete experience takes about two to three hours.
<br/>
<br/>
Bags of carrots can be purchased at the visitors center at the start of the tour; these are fed to "safe" animals (elk, etc.) throughout the tour.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Parc_Omega">
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
                            <h5></h5>
                            {/* <h5>2018/09/03</h5> */}
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/9.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>公园通车，游客可以坐在车里，然后沿着蜿蜒的小径驶过公园。</p>
                                    <p>可以自备胡萝卜喂鹿。</p>
                                </div>
                            </div>

                        



                        </div>
                        
                    </div>

                    <div className="titles" id="title6">
                        <h4 className="title">Mont Tremblant</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/6.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Mont-Tremblant,+QC/@46.1759111,-74.7324139,11z/data=!3m1!4b1!4m5!3m4!1s0x4ccf760dbc945217:0x5040cadae4d54c0!8m2!3d46.1184616!4d-74.5961852">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Mont Tremblant</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal6">介绍</a>
                        <div id="modal6" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Mont Tremblant - 介绍</h4>
                            <p>蒙特朗布朗山是加拿大魁北克劳伦山脉的全年开放度假胜地，位于蒙特利尔西北约130公里（80英里）。 它是最著名的滑雪胜地，但在夏季，特兰布朗湖（Lake Tremblant）适合游泳，并设有两个高尔夫球场。 这座山的名字叫Mont Tremblant，源自阿尔冈金族的原住民，他们称之为“颤抖的山”。
                            <br/>
<br/>
顶峰海拔875 m（2,871 ft），使其成为劳伦山脉的最高峰之一。 主要下坡区以北1公里处是边缘区，林间空地滑雪区以北，而真正的山顶Pic Johanssen 932 m以北2.8公里处是山顶滑雪道，山顶上有一条小径，是滑雪者和寄宿者的黑钻石。 该度假村由Alterra Mountain Company拥有。
<br/>
<br/>
这座山和度假胜地是蒙特朗布朗国家公园的一部分，都位于蒙特朗布朗村庄附近。</p>

                            <p className="grey-text">Mont Tremblant is a year-round resort in the Laurentian Mountains of Quebec, Canada, located about 130 km (80 mi) northwest of Montreal. It is best known as a ski destination, but also features Lake Tremblant suitable for swimming and two golf courses in the summer months. The name of the mountain, Mont Tremblant, was derived from the Algonquin indigenous people, who called it the "trembling mountain."
                            <br/>
<br/>
The summit is at an elevation of 875 m (2,871 ft), which makes it one of the tallest peaks in the Laurentians. One km north of the principal down hill area is the Edge, an area of glade skiing and 2.8 km north of that is the true summit, Pic Johanssen 932 m, which has a trail over the top and is Black Diamond for skiers and boarders. The resort is owned by Alterra Mountain Company.
<br/>
<br/>
The mountain and resort are part of the Mont-Tremblant National Park and are both located near the village of Mont-Tremblant.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Mont_Tremblant_Resort">
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
                            {/* <h5>2018/09/03</h5> */}
                            <h5></h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/10.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Mont Tremblant是个全年开放度假胜地。秋天可以坐缆车赏枫，冬天可以滑雪泡温泉。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/11.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>

                        



                        </div>
                        
                    </div>

                    <div className="titles" id="title7">
                        <h4 className="title">Mont Cascades</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/7.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Mont+Cascades/@45.5924236,-75.8510596,17z/data=!3m1!4b1!4m5!3m4!1s0x4cd1e0d096707ec7:0x544780232c234803!8m2!3d45.5924199!4d-75.8488709">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Mont Cascades</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal7">介绍</a>
                        <div id="modal7" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Mont Cascades - 介绍</h4>
                            <p>设有夏季水上乐园的休闲区，以及冬季滑雪，雪鞋步道和雪地公园。</p>

                            <p className="grey-text">Recreational area with a summer water park, plus skiing, snowshoe trails & a snow park in winter.</p>  
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        {/* <div className="titleContent">
                            <h5>2018/09/03</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title8">
                        <h4 className="title">Nordik Spa</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img15/8.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Nordik+Spa-Nature+%7C+Chelsea/@45.5048987,-75.8050087,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce1d7c6539a4a3:0xaeaff7340f0ac503!8m2!3d45.504895!4d-75.80282">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Nordik Spa</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal8">介绍</a>
                        <div id="modal8" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Nordik Spa - 介绍</h4>
                            <p>水疗中心。 通过与自然疗法完美融合的热疗法和按摩疗法，提供刺激和振兴的体验，从而改善客人的健康状况。</p>

                            <p className="grey-text">Spa place. To improve health and well-being of our guests by providing a stimulating and rejuvenating experience with the benefits of thermotherapy and massage therapy, in perfect symbiosis with nature.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://chelsea.lenordik.com/en/about-us/who-we-are/">
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

                  
                        {/* <div className="titleContent">
                            <h5>2018/09/03</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p></p>
                                </div>
                            </div>
                        </div> */}
                        
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
            
            <div className="row hide-on-med-and-up" id="travelNoteQuebec">

<div className="col s12 m12 l12 noteQuebec">

<a href="" className="sidenav-trigger" data-target="mobile-menu999">
        <i className="material-icons smallnotenav" >menu</i>
    </a>
    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
           
    <div className="bigTitle">魁北克</div>

            <li className="titleDate">
                <a href="#title9">2018/09/03</a>
            </li>
            <li className="smallTitle">
                <a href="#title9">Old Quebec</a>
            </li>
            <li className="smallTitle">
                <a href="#title10">文明博物馆</a>
            </li>
            <li className="smallTitle">
                <a href="#title11">星型城堡</a>
            </li>
            <li className="titleDate">
                <a href="#title12">2018/09/04</a>
            </li>
            <li className="smallTitle">
                <a href="#title12">蒙特伦西瀑布</a>
            </li>

            <li className="titleDate">
                <a href="#title13">其他</a>
            </li>
            <li className="smallTitle">
                <a href="#title13">Parc Omega动物园</a>
            </li>
            <li className="smallTitle">
                <a href="#title14">Mont Tremblant赏枫</a>
            </li>
            <li className="smallTitle">
                <a href="#title15">Mont Cascades滑雪</a>
            </li>
            <li className="smallTitle">
                <a href="#title16">Nordik Spa温泉</a>
            </li>

    </ul>


        <div className="row">
            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
            <div className="row travelDetail">
                <div className="time col s12 m4 l4">
                    <i className=" material-icons left">access_time</i>
                    <span>出发时间</span>
                    <span> / </span>
                    <span>2018-09-02</span>
                </div>
                <div className="day col s12 m4 l4">
                    <i className=" material-icons left">wb_sunny</i>
                    <span>出行天数</span>
                    <span> / </span>
                    <span>3天</span>
                </div>
                <div className="people col s12 m4 l4">
                    <i className=" material-icons left">account_circle</i>
                    <span>人物</span>
                    <span> / </span>
                    <span>和同学</span>
                </div>
            </div>
            <div className="col s1 m1 l1"></div>
            </div>
        </div>
{/* 
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
        
    </div> */}

    <div className="titles" id="title9">
        <h4 className="tooltipped title" data-tooltip="Old Quebec">魁北克老城</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/1.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Old+Quebec,+Quebec+City,+QC/@46.8104657,-71.2167008,15z/data=!3m1!4b1!4m5!3m4!1s0x4cb895d63bcbbf2b:0x42b3b6f9896f550!8m2!3d46.8121818!4d-71.2064933">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">魁北克老城</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9991">介绍</a>
        <div id="modal9991" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">魁北克老城 - 介绍</h4>
            <p>魁北克老城位于加拿大魁北克省的省府魁北克市市内。面积约1.35平方千米。原是北美印第安人部落的村聚。 1608年法国一名探险家率先对魁北克地进行开发建成，随后其成为新法兰西的首府。英法七年战争后归英国所有，1791年，成为英属北美下加拿大省的首府。
<br/>
<br/>
魁北克古城的城中心位于一块高地上，并保留着北美地区唯一留存至今的古城墙，全长4.6公里。古城区分上城区于下城区两大部分。作为魁北克历史城区的标志建筑的魁北克古堡（1892年建立）就坐落于上城区，耸立于戴蒙德角的最高点。
<br/>
<br/>
魁北克历史城区作为北美殖民化以及近代化进程的重要历史见证，于1985年被列入世界文化遗产。
<br/>
<br/>
魁北克历史城区到处禁行摩托车，持有通行证的住民以及工作者除外，但此摩托车禁令不在boulevard Champlain, rue Dalhousie, quai Saint-André, 或者 rue Saint-Paul实施。 </p>
            <p className="grey-text">Old Quebec is located in Quebec City, the capital of Quebec Province, Canada. The area is about 1.35 square kilometers. It was originally a village gathering of North American Indian tribes. In 1608, a French explorer took the lead in developing and building Québec, which later became the capital of New France. After the Seven Years' War between Britain and France, it was owned by the United Kingdom. In 1791, it became the capital of the Canadian province of British North America.
<br/>
<br/>
The center of the ancient city of Quebec is located on a high ground, and retains the only ancient city wall in North America, which is 4.6 kilometers long. The ancient city is divided into two parts: Shangcheng District and Xiacheng District. The Quebec Castle (established in 1892), a landmark of Quebec’s historic district, is located in the Upper City, towering at the highest point of Cape Diamond.
<br/>
<br/>
As an important historical witness to the process of colonization and modernization in North America, the Historic District of Quebec was listed as a World Cultural Heritage in 1985.
<br/>
<br/>
Motorbikes are banned everywhere in the historic city of Quebec, except for residents and workers who hold passes. However, the motorcycle ban is not enforced on boulevard Champlain, rue Dalhousie, quai Saint-André, or rue Saint-Paul.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E9%AD%81%E5%8C%97%E5%85%8B%E8%80%81%E5%9F%8E">
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
            <h5>2018/09/03</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/1.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/2.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/3.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>




        </div>
        
    </div>

    <div className="titles" id="title10">
        <h4 className="tooltipped title" data-tooltip="Musée de la civilisation">文明博物馆</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/2.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Museum+of+Civilization/@46.8152942,-71.2044844,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e78305f25b:0x31fc070dab20df10!8m2!3d46.8152905!4d-71.2022957">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">文明博物馆</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9992">介绍</a>
        <div id="modal9992" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">文明博物馆 - 介绍</h4>
            <p>魁北克文明博物馆是加拿大魁北克省魁北克市的一个博物馆，位于历史悠久的魁北克老城，邻近圣劳伦斯河。它是由建筑师摩西·萨夫迪设计，1988年12月19日开幕。
<br/>
<br/>
博物馆建筑内整合了圣彼得街的前巴黎银行大楼和Maison Estèbe。博物馆举行永久和临时展览，通常是人文学科。此外还有儿童发现区，纪念品商店，餐厅和休闲室，并提供导览服务。</p>

            <p className="grey-text">The Quebec Civilization Museum is a museum in Quebec City, Quebec, Canada. It is located in the historic Old City of Quebec, near the Saint Lawrence River. It was designed by the architect Moses Safdie and opened on December 19, 1988.
<br/>
<br/>
The museum building integrates the former BNP Paribas building and Maison Estèbe on St. Peter Street. The museum holds permanent and temporary exhibitions, usually in the humanities. There are also children’s discovery areas, souvenir shops, restaurants and lounges, and guided tours are provided.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E9%AD%81%E5%8C%97%E5%85%8B%E6%96%87%E6%98%8E%E5%8D%9A%E7%89%A9%E9%A6%86">
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
            <h5>2018/09/03</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>博物馆以玻璃塔装饰构成令人印象深刻的外观。馆内以10个主题分别展示5万件呈现魁北克昔日生活的服饰、运动用品等。除了魁北克的历史，还触及世界名人对历史的影响，让参访者能够清楚得知文明的变化。</p>
                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E9%AD%81%E5%8C%97%E5%85%8B%E6%96%87%E6%98%8E%E5%8D%9A%E7%89%A9%E9%A6%86/15716937?fr=aladdin">
                {/* <i className="material-icons left">details</i>   */}
                <span className="grey-text">[Source From...]</span>
            </a>  
                </div>
            </div>

        



        </div>
        
    </div>

    <div className="titles" id="title11">
        <h4 className="tooltipped title" data-tooltip="Citadelle of Quebec">星型城堡</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/3.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/La+Citadelle+de+Qu%C3%A9bec/@46.8078034,-71.2090873,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895da5c2dfc3b:0x98716b346f618306!8m2!3d46.8077997!4d-71.2068986">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">星型城堡</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9993">介绍</a>
        <div id="modal9993" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">星型城堡 - 介绍</h4>
            <p>魁北克城的星形城堡是北美大陆上最著名的军事防御要塞，城堡耸立于圣劳伦斯河的断崖上，扼守着圣劳伦斯运输河道的咽喉，被称作是当年大英帝国在北美最坚固的要塞之一。
            <br/>
<br/>
            星型城堡是北美最大的城堡，占地面积约达2.3平方公里，1745年由法国人建筑。英国人于1850年将这座城堡完工，将其视为城市防御系统的重点。这座城堡还是加拿大皇军22军团的驻地。每逢夏季期间，每天早上10:00进行守卫队换岗仪式，收尾队在准时撤岗时会敲响他们的战鼓。星形城堡要塞现在已成为游客们探寻古迹的好地方，城堡要塞将魁北克老城围住，漫步于于老城区内，顺着蜿蜒崎岖的小巷，漫步或是坐老式马拉轿车，都别具一番情趣。除此之外，游客还可参观老城的小博物馆和蜡像馆。
            <br/>
<br/>
鉴于这座要塞目前仍为加拿大唯一的法语部队——加拿大皇家陆军22团的驻地，旅游者必须在导游的带领下才可以进入城堡，参观要塞内的营地、博物馆、总督府和炮台等等外，夏天来到这里还可以观赏到卫兵换岗的传统仪式。
<br/>
<br/>
导游分为英语讲解和法语讲解两种，每种语言的游客凑够了20人，由导游带领大家集体参观。</p>

            <p className="grey-text">
            Citadelle of Quebec is the most famous military fortress on the North American continent. The castle stands on the cliff of the St. Lawrence River and guards the throat of the St. Lawrence transportation channel. It is known as one of the strongest fortresses of the British Empire in North America. One.
            <br/>
<br/>
            Citadelle of Quebec is the largest castle in North America, covering an area of ​​approximately 2.3 square kilometers. It was built by the French in 1745. The British completed the castle in 1850 and regarded it as the focal point of the city's defense system. The castle is also the resident of the 22nd Regiment of the Royal Canadian Army. During the summer, the guard changing ceremony is held every morning at 10:00, and the finishing team will sound their drums when they are removed on time. Citadelle of Quebec fortress has now become a good place for tourists to explore the historical sites. The castle fortress surrounds the Old City of Quebec, strolling in the old city, along the winding and rugged alleys, strolling or riding in the old horse-drawn sedan. Have a special taste. In addition, tourists can also visit the small museum and wax museum in the old city.
            <br/>
<br/>
Given that this fortress is still Canada’s only French-speaking force, the 22nd Regiment of the Royal Canadian Army, tourists must be guided by a guide to enter the castle and visit the camps, museums, governor’s house and fort in the fort, etc. In summer, you can also watch the traditional ceremony of changing the guard when you come here in summer.
<br/>
<br/>
The tour guide is divided into two types: English and French. There are enough tourists in each language to make up 20 people. The tour guide will lead everyone to visit.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%98%9F%E5%9E%8B%E5%9F%8E%E5%A0%A1">
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
            <h5>2018/09/03</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/5.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>可以俯瞰魁北克老城。</p>
                </div>
            </div>
            



        </div>
        
    </div>

    <div className="titles" id="title12">
        <h4 className="tooltipped title" data-tooltip="Montmorency Falls">蒙特伦西瀑布</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/4.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Montmorency+Falls/@46.8881859,-71.1523985,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb8bea29e1000ab:0xd54275f120d61923!8m2!3d46.8881823!4d-71.1502098">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">蒙特伦西瀑布</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9994">介绍</a>
        <div id="modal9994" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">蒙特伦西瀑布 - 介绍</h4>
            <p>蒙特伦西瀑布位于加拿大魁北克省的西边，是蒙特伦西河注入圣罗伦斯河时所形成的瀑布。
<br/>
<br/>
蒙特伦西瀑布的声势非常之浩大，因为它落差有83米，是尼亚加拉瀑布的1.5倍，大量的水从峭立的悬崖倾泻直落圣罗伦斯河，发出震耳欲聋的声响，气势相当雄伟。瀑布前方的湖面在冬季也会结冰，如果冰层够厚，可在上面骑雪上摩托车、行走或攀登冰瀑。在瀑布旁沿着山壁建有阶梯，还有许多近距离的观瀑小径、凉亭、桥梁，可以让游客更易感受到瀑布的壮观景色。</p>

            <p className="grey-text">Montmorency Falls is located in the west of Quebec, Canada. It is a waterfall formed when the Montmorency River flows into the Saint Lawrence River.
<br/>
<br/>
The momentum of Montmorency Falls is very majestic, because it has a drop of 83 meters, which is 1.5 times that of Niagara Falls. A large amount of water pours from the steep cliffs straight down the St. Lawrence River, making a deafening sound, and the momentum is quite majestic. The lake in front of the waterfall also freezes in winter. If the ice layer is thick enough, you can ride a snowmobile, walk or climb an ice waterfall on it. There are steps built along the mountain wall beside the waterfall, and there are many close waterfall viewing paths, pavilions, and bridges, which can make visitors more easily feel the spectacular scenery of the waterfall.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%92%99%E7%89%B9%E4%BC%A6%E8%A5%BF%E7%80%91%E5%B8%83/7316878?fr=aladdin">
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
            <h5>2018/09/04</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/6.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>蒙特伦西瀑布的落差有83米，是尼亚加拉瀑布的1.5倍。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/7.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/8.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title13">
        <h4 className="title">Parc Omega</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/5.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Parc+Omega/@45.6826026,-74.9459987,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce5770d9c031cf:0xbdc98c0f0eee9151!8m2!3d45.6825989!4d-74.94381">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Parc Omega</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9995">介绍</a>
        <div id="modal9995" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Parc Omega - 介绍</h4>
            <p>欧米茄公园（Parc Omega）是位于加拿大魁北克圣母院（位于蒙特贝洛（Montebello）以北）的野生动物园。沿着12公里（7.5英里）的自然路线是湖泊，草地，小山谷，森林和岩石山丘。它是许多野生动物物种的家园，包括海狸，麋鹿，浣熊，狼，土狼，麝鼠，鹿，乌龟，野猪，赤狐，高山高地山羊，驯鹿，黑熊，驼鹿，野火鸡和野牛。在夏季，有表演以featuring鸟，特别是秃头鹰为特色。该地点还设有一家全景餐厅。该公园全年无休。
            <br/>
<br/>
公园是一种直通车道的体验，这意味着游客可以坐在车里，然后沿着蜿蜒的小径驶过公园。他们还提供了三个步行道，游乐场和野餐区。
<br/>
<br/>
该公园设有两个低功率FM广播电台，以英语和法语提供指导和指示。完整的体验大约需要两到三个小时。
<br/>
<br/>
旅游开始时，可​​以在游客中心购买袋装胡萝卜；在整个旅游过程中，将它们喂给“安全”动物（麋鹿等）。</p>

            <p className="grey-text">Parc Omega is a safari park in Notre-Dame-de-Bonsecours, Quebec, Canada (just north of Montebello). Along a 12-kilometre (7.5 mi) nature route are lakes, meadows, small valleys, forests, and rocky hills. It is home to many wildlife species including beaver, elk, raccoon, timber wolf, coyote, muskox, deer, turtle, boar, red fox, Alpine ibex, caribou, black bear, moose, wild turkey, and bison. During the summer there are shows featuring birds of prey especially bald eagles. The site also has a restaurant with a panoramic view. The park is open daily, year round.
            <br/>
<br/>
The park is a drive-through experience, meaning visitors stay in their cars and drive through the park on a winding trail. They also offer three walking trails, playgrounds and picnic areas.
<br/>
<br/>
The park runs two low-power FM radios stations that provide guidance and direction, in English and French. The complete experience takes about two to three hours.
<br/>
<br/>
Bags of carrots can be purchased at the visitors center at the start of the tour; these are fed to "safe" animals (elk, etc.) throughout the tour.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Parc_Omega">
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
            <h5></h5>
            {/* <h5>2018/09/03</h5> */}
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/9.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>公园通车，游客可以坐在车里，然后沿着蜿蜒的小径驶过公园。</p>
                    <p>可以自备胡萝卜喂鹿。</p>
                </div>
            </div>

        



        </div>
        
    </div>

    <div className="titles" id="title14">
        <h4 className="title">Mont Tremblant</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/6.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Mont-Tremblant,+QC/@46.1759111,-74.7324139,11z/data=!3m1!4b1!4m5!3m4!1s0x4ccf760dbc945217:0x5040cadae4d54c0!8m2!3d46.1184616!4d-74.5961852">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Mont Tremblant</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9996">介绍</a>
        <div id="modal9996" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Mont Tremblant - 介绍</h4>
            <p>蒙特朗布朗山是加拿大魁北克劳伦山脉的全年开放度假胜地，位于蒙特利尔西北约130公里（80英里）。 它是最著名的滑雪胜地，但在夏季，特兰布朗湖（Lake Tremblant）适合游泳，并设有两个高尔夫球场。 这座山的名字叫Mont Tremblant，源自阿尔冈金族的原住民，他们称之为“颤抖的山”。
            <br/>
<br/>
顶峰海拔875 m（2,871 ft），使其成为劳伦山脉的最高峰之一。 主要下坡区以北1公里处是边缘区，林间空地滑雪区以北，而真正的山顶Pic Johanssen 932 m以北2.8公里处是山顶滑雪道，山顶上有一条小径，是滑雪者和寄宿者的黑钻石。 该度假村由Alterra Mountain Company拥有。
<br/>
<br/>
这座山和度假胜地是蒙特朗布朗国家公园的一部分，都位于蒙特朗布朗村庄附近。</p>

            <p className="grey-text">Mont Tremblant is a year-round resort in the Laurentian Mountains of Quebec, Canada, located about 130 km (80 mi) northwest of Montreal. It is best known as a ski destination, but also features Lake Tremblant suitable for swimming and two golf courses in the summer months. The name of the mountain, Mont Tremblant, was derived from the Algonquin indigenous people, who called it the "trembling mountain."
            <br/>
<br/>
The summit is at an elevation of 875 m (2,871 ft), which makes it one of the tallest peaks in the Laurentians. One km north of the principal down hill area is the Edge, an area of glade skiing and 2.8 km north of that is the true summit, Pic Johanssen 932 m, which has a trail over the top and is Black Diamond for skiers and boarders. The resort is owned by Alterra Mountain Company.
<br/>
<br/>
The mountain and resort are part of the Mont-Tremblant National Park and are both located near the village of Mont-Tremblant.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Mont_Tremblant_Resort">
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
            {/* <h5>2018/09/03</h5> */}
            <h5></h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/10.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>Mont Tremblant是个全年开放度假胜地。秋天可以坐缆车赏枫，冬天可以滑雪泡温泉。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/11.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>

        



        </div>
        
    </div>

    <div className="titles" id="title15">
        <h4 className="title">Mont Cascades</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/7.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Mont+Cascades/@45.5924236,-75.8510596,17z/data=!3m1!4b1!4m5!3m4!1s0x4cd1e0d096707ec7:0x544780232c234803!8m2!3d45.5924199!4d-75.8488709">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Mont Cascades</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9997">介绍</a>
        <div id="modal9997" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Mont Cascades - 介绍</h4>
            <p>设有夏季水上乐园的休闲区，以及冬季滑雪，雪鞋步道和雪地公园。</p>

            <p className="grey-text">Recreational area with a summer water park, plus skiing, snowshoe trails & a snow park in winter.</p>  
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        {/* <div className="titleContent">
            <h5>2018/09/03</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>
        </div> */}
        
    </div>

    <div className="titles" id="title16">
        <h4 className="title">Nordik Spa</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img15/8.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Nordik+Spa-Nature+%7C+Chelsea/@45.5048987,-75.8050087,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce1d7c6539a4a3:0xaeaff7340f0ac503!8m2!3d45.504895!4d-75.80282">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Nordik Spa</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9998">介绍</a>
        <div id="modal9998" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Nordik Spa - 介绍</h4>
            <p>水疗中心。 通过与自然疗法完美融合的热疗法和按摩疗法，提供刺激和振兴的体验，从而改善客人的健康状况。</p>

            <p className="grey-text">Spa place. To improve health and well-being of our guests by providing a stimulating and rejuvenating experience with the benefits of thermotherapy and massage therapy, in perfect symbiosis with nature.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://chelsea.lenordik.com/en/about-us/who-we-are/">
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

  
        {/* <div className="titleContent">
            <h5>2018/09/03</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img16/4.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p></p>
                </div>
            </div>
        </div> */}
        
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

   


export default travelNoteQuebecCN;