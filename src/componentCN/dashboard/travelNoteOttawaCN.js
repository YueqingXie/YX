import React, { Component } from 'react';
import Footer from '../layout/Footer';



class travelNoteOttawaCN extends Component {

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
    <li><a href="/travelNoteOttawa" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelNoteOttawa" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <div className="row hide-on-small-only" id="travelNoteOttawa">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">渥太华</div>
                            {/* <li className="titleDate">
                                <a href="#title0">2018/09/02</a>
                            </li>
                            <li className="smallTitle">
                                <a>0.1/ </a>
                                <a href="#title0">抵达</a>
                            </li> */}
                            <li className="titleDate">
                                <a href="#title1">春</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">Commissioners Park</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title2">夏</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.1/ </a>
                                <a href="#title2">中国城</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.2/ </a>
                                <a href="#title3">Britannia沙滩</a>
                            </li>

                            
                            <li className="titleDate">
                                <a href="#title4">秋</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.1/ </a>
                                <a href="#title4">渥太华大学</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.2/ </a>
                                <a href="#title5">国会山</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.3/ </a>
                                <a href="#title6">里多厅</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.4/ </a>
                                <a href="#title7">里多瀑布</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.5/ </a>
                                <a href="#title8">国家美术馆</a>
                            </li>

                            <li className="smallTitle">
                                <a>3.6/ </a>
                                <a href="#title9">圣母院</a>
                            </li>

                            <li className="smallTitle">
                                <a>3.7/ </a>
                                <a href="#title10">小雷的爬行动物园</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.8/ </a>
                                <a href="#title11">Dows Lake Pavilion</a>
                            </li>
                            
                            
                            <li className="titleDate">
                                <a href="#title12">冬</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.1/ </a>
                                <a href="#title12">Byward Market</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.2/ </a>
                                <a href="#title13">里多运河</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.3/ </a>
                                <a href="#title14">邦联广场</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.4/ </a>
                                <a href="#title15">银行博物馆</a>
                            </li>



                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteOttawa">


                        <div className="row">
                            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
                            <div className="row travelDetail">
                                <div className="time col s12 m4 l4">
                                    <i className=" material-icons left">access_time</i>
                                    <span>出发时间</span>
                                    <span> / </span>
                                    <span>2016-09-01</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>出行天数</span>
                                    <span> / </span>
                                    <span>---</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>人物</span>
                                    <span> / </span>
                                    <span>---</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>

