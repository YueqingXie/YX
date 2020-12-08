import React, { Component } from 'react';
import Footer from '../layout/Footer';


class travelNoteThailandCN extends Component {

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
    <li><a href="/travelNoteThailand" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelNoteThailand" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <div className="row hide-on-small-only" id="travelNoteThailand">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">泰国</div>
                            <li className="titleDate">
                                <a href="#title1">2017/06/08</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">珊瑚岛</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.2/ </a>
                                <a href="#title2">皇帝岛</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.3/ </a>
                                <a href="#title3">浮潜</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.4/ </a>
                                <a href="#title4">晚上</a>
                            </li>
                            
                            <li className="titleDate">
                                <a href="#title5">2017/06/09</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.1/ </a>
                                <a href="#title5">卡伦&卡塔海滩</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.2/ </a>
                                <a href="#title6">神仙半岛</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.3/ </a>
                                <a href="#title7">芭东海滩</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title8">2017/06/10</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.1/ </a>
                                <a href="#title8">玛雅湾</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.2/ </a>
                                <a href="#title9">燕窝洞</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.3/ </a>
                                <a href="#title10">晚上</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title11">2017/06/11</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.1/ </a>
                                <a href="#title11">清迈</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.2/ </a>
                                <a href="#title12">周日夜市</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title13">2017/06/12</a>
                            </li>
                            <li className="smallTitle">
                                <a>5.1/ </a>
                                <a href="#title13">丛林飞跃</a>
                            </li>
                            <li className="smallTitle">
                                <a>5.2/ </a>
                                <a href="#title14">宁曼路</a>
                            </li>
                            <li className="smallTitle">
                                <a>5.3/ </a>
                                <a href="#title15">夜间动物园</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title16">2017/06/13</a>
                            </li>
                            <li className="smallTitle">
                                <a>6.1/ </a>
                                <a href="#title16">曼谷</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteThailand">
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
                                    <span>2017-06-07</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>出行天数</span>
                                    <span> / </span>
                                    <span>8天</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>人物</span>
                                    <span> / </span>
                                    <span>和家人</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>

                    <div className="titles" id="title1">
                        <h4 className="tooltipped title" data-tooltip="Coral Island">珊瑚岛</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/1.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Ko+He/@7.7407852,98.363026,15z/data=!3m1!4b1!4m5!3m4!1s0x305029a3d5386599:0x5a356adbc39d8c1f!8m2!3d7.7421154!4d98.3759417">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">珊瑚岛</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">


                        <a className="btn-flat modal-trigger right info " href="#modal1">介绍</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">珊瑚岛 - 介绍</h4>
                            <p>泰国珊瑚岛英文名称为Coral Island。Coral Island，在泰国也被称为Koh Hae或Ko Hi。位于普吉岛东南部，距离普吉岛9公里。小岛从东到西长约3公里，但从南至北宽度仅约800米。
<br/>
<br/>
岛上除了渔村，其他许多地方均为丛林所覆盖。珊瑚岛因丰富的珊瑚群生态而得名，小岛的周围环绕着各种色彩缤纷的珊瑚礁，风光优美，是普吉岛区内最适合滑水、浮潜、冲浪和航行等水上活动的最佳选择地点之一。
<br/>
<br/>
岛上有交通，餐饮，住宿，娱乐等配套服务。</p>

                            <p className="grey-text">Coral Island, also known as Koh Hae or Ko Hi in Thailand. Located in the southeast of Phuket, 9 kilometers from Phuket. The island is about 3 kilometers long from east to west, but only about 800 meters wide from south to north.
<br/>
<br/>
Except for fishing villages, many other places on the island are covered by jungle. The Coral Island is named for its rich coral ecology. The island is surrounded by various colorful coral reefs with beautiful scenery. It is the most suitable for water skiing, snorkeling, surfing and sailing in Phuket. Choose one of the locations.
<br/>
<br/>
There are transportation, catering, accommodation, entertainment and other supporting services on the island.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%8F%8A%E7%91%9A%E5%B2%9B/5997595?fr=aladdin">
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
                            <h5>2017/06/08</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/1.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>吃过早餐后，到码头乘船前往珊瑚岛。</p>
                                    <p> 珊瑚岛位于普吉接近正南的海上，从查龙码头出发乘坐快艇船程仅为15分钟，乘坐游艇船程约为20分钟，乘坐帆船船程约为30分钟，是距离普及本岛第二近的离岛。</p>
   
                                    <p>珊瑚岛的水质和沙质比较一般，不能得到很好的浮潜体验，景观十分平淡。</p>
 
                                    <p>但是珊瑚岛是普吉所有离岛中，海上游乐项目最多的岛屿。比如海底漫步、拖曳伞、自驾快艇、摩托艇、香蕉船。</p>
                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="Racha Island">皇帝岛</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/2.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Ko+Racha+Yai/@7.6042071,98.3651046,16z/data=!4m5!3m4!1s0x304fd13b9fc062eb:0x47ef1e6e6141103!8m2!3d7.6038381!4d98.3663526">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">皇帝岛</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal2">介绍</a>
<div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">皇帝岛 - 介绍</h4>
                            <p>皇帝岛在普吉岛的南面，相距12公里，快艇需要30-40分钟左右。与普吉岛其他热门或不那么热门的景点相比，皇帝岛算是一个非常新的面孔。岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，到此的游客数量比较少，与喧闹的普吉岛相较，这里沙滩的环境格外清幽，附近只有零星泳客、滑浪发烧友和耳畔传来的浪涛拍岸声，简直就是世外桃源！</p>
                            <p className="grey-text">Racha Island is in the south of Phuket, 12 kilometers apart, and the speedboat takes about 30-40 minutes. Compared with other popular or not-so-popular attractions in Phuket, King Island is a very new face. The island not only has beautiful and complete natural tropical island scenery, but also the coastal scenery of the coral reef is also unforgettable. Due to the late development, the number of tourists here is relatively small. Compared with the noisy Phuket Island, the beach environment here is particularly quiet. There are only sporadic swimmers, surfing enthusiasts and the sound of the waves coming from the ears nearby. It's a paradise!</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%9A%87%E5%B8%9D%E5%B2%9B/4836826?fr=aladdin">
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
                            <h5>2017/06/08</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/2.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>皇帝岛</p>
                                    <p>在船上用过午饭后，来到皇帝岛。</p>
                                    <p>岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，到此的游客数量比较少，沙滩的环境格外清幽。</p>
                                </div>
                            </div>

                            <div className="row" id="title3">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/3.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>乘船去浮潜</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/4.jpg" alt="" className="responsive-img"></img>
                                </div>
                                
                                <div className="col s12 m12 l6 offset-l1">
                                {/* <p className="center">浮潜视频</p>
                                <div className="video" id="video1">
                                    <video controls src="../video/1.mp4" poster="../video_poster/1.jpg" width="387" height="472"></video>
                                </div> */}
                                </div>
                            </div>



                        </div>
                        

                    </div>

                    <div className="titles" id="title4">
                        <h4 className="tooltipped title" data-tooltip="Phuket Island">普吉岛</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/3.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Phuket,+Thailand/@7.8309254,98.0797292,10z/data=!3m1!4b1!4m5!3m4!1s0x305031e2c462524f:0xe9ca9a85063dba21!8m2!3d7.9519331!4d98.3380884">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">普吉岛</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal4">介绍</a>
<div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">普吉岛 - 介绍</h4>
                            <p>普吉岛位于印度洋安达曼海东南部，离泰国首都曼谷867公里，是泰国境内唯一受封为省级地位的岛屿。有深远的历史和文化，被誉为安达曼海的明珠，500多年前是锡矿基地，泰国主要的旅游胜地，人口175万（2004年）。
<br/>
<br/>
主要农产品有橡胶、椰子、腰果和菠萝，此外在普吉岛的东面和南岸有养虾场和人工珍珠养殖场，但旅游业仍是普吉岛的第一收入来源。普吉岛与泰国南部安达曼海岸由桥梁相连。
<br/>
<br/>
位于北纬7°45′-8°15′和东经98°15′-98°40′之间。普吉岛周围有39个小岛，都归属普吉镇行政管理，涵盖570平方公里。</p>
                            <p className="grey-text">Phuket Island is located in the southeast of the Andaman Sea in the Indian Ocean, 867 kilometers away from Bangkok, the capital of Thailand. It is the only island in Thailand that has been granted a provincial status. It has a profound history and culture, and is known as the pearl of the Andaman Sea. It was a tin mining base more than 500 years ago and a major tourist attraction in Thailand with a population of 1.75 million (2004).
<br/>
<br/>
The main agricultural products are rubber, coconuts, cashews and pineapples. In addition, there are shrimp farms and artificial pearl farms on the east and south coast of Phuket. However, tourism is still the first source of income for Phuket. Phuket and the Andaman coast in southern Thailand are connected by bridges.
<br/>
<br/>
Located between 7°45'-8°15' north latitude and 98°15'-98°40' east longitude. There are 39 small islands around Phuket, all under the administrative management of Phuket Town, covering 570 square kilometers.</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AE%E5%90%89%E5%B2%9B/121922?fr=aladdin">
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
                            <h5>2017/06/08</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/6.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>晚上</p>
                                    <p>我们乘船回到普吉岛。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/7.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>街上有很多水果店和小吃摊。</p>
                                </div>
                            </div>