                    <div className="titles" id="title1">
                        <h4 className="title">Commissioners Park</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/1.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Commissioners+Park/@45.3974938,-75.7087034,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce05cd1151dd95:0xc574505c2a89591b!8m2!3d45.3974901!4d-75.7065147">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Commissioners Park</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal1">介绍</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Commissioners Park - 介绍</h4>
                            <p>Commissioners Park是位于加拿大安大略省渥太华的公园。 它位于The Glebe的最西端，被陶氏湖，普雷斯顿街，Carling大道和陶氏湖路所包围。
<br/>
<br/>
在整个温暖的月份里，这里是家庭散步的热门地方。 国家资本委员会负责维护公园，并在整个生长季节设法使花朵盛开。 在一年一度的加拿大郁金香节期间，它是一个主要的郁金香观赏区，该地区的郁金香浓度最高，达300,000。</p>
                            <p className="grey-text">Commissioners Park is a park in Ottawa, Ontario, Canada. It lies within the westernmost section of The Glebe, bounded by Dow's Lake, Preston Street, Carling Avenue and Dow's Lake Road.
                            <br/>
<br/>
Throughout the warmer months it is a popular place for family walks. The National Capital Commission maintains the park and manages to keep flowers blooming there throughout the growing season. During the annual Canadian Tulip Festival, it is a major tulip viewing area with the highest concentration of tulips in the region numbering as many as 300,000.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Commissioners_Park_(Ottawa)">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="China Town">中国城</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/2.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chinatown,+Ottawa,+ON/@45.4104795,-75.7123071,16z/data=!3m1!4b1!4m5!3m4!1s0x4cce044c13bc0b1d:0xecc3108b7b23e659!8m2!3d45.4098833!4d-75.7063119">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">中国城</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal2">介绍</a>
                        <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">China Town - 介绍</h4>
                            <p>渥太华的唐人街位于渥太华市区以西的萨默塞特街。 它从东部的Bay Street到西部的Rochester St（根据唐人街BIA）。 唐人街的标志继续沿萨默塞特郡一直延伸到普雷斯顿街，甚至在更西边也可以找到中国/亚洲餐馆。
<br/>
<br/>
BIA于1989年被指定，并被命名为Somerset Heights，直到2005年更名为唐人街。
<br/>
<br/>
虽然被正式指定为“唐人街”，但该地区还是许多亚洲文化的企业的故乡，例如越南，韩国和泰国。 专门从事Phở和点心的餐厅很普遍。 渥太华唐人街一方面具有城市特色，因为它不是一排排的购物中心，但另一方面，它集中于一条商业街，仅被住宅区所环绕。</p>
                            <p className="grey-text">Ottawa's Chinatown is located along Somerset Street west of downtown Ottawa. It runs from Bay Street in the east to Rochester St in the west (according to the Chinatown BIA). Signs for Chinatown continue along Somerset until Preston Street, and Chinese/Asian restaurants can be found even farther west.
                            <br/>
<br/>
The BIA was designated in 1989 and was named Somerset Heights until it was renamed Chinatown in 2005.
<br/>
<br/>
While officially designated "Chinatown," the area is home to businesses from many Asian cultures, such as Vietnamese, Korean and Thai. Restaurants specializing in Phở and dim sum are quite common. The Ottawa Chinatown has on one hand an urban character as it is not a cluster of strip malls, but on the other hand, it is focused on one commercial street, surrounded exclusively by residential areas.
</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Chinatown,_Ottawa">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title3">
                        <h4 className="tooltipped title" data-tooltip="Britannia Beach">Britannia沙滩</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/3.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Britannia+Beach/@45.3656877,-75.8043083,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce01227452795f:0x55ca4fb58ace3ca3!8m2!3d45.3653197!4d-75.8014626">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Britannia沙滩</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        {/* <a className="btn-flat modal-trigger right info " href="#modal3">介绍</a>
                        <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Britannia Beach - 介绍</h4>
                            <p>高公园是加拿大安大略省多伦多市的市政公园。 高地公园是一个休闲娱乐和自然公园，设有体育设施，文化设施，教育设施，花园，游乐场和动物园。 公园的三分之一仍处于自然状态，并具有罕见的橡木大草原生态。 高地公园于1876年向公众开放，其基础是从约翰·乔治·霍华德到多伦多市的土地遗赠。 它占地161公顷（400英亩），是仅次于百年纪念公园的多伦多第二大市政公园。</p>
                            <p className="grey-text">High Park is a municipal park in Toronto, Ontario, Canada. High Park is a mixed recreational and natural park, with sporting facilities, cultural facilities, educational facilities, gardens, playgrounds and a zoo. One-third of the park remains in a natural state, with a rare oak savannah ecology. High Park was opened to the public in 1876 and is based on a bequest of land from John George Howard to the City of Toronto. It spans 161 hectares (400 acres) and is the second-largest municipal park in Toronto, after Centennial Park.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/High_Park">
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div> */}

                        </div>
                            </div>
                        </div>

                  
                        {/* <div className="titleContent">
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title4">
                        <h4 className="tooltipped title" data-tooltip="uOttawa">渥太华大学</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/4.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/University+of+Ottawa/@45.4231101,-75.6853216,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce050a6db98d73:0x188a59c3622fdbae!8m2!3d45.4231064!4d-75.6831329">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">渥太华大学</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal4">介绍</a>
                        <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">uOttawa - 介绍</h4>
                            <p>渥太华大学（法语：Universitéd'Ottawa），通常称为uOttawa，是加拿大安大略省渥太华的双语公共研究型大学。 主校区位于渥太华市中心核心区的42.5公顷（105英亩），毗邻桑迪希尔住宅区，毗邻渥太华的里多运河。</p>
                            <p className="grey-text">The University of Ottawa (French: Université d'Ottawa), often referred to as uOttawa or U of O, is a bilingual public research university in Ottawa, Ontario, Canada. The main campus is located on 42.5 hectares (105 acres) in the heart of Ottawa's Downtown Core, adjacent to the residential neighbourhood of Sandy Hill, adjacent to Ottawa's Rideau Canal.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/University_of_Ottawa">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title5">
                        <h4 className="tooltipped title" data-tooltip="Parliament Hill">国会山</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/5.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Parliament+Hill/@45.4235974,-75.7031177,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04ff4fe494ef:0x26bb54f60c29f6e!8m2!3d45.4235937!4d-75.700929">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">国会山</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal5">介绍</a>
                        <div id="modal5" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Parliament Hill - 介绍</h4>
                            <p>国会山（法语：Colline du Parlement），俗称“山”，是加拿大安大略省渥太华市区渥太华河南岸的王室土地。 其哥特式复兴建筑套房是加拿大议会的所在地，具有具有国家象征意义的建筑元素。 国会山每年吸引大约300万游客。 国会保护局（PPS）负责在国会山和国会辖区进行执法。</p>
                            <p className="grey-text">Parliament Hill (French: Colline du Parlement), colloquially known as The Hill, is an area of Crown land on the southern banks of the Ottawa River in downtown Ottawa, Ontario, Canada. Its Gothic revival suite of buildings is the home of the Parliament of Canada and has architectural elements of national symbolic importance. Parliament Hill attracts approximately 3 million visitors each year. Law enforcement on Parliament Hill and in the parliamentary precinct is the responsibility of the Parliamentary Protective Service (PPS).</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Parliament_Hill">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title6">
                        <h4 className="tooltipped title" data-tooltip="Rideau Hall">里多厅</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/6.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Hall/@45.4445039,-75.6879901,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04deb2f708ef:0x9e476e1281e2fda3!8m2!3d45.4445002!4d-75.6858014">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">里多厅</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal6">介绍</a>
                        <div id="modal6" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Rideau Hall - 介绍</h4>
                            <p>里多厅（官方礼宾府）是加拿大君主及其代表加拿大总督在渥太华的官邸。 它位于加拿大首都萨塞克斯大道1号，占地0.36平方公里（88英亩），主要建筑包括约175个房间，占地9,500平方米（102,000平方英尺），周围有27个附属建筑。 里多厅（Rideau Hall）的场地位于渥太华市中心之外，使其具有私人住宅的特色。 它是联邦王室维护的两个官方王室住所之一，另一个是魁北克城堡。</p>
                            <p className="grey-text">Rideau Hall (officially Government House) is the official residence in Ottawa of both the Canadian monarch and his or her representative, the Governor General of Canada. It stands in Canada's capital on a 0.36-square-kilometre (88-acre) estate at 1 Sussex Drive, with the main building consisting of approximately 175 rooms across 9,500 square metres (102,000 sq ft), and 27 outbuildings around the grounds. Rideau Hall's site lies outside the centre of Ottawa, giving it the character of a private home. It is one of two official royal residences maintained by the federal Crown, the other being the Citadelle of Quebec.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Hall">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title7">
                        <h4 className="tooltipped title" data-tooltip="Rideau Falls">里多瀑布</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/7.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Falls/@45.4415388,-75.704671,15z/data=!3m1!4b1!4m5!3m4!1s0x4cce04e780725c1d:0x91bf6c6b8092abde!8m2!3d45.4415246!4d-75.6959162">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">里多瀑布</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal7">介绍</a>
                        <div id="modal7" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Rideau Falls - 介绍</h4>
                            <p>里多瀑布是位于加拿大安大略省渥太华的两个瀑布，里多河汇入渥太华河。 瀑布被绿岛分隔，渥太华的旧市政厅位于南部。 瀑布西侧是国家研究委员会的总部，而东侧是加拿大和世界馆以及法国大使馆。 瀑布因早期法国人的名字而得名，因为它们类似于法国的窗帘。 里多河后来因瀑布而得名。 里多运河的建造是为了绕过这些瀑布和猪背瀑布。</p>
                            <p className="grey-text">The Rideau Falls are two waterfalls located in Ottawa, Ontario, Canada, where the Rideau River empties into the Ottawa River. The falls are divided by Green Island, with Ottawa's Old City Hall just to the south. To the west of the falls is the headquarters of the National Research Council while to the east are the Canada and the World Pavilion and the French Embassy. The falls were named by the early French for their resemblance to a curtain, or rideau in French. The Rideau River was later named after the falls. The Rideau Canal was constructed to bypass these falls and the Hog's Back Falls.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Falls">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title8">

                        <h4 className="tooltipped title" data-tooltip="National Gallery">国家美术馆</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/8.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Gallery+of+Canada/@45.4295387,-75.7010949,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04fc78d22043:0x66f4bb14e92117b7!8m2!3d45.429535!4d-75.6989062">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">国家美术馆</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal8">介绍</a>
                        <div id="modal8" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Gallery - 介绍</h4>
                            <p>加拿大国家美术馆位于加拿大安大略省的渥太华首都，是加拿大的国家美术馆。法属加拿大美术馆（Muséedes beaux-arts du Canada）是加拿大的国家美术馆。 博物馆的建筑占地46,621平方米（501,820平方英尺），其中有12,400平方米（133,000平方英尺）的空间用于展示艺术品； 通过展览空间使该博物馆成为北美最大的艺术博物馆之一。</p>
                            <p className="grey-text">The National Gallery of Canada (French: Musée des beaux-arts du Canada), located in the capital city of Ottawa, Ontario, is Canada's national art museum. The museum's building takes up 46,621 square metres (501,820 sq ft), with 12,400 square metres (133,000 sq ft) of space used for exhibiting art; making the museum one of the largest art museums in North America by exhibition space.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/National_Gallery_of_Canada">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title9">
                        
                        <h4 className="tooltipped title" data-tooltip="Notre-Dame">圣母院</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/9.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Notre-Dame+Cathedral+Basilica/@45.4295572,-75.707661,15z/data=!4m8!1m2!2m1!1sNotre-Dame!3m4!1s0x4cce04fd20846a5b:0xffbf20984ca0d742!8m2!3d45.4299128!4d-75.696196">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">圣母院</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal9">介绍</a>
                        <div id="modal9" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Notre-Dame Cathedral Basilica - 介绍</h4>
                            <p>巴黎圣母院大教堂是位于加拿大安大略省渥太华的罗马天主教大教堂，位于下城区附近的苏塞克斯大道385号。 1990年被指定为加拿大国家历史遗址。
<br/>
<br/>
大教堂是渥太华最古老和最大的教堂，也是该市罗马天主教大主教的所在地。 从附近的国会山及周边地区可轻松识别其双尖顶和镀金的麦当娜。 教堂最后一次翻新并于1990年代后期恢复。 服务以法语和英语提供。</p>
                            <p className="grey-text">The Notre-Dame Cathedral Basilica is a Roman Catholic minor basilica in Ottawa, Ontario, Canada located on 385 Sussex Drive in the Lower Town neighbourhood. It was designated a National Historic Site of Canada in 1990.
                            <br/>
<br/>
The Basilica is the oldest and largest church in Ottawa and the seat of the city's Roman Catholic archbishop. Its twin spires and gilded Madonna are easily identifiable from nearby Parliament Hill and the surrounding area. The church was last renovated and restored in the late 1990s. Services are held in both French and English.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Notre-Dame_Cathedral_Basilica_(Ottawa)">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title10">
                        <h4 className="tooltipped title" data-tooltip="Little Ray's Reptile Zoo">小雷的爬行动物园</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/10.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Little+Ray's+Nature+Centre/@45.439712,-75.3525073,17z/data=!3m1!4b1!4m5!3m4!1s0x4ccde1d9a3465705:0xb9b3662ba266e9d8!8m2!3d45.4397083!4d-75.3503186">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">小雷的爬行动物园</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal10">介绍</a>
                        <div id="modal10" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Little Ray's Reptile Zoo - 介绍</h4>
                            <p>爬行动物园</p>
                            <p className="grey-text">Reptile Zoo</p>
                            {/* <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.com/travel/things-to-do?g2lb=2502548%2C4258168%2C4270442%2C4271060%2C4306835%2C4317915%2C4328159%2C4371335%2C4401769%2C4421364%2C4428792%2C4429211%2C4431296%2C4433754%2C4447566%2C4456077%2C4458304%2C4462650%2C4463263%2C4270859%2C4284970%2C4291517%2C4412690&hl=en-CA&gl=ca&un=1&dest_mid=%2Fm%2F0179bc&dest_state_type=main&dest_src=kl&sa=X&ved=2ahUKEwjL0Y7FqIPtAhVXbs0KHdiaCzoQri4wKXoECCEQAw#ttdm=44.878451_-76.003458_8&ttdmf=%252Fm%252F07l8q8">
                                <span className="blue-text">[Source From...]</span>
                            </a>     */}
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        </div>
                            </div>
                        </div>

                  
                        {/* <div className="titleContent">
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title11">
                        <h4 className="title">Dows Lake Pavilion</h4>
                        
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/11.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Dows+Lake+Pavilion/@45.3964114,-75.7078499,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce05cd0d6b1373:0x234d714c1862beb4!8m2!3d45.3964077!4d-75.7056612">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Dows Lake Pavilion</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal11">介绍</a>
                        <div id="modal11" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Dows Lake Pavilion - 介绍</h4>
                            <p>抛光的湖畔餐厅提供时令菜肴，包括牛排和海鲜。</p>
                            <p className="grey-text">Polished lakeside restaurant offering seasonally inspired dishes, including steak & seafood.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.dowslake.com/">
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

                    <div className="titles" id="title12">
                        <h4 className="title">Byward Market</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/12.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/ByWard+Market,+Ottawa,+ON/@45.4289145,-75.6955648,16z/data=!3m1!4b1!4m5!3m4!1s0x4cce050261d6c9c7:0xc02283c07a3b83a2!8m2!3d45.4288655!4d-75.6911593">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Byward Market</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal12">介绍</a>
                        <div id="modal12" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Byward Market - 介绍</h4>
                            <p>ByWard Market是一个繁华的集散地，聚集了户外农民的市场摊位和出售加拿大奶酪和枫糖巧克力的特色食品商店。 它还以其丰富多彩的街头艺术和时尚商店而闻名，当地商店充斥着手工艺品和服装。 周围的餐馆供应沙瓦玛和海狸尾巴（海狸尾巴状的甜炸糕饼）。 夜生活包括乡村小酒馆和时尚的同性恋酒吧。</p>
                            <p className="grey-text">ByWard Market is a buzzing hub of outdoor farmers’ market stalls and specialty food shops selling Canadian cheese and maple-infused chocolate. It’s also known for its colorful street art and hip stores filled with crafts and clothes by local designers. Surrounding eateries serve shawarma and BeaverTails (sweet fried pastries in the shape of a beaver’s tail). Nightlife encompasses rustic taverns and stylish gay bars.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="http://byward-market.com/en/home/">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title13">
                    
                        <h4 className="tooltipped title" data-tooltip="Rideau Canal">里多运河</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/13.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Canal/@45.3964917,-75.727078,13z/data=!3m1!4b1!4m5!3m4!1s0x4cce05ba9a3ba4a1:0xf9dd46e580c656a8!8m2!3d45.3959374!4d-75.6883718">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">里多运河</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal13">介绍</a>
                        <div id="modal13" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Rideau Canal - 介绍</h4>
                            <p>里多运河，也被非正式地称为里多水道，将加拿大的首都渥太华连接到安大略湖和安大略省金斯顿的圣劳伦斯河。 它长202公里。 里多（Rideau）这个名字的法语源于“窗帘”，它源于里多河（Rideau River）的双瀑布在汇入渥太华河时的帘状外观。 运河系统使用了两条河流，里多河和卡塔拉基河，以及几个湖泊。 加拿大公园经营里多运河。</p>
                            <p className="grey-text">The Rideau Canal, also known unofficially as the Rideau Waterway, connects Canada's capital city of Ottawa, Ontario, to Lake Ontario and the Saint Lawrence River at Kingston, Ontario. It is 202 kilometres long. The name Rideau, French for "curtain", is derived from the curtain-like appearance of the Rideau River's twin waterfalls where they join the Ottawa River. The canal system uses sections of two rivers, the Rideau and the Cataraqui, as well as several lakes. Parks Canada operates the Rideau Canal.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Canal">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title14">
                    
                        <h4 className="tooltipped title" data-tooltip="Confederation Square">邦联广场</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/14.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Confederation+Square/@45.4236699,-75.6973957,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04ffd8db36cf:0xb701621998ff3c05!8m2!3d45.4236662!4d-75.695207">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">邦联广场</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal14">介绍</a>
                        <div id="modal14" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Confederation Square - 介绍</h4>
                            <p>联邦广场（法语：Confédération广场）是加拿大安大略省渥太华的一个城市广场，被认为是仅次于国会山的加拿大首都第二重要的礼仪中心。 该广场大致呈三角形，以加拿大国家战争纪念馆为中心，而英勇纪念馆为周边，该广场以北部的惠灵顿街为边界，东西两侧为埃尔金街的分支。</p>
                            <p className="grey-text">Confederation Square (French: Place de la Confédération) is an urban square in Ottawa, Ontario, Canada, and is considered the second most important ceremonial centre in Canada's capital city, after Parliament Hill. Roughly triangular in area, with Canada's National War Memorial at its centre and the Valiants Memorial at its periphery, the square is bounded by Wellington Street to the north and branches of Elgin Street to the east and west.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Confederation_Square">
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
                        </div> */}
                        
                    </div>

                    <div className="titles" id="title15">
                       
                        <h4 className="tooltipped title" data-tooltip="Bank of Canada Museum">银行博物馆</h4>

                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img21/15.png" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Bank+of+Canada+Museum/@45.4214776,-75.7042109,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04542caf5b7f:0x143cf177b6aa74d0!8m2!3d45.4214739!4d-75.7020222">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">银行博物馆</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal15">介绍</a>
                        <div id="modal15" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">Bank of Canada Museum - 介绍</h4>
                            <p>加拿大银行博物馆（自2017年7月起），前身为加拿大货币博物馆，于1980年在加拿大安大略省渥太华的加拿大银行大楼地下开业。 博物馆于2013年临时关闭以进行重大建筑翻新，并于2017年7月1日在具有新设计和概念的新建筑中的新空间中重新开放。 但是，它通过加拿大银行的地下会议中心连接到主楼。</p>
                            <p className="grey-text">The Bank of Canada Museum (since July 2017), formerly known as Canada's Currency Museum, opened in 1980 on the ground floor of the Bank of Canada building in Ottawa, Ontario, Canada. Temporarily closed in 2013 for major building renovations, the museum reopened in a new space on July 1, 2017, in a new building, with a completely new design and concept. It is, however, connected to the main building through the Bank of Canada's underground conference centre.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Bank_of_Canada_Museum">
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

            <div className="row hide-on-med-and-up" id="travelNoteOttawa">