                        </div>
                        

                    </div>

                    <div className="titles" id="title5">
                        <h4 className="tooltipped title" data-tooltip="Karon&Kata Beach">卡伦&卡塔海滩</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/4.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Karon+Beach/@7.8440306,98.2743965,14z/data=!3m1!4b1!4m5!3m4!1s0x305025721ca627d5:0xe46801b37ca8651f!8m2!3d7.8438991!4d98.2936186">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">卡伦海滩</span>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Kata+Beach/@7.8198368,98.2958341,17z/data=!3m1!4b1!4m5!3m4!1s0x3050258d94ffcb75:0xd772b22da49989!8m2!3d7.8198315!4d98.2980228">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">卡塔海滩</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal5">介绍</a>
<div id="modal5" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">卡伦&卡塔海滩 - 介绍</h4>
    <p>卡伦海滩在岛的西海岸中南部，离芭东海滩不远，是普吉岛三大海滩之一，白色的沙滩是普吉岛最美丽的海滩之一。3公里的海岸线天然笔直，几乎没有弧度。晴天时，卡伦海滩景色既值得静静地欣赏，也适合进行水上活动和日光浴。
    <br/>
    <br/>
    卡塔海滩比芭东海滩和卡伦海滩小，给人一种更温婉的感觉。这里有蜿蜒的海岸线，沙滩柔软，海浪轻轻拍打，海风送来一阵阵惬意。</p>
    <p className="grey-text">Karon Beach is located in the south-central part of the west coast of the island, not far from Patong Beach. It is one of the three major beaches in Phuket. The white sand beach is one of the most beautiful beaches in Phuket. The 3 km coastline of the beach is naturally straight with almost no curvature. On a sunny day, the Karon Beach scenery is not only worth enjoying quietly but also suitable for water sports and sunbathing.
     <br/>
     <br/>
     Kata Beach is smaller than Patong Beach and Karon Beach, giving people a more gentle feeling. There is a winding coastline, the beach is soft, the waves beat gently, and the sea breeze sends waves of comfort.</p>  
     <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8D%A1%E4%BC%A6%E6%B5%B7%E6%BB%A9">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>  
                            <br/>
                            <br/>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8D%A1%E5%A1%94%E6%B5%B7%E6%BB%A9">
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
                            <h5>2017/06/09</h5>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/8.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>卡伦海滩</p>
                                    <p>包车环岛一天，很方便。司机会给你一张普吉岛的地图，带你去你想去的地方。</p>
                                    <p>我们选的是卡伦&卡塔海滩，然后在神仙半岛看日落，最后结束在芭东海滩。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/9.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>卡塔海滩</p>
                                    <p>这里风平浪静、海水清澈、很适合休闲和潜水。</p>
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className="titles" id="title6">
                        <h4 className="tooltipped title" data-tooltip="Prom Thep Cape">神仙半岛</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/5.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Promthep+Cape/@7.758863,89.3386752,5z/data=!4m8!1m2!2m1!1z56We5LuZ5Y2K5bKb!3m4!1s0x30502621260298b5:0xb68d0b2dcb95a1b!8m2!3d7.758863!4d98.303519">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">神仙半岛</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal6">介绍</a>
<div id="modal6" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">神仙半岛 - 介绍</h4>
    <p>神仙半岛，突出于普吉岛最南端、距市区18公里的朋帖海岬，在泰语中的意思为上帝的岬角，由于在观景台上供奉了一尊四面佛故名之，当地人也称它为神仙半岛。神仙半岛的历史可源自于昔日航海家从大陆往马来西亚半岛行驶时，无意间发现此地，便开启了神仙半岛的历史，成为航海家和船员广为人知的地点，是拍婚纱照的好去处。</p>
    <p className="grey-text">Prom Thep Cape, protruding from the southernmost point of Phuket Island and 18 kilometers away from the city’s Promontory Cape, it means God’s Cape in Thai. It is also called Prom Thep Cape by the locals because it enshrines an Erawan Buddha on the viewing platform. It is the fairy peninsula. The history of the Prom Thep Cape can be derived from the fact that when navigators traveled from the mainland to Peninsular Malaysia, they accidentally discovered this place and opened the history of the Prom Thep Cape. It has become a well-known place for navigators and crews and is a good place to take wedding photos.</p>    
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AE%E5%90%89%E7%A5%9E%E4%BB%99%E5%8D%8A%E5%B2%9B/154995">
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
                            <h5>2017/06/09</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/10.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>来神仙半岛日落的人非常多，建议大家提早一点来。</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/11.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">

                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/12.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">

                                </div>
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="titles" id="title7">
                        <h4 className="tooltipped title" data-tooltip="Pa Tong Beach">芭东海滩</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/6.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Pa+Tong,+Kathu+District,+Phuket,+Thailand/@7.9035432,98.257461,13z/data=!3m1!4b1!4m5!3m4!1s0x30503a96a80e1833:0x40223bc2c382480!8m2!3d7.8965763!4d98.3021044">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">芭东海滩</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal7">介绍</a>
<div id="modal7" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">芭东海滩 - 介绍</h4>
    <p>芭东海滩距普吉镇15公里，是普吉岛开发最完善的海滩区。这里有游泳、太阳浴、香蕉船、帆板、游艇等各种海上活动项目，而这里的海水清澈见底，水中生物种类繁多，是亚洲地区公认的最优良的潜水地之一。
<br/><br/>
白天的芭东海滩游人众多，吸引着越来越多的游客。喜欢逛街和购物的游客也很喜欢这里，因为在海滩附近有几条布满商店和餐馆的街道，走走看看间乐趣无穷。夜晚，度假村、露天酒吧、舞厅、夜总会人来人往。点一杯简单的饮料，在异国的夜晚和陌生的朋友聊聊天，看看外国人的夜生活，再吹一吹海风，真是非常享受。</p>
    <p className="grey-text">Patong Beach is 15 kilometers away from Phuket Town and is the most developed beach area in Phuket. There are various marine activities such as swimming, sun bathing, banana boat, windsurfing, yachting, etc. The water here is crystal clear and there are many types of aquatic life. It is recognized as one of the best diving sites in Asia.
    <br/><br/>
Patong Beach is crowded with tourists during the day, attracting more and more tourists. Tourists who like to go shopping and shopping also like this place, because there are several streets full of shops and restaurants near the beach, so it's fun to walk around. At night, people come and go in resorts, open-air bars, dance halls, and nightclubs. Order a simple drink, chat with unfamiliar friends on a foreign night, watch the nightlife of foreigners, and blow the sea breeze. It is really enjoyable.</p>    
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%8A%AD%E4%B8%9C%E6%B5%B7%E6%BB%A9">
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
                            <h5>2017/06/09</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/13.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>芭东海滩的游客很多，所以海滩上有很多垃圾，这点不如卡伦&卡塔海滩。</p>
                                    <p>但芭东海滩的周围有很多的商店和餐馆，非常热闹。</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    <div className="titles" id="title8">
                        <h4 className="tooltipped title" data-tooltip="Maya Bay">玛雅湾</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/7.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Maya+Bay/@7.6782054,98.7644148,18z/data=!3m1!4b1!4m5!3m4!1s0x304e20be94f73363:0x85a4f5bb85cf994f!8m2!3d7.6781764!4d98.7656716">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">玛雅湾</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal8">介绍</a>
<div id="modal8" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">玛雅湾 - 介绍</h4>
    <p>玛雅海湾三面环山，沙滩雪白，海滩不大，四周上百米的绝壁气势非凡，象一只巨大的手保护着玛雅湾。海水碧蓝，岸边点缀着精巧的椰树。有一种典型的热带海岛的气息，适合观景和潜水。</p>
    <p className="grey-text">The Maya Bay is surrounded by mountains on three sides, the sandy beach is white, and the beach is small. The cliffs surrounding it for hundreds of meters are extraordinary, like a huge hand protecting the Maya Bay. The sea is blue and the shore is dotted with delicate coconut trees. There is a typical tropical island atmosphere, suitable for viewing and diving.</p>    
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%8E%9B%E9%9B%85%E6%B5%B7%E6%B9%BE?fromtitle=%E7%8E%9B%E9%9B%85%E6%B9%BE&fromid=3008660">
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
                            <h5>2017/06/10</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/14.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>我们上午出海，抵达玛雅湾。
                                    <br/>
                                    <br/>
                                    这是一座无人居住的岛。沙子不错，但是由于有游客参观，海水里会有垃圾。</p>

                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/15.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Pileh Lagoon</p>
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className="titles" id="title9">
                        <h4 className="tooltipped title" data-tooltip="Viking Cave & Monkey Bay">燕窝洞 & 猴子湾</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/8.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Viking+Cave/@7.685752,98.7575952,15z/data=!4m13!1m7!3m6!1s0x304e20a33b96bd65:0x183d077e0ecb38e4!2sKo+Phi+Phi+Lee!3b1!8m2!3d7.6804638!4d98.7687699!3m4!1s0x0:0xceb0fe1c813aa2be!8m2!3d7.6910937!4d98.766768">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">燕窝洞</span>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Monkey+Bay/@7.685752,98.7575952,15z/data=!4m13!1m7!3m6!1s0x304e20a33b96bd65:0x183d077e0ecb38e4!2sKo+Phi+Phi+Lee!3b1!8m2!3d7.6804638!4d98.7687699!3m4!1s0x304e217099018447:0x41166333847908c0!8m2!3d7.695134!4d98.7652177">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">猴子湾</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9">介绍</a>
<div id="modal9" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">燕窝洞 - 介绍</h4>
    <p>南部的小皮皮岛四周耸立着悬崖峭壁，地势险要，因此罕有人烟。岛上有几个巨大的石灰岩洞穴，洞内垂吊着很多美丽的钟乳石，有些洞壁还刻有史前人类、大象、船只的壁画等。相传，这些石洞以前是安达曼海盗的窝点，故被称为“海盗洞”，又因洞内栖息着很多海燕，盛产燕窝，也被称为"燕窝洞"。</p>
    <p className="grey-text">Phi Phi Le is surrounded by cliffs and the terrain is dangerous, so it is rarely inhabited. There are several huge limestone caves on the island. There are many beautiful stalactites hanging in the caves. Some cave walls are carved with murals of prehistoric humans, elephants, and ships. According to legend, these caves were formerly the dens of Andaman pirates, so they were called "pirate caves". They were also called "Viking Cave" because of the many petrels inhabiting the caves.</p>    
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%87%95%E7%AA%9D%E6%B4%9E">
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
                            <h5>2017/06/10</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/16.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>猴子湾</p>
                                    <p>猴子很通人性，临走前导游扔给他一瓶饮料。</p>
                                </div>
                            </div>


                        </div>
                        
                    </div>
                    
                    <div className="titles" id="title10">
                        <h4 className="tooltipped title" data-tooltip="Thai Massage">泰式按摩</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/9.jpg" alt="" className="responsive-img"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal10">介绍</a>
<div id="modal10" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">泰式按摩 - 介绍</h4>
    <p>泰式保健按摩是流行于泰国的一种按摩方式，以活动关节为主，无穴位之说，不同于中式按摩。简便易学，难易适中，实用性强。泰式按摩非常注重背部、腰部的舒展，按摩师从脚趾开始一直作业到头顶才算结束一套动作，从足部向心脏方向进行按摩。手法几乎涵盖了按、摸、拉、拽、揉、捏等所有动作。
<br/>
<br/>
泰式按摩是跪式服务，左右手交替动作，用力柔和、均匀、速度适中、顺序进行。浴后经泰式保健按摩，可以使人快速消除疲劳，恢复体能，还可增强关节韧带的弹性和活力，恢复正常的关节活动功能，达到促进体液循环，保健防病，健体美容的功效。</p>
    <p className="grey-text">Thai health massage is a popular massage method in Thailand. It focuses on moving joints without acupuncture points, which is different from Chinese massage. Easy to learn, moderate in difficulty, and strong in practicability. Thai massage pays much attention to the stretching of the back and waist. The masseur works from the toes to the top of the head before finishing a set of movements. Massage from the feet to the heart. The technique covers almost all actions such as pressing, touching, pulling, pulling, kneading, and pinching.
<br/>
<br/>
Thai massage is a kneeling service, with alternating left and right hands, with gentle, uniform force, moderate speed, and sequence. After the bath, the Thai-style health massage can quickly relieve fatigue and restore physical fitness. It can also enhance the elasticity and vitality of joints and ligaments, restore normal joint activities, and achieve the effects of promoting body fluid circulation, health care, disease prevention, and body beauty.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B3%B0%E5%BC%8F%E6%8C%89%E6%91%A9/1950816">
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

                    <div className="titles" id="title11">
                        <h4 className="tooltipped title" data-tooltip="Chiang Mai">清迈</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/10.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chiang+Mai,+Mueang+Chiang+Mai+District,+Chiang+Mai,+Thailand/@18.7943954,98.8864365,12z/data=!3m1!4b1!4m5!3m4!1s0x30da3a7e90bb6f5d:0x98d46270a59b4367!8m2!3d18.7883439!4d98.9853008">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">清迈</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal11">介绍</a>
<div id="modal11" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">清迈 - 介绍</h4>
    <p>清迈为泰国北部城市，环境优美，气候凉爽，以玫瑰花著称，素有“泰北玫瑰”的雅称。清迈历史悠久，文化古迹众多。
<br/>
<br/>
清迈的发达程度仅次于泰国首都曼谷，市内风景秀丽，遍植花草。清迈的天然环境优美，平均海拔300米，是泰国的高原城市，气候凉爽，是著名的避暑胜地。东部为坤丹山脉，西部为英坦昂山脉，山峰多在2000米以上，主峰英坦昂峰是全国最高峰，海拔2576米。中部为宾河流域。森林面积16700平方公里，占全府土地的73%。
<br/>
<br/>
清迈曾长期作为泰王国首都，仍保留着很多珍贵的历史和文化遗迹。城区内有代表着泰北灿烂历史文化的古老寺庙，同时清迈的丝绸、纺织品等也著称于世，每年都有大批丝绸、纺织品出口，是泰国制造业的重要支柱。</p>
    <p className="grey-text">Chiang Mai is a city in northern Thailand with a beautiful environment and a cool climate. It is famous for its roses and is known as the "Rose of Northern Thailand". Chiang Mai has a long history and numerous cultural monuments.
<br/>
<br/>
The degree of development of Chiang Mai is second only to the capital of Thailand, Bangkok. The city has beautiful scenery and plants everywhere. Chiang Mai has a beautiful natural environment with an average altitude of 300 meters. It is a plateau city in Thailand with a cool climate and a famous summer resort. In the east is the Kundan Mountain Range, and in the west is the Yingtanang Mountain Range. Most of the peaks are more than 2000 meters. The main peak Yingtanang Peak is the highest peak in the country with an altitude of 2576 meters. The central part is the Binhe River Basin. The forest area is 16,700 square kilometers, accounting for 73% of the total land in the province.
<br/>
<br/>
Chiang Mai was once the capital of the Kingdom of Thailand for a long time and still retains many precious historical and cultural relics. There are ancient temples in the city that represent the splendid history and culture of northern Thailand. At the same time, Chiang Mai's silk and textiles are also famous in the world. Large quantities of silk and textiles are exported every year, which is an important pillar of Thailand's manufacturing industry.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B8%85%E8%BF%88">
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
                            <h5>2017/06/11</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/17.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>普吉岛✈️清迈</p>
                                    <p>到达酒店，办理入住。</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/18.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>吃午饭</p>
                                    <p>餐馆：Clay Studio Coffee in the Garden</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/19.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                <p>点了咖喱鸡排饭+奶茶</p>
                                <p>味道还不错</p>

                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title12">
                        <h4 className="tooltipped title" data-tooltip="Sunday night market">周日夜市</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/11.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Tha+Phae+Gate/@18.7876973,98.9912765,17z/data=!3m1!4b1!4m5!3m4!1s0x30da3aa23421c875:0x9d3b8fabe43926f6!8m2!3d18.7876922!4d98.9934652">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">塔佩门</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal12">介绍</a>
<div id="modal12" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">周日夜市 - 介绍</h4>
    <p>周日夜市的主街道从塔佩门一直延续到古城中三王纪念碑的那条路。
    <br/><br/>营业时间：周日16:00-23:00</p>
    <p className="grey-text">The main street of the Sunday Night Market continues from Tha Pae Gate to the Three Kings Monument in the ancient city.
    <br/><br/>Business hours: Sunday 16:00-23:00
    </p>   
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>



</div>
                            </div>
                        </div>
                        <div className="titleContent">
                            <h5>2017/06/11</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/20.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>这里的小摊摆放着小吃、手工艺品、日用品等，也有人当街表演卖艺。值得一来。</p>
                                </div>
                            </div>




                        </div>
                        