<div className="col s12 m12 l12 noteOttawa">

<a href="" className="sidenav-trigger" data-target="mobile-menu999">
        <i className="material-icons smallnotenav" >menu</i>
    </a>
    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
            
    <div className="bigTitle">渥太华</div>

<li className="titleDate">
<a href="#title16">春</a>
</li>
<li className="smallTitle">
<a href="#title16">Commissioners Park</a>
</li>

<li className="titleDate">
<a href="#title17">夏</a>
</li>
<li className="smallTitle">
<a href="#title17">中国城</a>
</li>
<li className="smallTitle">
<a href="#title18">Britannia沙滩</a>
</li>


<li className="titleDate">
<a href="#title19">秋</a>
</li>
<li className="smallTitle">
<a href="#title19">渥太华大学</a>
</li>
<li className="smallTitle">
<a href="#title20">国会山</a>
</li>
<li className="smallTitle">
<a href="#title21">里多厅</a>
</li>
<li className="smallTitle">
<a href="#title22">里多瀑布</a>
</li>
<li className="smallTitle">
<a href="#title23">国家美术馆</a>
</li>

<li className="smallTitle">
<a href="#title24">圣母院</a>
</li>

<li className="smallTitle">
<a href="#title25">小雷的爬行动物园</a>
</li>
<li className="smallTitle">
<a href="#title26">Dows Lake Pavilion</a>
</li>


<li className="titleDate">
<a href="#title27">冬</a>
</li>
<li className="smallTitle">
<a href="#title27">Byward Market</a>
</li>
<li className="smallTitle">
<a href="#title28">里多运河</a>
</li>
<li className="smallTitle">
<a href="#title29">邦联广场</a>
</li>
<li className="smallTitle">
<a href="#title30">银行博物馆</a>
</li>

        
    </ul>


        <div className="row">
            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
            <div className="row travelDetail">
                <div className="time col s12 m4 l4">
                    <i className=" material-icons left">access_time</i>
                    <span>出发时间</span>
                    <span> / </span>
                    <span>2016-09-01</span>
                </div>
                <div className="day col s12 m4 l4">
                    <i className=" material-icons left">wb_sunny</i>
                    <span>出行天数</span>
                    <span> / </span>
                    <span>---</span>
                </div>
                <div className="people col s12 m4 l4">
                    <i className=" material-icons left">account_circle</i>
                    <span>人物</span>
                    <span> / </span>
                    <span>---</span>
                </div>
            </div>
            <div className="col s1 m1 l1"></div>
            </div>
        </div>

    <div className="titles" id="title16">
        <h4 className="title">Commissioners Park</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/1.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Commissioners+Park/@45.3974938,-75.7087034,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce05cd1151dd95:0xc574505c2a89591b!8m2!3d45.3974901!4d-75.7065147">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Commissioners Park</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9991">介绍</a>
        <div id="modal9991" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Commissioners Park - 介绍</h4>
            <p>Commissioners Park是位于加拿大安大略省渥太华的公园。 它位于The Glebe的最西端，被陶氏湖，普雷斯顿街，Carling大道和陶氏湖路所包围。