                    </div>

                    <div className="titles" id="title13">
                        <h4 className="tooltipped title" data-tooltip="Zipline adventures">丛林飞跃</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/12.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Flying+Squirrels+Zip+Line+Chiang+Mai/@18.7869441,98.9957592,12z/data=!4m8!1m2!2m1!1sFlying+Squirrels+Zip+Line!3m4!1s0x30da3aa157f4b383:0x9920bc89250d29e5!8m2!3d18.7869492!4d98.9956683">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">丛林飞跃</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal13">介绍</a>
<div id="modal13" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">丛林飞跃 - 介绍</h4>
    <p>这是一项具有综合惊险性和娱乐性为一体的现代化游乐项目。
<br/>
<br/>
其原理采用自重动力牵引方案，以相应的倾角布置的钢型材为轨道，以游客自身重量为动力，借助轨道装置的高度差，在滑索上滑动的游乐设施。
<br/>
<br/>
丛林飞越整个设施无其它动力，低碳、惊险。</p>
    <p className="grey-text">This is a modern amusement project with comprehensive thrills and entertainment.
<br/>
<br/>
The principle adopts the self-weight power traction scheme, the steel profile arranged at the corresponding inclination angle is the track, the tourist's own weight is the power, and the height difference of the track device is used to slide on the amusement device on the zipline.
<br/>
<br/>
The jungle flying over the entire facility has no other power, low-carbon and thrilling.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.keqiyoule.com/product/conglinchuansuo.html">
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
                            <h5>2017/06/12</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/21.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>名字：Flying Squirrels Zip Line</p>
                                    <p>有很多条线路可以选择，我们选的是32个点的。</p>
                                    <p>快结束时会有摄像机帮忙拍照，可以选择买还是不买。</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/22.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>会有两个教练随行，先过去一个教练帮忙稳住绳索。</p>

                                </div>
                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title14">
                        <h4 className="tooltipped title" data-tooltip="Nimmanhaemin Road">宁曼路</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/13.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">宁曼路</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">



<a className="btn-flat modal-trigger right info " href="#modal14">介绍</a>
<div id="modal14" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">宁曼路 - 介绍</h4>
    <p>
宁曼路上的很多商店都是艺术家或者明星开的，处处都是文艺小清新的范儿，非常适合拍照，咖啡馆，小酒吧，艺术小店都可以在这里找到，并且这些商店的墙壁上都有涂鸦，非常的可爱有趣。

</p>
    <p className="grey-text">Many shops on Nimmanhaemin Road are opened by artists or celebrities, and they are full of small and fresh literary styles, which are very suitable for taking pictures. Cafes, small bars, and art shops can be found here, and the walls of these shops are all There are graffiti, very cute and interesting.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baijiahao.baidu.com/s?id=1621454829827419137&wfr=spider&for=pc">
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
                            <h5>2017/06/12</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/23.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>天气很炎热，我们先找了一家甜品店吃点冰。</p>
                                    <p>之后便随便瞎逛。</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/24.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>逛累了我们找了一家按摩店，服务很不错。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/25.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>晚饭。</p>
                                    <p>是别人推荐的店，做泰国菜的，很好吃。</p>
                                </div>
                            </div>




                        </div>
                        
                    </div>

                    <div className="titles" id="title15">
                        <h4 className="tooltipped title" data-tooltip="Chiang Mai Night Safari">夜间动物园</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/14.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chiang+Mai+Night+Safari/@18.7423554,98.9151354,17z/data=!3m1!4b1!4m8!3m7!1s0x30da37293ac232bf:0xcaafc0bee2a3f81a!5m2!4m1!1i2!8m2!3d18.7423503!4d98.9173241">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">夜间动物园</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">



<a className="btn-flat modal-trigger right info " href="#modal15">介绍</a>
<div id="modal15" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">夜间动物园 - 介绍</h4>
    <p>位于素贴山下的清迈夜间动物园占地近百亩。是泰国最大的动物园。园中除了有各种珍奇动物外，还有风景花园、瀑布和湖泊，风景非常优美，在山顶上还可以俯视整个清迈城。
<br/>
<br/>
清迈夜间动物园利用肉食动物喜好夜晚活动的特性，开辟了夜间游览项目，坐上最多可搭乘24人的小车，近距离观察狮子、老虎、熊、野狼等动物，是一次难得而又刺激的经验。</p>
    <p className="grey-text">Located at the foot of Suthep Mountain, Chiang Mai Night Safari occupies nearly 100 acres. It is the largest zoo in Thailand. In addition to all kinds of exotic animals, there are landscape gardens, waterfalls and lakes in the park. The scenery is very beautiful. On the top of the mountain, you can overlook the entire Chiang Mai city.
<br/>
<br/>
The Chiang Mai Night Safari takes advantage of the carnivore’s preference for night activities and opens up a night tour program. It is a rare and exciting experience to get close to lions, tigers, bears, wild wolves and other animals in a car that can take up to 24 people. experience.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B8%85%E8%BF%88%E5%A4%9C%E9%97%B4%E5%8A%A8%E7%89%A9%E5%9B%AD/15790801?fr=aladdin">
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
                            <h5>2017/06/12</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/26.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>晚饭过后，我们来到清迈夜间动物园。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/27.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>这里有很多表演，并且可以乘小车近距离观察动物。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/28.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>在园内可以买蔬菜来喂动物。</p>
                                </div>
                            </div>


 


                        </div>
                        
                    </div>

                    <div className="titles" id="title16">
                        <h4 className="tooltipped title" data-tooltip="Bangkok">曼谷</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img9/15.jpg" alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Bangkok,+Thailand/@13.7251088,100.3529119,10z/data=!3m1!4b1!4m5!3m4!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">曼谷</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal16">介绍</a>
<div id="modal16" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">曼谷 - 介绍</h4>
    <p>曼谷是世界一线城市，是泰国首都和最大城市，别名“天使之城”，位于湄南河（昭披耶河）东岸，南临暹罗湾，中南半岛最大城市，东南亚第二大城市，为泰国政治、经济、贸易、交通、文化、科技、教育、宗教与各方面中心。曼谷被誉为是“佛教之都”。融合东西方文化、包罗万象的“天使之城”。
<br/>
<br/>
曼谷是繁华的国际大都市，是贵金属和宝石的交易中心。经济占泰国总量的44%，曼谷港承担着泰国90%的外贸。曼谷旅游业十分发达，被评选为全球最受欢迎旅游城市。 
<br/>
<br/>
曼谷是国际活动中心之一，每年有多达200~300起的各种国际会议在此举行。城内设有联合国亚太经社委员会总部、世界银行、世界卫生组织、国际劳工组织以及20多个国际机构的区域办事处。曼谷被誉为“佛教之都”，是“世界佛教联谊会”总部及亚洲理工学院所在地。 </p>
    <p className="grey-text">Bangkok is a first-tier city in the world. It is also the capital and largest city in Thailand. It is also known as the "City of Angels." The center of Thailand's politics, economy, trade, transportation, culture, technology, education, religion and all aspects. Bangkok is known as the "Buddhist Capital". An all-encompassing "City of Angels" that integrates Eastern and Western cultures.
<br/>
<br/>
Bangkok is a bustling international metropolis and a trading center for precious metals and gems. The economy accounts for 44% of Thailand's total, and Bangkok Port is responsible for 90% of Thailand's foreign trade. Bangkok's tourism industry is very developed and has been voted the most popular tourist city in the world.
<br/>
<br/>
Bangkok is one of the international event centers. There are as many as 200 to 300 international conferences held here every year. The city has the headquarters of the United Nations Economic and Social Commission for Asia and the Pacific, the World Bank, the World Health Organization, the International Labour Organization and the regional offices of more than 20 international agencies. Bangkok is known as the "Buddhist Capital" and is the headquarters of the "World Buddhist Friendship Association" and the seat of the Asian Institute of Technology.</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%9B%BC%E8%B0%B7/412946?fr=aladdin">
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
                            <h5>2017/06/13</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/29.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>由于时间有限，我们并没有去大皇宫等地，只去了SIAM商圈逛。</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img10/30.jpg" alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>晚上回酒店前在超市买点吃的喝的，明天就返程回国了。🌛</p>
                                    <p>下次再见，泰国。</p>
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
            
            <div className="row hide-on-med-and-up" id="travelNoteThailand">

<div className="col s12 m12 l12  noteThailand">

<a href="" className="sidenav-trigger" data-target="mobile-menu999">
        <i className="material-icons smallnotenav" >menu</i>
    </a>
    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
    <div className="bigTitle">泰国</div>
            <li className="titleDate">
                <a href="#title17">2017/06/08</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title17">珊瑚岛</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title18">皇帝岛</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title19">浮潜</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title20">晚上</a>
            </li>
            
            <li className="titleDate">
                <a href="#title21">2017/06/09</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title21">卡伦&卡塔海滩</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title22">神仙半岛</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title23">芭东海滩</a>
            </li>

            <li className="titleDate">
                <a href="#title24">2017/06/10</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title24">玛雅湾</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title25">燕窝洞</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title26">晚上</a>
            </li>

            <li className="titleDate">
                <a href="#title27">2017/06/11</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title27">清迈</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title28">周日夜市</a>
            </li>

            <li className="titleDate">
                <a href="#title29">2017/06/12</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title29">丛林飞跃</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title30">宁曼路</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title31">夜间动物园</a>
            </li>

            <li className="titleDate">
                <a href="#title32">2017/06/13</a>
            </li>
            <li className="smallTitle">
            
                <a href="#title32">曼谷</a>
            </li>
        
    </ul>


        <div className="row">
            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
            <div className="row travelDetail">
                <div className="time col s12 m4 l4">
                    <i className=" material-icons left">access_time</i>
                    <span>出发时间</span>
                    <span> / </span>
                    <span>2017-06-07</span>
                </div>
                <div className="day col s12 m4 l4">
                    <i className=" material-icons left">wb_sunny</i>
                    <span>出行天数</span>
                    <span> / </span>
                    <span>8天</span>
                </div>
                <div className="people col s12 m4 l4">
                    <i className=" material-icons left">account_circle</i>
                    <span>人物</span>
                    <span> / </span>
                    <span>和家人</span>
                </div>
            </div>
            <div className="col s1 m1 l1"></div>
            </div>
        </div>

    <div className="titles" id="title17">
        <h4 className="tooltipped title" data-tooltip="Coral Island">珊瑚岛</h4>
        
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/1.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Ko+He/@7.7407852,98.363026,15z/data=!3m1!4b1!4m5!3m4!1s0x305029a3d5386599:0x5a356adbc39d8c1f!8m2!3d7.7421154!4d98.3759417">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">珊瑚岛</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">

            <div className="details">


        <a className="btn-flat modal-trigger right info " href="#modal9991">介绍</a>
        <div id="modal9991" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">珊瑚岛 - 介绍</h4>
            <p>泰国珊瑚岛英文名称为Coral Island。Coral Island，在泰国也被称为Koh Hae或Ko Hi。位于普吉岛东南部，距离普吉岛9公里。小岛从东到西长约3公里，但从南至北宽度仅约800米。
<br/>
<br/>
岛上除了渔村，其他许多地方均为丛林所覆盖。珊瑚岛因丰富的珊瑚群生态而得名，小岛的周围环绕着各种色彩缤纷的珊瑚礁，风光优美，是普吉岛区内最适合滑水、浮潜、冲浪和航行等水上活动的最佳选择地点之一。
<br/>
<br/>
岛上有交通，餐饮，住宿，娱乐等配套服务。</p>

            <p className="grey-text">Coral Island, also known as Koh Hae or Ko Hi in Thailand. Located in the southeast of Phuket, 9 kilometers from Phuket. The island is about 3 kilometers long from east to west, but only about 800 meters wide from south to north.
<br/>
<br/>
Except for fishing villages, many other places on the island are covered by jungle. The Coral Island is named for its rich coral ecology. The island is surrounded by various colorful coral reefs with beautiful scenery. It is the most suitable for water skiing, snorkeling, surfing and sailing in Phuket. Choose one of the locations.
<br/>
<br/>
There are transportation, catering, accommodation, entertainment and other supporting services on the island.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%8F%8A%E7%91%9A%E5%B2%9B/5997595?fr=aladdin">
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
            <h5>2017/06/08</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/1.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>吃过早餐后，到码头乘船前往珊瑚岛。</p>
                    <p> 珊瑚岛位于普吉接近正南的海上，从查龙码头出发乘坐快艇船程仅为15分钟，乘坐游艇船程约为20分钟，乘坐帆船船程约为30分钟，是距离普及本岛第二近的离岛。</p>

                    <p>珊瑚岛的水质和沙质比较一般，不能得到很好的浮潜体验，景观十分平淡。</p>

                    <p>但是珊瑚岛是普吉所有离岛中，海上游乐项目最多的岛屿。比如海底漫步、拖曳伞、自驾快艇、摩托艇、香蕉船。</p>
                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title18">
        <h4 className="tooltipped title" data-tooltip="Racha Island">皇帝岛</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/2.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Ko+Racha+Yai/@7.6042071,98.3651046,16z/data=!4m5!3m4!1s0x304fd13b9fc062eb:0x47ef1e6e6141103!8m2!3d7.6038381!4d98.3663526">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">皇帝岛</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9992">介绍</a>
<div id="modal9992" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">皇帝岛 - 介绍</h4>
            <p>皇帝岛在普吉岛的南面，相距12公里，快艇需要30-40分钟左右。与普吉岛其他热门或不那么热门的景点相比，皇帝岛算是一个非常新的面孔。岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，到此的游客数量比较少，与喧闹的普吉岛相较，这里沙滩的环境格外清幽，附近只有零星泳客、滑浪发烧友和耳畔传来的浪涛拍岸声，简直就是世外桃源！</p>
            <p className="grey-text">Racha Island is in the south of Phuket, 12 kilometers apart, and the speedboat takes about 30-40 minutes. Compared with other popular or not-so-popular attractions in Phuket, King Island is a very new face. The island not only has beautiful and complete natural tropical island scenery, but also the coastal scenery of the coral reef is also unforgettable. Due to the late development, the number of tourists here is relatively small. Compared with the noisy Phuket Island, the beach environment here is particularly quiet. There are only sporadic swimmers, surfing enthusiasts and the sound of the waves coming from the ears nearby. It's a paradise!</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%9A%87%E5%B8%9D%E5%B2%9B/4836826?fr=aladdin">
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
            <h5>2017/06/08</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/2.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>皇帝岛</p>
                    <p>在船上用过午饭后，来到皇帝岛。</p>
                    <p>岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，到此的游客数量比较少，沙滩的环境格外清幽。</p>
                </div>
            </div>

            <div className="row" id="title19">
                <div className="col s12 m12 l5">
                    <img src="../img10/3.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>乘船去浮潜</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/4.jpg" alt="" className="responsive-img"></img>
                </div>
                
                <div className="col s12 m12 l6 offset-l1">
                {/* <p className="center">浮潜视频</p>
                <div className="video" id="video1">
                    <video controls src="../video/1.mp4" poster="../video_poster/1.jpg" width="100px" height="122px"></video>
                </div> */}
                </div>
            </div>



        </div>
        

    </div>

    <div className="titles" id="title20">
        <h4 className="tooltipped title" data-tooltip="Racha Island">普吉岛</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/3.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Phuket,+Thailand/@7.8309254,98.0797292,10z/data=!3m1!4b1!4m5!3m4!1s0x305031e2c462524f:0xe9ca9a85063dba21!8m2!3d7.9519331!4d98.3380884">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">普吉岛</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9994">介绍</a>
<div id="modal9994" className="modal modal-fixed-footer">
            <div className="modal-content">
            <h4 className="title">普吉岛 - 介绍</h4>
            <p>普吉岛位于印度洋安达曼海东南部，离泰国首都曼谷867公里，是泰国境内唯一受封为省级地位的岛屿。有深远的历史和文化，被誉为安达曼海的明珠，500多年前是锡矿基地，泰国主要的旅游胜地，人口175万（2004年）。
<br/>
<br/>
主要农产品有橡胶、椰子、腰果和菠萝，此外在普吉岛的东面和南岸有养虾场和人工珍珠养殖场，但旅游业仍是普吉岛的第一收入来源。普吉岛与泰国南部安达曼海岸由桥梁相连。
<br/>
<br/>
位于北纬7°45′-8°15′和东经98°15′-98°40′之间。普吉岛周围有39个小岛，都归属普吉镇行政管理，涵盖570平方公里。</p>
            <p className="grey-text">Phuket Island is located in the southeast of the Andaman Sea in the Indian Ocean, 867 kilometers away from Bangkok, the capital of Thailand. It is the only island in Thailand that has been granted a provincial status. It has a profound history and culture, and is known as the pearl of the Andaman Sea. It was a tin mining base more than 500 years ago and a major tourist attraction in Thailand with a population of 1.75 million (2004).
<br/>
<br/>
The main agricultural products are rubber, coconuts, cashews and pineapples. In addition, there are shrimp farms and artificial pearl farms on the east and south coast of Phuket. However, tourism is still the first source of income for Phuket. Phuket and the Andaman coast in southern Thailand are connected by bridges.
<br/>
<br/>
Located between 7°45'-8°15' north latitude and 98°15'-98°40' east longitude. There are 39 small islands around Phuket, all under the administrative management of Phuket Town, covering 570 square kilometers.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AE%E5%90%89%E5%B2%9B/121922?fr=aladdin">
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
            <h5>2017/06/08</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/6.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>晚上</p>
                    <p>我们乘船回到普吉岛。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/7.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>街上有很多水果店和小吃摊。</p>
                </div>
            </div>