<br/>
<br/>
在整个温暖的月份里，这里是家庭散步的热门地方。 国家资本委员会负责维护公园，并在整个生长季节设法使花朵盛开。 在一年一度的加拿大郁金香节期间，它是一个主要的郁金香观赏区，该地区的郁金香浓度最高，达300,000。</p>
            <p className="grey-text">Commissioners Park is a park in Ottawa, Ontario, Canada. It lies within the westernmost section of The Glebe, bounded by Dow's Lake, Preston Street, Carling Avenue and Dow's Lake Road.
            <br/>
<br/>
Throughout the warmer months it is a popular place for family walks. The National Capital Commission maintains the park and manages to keep flowers blooming there throughout the growing season. During the annual Canadian Tulip Festival, it is a major tulip viewing area with the highest concentration of tulips in the region numbering as many as 300,000.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Commissioners_Park_(Ottawa)">
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
        </div> */}
        
    </div>

    <div className="titles" id="title17">
        <h4 className="tooltipped title" data-tooltip="China Town">中国城</h4>

        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/2.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chinatown,+Ottawa,+ON/@45.4104795,-75.7123071,16z/data=!3m1!4b1!4m5!3m4!1s0x4cce044c13bc0b1d:0xecc3108b7b23e659!8m2!3d45.4098833!4d-75.7063119">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">中国城</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9992">介绍</a>
        <div id="modal9992" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">China Town - 介绍</h4>
            <p>渥太华的唐人街位于渥太华市区以西的萨默塞特街。 它从东部的Bay Street到西部的Rochester St（根据唐人街BIA）。 唐人街的标志继续沿萨默塞特郡一直延伸到普雷斯顿街，甚至在更西边也可以找到中国/亚洲餐馆。
<br/>
<br/>
BIA于1989年被指定，并被命名为Somerset Heights，直到2005年更名为唐人街。
<br/>
<br/>
虽然被正式指定为“唐人街”，但该地区还是许多亚洲文化的企业的故乡，例如越南，韩国和泰国。 专门从事Phở和点心的餐厅很普遍。 渥太华唐人街一方面具有城市特色，因为它不是一排排的购物中心，但另一方面，它集中于一条商业街，仅被住宅区所环绕。</p>
            <p className="grey-text">Ottawa's Chinatown is located along Somerset Street west of downtown Ottawa. It runs from Bay Street in the east to Rochester St in the west (according to the Chinatown BIA). Signs for Chinatown continue along Somerset until Preston Street, and Chinese/Asian restaurants can be found even farther west.
            <br/>