        </div>
        

    </div>

    <div className="titles" id="title21">
        <h4 className="tooltipped title" data-tooltip="Karon&Kata Beach">卡伦&卡塔海滩</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/4.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Karon+Beach/@7.8440306,98.2743965,14z/data=!3m1!4b1!4m5!3m4!1s0x305025721ca627d5:0xe46801b37ca8651f!8m2!3d7.8438991!4d98.2936186">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">卡伦海滩</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Kata+Beach/@7.8198368,98.2958341,17z/data=!3m1!4b1!4m5!3m4!1s0x3050258d94ffcb75:0xd772b22da49989!8m2!3d7.8198315!4d98.2980228">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">卡塔海滩</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9995">介绍</a>
<div id="modal9995" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">卡伦&卡塔海滩 - 介绍</h4>
<p>卡伦海滩在岛的西海岸中南部，离芭东海滩不远，是普吉岛三大海滩之一，白色的沙滩是普吉岛最美丽的海滩之一。3公里的海岸线天然笔直，几乎没有弧度。晴天时，卡伦海滩景色既值得静静地欣赏，也适合进行水上活动和日光浴。
<br/>
<br/>
卡塔海滩比芭东海滩和卡伦海滩小，给人一种更温婉的感觉。这里有蜿蜒的海岸线，沙滩柔软，海浪轻轻拍打，海风送来一阵阵惬意。</p>
<p className="grey-text">Karon Beach is located in the south-central part of the west coast of the island, not far from Patong Beach. It is one of the three major beaches in Phuket. The white sand beach is one of the most beautiful beaches in Phuket. The 3 km coastline of the beach is naturally straight with almost no curvature. On a sunny day, the Karon Beach scenery is not only worth enjoying quietly but also suitable for water sports and sunbathing.
<br/>
<br/>
Kata Beach is smaller than Patong Beach and Karon Beach, giving people a more gentle feeling. There is a winding coastline, the beach is soft, the waves beat gently, and the sea breeze sends waves of comfort.</p>  
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8D%A1%E4%BC%A6%E6%B5%B7%E6%BB%A9">
                {/* <i className="material-icons left">details</i>   */}
                <span className="blue-text">[Source From...]</span>
            </a>  
            <br/>
            <br/>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8D%A1%E5%A1%94%E6%B5%B7%E6%BB%A9">
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
            <h5>2017/06/09</h5>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/8.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>卡伦海滩</p>
                    <p>包车环岛一天，很方便。司机会给你一张普吉岛的地图，带你去你想去的地方。</p>
                    <p>我们选的是卡伦&卡塔海滩，然后在神仙半岛看日落，最后结束在芭东海滩。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/9.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>卡塔海滩</p>
                    <p>这里风平浪静、海水清澈、很适合休闲和潜水。</p>
                </div>
            </div>


        </div>
        
    </div>

    <div className="titles" id="title22">
        <h4 className="tooltipped title" data-tooltip="Prom Thep Cape">神仙半岛</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/5.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Promthep+Cape/@7.758863,89.3386752,5z/data=!4m8!1m2!2m1!1z56We5LuZ5Y2K5bKb!3m4!1s0x30502621260298b5:0xb68d0b2dcb95a1b!8m2!3d7.758863!4d98.303519">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">神仙半岛</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9996">介绍</a>
<div id="modal9996" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">神仙半岛 - 介绍</h4>
<p>神仙半岛，突出于普吉岛最南端、距市区18公里的朋帖海岬，在泰语中的意思为上帝的岬角，由于在观景台上供奉了一尊四面佛故名之，当地人也称它为神仙半岛。神仙半岛的历史可源自于昔日航海家从大陆往马来西亚半岛行驶时，无意间发现此地，便开启了神仙半岛的历史，成为航海家和船员广为人知的地点，是拍婚纱照的好去处。</p>
<p className="grey-text">Prom Thep Cape, protruding from the southernmost point of Phuket Island and 18 kilometers away from the city’s Promontory Cape, it means God’s Cape in Thai. It is also called Prom Thep Cape by the locals because it enshrines an Erawan Buddha on the viewing platform. It is the fairy peninsula. The history of the Prom Thep Cape can be derived from the fact that when navigators traveled from the mainland to Peninsular Malaysia, they accidentally discovered this place and opened the history of the Prom Thep Cape. It has become a well-known place for navigators and crews and is a good place to take wedding photos.</p>    
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AE%E5%90%89%E7%A5%9E%E4%BB%99%E5%8D%8A%E5%B2%9B/154995">
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
            <h5>2017/06/09</h5>
            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/10.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>来神仙半岛日落的人非常多，建议大家提早一点来。</p>
                </div>
            </div>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/11.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">

                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/12.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">

                </div>
            </div>
        
        </div>
        
    </div>

    <div className="titles" id="title23">
        <h4 className="tooltipped title" data-tooltip="Pa Tong Beach">芭东海滩</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/6.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Pa+Tong,+Kathu+District,+Phuket,+Thailand/@7.9035432,98.257461,13z/data=!3m1!4b1!4m5!3m4!1s0x30503a96a80e1833:0x40223bc2c382480!8m2!3d7.8965763!4d98.3021044">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">芭东海滩</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9997">介绍</a>
<div id="modal9997" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">芭东海滩 - 介绍</h4>
<p>芭东海滩距普吉镇15公里，是普吉岛开发最完善的海滩区。这里有游泳、太阳浴、香蕉船、帆板、游艇等各种海上活动项目，而这里的海水清澈见底，水中生物种类繁多，是亚洲地区公认的最优良的潜水地之一。
<br/><br/>
白天的芭东海滩游人众多，吸引着越来越多的游客。喜欢逛街和购物的游客也很喜欢这里，因为在海滩附近有几条布满商店和餐馆的街道，走走看看间乐趣无穷。夜晚，度假村、露天酒吧、舞厅、夜总会人来人往。点一杯简单的饮料，在异国的夜晚和陌生的朋友聊聊天，看看外国人的夜生活，再吹一吹海风，真是非常享受。</p>
<p className="grey-text">Patong Beach is 15 kilometers away from Phuket Town and is the most developed beach area in Phuket. There are various marine activities such as swimming, sun bathing, banana boat, windsurfing, yachting, etc. The water here is crystal clear and there are many types of aquatic life. It is recognized as one of the best diving sites in Asia.
<br/><br/>
Patong Beach is crowded with tourists during the day, attracting more and more tourists. Tourists who like to go shopping and shopping also like this place, because there are several streets full of shops and restaurants near the beach, so it's fun to walk around. At night, people come and go in resorts, open-air bars, dance halls, and nightclubs. Order a simple drink, chat with unfamiliar friends on a foreign night, watch the nightlife of foreigners, and blow the sea breeze. It is really enjoyable.</p>    
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E8%8A%AD%E4%B8%9C%E6%B5%B7%E6%BB%A9">
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
            <h5>2017/06/09</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/13.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>芭东海滩的游客很多，所以海滩上有很多垃圾，这点不如卡伦&卡塔海滩。</p>
                    <p>但芭东海滩的周围有很多的商店和餐馆，非常热闹。</p>
                </div>
            </div>

        </div>
        
    </div>

    <div className="titles" id="title24">
        <h4 className="tooltipped title" data-tooltip="Maya Bay">玛雅湾</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/7.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Maya+Bay/@7.6782054,98.7644148,18z/data=!3m1!4b1!4m5!3m4!1s0x304e20be94f73363:0x85a4f5bb85cf994f!8m2!3d7.6781764!4d98.7656716">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">玛雅湾</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9998">介绍</a>
<div id="modal9998" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">玛雅湾 - 介绍</h4>
<p>玛雅海湾三面环山，沙滩雪白，海滩不大，四周上百米的绝壁气势非凡，象一只巨大的手保护着玛雅湾。海水碧蓝，岸边点缀着精巧的椰树。有一种典型的热带海岛的气息，适合观景和潜水。</p>
<p className="grey-text">The Maya Bay is surrounded by mountains on three sides, the sandy beach is white, and the beach is small. The cliffs surrounding it for hundreds of meters are extraordinary, like a huge hand protecting the Maya Bay. The sea is blue and the shore is dotted with delicate coconut trees. There is a typical tropical island atmosphere, suitable for viewing and diving.</p>    
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%8E%9B%E9%9B%85%E6%B5%B7%E6%B9%BE?fromtitle=%E7%8E%9B%E9%9B%85%E6%B9%BE&fromid=3008660">
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
            <h5>2017/06/10</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/14.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>我们上午出海，抵达玛雅湾。
                    <br/>
                    <br/>
                    这是一座无人居住的岛。沙子不错，但是由于有游客参观，海水里会有垃圾。</p>

                </div>
            </div>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/15.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>Pileh Lagoon</p>
                </div>
            </div>


        </div>
        
    </div>

    <div className="titles" id="title25">
        <h4 className="tooltipped title" data-tooltip="Viking Cave & Monkey Bay">燕窝洞 & 猴子湾</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/8.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Viking+Cave/@7.685752,98.7575952,15z/data=!4m13!1m7!3m6!1s0x304e20a33b96bd65:0x183d077e0ecb38e4!2sKo+Phi+Phi+Lee!3b1!8m2!3d7.6804638!4d98.7687699!3m4!1s0x0:0xceb0fe1c813aa2be!8m2!3d7.6910937!4d98.766768">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">燕窝洞</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Monkey+Bay/@7.685752,98.7575952,15z/data=!4m13!1m7!3m6!1s0x304e20a33b96bd65:0x183d077e0ecb38e4!2sKo+Phi+Phi+Lee!3b1!8m2!3d7.6804638!4d98.7687699!3m4!1s0x304e217099018447:0x41166333847908c0!8m2!3d7.695134!4d98.7652177">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">猴子湾</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9999">介绍</a>
<div id="modal9999" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">燕窝洞 - 介绍</h4>
<p>南部的小皮皮岛四周耸立着悬崖峭壁，地势险要，因此罕有人烟。岛上有几个巨大的石灰岩洞穴，洞内垂吊着很多美丽的钟乳石，有些洞壁还刻有史前人类、大象、船只的壁画等。相传，这些石洞以前是安达曼海盗的窝点，故被称为“海盗洞”，又因洞内栖息着很多海燕，盛产燕窝，也被称为"燕窝洞"。</p>
<p className="grey-text">Phi Phi Le is surrounded by cliffs and the terrain is dangerous, so it is rarely inhabited. There are several huge limestone caves on the island. There are many beautiful stalactites hanging in the caves. Some cave walls are carved with murals of prehistoric humans, elephants, and ships. According to legend, these caves were formerly the dens of Andaman pirates, so they were called "pirate caves". They were also called "Viking Cave" because of the many petrels inhabiting the caves.</p>    
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E7%87%95%E7%AA%9D%E6%B4%9E">
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
            <h5>2017/06/10</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/16.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>猴子湾</p>
                    <p>猴子很通人性，临走前导游扔给他一瓶饮料。</p>
                </div>
            </div>


        </div>
        
    </div>
    
    <div className="titles" id="title26">
        <h4 className="tooltipped title" data-tooltip="Thai Massage">泰式按摩</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/9.jpg" alt="" className="responsive-img"></img>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99910">介绍</a>
<div id="modal99910" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">泰式按摩 - 介绍</h4>
<p>泰式保健按摩是流行于泰国的一种按摩方式，以活动关节为主，无穴位之说，不同于中式按摩。简便易学，难易适中，实用性强。泰式按摩非常注重背部、腰部的舒展，按摩师从脚趾开始一直作业到头顶才算结束一套动作，从足部向心脏方向进行按摩。手法几乎涵盖了按、摸、拉、拽、揉、捏等所有动作。
<br/>
<br/>
泰式按摩是跪式服务，左右手交替动作，用力柔和、均匀、速度适中、顺序进行。浴后经泰式保健按摩，可以使人快速消除疲劳，恢复体能，还可增强关节韧带的弹性和活力，恢复正常的关节活动功能，达到促进体液循环，保健防病，健体美容的功效。</p>
<p className="grey-text">Thai health massage is a popular massage method in Thailand. It focuses on moving joints without acupuncture points, which is different from Chinese massage. Easy to learn, moderate in difficulty, and strong in practicability. Thai massage pays much attention to the stretching of the back and waist. The masseur works from the toes to the top of the head before finishing a set of movements. Massage from the feet to the heart. The technique covers almost all actions such as pressing, touching, pulling, pulling, kneading, and pinching.
<br/>
<br/>
Thai massage is a kneeling service, with alternating left and right hands, with gentle, uniform force, moderate speed, and sequence. After the bath, the Thai-style health massage can quickly relieve fatigue and restore physical fitness. It can also enhance the elasticity and vitality of joints and ligaments, restore normal joint activities, and achieve the effects of promoting body fluid circulation, health care, disease prevention, and body beauty.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B3%B0%E5%BC%8F%E6%8C%89%E6%91%A9/1950816">
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

    <div className="titles" id="title27">
        <h4 className="tooltipped title" data-tooltip="Chiang Mai">清迈</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/10.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chiang+Mai,+Mueang+Chiang+Mai+District,+Chiang+Mai,+Thailand/@18.7943954,98.8864365,12z/data=!3m1!4b1!4m5!3m4!1s0x30da3a7e90bb6f5d:0x98d46270a59b4367!8m2!3d18.7883439!4d98.9853008">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">清迈</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal99911">介绍</a>
<div id="modal99911" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">清迈 - 介绍</h4>
<p>清迈为泰国北部城市，环境优美，气候凉爽，以玫瑰花著称，素有“泰北玫瑰”的雅称。清迈历史悠久，文化古迹众多。
<br/>
<br/>
清迈的发达程度仅次于泰国首都曼谷，市内风景秀丽，遍植花草。清迈的天然环境优美，平均海拔300米，是泰国的高原城市，气候凉爽，是著名的避暑胜地。东部为坤丹山脉，西部为英坦昂山脉，山峰多在2000米以上，主峰英坦昂峰是全国最高峰，海拔2576米。中部为宾河流域。森林面积16700平方公里，占全府土地的73%。
<br/>
<br/>
清迈曾长期作为泰王国首都，仍保留着很多珍贵的历史和文化遗迹。城区内有代表着泰北灿烂历史文化的古老寺庙，同时清迈的丝绸、纺织品等也著称于世，每年都有大批丝绸、纺织品出口，是泰国制造业的重要支柱。</p>
<p className="grey-text">Chiang Mai is a city in northern Thailand with a beautiful environment and a cool climate. It is famous for its roses and is known as the "Rose of Northern Thailand". Chiang Mai has a long history and numerous cultural monuments.
<br/>
<br/>
The degree of development of Chiang Mai is second only to the capital of Thailand, Bangkok. The city has beautiful scenery and plants everywhere. Chiang Mai has a beautiful natural environment with an average altitude of 300 meters. It is a plateau city in Thailand with a cool climate and a famous summer resort. In the east is the Kundan Mountain Range, and in the west is the Yingtanang Mountain Range. Most of the peaks are more than 2000 meters. The main peak Yingtanang Peak is the highest peak in the country with an altitude of 2576 meters. The central part is the Binhe River Basin. The forest area is 16,700 square kilometers, accounting for 73% of the total land in the province.
<br/>
<br/>
Chiang Mai was once the capital of the Kingdom of Thailand for a long time and still retains many precious historical and cultural relics. There are ancient temples in the city that represent the splendid history and culture of northern Thailand. At the same time, Chiang Mai's silk and textiles are also famous in the world. Large quantities of silk and textiles are exported every year, which is an important pillar of Thailand's manufacturing industry.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B8%85%E8%BF%88">
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
            <h5>2017/06/11</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/17.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>普吉岛✈️清迈</p>
                    <p>到达酒店，办理入住。</p>
                </div>
            </div>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/18.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>吃午饭</p>
                    <p>餐馆：Clay Studio Coffee in the Garden</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/19.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                <p>点了咖喱鸡排饭+奶茶</p>
                <p>味道还不错</p>

                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title28">
        <h4 className="tooltipped title" data-tooltip="Sunday night market">周日夜市</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/11.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Tha+Phae+Gate/@18.7876973,98.9912765,17z/data=!3m1!4b1!4m5!3m4!1s0x30da3aa23421c875:0x9d3b8fabe43926f6!8m2!3d18.7876922!4d98.9934652">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">塔佩门</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal99912">介绍</a>
<div id="modal99912" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">周日夜市 - 介绍</h4>
<p>周日夜市的主街道从塔佩门一直延续到古城中三王纪念碑的那条路。
<br/><br/>营业时间：周日16:00-23:00</p>
<p className="grey-text">The main street of the Sunday Night Market continues from Tha Pae Gate to the Three Kings Monument in the ancient city.
<br/><br/>Business hours: Sunday 16:00-23:00
</p>   
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>



</div>
            </div>
        </div>
        <div className="titleContent">
            <h5>2017/06/11</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/20.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>这里的小摊摆放着小吃、手工艺品、日用品等，也有人当街表演卖艺。值得一来。</p>
                </div>
            </div>




        </div>
        
    </div>