<br/>
The BIA was designated in 1989 and was named Somerset Heights until it was renamed Chinatown in 2005.
<br/>
<br/>
While officially designated "Chinatown," the area is home to businesses from many Asian cultures, such as Vietnamese, Korean and Thai. Restaurants specializing in Phở and dim sum are quite common. The Ottawa Chinatown has on one hand an urban character as it is not a cluster of strip malls, but on the other hand, it is focused on one commercial street, surrounded exclusively by residential areas.
</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Chinatown,_Ottawa">
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
        </div> */}
        
    </div>

    <div className="titles" id="title18">
    <h4 className="tooltipped title" data-tooltip="Britannia Beach">Britannia沙滩</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/3.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Britannia+Beach/@45.3656877,-75.8043083,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce01227452795f:0x55ca4fb58ace3ca3!8m2!3d45.3653197!4d-75.8014626">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Britannia沙滩</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        {/* <a className="btn-flat modal-trigger right info " href="#modal9993">介绍</a>
        <div id="modal9993" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Britannia Beach - 介绍</h4>
            <p>高公园是加拿大安大略省多伦多市的市政公园。 高地公园是一个休闲娱乐和自然公园，设有体育设施，文化设施，教育设施，花园，游乐场和动物园。 公园的三分之一仍处于自然状态，并具有罕见的橡木大草原生态。 高地公园于1876年向公众开放，其基础是从约翰·乔治·霍华德到多伦多市的土地遗赠。 它占地161公顷（400英亩），是仅次于百年纪念公园的多伦多第二大市政公园。</p>
            <p className="grey-text">High Park is a municipal park in Toronto, Ontario, Canada. High Park is a mixed recreational and natural park, with sporting facilities, cultural facilities, educational facilities, gardens, playgrounds and a zoo. One-third of the park remains in a natural state, with a rare oak savannah ecology. High Park was opened to the public in 1876 and is based on a bequest of land from John George Howard to the City of Toronto. It spans 161 hectares (400 acres) and is the second-largest municipal park in Toronto, after Centennial Park.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/High_Park">
                <span className="blue-text">[Source From...]</span>
            </a>    
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div> */}

        </div>
            </div>
        </div>

  
        {/* <div className="titleContent">
        </div> */}
        
    </div>

    <div className="titles" id="title19">
    <h4 className="tooltipped title" data-tooltip="uOttawa">渥太华大学</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/4.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/University+of+Ottawa/@45.4231101,-75.6853216,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce050a6db98d73:0x188a59c3622fdbae!8m2!3d45.4231064!4d-75.6831329">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">渥太华大学</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9994">介绍</a>
        <div id="modal9994" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">uOttawa - 介绍</h4>
            <p>渥太华大学（法语：Universitéd'Ottawa），通常称为uOttawa，是加拿大安大略省渥太华的双语公共研究型大学。 主校区位于渥太华市中心核心区的42.5公顷（105英亩），毗邻桑迪希尔住宅区，毗邻渥太华的里多运河。</p>
            <p className="grey-text">The University of Ottawa (French: Université d'Ottawa), often referred to as uOttawa or U of O, is a bilingual public research university in Ottawa, Ontario, Canada. The main campus is located on 42.5 hectares (105 acres) in the heart of Ottawa's Downtown Core, adjacent to the residential neighbourhood of Sandy Hill, adjacent to Ottawa's Rideau Canal.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/University_of_Ottawa">
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
        </div> */}
        
    </div>

    <div className="titles" id="title20">
    <h4 className="tooltipped title" data-tooltip="Parliament Hill">国会山</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/5.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Parliament+Hill/@45.4235974,-75.7031177,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04ff4fe494ef:0x26bb54f60c29f6e!8m2!3d45.4235937!4d-75.700929">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">国会山</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9995">介绍</a>
        <div id="modal9995" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Parliament Hill - 介绍</h4>
            <p>国会山（法语：Colline du Parlement），俗称“山”，是加拿大安大略省渥太华市区渥太华河南岸的王室土地。 其哥特式复兴建筑套房是加拿大议会的所在地，具有具有国家象征意义的建筑元素。 国会山每年吸引大约300万游客。 国会保护局（PPS）负责在国会山和国会辖区进行执法。</p>
            <p className="grey-text">Parliament Hill (French: Colline du Parlement), colloquially known as The Hill, is an area of Crown land on the southern banks of the Ottawa River in downtown Ottawa, Ontario, Canada. Its Gothic revival suite of buildings is the home of the Parliament of Canada and has architectural elements of national symbolic importance. Parliament Hill attracts approximately 3 million visitors each year. Law enforcement on Parliament Hill and in the parliamentary precinct is the responsibility of the Parliamentary Protective Service (PPS).</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Parliament_Hill">
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
        </div> */}
        
    </div>

    <div className="titles" id="title21">
    <h4 className="tooltipped title" data-tooltip="Rideau Hall">里多厅</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/6.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Hall/@45.4445039,-75.6879901,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04deb2f708ef:0x9e476e1281e2fda3!8m2!3d45.4445002!4d-75.6858014">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">里多厅</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9996">介绍</a>
        <div id="modal9996" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Rideau Hall - 介绍</h4>
            <p>里多厅（官方礼宾府）是加拿大君主及其代表加拿大总督在渥太华的官邸。 它位于加拿大首都萨塞克斯大道1号，占地0.36平方公里（88英亩），主要建筑包括约175个房间，占地9,500平方米（102,000平方英尺），周围有27个附属建筑。 里多厅（Rideau Hall）的场地位于渥太华市中心之外，使其具有私人住宅的特色。 它是联邦王室维护的两个官方王室住所之一，另一个是魁北克城堡。</p>
            <p className="grey-text">Rideau Hall (officially Government House) is the official residence in Ottawa of both the Canadian monarch and his or her representative, the Governor General of Canada. It stands in Canada's capital on a 0.36-square-kilometre (88-acre) estate at 1 Sussex Drive, with the main building consisting of approximately 175 rooms across 9,500 square metres (102,000 sq ft), and 27 outbuildings around the grounds. Rideau Hall's site lies outside the centre of Ottawa, giving it the character of a private home. It is one of two official royal residences maintained by the federal Crown, the other being the Citadelle of Quebec.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Hall">
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
        </div> */}
        
    </div>

    <div className="titles" id="title22">
    <h4 className="tooltipped title" data-tooltip="Rideau Falls">里多瀑布</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/7.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Falls/@45.4415388,-75.704671,15z/data=!3m1!4b1!4m5!3m4!1s0x4cce04e780725c1d:0x91bf6c6b8092abde!8m2!3d45.4415246!4d-75.6959162">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">里多瀑布</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9997">介绍</a>
        <div id="modal9997" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Rideau Falls - 介绍</h4>
            <p>里多瀑布是位于加拿大安大略省渥太华的两个瀑布，里多河汇入渥太华河。 瀑布被绿岛分隔，渥太华的旧市政厅位于南部。 瀑布西侧是国家研究委员会的总部，而东侧是加拿大和世界馆以及法国大使馆。 瀑布因早期法国人的名字而得名，因为它们类似于法国的窗帘。 里多河后来因瀑布而得名。 里多运河的建造是为了绕过这些瀑布和猪背瀑布。</p>
            <p className="grey-text">The Rideau Falls are two waterfalls located in Ottawa, Ontario, Canada, where the Rideau River empties into the Ottawa River. The falls are divided by Green Island, with Ottawa's Old City Hall just to the south. To the west of the falls is the headquarters of the National Research Council while to the east are the Canada and the World Pavilion and the French Embassy. The falls were named by the early French for their resemblance to a curtain, or rideau in French. The Rideau River was later named after the falls. The Rideau Canal was constructed to bypass these falls and the Hog's Back Falls.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Falls">
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
        </div> */}
        
    </div>

    <div className="titles" id="title23">
    <h4 className="tooltipped title" data-tooltip="National Gallery">国家美术馆</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/8.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Gallery+of+Canada/@45.4295387,-75.7010949,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04fc78d22043:0x66f4bb14e92117b7!8m2!3d45.429535!4d-75.6989062">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">国家美术馆</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9998">介绍</a>
        <div id="modal9998" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">National Gallery - 介绍</h4>
            <p>加拿大国家美术馆位于加拿大安大略省的渥太华首都，是加拿大的国家美术馆。法属加拿大美术馆（Muséedes beaux-arts du Canada）是加拿大的国家美术馆。 博物馆的建筑占地46,621平方米（501,820平方英尺），其中有12,400平方米（133,000平方英尺）的空间用于展示艺术品； 通过展览空间使该博物馆成为北美最大的艺术博物馆之一。</p>
            <p className="grey-text">The National Gallery of Canada (French: Musée des beaux-arts du Canada), located in the capital city of Ottawa, Ontario, is Canada's national art museum. The museum's building takes up 46,621 square metres (501,820 sq ft), with 12,400 square metres (133,000 sq ft) of space used for exhibiting art; making the museum one of the largest art museums in North America by exhibition space.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/National_Gallery_of_Canada">
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
        </div> */}
        
    </div>

    <div className="titles" id="title24">
    <h4 className="tooltipped title" data-tooltip="Notre-Dame">圣母院</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/9.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Notre-Dame+Cathedral+Basilica/@45.4295572,-75.707661,15z/data=!4m8!1m2!2m1!1sNotre-Dame!3m4!1s0x4cce04fd20846a5b:0xffbf20984ca0d742!8m2!3d45.4299128!4d-75.696196">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">圣母院</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9999">介绍</a>
        <div id="modal9999" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Notre-Dame Cathedral Basilica - 介绍</h4>
            <p>巴黎圣母院大教堂是位于加拿大安大略省渥太华的罗马天主教大教堂，位于下城区附近的苏塞克斯大道385号。 1990年被指定为加拿大国家历史遗址。