    <div className="titles" id="title29">
        <h4 className="tooltipped title" data-tooltip="Zipline adventures">丛林飞跃</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/12.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Flying+Squirrels+Zip+Line+Chiang+Mai/@18.7869441,98.9957592,12z/data=!4m8!1m2!2m1!1sFlying+Squirrels+Zip+Line!3m4!1s0x30da3aa157f4b383:0x9920bc89250d29e5!8m2!3d18.7869492!4d98.9956683">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">丛林飞跃</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal99913">介绍</a>
<div id="modal99913" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">丛林飞跃 - 介绍</h4>
<p>这是一项具有综合惊险性和娱乐性为一体的现代化游乐项目。
<br/>
<br/>
其原理采用自重动力牵引方案，以相应的倾角布置的钢型材为轨道，以游客自身重量为动力，借助轨道装置的高度差，在滑索上滑动的游乐设施。
<br/>
<br/>
丛林飞越整个设施无其它动力，低碳、惊险。</p>
<p className="grey-text">This is a modern amusement project with comprehensive thrills and entertainment.
<br/>
<br/>
The principle adopts the self-weight power traction scheme, the steel profile arranged at the corresponding inclination angle is the track, the tourist's own weight is the power, and the height difference of the track device is used to slide on the amusement device on the zipline.
<br/>
<br/>
The jungle flying over the entire facility has no other power, low-carbon and thrilling.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="http://www.keqiyoule.com/product/conglinchuansuo.html">
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
            <h5>2017/06/12</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/21.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>名字：Flying Squirrels Zip Line</p>
                    <p>有很多条线路可以选择，我们选的是32个点的。</p>
                    <p>快结束时会有摄像机帮忙拍照，可以选择买还是不买。</p>
                </div>
            </div>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/22.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>会有两个教练随行，先过去一个教练帮忙稳住绳索。</p>

                </div>
            </div>



        </div>
        
    </div>

    <div className="titles" id="title30">
        <h4 className="tooltipped title" data-tooltip="Nimmanhaemin Road">宁曼路</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/13.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">宁曼路</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">



<a className="btn-flat modal-trigger right info " href="#modal99914">介绍</a>
<div id="modal99914" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">宁曼路 - 介绍</h4>
<p>
宁曼路上的很多商店都是艺术家或者明星开的，处处都是文艺小清新的范儿，非常适合拍照，咖啡馆，小酒吧，艺术小店都可以在这里找到，并且这些商店的墙壁上都有涂鸦，非常的可爱有趣。

</p>
<p className="grey-text">Many shops on Nimmanhaemin Road are opened by artists or celebrities, and they are full of small and fresh literary styles, which are very suitable for taking pictures. Cafes, small bars, and art shops can be found here, and the walls of these shops are all There are graffiti, very cute and interesting.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baijiahao.baidu.com/s?id=1621454829827419137&wfr=spider&for=pc">
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
            <h5>2017/06/12</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/23.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>天气很炎热，我们先找了一家甜品店吃点冰。</p>
                    <p>之后便随便瞎逛。</p>
                </div>
            </div>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/24.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>逛累了我们找了一家按摩店，服务很不错。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/25.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>晚饭。</p>
                    <p>是别人推荐的店，做泰国菜的，很好吃。</p>
                </div>
            </div>




        </div>
        
    </div>

    <div className="titles" id="title31">
        <h4 className="tooltipped title" data-tooltip="Chiang Mai Night Safari">夜间动物园</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/14.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Chiang+Mai+Night+Safari/@18.7423554,98.9151354,17z/data=!3m1!4b1!4m8!3m7!1s0x30da37293ac232bf:0xcaafc0bee2a3f81a!5m2!4m1!1i2!8m2!3d18.7423503!4d98.9173241">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">夜间动物园</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">



<a className="btn-flat modal-trigger right info " href="#modal99915">介绍</a>
<div id="modal99915" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">夜间动物园 - 介绍</h4>
<p>位于素贴山下的清迈夜间动物园占地近百亩。是泰国最大的动物园。园中除了有各种珍奇动物外，还有风景花园、瀑布和湖泊，风景非常优美，在山顶上还可以俯视整个清迈城。
<br/>
<br/>
清迈夜间动物园利用肉食动物喜好夜晚活动的特性，开辟了夜间游览项目，坐上最多可搭乘24人的小车，近距离观察狮子、老虎、熊、野狼等动物，是一次难得而又刺激的经验。</p>
<p className="grey-text">Located at the foot of Suthep Mountain, Chiang Mai Night Safari occupies nearly 100 acres. It is the largest zoo in Thailand. In addition to all kinds of exotic animals, there are landscape gardens, waterfalls and lakes in the park. The scenery is very beautiful. On the top of the mountain, you can overlook the entire Chiang Mai city.
<br/>
<br/>
The Chiang Mai Night Safari takes advantage of the carnivore’s preference for night activities and opens up a night tour program. It is a rare and exciting experience to get close to lions, tigers, bears, wild wolves and other animals in a car that can take up to 24 people. experience.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B8%85%E8%BF%88%E5%A4%9C%E9%97%B4%E5%8A%A8%E7%89%A9%E5%9B%AD/15790801?fr=aladdin">
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
            <h5>2017/06/12</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/26.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>晚饭过后，我们来到清迈夜间动物园。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/27.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>这里有很多表演，并且可以乘小车近距离观察动物。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/28.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>在园内可以买蔬菜来喂动物。</p>
                </div>
            </div>





        </div>
        
    </div>

    <div className="titles" id="title32">
        <h4 className="tooltipped title" data-tooltip="Bangkok">曼谷</h4>
        <div className="row">
            <div className="col s12 m12 l5">
                <img src="../img9/15.jpg" alt="" className="responsive-img"></img>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Bangkok,+Thailand/@13.7251088,100.3529119,10z/data=!3m1!4b1!4m5!3m4!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651">
                    <i className="tiny material-icons">location_on</i>
                    <span className="titleMap">曼谷</span>
                </a>
            </div>
            <div className="col s12 m12 l6 offset-l1">
            <div className="details">


<a className="btn-flat modal-trigger right info " href="#modal99916">介绍</a>
<div id="modal99916" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">曼谷 - 介绍</h4>
<p>曼谷是世界一线城市，是泰国首都和最大城市，别名“天使之城”，位于湄南河（昭披耶河）东岸，南临暹罗湾，中南半岛最大城市，东南亚第二大城市，为泰国政治、经济、贸易、交通、文化、科技、教育、宗教与各方面中心。曼谷被誉为是“佛教之都”。融合东西方文化、包罗万象的“天使之城”。
<br/>
<br/>
曼谷是繁华的国际大都市，是贵金属和宝石的交易中心。经济占泰国总量的44%，曼谷港承担着泰国90%的外贸。曼谷旅游业十分发达，被评选为全球最受欢迎旅游城市。 
<br/>
<br/>
曼谷是国际活动中心之一，每年有多达200~300起的各种国际会议在此举行。城内设有联合国亚太经社委员会总部、世界银行、世界卫生组织、国际劳工组织以及20多个国际机构的区域办事处。曼谷被誉为“佛教之都”，是“世界佛教联谊会”总部及亚洲理工学院所在地。 </p>
<p className="grey-text">Bangkok is a first-tier city in the world. It is also the capital and largest city in Thailand. It is also known as the "City of Angels." The center of Thailand's politics, economy, trade, transportation, culture, technology, education, religion and all aspects. Bangkok is known as the "Buddhist Capital". An all-encompassing "City of Angels" that integrates Eastern and Western cultures.
<br/>
<br/>
Bangkok is a bustling international metropolis and a trading center for precious metals and gems. The economy accounts for 44% of Thailand's total, and Bangkok Port is responsible for 90% of Thailand's foreign trade. Bangkok's tourism industry is very developed and has been voted the most popular tourist city in the world.
<br/>
<br/>
Bangkok is one of the international event centers. There are as many as 200 to 300 international conferences held here every year. The city has the headquarters of the United Nations Economic and Social Commission for Asia and the Pacific, the World Bank, the World Health Organization, the International Labour Organization and the regional offices of more than 20 international agencies. Bangkok is known as the "Buddhist Capital" and is the headquarters of the "World Buddhist Friendship Association" and the seat of the Asian Institute of Technology.</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%9B%BC%E8%B0%B7/412946?fr=aladdin">
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
            <h5>2017/06/13</h5>


            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/29.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>由于时间有限，我们并没有去大皇宫等地，只去了SIAM商圈逛。</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l5">
                    <img src="../img10/30.jpg" alt="" className="responsive-img"></img>
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <p>晚上回酒店前在超市买点吃的喝的，明天就返程回国了。🌛</p>
                    <p>下次再见，泰国。</p>
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





export default travelNoteThailandCN;