<br/>
<br/>
大教堂是渥太华最古老和最大的教堂，也是该市罗马天主教大主教的所在地。 从附近的国会山及周边地区可轻松识别其双尖顶和镀金的麦当娜。 教堂最后一次翻新并于1990年代后期恢复。 服务以法语和英语提供。</p>
            <p className="grey-text">The Notre-Dame Cathedral Basilica is a Roman Catholic minor basilica in Ottawa, Ontario, Canada located on 385 Sussex Drive in the Lower Town neighbourhood. It was designated a National Historic Site of Canada in 1990.
            <br/>
<br/>
The Basilica is the oldest and largest church in Ottawa and the seat of the city's Roman Catholic archbishop. Its twin spires and gilded Madonna are easily identifiable from nearby Parliament Hill and the surrounding area. The church was last renovated and restored in the late 1990s. Services are held in both French and English.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Notre-Dame_Cathedral_Basilica_(Ottawa)">
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
        </div> */}
        
    </div>

    <div className="titles" id="title25">
    <h4 className="tooltipped title" data-tooltip="Little Ray's Reptile Zoo">小雷的爬行动物园</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/10.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Little+Ray's+Nature+Centre/@45.439712,-75.3525073,17z/data=!3m1!4b1!4m5!3m4!1s0x4ccde1d9a3465705:0xb9b3662ba266e9d8!8m2!3d45.4397083!4d-75.3503186">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">小雷的爬行动物园</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99910">介绍</a>
        <div id="modal99910" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Little Ray's Reptile Zoo - 介绍</h4>
            <p>爬行动物园</p>
            <p className="grey-text">Reptile Zoo</p>
            {/* <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.com/travel/things-to-do?g2lb=2502548%2C4258168%2C4270442%2C4271060%2C4306835%2C4317915%2C4328159%2C4371335%2C4401769%2C4421364%2C4428792%2C4429211%2C4431296%2C4433754%2C4447566%2C4456077%2C4458304%2C4462650%2C4463263%2C4270859%2C4284970%2C4291517%2C4412690&hl=en-CA&gl=ca&un=1&dest_mid=%2Fm%2F0179bc&dest_state_type=main&dest_src=kl&sa=X&ved=2ahUKEwjL0Y7FqIPtAhVXbs0KHdiaCzoQri4wKXoECCEQAw#ttdm=44.878451_-76.003458_8&ttdmf=%252Fm%252F07l8q8">
                <span className="blue-text">[Source From...]</span>
            </a>     */}
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Close</a>
            </div>
        </div>

        </div>
            </div>
        </div>

  
        {/* <div className="titleContent">
        </div> */}
        
    </div>

    <div className="titles" id="title26">
        <h4 className="title">Dows Lake Pavilion</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/11.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Dows+Lake+Pavilion/@45.3964114,-75.7078499,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce05cd0d6b1373:0x234d714c1862beb4!8m2!3d45.3964077!4d-75.7056612">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Dows Lake Pavilion</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99911">介绍</a>
        <div id="modal99911" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Dows Lake Pavilion - 介绍</h4>
            <p>抛光的湖畔餐厅提供时令菜肴，包括牛排和海鲜。</p>
            <p className="grey-text">Polished lakeside restaurant offering seasonally inspired dishes, including steak & seafood.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.dowslake.com/">
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

    <div className="titles" id="title27">
        <h4 className="title">Byward Market</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/12.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/ByWard+Market,+Ottawa,+ON/@45.4289145,-75.6955648,16z/data=!3m1!4b1!4m5!3m4!1s0x4cce050261d6c9c7:0xc02283c07a3b83a2!8m2!3d45.4288655!4d-75.6911593">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">Byward Market</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99912">介绍</a>
        <div id="modal99912" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Byward Market - 介绍</h4>
            <p>ByWard Market是一个繁华的集散地，聚集了户外农民的市场摊位和出售加拿大奶酪和枫糖巧克力的特色食品商店。 它还以其丰富多彩的街头艺术和时尚商店而闻名，当地商店充斥着手工艺品和服装。 周围的餐馆供应沙瓦玛和海狸尾巴（海狸尾巴状的甜炸糕饼）。 夜生活包括乡村小酒馆和时尚的同性恋酒吧。</p>
            <p className="grey-text">ByWard Market is a buzzing hub of outdoor farmers’ market stalls and specialty food shops selling Canadian cheese and maple-infused chocolate. It’s also known for its colorful street art and hip stores filled with crafts and clothes by local designers. Surrounding eateries serve shawarma and BeaverTails (sweet fried pastries in the shape of a beaver’s tail). Nightlife encompasses rustic taverns and stylish gay bars.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="http://byward-market.com/en/home/">
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
        </div> */}
        
    </div>

    <div className="titles" id="title28">
    <h4 className="tooltipped title" data-tooltip="Rideau Canal">里多运河</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/13.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Rideau+Canal/@45.3964917,-75.727078,13z/data=!3m1!4b1!4m5!3m4!1s0x4cce05ba9a3ba4a1:0xf9dd46e580c656a8!8m2!3d45.3959374!4d-75.6883718">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">里多运河</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99913">介绍</a>
        <div id="modal99913" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Rideau Canal - 介绍</h4>
            <p>里多运河，也被非正式地称为里多水道，将加拿大的首都渥太华连接到安大略湖和安大略省金斯顿的圣劳伦斯河。 它长202公里。 里多（Rideau）这个名字的法语源于“窗帘”，它源于里多河（Rideau River）的双瀑布在汇入渥太华河时的帘状外观。 运河系统使用了两条河流，里多河和卡塔拉基河，以及几个湖泊。 加拿大公园经营里多运河。</p>
            <p className="grey-text">The Rideau Canal, also known unofficially as the Rideau Waterway, connects Canada's capital city of Ottawa, Ontario, to Lake Ontario and the Saint Lawrence River at Kingston, Ontario. It is 202 kilometres long. The name Rideau, French for "curtain", is derived from the curtain-like appearance of the Rideau River's twin waterfalls where they join the Ottawa River. The canal system uses sections of two rivers, the Rideau and the Cataraqui, as well as several lakes. Parks Canada operates the Rideau Canal.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Rideau_Canal">
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
        </div> */}
        
    </div>

    <div className="titles" id="title29">
    <h4 className="tooltipped title" data-tooltip="Confederation Square">邦联广场</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/14.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Confederation+Square/@45.4236699,-75.6973957,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04ffd8db36cf:0xb701621998ff3c05!8m2!3d45.4236662!4d-75.695207">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">邦联广场</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99914">介绍</a>
        <div id="modal99914" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Confederation Square - 介绍</h4>
            <p>联邦广场（法语：Confédération广场）是加拿大安大略省渥太华的一个城市广场，被认为是仅次于国会山的加拿大首都第二重要的礼仪中心。 该广场大致呈三角形，以加拿大国家战争纪念馆为中心，而英勇纪念馆为周边，该广场以北部的惠灵顿街为边界，东西两侧为埃尔金街的分支。</p>
            <p className="grey-text">Confederation Square (French: Place de la Confédération) is an urban square in Ottawa, Ontario, Canada, and is considered the second most important ceremonial centre in Canada's capital city, after Parliament Hill. Roughly triangular in area, with Canada's National War Memorial at its centre and the Valiants Memorial at its periphery, the square is bounded by Wellington Street to the north and branches of Elgin Street to the east and west.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Confederation_Square">
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
        </div> */}
        
    </div>

    <div className="titles" id="title30">
    <h4 className="tooltipped title" data-tooltip="Bank of Canada Museum">银行博物馆</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img21/15.png" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Bank+of+Canada+Museum/@45.4214776,-75.7042109,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04542caf5b7f:0x143cf177b6aa74d0!8m2!3d45.4214739!4d-75.7020222">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">银行博物馆</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal99915">介绍</a>
        <div id="modal99915" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">Bank of Canada Museum - 介绍</h4>
            <p>加拿大银行博物馆（自2017年7月起），前身为加拿大货币博物馆，于1980年在加拿大安大略省渥太华的加拿大银行大楼地下开业。 博物馆于2013年临时关闭以进行重大建筑翻新，并于2017年7月1日在具有新设计和概念的新建筑中的新空间中重新开放。 但是，它通过加拿大银行的地下会议中心连接到主楼。</p>
            <p className="grey-text">The Bank of Canada Museum (since July 2017), formerly known as Canada's Currency Museum, opened in 1980 on the ground floor of the Bank of Canada building in Ottawa, Ontario, Canada. Temporarily closed in 2013 for major building renovations, the museum reopened in a new space on July 1, 2017, in a new building, with a completely new design and concept. It is, however, connected to the main building through the Bank of Canada's underground conference centre.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Bank_of_Canada_Museum">
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




export default travelNoteOttawaCN;