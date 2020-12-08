import React, { Component } from 'react';


class travelNoteBeijing extends Component {
    
    render() {


        return ( 
        
            <section>
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
    <li><a href="/travelNoteBeijingCN" className="btn btn-floating transparent">CN</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travel" className="sidenavtext">Travel</a></li>
        <li><a href="/music" className="sidenavtext">Music</a></li>
        <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
        <li><a href="/cat" className="sidenavtext">My Cat</a></li>
        <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
            <br/>
            <li><a href="/travelNoteBeijingCN" className="sidenavtext">CN</a></li>

    </ul>
</div>
</nav>
</header>

            
                <div className="row hide-on-small-only" id="travelNoteBeijing">
                <div className="col s2 m2 l2">
                    <div>
                        {/* <nav className="nav">
                            <a href="#video4">title 4</a>
                        </nav> */}
                        
                        <ul className="nav">
                        <div className="bigTitle">Beijing</div>
                            <li className="titleDate">
                                <a href="#title1">2019/07/28</a>
                            </li>
                            <li className="smallTitle">
                                <a>1.1/ </a>
                                <a href="#title1">Performing Arts Centre</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title2">2019/07/29</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.1/ </a>
                                <a href="#title2">Jingshan Park</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.2/ </a>
                                <a href="#title3">Beihai Park</a>
                            </li>
                            <li className="smallTitle">
                                <a>2.3/ </a>
                                <a href="#title4">Modernista</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title5">2019/07/30</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.1/ </a>
                                <a href="#title5">Prince Gong Mansion</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.2/ </a>
                                <a href="#title6">Geological Museum of China</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.3/ </a>
                                <a href="#title7">National Library of China</a>
                            </li>
                            <li className="smallTitle">
                                <a>3.4/ </a>
                                <a href="#title8">Haidian Theatre</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title9">2019/07/31</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.1/ </a>
                                <a href="#title9">Siji Minfu Roast Duck</a>
                            </li>
                            <li className="smallTitle">
                                <a>4.2/ </a>
                                <a href="#title10">National Museum of China</a>
                            </li>
                        
                        </ul>
                    </div>
                </div>

                <div className="col s9 m9 l9 offset-s1 offset-m1 offset-l1 noteBeijing">
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
                                    <span>Departure</span>
                                    <span> / </span>
                                    <span>2019-07-28</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>Travel Days</span>
                                    <span> / </span>
                                    <span>4 days</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>People</span>
                                    <span> / </span>
                                    <span>With Friends</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>

                    <div className="titles" id="title1">
                        <h4 className="tooltipped title" data-tooltip="国家大剧院">National Centre for the Performing Arts of China</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/1.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Centre+for+the+Performing+Arts/@39.904799,116.3874825,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0528e22e7a273:0x8b74ec5b2f1aaa87!8m2!3d39.904799!4d116.3896712">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">National Centre for the Performing Arts of China</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">

                        <a className="btn-flat modal-trigger right info " href="#modal4">Price</a>
                        <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Price</h4>
                            <p>Price: 40 yuan/adult and 20 yuan/half-price ticket</p>
                            <p className="grey-text">门票价格: 参观票价分为成人票40元/张和半价票20元/张</p>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal3">Address</a>
                        <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Address</h4>
                            <p>Address: 2 W Chang'an Ave, Xicheng District, China, 100031</p>
                            <p className="grey-text">地址: 中国国家大剧院位于北京市西城区西长安街2号</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Centre+for+the+Performing+Arts/@39.904799,116.3874825,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0528e22e7a273:0x8b74ec5b2f1aaa87!8m2!3d39.904799!4d116.3896712">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Find it on map...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal2">Architecture</a>
                        <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Architecture</h4>
                            <p>The National Centre for the Performing Arts covers an area of 118,93 thousand square meters, with a total construction area of 149,520 square meters. The main building consists of an external envelope and an internal opera house, theater, concert hall, public hall and supporting rooms. The National Centre for the Performing Arts has a total of 5366 seats, including 2081 seats in the opera theater, 957 seats in the theater, 1859 seats in the concert hall, and 469 seats in the small theater.
<br/>
<br/>
The outer envelope steel structure shell is semi-ellipsoidal, and its plane projection is 212.20 meters long from east to west, 143.64 meters wide from north to south, and the building is 46.285 meters high. The deepest part of the foundation is 32.5 meters.
The ellipsoidal roof is mainly finished with titanium metal plate, and the middle part is a gradually opening glass curtain wall. The ellipsoid shell surrounds the artificial lake, with an area of 35,500 square meters, and various channels and entrances are located under the water surface.</p>
                            <p className="grey-text">国家大剧院占地11.893万平方米，总建筑面积149520平方米，主体建筑由外部围护结构和内部歌剧院、戏剧场、音乐厅和公共大厅及配套用房组成。国家大剧院共設有5366个座位，其中歌剧院席位2081个，戏剧院席位957个，音乐厅席位1859个，小剧场席位469个。
<br/>
<br/>
外部围护钢结构壳体呈半椭球形，其平面投影东西长212.20米，南北宽143.64米，建筑物高46.285米，基础埋深的最深部分达到32.5米。
椭球形屋面主要采用钛金属板饰面，中部为渐开式玻璃幕墙。椭球壳体外环绕人工湖，湖面面积达35500平方米，各种通道和入口都设在水面下。
                            
                            
                            </p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal1">History</a>
                        <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - History</h4>
                            <p>The project started on December 13, 2001 and was completed in September 2007. It was audited and put into use on September 25, 2007. It was officially put into operation on December 22, 2007. The National Grand Theater is located on the west side of the Great Hall of the People in Beijing, China, with a total investment of 2.68838 billion yuan. The designer is French architect Paul Andreu.</p>

                            <p className="grey-text">工程于2001年12月13日开工，2007年9月建成，2007年9月25日进行试演、投入使用，2007年12月22日正式投入运营。国家大剧院位于中国北京人民大会堂西侧，总投资26.8838亿元人民币，设计师为法国建筑师保罗·安德鲁。</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2">
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
                            <h5>2019/07/28 --- 6:30pm</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/1.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>We bought tickets for the Kunihiko Sugano Jazz Piano Concert from 7:30pm-9:30pm.</p>
                                    <p>If you have bought a performance ticket, you can check in 1h in advance to visit the National Centre for the Performing Arts of China
                                        <br/>
                                        (No need to buy additional visit tickets).</p>
                                    <p>The National Centre for the Performing Arts of China is equipped with supporting facilities such as an opera house, a concert hall, a theater, an art exhibition hall, a restaurant, and an audio-visual store. If your mobile phone is dead, you can rent a power bank in the art gallery in the theater.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/2.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>The Jazz Piano Concert by Kunihiko Sugano is held in the concert hall.</p>
                                    <p>The style of the concert hall is fresh and elegant, suitable for large-scale symphony and folk music, and can hold various concerts. It has 1859 seats (including standing seats). The concert hall has the largest pipe organ in the country, which can meet the needs of performing various works of different genres. In addition, the design of digital walls, abstract relief ceilings with modern aesthetics, GRC walls, and turtle back acoustic panels can make the sound diffuse and reflect evenly and softly, enabling the concert hall to achieve the combination of architectural aesthetics and acoustic aesthetics.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2/1063477?fromtitle=%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2&fromid=69546&fr=aladdin#2_2">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/3.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Kunihiko Sugano Jazz Piano Concert - A quick photo taken at the beginning of the show</p>
                                    <p>Kunihiko Sugano - He started his playing career in Yoshiya Jun's band during his college years. After only working for a year after graduation, I returned to the world of music. In 1960, a trio with Ho Suzuki and GEORGE Otsuka began. And he was greatly appreciated by Tony Scott, who was coming to Japan at that time, and began a musical performance together. Between 1963 and 1964, he re-formed the quartet with Hidehiko Matsumoto. After disbanding, as a piano soloist, he released 70 vinyl records. Sugano's blues-sense piano solo is not only sought after by music fans in Japan, but also recognized in jazz circles all over the world.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.chncpaticket.org/pic_detail.asp?id=5782">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/4.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>National Centre for the Performing Arts of China at night</p>
                                    <p>

After the concert, the three of us walked slowly along the lake. There would be ducks on the lake, which was very pleasant.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="titles" id="title2">
                        <h4 className="tooltipped title" data-tooltip="景山公园">Jingshan Park</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/2.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Jingshan+Park/@39.9251029,116.3946546,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e0cf4da489:0x95549f0b9c7f635b!8m2!3d39.9250988!4d116.3968433">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Jingshan Park</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal8">Price</a>
<div id="modal8" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Jingshan Park - Price</h4>
    <p>Price: 2 yuan/adult; 1 yuan/half-price ticket</p>
    <p className="grey-text">门票价格: 成人票2元/张; 半价票1元/张</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal7">Address</a>
<div id="modal7" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Jingshan Park - Address</h4>
    <p>Address: 44 Jingshan W St, Xicheng District, Beijing, China, 100009</p>
    <p className="grey-text">地址: 北京市西城区景山西街44号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Jingshan+Park/@39.9251029,116.3946546,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e0cf4da489:0x95549f0b9c7f635b!8m2!3d39.9250988!4d116.3968433">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal6">Architecture</a>
<div id="modal6" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Jingshan Park - Architecture</h4>
    <p>Jingshan Park Management Office is affiliated to Beijing Park Management Center and is located in Jingshanqian Street, Xicheng District, Beijing, China. There are ginkgo garden, begonia garden, peony garden, peach garden, apple garden, vineyard, and persimmon forest in the park. The whole park faces south, with red walls and yellow tiles, covering an area of 230,000 square meters. The mountain is 43 meters high and has a circumference of 1015 meters. The flower lawn in the garden covers an area of 1,100 square meters.</p>
    <p className="grey-text">景山公园管理处隶属于北京市公园管理中心，位于中国北京市西城区景山前街。公园中有银杏园、海棠园、牡丹园、桃园、苹果园、葡萄园、柿子林。全园坐北朝南，红墙黄瓦围墙，占地23万平方米。山高43米，周长1015米。园内花卉草坪占地1100 平方米。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD/63814?fr=aladdin#3">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>   
<br/>
<br/>
    <p>The building includes surrounding walls and river channels, inner walls, outer walls, bridges, Chenghuang Temple, Jingshan Five Pavilions.</p>
    <p className="grey-text">建筑包含围墙与河道，内墙，外墙，桥梁，城隍庙，景山五亭。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD#%E5%BB%BA%E7%AD%91">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>   

    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal5">History</a>
<div id="modal5" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Jingshan Park - History</h4>
    <p>In the early years of Hongwu in the Ming Dynasty, Xiao Xun, a medic of the Ministry of Industry, participated in the demolition of the Yuan Palace, and saw the scenery of the back garden, the golden palace, the green palace, the flower pavilion, and the felt pavilion. During the Yongle period, Ming Chengzu Zhu Di built large-scale cities, palaces and gardens in Beijing. According to the saying "Canglong, White Tiger, Suzaku, Xuanwu, the four spirits of the sky, in order to be square", the north of the Forbidden City is the place of Xuanwu, and there should be mountains. Therefore, the soil from the Tongzi River, Taiye, and South China Sea in the Forbidden City was piled up on the "green hills" to form five peaks, called "Long Live Mountain".
<br/>
<br/>
On March 19 in the 17th year of Ming Chongzhen (1644), Li Zicheng invaded Beijing, which was a change in Jiashen. Ming Sizong hanged himself on an old locust tree at the foot of Long Live Mountain. After the Qing army entered the customs, in order to win people's hearts, the locust tree was called the "guilt locust", and it was locked with iron chains, and the royal family and civil and military officials were required to dismount and walk when passing by to show their respect for Ming Sizong.
<br/>
<br/>
In the twelfth year of Shunzhi in Qing Dynasty (1655), "Long Live Mountain" was renamed "Jingshan". In the spring of the nineteenth year of Kangxi (1680), Emperor Kangxi climbed Jingshan to look at the capital. Seeing the morning mist, the rays of light and the flowing clouds, he wrote a poem, including "The clouds are thousands of feet leaning against the Danqiu, and the mountains and rivers are overlooked. "Sentence. Danqiu is the abode of gods, and here is a metaphor for Jingshan.
<br/>
<br/>
During the Gengzi Incident in the twenty-sixth year of Guangxu (1900), the Eight-Nation Alliance occupied Beijing and Jingshan was severely damaged. In the 17th year of the Republic of China (1928), Jingshan was turned into a park, which was managed by the Palace Museum and was repaired for visitors to watch.</p>
    <p className="grey-text">明朝洪武初年，工部郎中萧洵参与拆毁元故宫，亲览后苑景色以及金殿、翠殿、花亭、毡阁等建筑。永乐年间，明成祖朱棣在北京大规模营建城池、宫殿和园林。依据“苍龙、白虎、朱雀、玄武，天之四灵，以正四方”之说，紫禁城之北乃是玄武之位，当有山。故将挖掘紫禁城筒子河和太液、南海的泥土堆积在“青山”，形成五座山峰，称“万岁山”。
<br/>
<br/>
明崇祯十七年（1644年）三月十九日，李自成攻入北京，是为甲申之变，明思宗自缢于万岁山东麓一株老槐树上。清军入关后，为笼络人心，将此槐树称为“罪槐”，用铁链锁住，并规定皇族、文武官员路过此地都要下马步行，以示对明思宗的尊敬。
<br/>
<br/>
清顺治十二年（1655年）将“万岁山”改称“景山”。康熙十九年（1680年）春，康熙帝登景山眺望京师，见晨雾缭绕，霞光流云，一派春色，即作诗一首，其中有“云霄千尺倚丹丘，辇下山河一望收”之句。丹丘乃神仙居所，此处以其比喻景山.
<br/>
<br/>
光绪二十六年（1900年）庚子事变时，八国联军占领北京，景山受到严重破坏。民国17年（1928年），景山被辟为公园，属故宫博物院管理，修葺后供游人观赏。 
    
    
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD">
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
                            <h5>2019/07/29</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/5.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Ming Sizong's martyrdom</p>
                                    <p>In Jingshan Park, Beijing, there is a well-known old locust tree. According to reports, Chongzhen, the last emperor of the Dynasty, hanged himself here. Beside the tree, there are two stone steles. One is engraved with six characters "Ming Sizong's Martyrdom", written by the famous calligrapher Shen Yinmo in the Palace Museum in 1930; the other is "Ming Sizong Three Hundred Years Monument" by Fu Zengxiang, a former imperial imperial Qing Dynasty in 1944 .</p>
                                    <p>As the sixteenth emperor of the Ming Dynasty, Chongzhen probably never expected that he would become the king of the Ming Dynasty. Before him, two emperors like Jiajing and Wanli did not go to court for decades, which has caused the internal political corruption of the Ming Dynasty to become more and more serious, and the external intrusion from Houjin gradually deepened. Chongzhen, on the other hand, tried to reform the government at the beginning of his ascension, and dealt with the castrate party headed by Wei Zhongxian, "being generous and promising," which gave people a glimmer of hope. Persevering, the country has been accumulating abuses for a long time, and even if Chongzhen worked hard, he could no longer save the crisis. The attack of internal and external troubles eventually contributed to the hanging of Chongzhen and the demise of the Ming Dynasty.</p>
                                    <p>In 1944, the year of Jiashen in the lunar calendar, which was also 300 years after the end of the Ming Dynasty, a new monument was erected at the place where Chongzhen hanged himself. The inscription was written by Fu Zengxiang, a famous bibliophile who was the chief of education of the Beiyang Government. In the nearly 1,000-character inscription, you can not only see Mr. Fu's trace of the demise of the Ming Dynasty and the death of Chongzhen, but also feel the deep connotation and care behind his words.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="http://culture.people.com.cn/n/2015/0618/c22219-27174724.html">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                        </div>
                        

                    </div>

                    <div className="titles" id="title3">
                        <h4 className="tooltipped title" data-tooltip="北海公园">Beihai Park</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/3.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Beihai+Park/@39.9254515,116.3870752,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e6b32b6159:0xe22c80c89d0ec575!8m2!3d39.9254474!4d116.3892639">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Beihai Park</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal12">Price</a>
<div id="modal12" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Beihai Park - Price</h4>
    <p>Price: 20 yuan/adult and 10 yuan/half-price ticket</p>
    <p className="grey-text">门票价格: 联票成人票20元/张; 半价票10元/张</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal11">Address</a>
<div id="modal11" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Beihai Park - Address</h4>
    <p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
    <p className="grey-text">地址: 北京市西城区文津街1号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Beihai+Park/@39.9254515,116.3870752,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e6b32b6159:0xe22c80c89d0ec575!8m2!3d39.9254474!4d116.3892639">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal10">Architecture</a>
<div id="modal10" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Beihai Park - Architecture</h4>
    <p>The entire Beihai Park occupies an area of about 70 hectares, of which the water area occupies more than half of the area. There are Qionghua, Tuancheng and Xishantai islands in Taichi, which symbolize Penglai, Yingzhou and Fangzhang, respectively, and embody the pursuit of Penglai's fairyland. It is a purely artificial garden with water as the main body. The islands are arranged in the Taiye Pool and connected to the shore by bridges. 
<br/>
<br/>
Its architectural style is influenced by some gardens in the south of the Yangtze River, but on the whole it still maintains the characteristics of dignity and dignity of northern gardens. The garden is very religious. There is not only Yong'an Temple on Qionghua Island, but also Buddhist and Taoist buildings such as Chanfu Temple, Xitian Fanjing, Xiaoxitian, Longwang Temple, and Xiancantan on the north and east banks. A grand imperial palace with palaces, mansions, temples and gardens.</p>
    <p className="grey-text">北海全园占地约70公顷，其中水域占据了一半以上的面积。太池中有琼华、团城和犀山台三岛，分别象征着蓬莱、瀛洲和方丈，体现了对蓬莱仙境的追求。是一座纯粹的人工园林，布局以水为主体，在太液池中布置岛屿，用桥和岸边相连。
<br/>
<br/>
它的建筑风格受到一些江南园林的影响，但总体上仍然保持了北方园林持重端庄的特点。园内宗教色彩十分浓厚，不仅琼华岛上有永安寺，在北岸和东岸还有阐福寺、西天梵境、小西天、龙王庙、先蚕坛等佛教、道教建筑，因此是一座集宫室、宅第、寺庙、园林于一体的宏大帝王宫苑。
    
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal9">History</a>
<div id="modal9" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Beihai Park - History</h4>
    <p>    Beihai has undergone the construction of the Liao, Jin, Yuan, Ming, and Qing dynasties successively, with a long history and many inheritances during reconstruction. In the eleventh year of Guangxu at the end of Qing Dynasty (1885), Empress Dowager Cixi used the navy and military expenses to increase the Beihai privately. When the Eight-Nation Alliance Forces captured Beijing in 1900, they caused considerable damage to the Beihai, and they were rebuilt two years later. After the founding of the People's Republic of China, Zhongnanhai became the residence of the Central People's Government and Beihai opened as a park. In 1961, Beihai and Tuancheng were announced by the State Council of the People's Republic of China as one of the first batch of national key cultural relics protection units. From 1969 to 1979, Beihai Park was closed on the grounds of "protecting Zhongnanhai", and visitors were prohibited from entering. After 1979, Beihai Park was reopened to the public.</p>

    <p className="grey-text">北海先后历经辽、金、元、明、清五朝的兴建，历史悠久且重建时承袭较多。清代末光绪十一年（1885年），慈禧太后私自动用海军军费增修过北海。1900年八国联军攻占北京时，对北海有过较大的破坏，两年后进行了重建。中华人民共和国成立后，中南海成为了中央人民政府的驻地，北海作为公园开放。1961年，北海及团城被中华人民共和国国务院公布为第一批全国重点文物保护单位之一。1969年至1979年，北海公园以“保护中南海安全”为由关闭，禁止游人入内。1979年后北海公园重新对公众开放。
    
</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD">
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
                            <h5>2019/07/29</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/6.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>After coming out of Jingshan Park, you can walk to Beihai Park in a few minutes.</p>
                                    <p>The whole park is centered on Beihai and mainly consists of Qionghua Island, East Coast and North Coast scenic spots. The trees on Qionghua Island are lush, the pavilions are quiet, and the white pagoda stands on the top of the mountain, becoming the symbol of the park.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD/253388?fr=aladdin#3_3">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/7.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Beihai White Tower is located on Qionghua Island in Beihai Park, Beijing.</p>
                                    <p>Built in the eighth year of Shunzhi in the early Qing Dynasty (1651), it is a Tibetan-style Lama Tower and a landmark in Beihai. The Beihai White Pagoda was recorded by the stone stele of the construction of the tower. At that time, "there were lamas from the Western Regions, who wanted to praise the emperor in Buddhism, please erect the pagoda temple, and live the country and bless the people."
<br/>
<br/>
The tower body is entirely a mixed structure of brick, wood and stone, consisting of five parts: tower base, tower body, phase wheel, canopy, and pagoda. The tower body is covered with bowls, so only bricks and stones can be seen from the surface of the tower, but the wooden frame is not visible. The height of the tower is 35.9 meters, the upper circle and the lower part are full of changes. It is in the style of Mount Sumeru. The top of the tower is decorated with sun, moon and flame patterns to indicate that the "Dharma" shines like the sun and the moon. Shoot, always shine on the earth.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8C%97%E6%B5%B7%E7%99%BD%E5%A1%94/748542?fr=aladdin">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>

                            </div>



                        </div>
                        
                    </div>

                    <div className="titles" id="title4">
                        <h4 className="title">Modernista</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/4.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/44+Baochao+Hutong,+Dongcheng+Qu,+Beijing+Shi,+China,+100190/@39.9445096,116.3996862,19.89z/data=!4m5!3m4!1s0x35f0533ee6163ddd:0x16b7703fe6644049!8m2!3d39.944584!4d116.399862">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Modernista</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal16">Price</a>
<div id="modal16" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Modernista - Price</h4>
    <p>门票价格: 90元/张</p>
    <p className="grey-text">Price: 90 yuan/ticket</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal15">Address</a>
<div id="modal15" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Modernista - Address</h4>
    <p>地址: 北京市东城区鼓楼东大街宝钞胡同44号</p>
    <p className="grey-text">Address: 44 Baochao Hutong, Dongcheng, Beijing, China</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/44+Baochao+Hutong,+Dongcheng+Qu,+Beijing+Shi,+China,+100190/@39.9445881,116.3976733,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0533ee6163ddd:0x16b7703fe6644049!8m2!3d39.944584!4d116.399862">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
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
                            <h5>2019/07/29</h5>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/8.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>After dinner, we came to Modernista, the place is in Baochao Hutong, which is not easy to find.

</p>
                                    <p>Many foreigners come here, and there are different bands every night.</p>
                                </div>
                            </div>




                        </div>
                    </div>

                    <div className="titles" id="title5">
                        <h4 className="tooltipped title" data-tooltip="恭王府">Prince Gong Mansion</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/5.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Prince+Gong+Mansion/@39.935774,116.3776523,15z/data=!4m8!1m2!2m1!1sgongwangfu!3m4!1s0x35f05303c65abf2b:0x6ec74549d7c3a6f5!8m2!3d39.935774!4d116.386407">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Prince Gong Mansion</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal20">Price</a>
<div id="modal20" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Prince Gong Mansion - Price</h4>
    <p>Price: 40 yuan/adult and 20 yuan/half-price ticket</p>
    <p className="grey-text">门票价格: 成人票40元/张; 半价票20元/张</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal19">Address</a>
<div id="modal19" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Prince Gong Mansion - Address</h4>
    <p>Address: 17 Qianhai W St, Shi Cha Hai, Xicheng District, Beijing, China</p>
    <p className="grey-text">地址: 北京市西城区什刹海前海西街17号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Prince+Gong+Mansion/@39.935774,116.3776523,15z/data=!4m8!1m2!2m1!1sgongwangfu!3m4!1s0x35f05303c65abf2b:0x6ec74549d7c3a6f5!8m2!3d39.935774!4d116.386407">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal18">Architecture</a>
<div id="modal18" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Prince Gong Mansion - Architecture</h4>
    <p>Prince Gong’s Mansion is composed of two parts: a mansion and a garden. It is about 330 meters long from north to south and 180 meters wide from east to west.
<br/>
<br/>
The palace of Prince Gong's residence is in the south, and the garden is in the north. The palace is separated from the garden by a tall back cover.
<br/>
<br/>
Prince Gong's Mansion is divided into three roads, the east and the west, which are composed of more than courtyards, followed by a two-story rear cover building with a length of 160 meters.
<br/>
<br/>
Prince Gong's Mansion Garden is also divided into three roads. The middle road is Xiyangmen, Dulefeng, Manta Pond, Anshan Hall and Mingdaotang, Dihuaxuan, Fuzi Tablet, Inviting Platform, Bat Hall; East Road is Yishen Suohuamen, Daxilou, Banjiaoyuan; west The road is the pavilion in the heart of the lake. In addition, there are Longwang Temple, Yuguan, Miaoxiang Pavilion, Liubei Pavilion, and Yishu Garden.</p>
    <p className="grey-text">恭王府由府邸和花园两部分组成，南北长约330米，东西宽180余米，占地面积约61120平方米，其中府邸占地32260平方米，花园占地28860平方米。
<br/>
<br/>
恭王府王府在南，花园在北，由高高的后罩楼将王府与花园分开。
<br/>
<br/>
恭王府分中东西三路，分别由多过四合院组成，后为长160米的二层后罩楼。
<br/>
<br/>
恭王府花园也分为三路。中路是西洋门，独乐峰，蝠池，安善堂及左右配殿明道堂，棣华轩，福字碑，邀月台，蝠厅；东路是怡神所垂花门，大戏楼，芭蕉院；西路是湖心亭，澄怀撷秀。此外还有龙王庙、榆关、妙香亭、流杯亭、艺蔬圃。
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C#%E5%BB%BA%E7%AD%91">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal17">History</a>
<div id="modal17" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Prince Gong Mansion - History</h4>
    <p>Prince Gong’s Mansion and the Garden were originally built on the basis of the regulations of Heshen and Princess Gu Lun as the residence of Erpin Hubu. It was built in the first month of the fourth year of Jiaqing (1799), and Heshen was bestowed to death. In April, "Heshen’s House was rewarded to Qingjun Wang Yonglin for residence; Heshen’s Garden was rewarded to Cheng Prince Yongxuan’s residence.", After the first year of Xianfeng, the grandson of Prince Qing, Yiqiu, was heredically reduced to the general of the auxiliary country, and was replaced by the former University Shiqi Shan’s House on Dedingfu Street. The original palace was taken back by the House of Internal Affairs and later given to Yixin as a residence in the Xianfeng period. Prince Gong's Mansion.
<br/>
<br/>
In 1921, Prince Gong Yixin’s grandsons Pu Wei and Pu Ru (Pu Xinshe) pledged the Prince Gong’s mansion and garden to the Catholic Church, which was later bought by Fu Jen Catholic University as a school building, and later served as the Beijing Normal University and the Chinese Conservatory of Music. School building. The building of Prince Gong's Mansion was partly occupied by Beijing Air Conditioner Factory, and it was retired in the 1980s. Since October 1996, Prince Gong’s Mansion Garden has been used as a tourist attraction for the public to visit. On August 20, 2008, the restored Prince Gong's Mansion was all opened to the public.
<br/>
<br/>
In 2017, the Prince Gong's Mansion Museum of the Ministry of Culture was named the third batch of national first-class museums by the Chinese Museum Association.</p>

    <p className="grey-text">恭王府及花园原是固伦和孝公主在和珅作为二品户部侍郎邸的规制基础上，花六年增建的公主府，相当于郡王府规制，西路建筑是大臣和珅的府邸以一品大员建造，嘉庆四年（1799年）正月，和珅遭赐死，四月「和珅之宅，赏给庆郡王永璘居住；和珅之园，赏给成亲王永瑆居住。」，咸丰元年后由于庆亲王的孙子奕劻世袭降低为辅国将军，换至得定府大街原大学士琦善宅，原王府由内务府收回，后于咸丰年间赐予奕欣作为府邸，称为恭王府。 
<br/>
<br/>
1921年，恭亲王奕欣的孙子溥伟、 溥儒（溥心畲）将恭王府和花园抵押给天主教会，后由辅仁大学买去作为校舍，后先后为北京师范大学、中国音乐学院的校舍。恭王府建筑曾部分为北京空调机厂占用，1980年代腾退。 1996年10月起，恭王府花园作为旅游景点供公众参观。 2008年8月20日，修复后的恭王府全部对外开放。
<br/>
<br/>
2017年，文化部恭王府博物馆被中国博物馆协会评为第三批国家一级博物馆。
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C#%E5%8E%86%E5%8F%B2">
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
                            <h5>2019/07/30</h5>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/9.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Prince Gong's Mansion Garden</p>
                                    <p>The palace of Prince Gong's residence is in the south, and the garden is in the north. The palace is separated from the garden by a tall back cover.</p>
                                    <p>Prince Gong's Mansion Garden is also divided into three roads. The middle road is Xiyangmen, Dulefeng, Manta Pond, Anshan Hall and Mingdaotang, Dihuaxuan, Fuzi Tablet, Inviting Platform, Bat Hall; East Road is Yishen Suohuamen, Daxilou, Banjiaoyuan; west The road is the pavilion in the heart of the lake. In addition, there are Longwang Temple, Yuguan, Miaoxiang Pavilion, Liubei Pavilion, and Yi Vegetable Garden.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/10.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Prince Gong's Mansion Grand Theater</p>
                                    <p>Prince Gong’s Mansion on the north shore of Shichahai Lake is the largest courtyard house in the world and the most complete one of the more than 60 Qing Dynasty palaces in Beijing today. Daxilou, also called Yishensuo, is the second best in Prince Gong's Garden.
                                    <br/>
                                    <br/>
                                    The entire theater building is a pure wood structure, with a three-volume hook-up roof. It used to be used by the prince to watch the play. The hall inside the theater is very large, but the acoustics are very good. It is located in the farthest corner of the lobby, and the singing on the stage is also audible Clearly, this has indeed reached a wonderful position in design.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%81%AD%E7%8E%8B%E5%BA%9C%E5%A4%A7%E6%88%8F%E6%A5%BC">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className="titles" id="title6">
                        <h4 className="tooltipped title" data-tooltip="中国地质博物馆">The Geological Museum of China</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/6.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/The+Geological+Museum+of+China,+Xicheng+Qu,+Beijing+Shi,+China/@39.9235363,116.3696596,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052587d891865:0x9acf47983e4925f!8m2!3d39.9235322!4d116.3718483">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">The Geological Museum of China</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal24">Price</a>
<div id="modal24" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">The Geological Museum of China - Price</h4>
    <p>Price: 30 yuan/adult and 15 yuan/half-price ticket</p>
    <p className="grey-text">门票价格: 成人票30元/张; 半价票15元/张</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal23">Address</a>
<div id="modal23" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">The Geological Museum of China - Address</h4>
    <p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
    <p className="grey-text">地址: 北京市西城区文津街1号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/The+Geological+Museum+of+China,+Xicheng+Qu,+Beijing+Shi,+China/@39.9235363,116.3696596,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052587d891865:0x9acf47983e4925f!8m2!3d39.9235322!4d116.3718483">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal22">Exhibition</a>
<div id="modal22" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">The Geological Museum of China - Exhibition</h4>
    <p>The China Geological Museum has more than 200,000 geological specimens, including giant Shandong dragon, Chinese dragon bird and other dinosaur fossils, Peking man, Yuanmou man, Shanding cave man and other ancient human fossils, fish, birds, insects and other prehistoric creature fossils. In addition, there are the world’s largest "Crystal King", giant fluorite calcite crystal cluster specimens, azurite, cinnabar, realgar, orpiment, scheelite, antimonite and other mineral specimens with Chinese characteristics, various gems and jade And other treasures.
<br/>
<br/>
The China Geological Museum has been carrying out researches on mineral petrology, stratigraphic paleontology, gemology, and museology for a long time, especially in the fields of early vertebrates, entomology, and Jehol Biota in western Liaoning. The museum has guided the scientific research, popularization and market consumption of contemporary gems in China through systematic gem display and gem research results.
<br/>
<br/>
The China Geological Museum launches displays and exhibitions throughout the year. The basic display is arranged according to the structure of the earth circle, showing minerals, rocks, gems, and fossils, paying attention to the human living environment, and using bionics, digitization, virtual reality and other technologies to enable the audience to have a unique experience in the geoscience space.
<br/>
<br/>
The China Geological Museum founded "Earth" in 1981, and it is the only popular geological magazine in the People's Republic of China. The museum also holds a national youth geoscience summer camp every year.</p>
    <p className="grey-text">中国地质博物馆收藏有20余万件地质标本，其中包括巨型山东龙、中华龙鸟等恐龙化石，北京人、元谋人、山顶洞人等古人类化石，鱼类、鸟类、昆虫等史前生物化石，此外还有有世界最大的“水晶王”、巨型萤石方解石晶簇标本、蓝铜矿、辰砂、雄黄、雌黄、白钨矿、辉锑矿等有中国特色的矿物标本，各种宝石、玉石等珍品。
<br/>
<br/>
中国地质博物馆长期开展矿物岩石学、地层古生物学、宝石学、博物馆学研究，特别是在早期脊椎动物学、昆虫学、辽西热河生物群等领域取得突出成果。该馆通过系统的宝石陈列及宝石研究成果，引导了中国当代宝石科学研究、普及及市场消费。
<br/>
<br/>
中国地质博物馆常年推出陈列及展览。基本陈列按照地球圈层结构进行布局，展示矿物、岩石、宝石、化石，关注人类生存环境，并且通过仿生、数字化、虚拟现实等等技术，使观众在地学空间中获得独特体验。
<br/>
<br/>
中国地质博物馆于1981年创刊《地球》，是中华人民共和国唯一的地学科普杂志。该馆还每年举办全国青少年地学夏令营。
    
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86#%E5%B1%95%E8%A7%88%E5%8F%8A%E7%A0%94%E7%A9%B6">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal21">Architecture</a>
<div id="modal21" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">The Geological Museum of China - Architecture</h4>
    <p>The main building of the China Geological Museum has 6 floors with a total height of about 36 meters, 40 meters long from east to west, and 70 meters long from north to south. The building area is nearly 11,000 square meters and the architectural style is stable and generous.
<br/>
<br/>
The exhibition hall of the China Geological Museum includes six parts: the earth hall, the mineral rock hall, the gem and jade hall, and the prehistoric biology hall, covering a total area of 2500 square meters and a temporary exhibition area of 1500 square meters.</p>
    <p className="grey-text">中国地质博物馆主馆共有大楼6层，总高约36米，东西长40米，南北长70米，建筑面积近11000平方米，建筑风格稳重大方。
<br/>
<br/>
中国地质博物馆展厅包括地球厅、矿物岩石厅、宝石玉厅、史前生物厅等六个部分，面积共2500平方米，另有临时展览面积1500平方米。
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86#2_1">
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
                            <h5>2019/07/30</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/11.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>The Geological Museum of China is divided into the Earth Exhibition Hall, Gem Exhibition Hall, Mineral Rock Exhibition Hall, Prehistoric Biology Exhibition Hall, Care and Inspiration Hall and Virtual Exhibition Hall</p>
                                    <p>The Geological Museum of China has a collection of more than 200,000 geological specimens, covering various fields of geosciences. The collection includes giant Shandong dragon, Chinese dragon bird and other dinosaur fossils, Peking man, Yuanmou man, Shanding cave man and other ancient human fossils, as well as a large number of precious prehistoric creatures such as fish, birds and insects that integrate scientific and ornamental value. There are the world’s largest "Crystal King", giant fluorite calcite crystal cluster specimens, exquisite azurite, cinnabar, realgar, orpiment, scheelite, stibnite and other Chinese characteristic mineral specimens, as well as a wide variety of gems and jade Waiting for a batch of national treasures.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/12.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Chinese Sinornithosaurus</p>
                                    <p>

Chinese Sinornithosaurus (genus name: Sinornithosaurus, meaning "Chinese bird lizard"), is a feathered dinosaur of the Trichosaurus family. Fossils were found in the Yixian Formation of China and dated to the Lower Cretaceous Middle Baremian.

</p>
                                    <p>The body length is 1.5 meters, the weight is 8 kg, and it is a carnivorous food.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E9%B8%9F%E9%BE%99">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                        
                        </div>
                        
                    </div>

                    <div className="titles" id="title7">
                        <h4 className="tooltipped title" data-tooltip="中国国家图书馆">National Library of China</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/7.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Library+of+China/@39.943019,116.3143563,15z/data=!4m8!1m2!2m1!1z5Lit5Zu95Zu95a625Zu-5Lmm6aaG!3m4!1s0x35f05180c674fe5d:0x1a31b5d9e3498011!8m2!3d39.943019!4d116.323111">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">National Library of China</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal28">Price</a>
<div id="modal28" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Library of China - Price</h4>
    <p>Price: free to visit</p>
    <p className="grey-text">门票价格: 免费参观</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal27">Address</a>
<div id="modal27" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Library of China - Address</h4>
    <p>Address: 33 Zhongguancun S St, Zi Zhu Qiao, Haidian District, China</p>
    <p className="grey-text">地址: 北京市海淀区紫竹桥中关村南大街33号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Library+of+China/@39.943019,116.3143563,15z/data=!4m8!1m2!2m1!1z5Lit5Zu95Zu95a625Zu-5Lmm6aaG!3m4!1s0x35f05180c674fe5d:0x1a31b5d9e3498011!8m2!3d39.943019!4d116.323111">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal26">Architecture</a>
<div id="modal26" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Library of China - Architecture</h4>
    <p>The Southern District of the National Library of China receives an average of 12,000 readers per day, and the collection far exceeds the designed capacity of 20 million pieces. The original building is no longer sufficient.
<br/>
<br/>
In 2003, approved by the state, a project was established for expansion. The second phase of the new building was opened in September 2008 and became the north area of the National Library of China. After the expansion, the total area of the National Library of China reached 250,000 square meters.</p>
    <p className="grey-text">中国国家图书馆总馆南区日均接待读者1.2万人次，馆藏远远超过2000万件的设计容量，原有馆舍已不敷使用。
<br/>
<br/>
2003年，经国家批准，立项扩建，二期新馆舍于2008年9月启用，成为中国国家图书馆总馆北区，扩建完成后中国国家图书馆的馆舍总面积达到25万平方米。
    
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86#%E5%BB%BA%E7%AD%91">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal25">History</a>
<div id="modal25" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Library of China - History</h4>
    <p>The predecessor of the National Library of China was the Jingshi Library which was founded on September 9, 1909. After the establishment of the Republic of China, the Ministry of Education of the Beiyang Government took over the Jingshi Library and later renamed it the National Jingshi Library. It was officially opened on August 27 to receive readers.
<br/>
<br/>
After the successful Northern Expedition in 1928, the National Capital Library was renamed the National Beiping Library and moved to Jurentang, Zhongnanhai.
<br/>
<br/>
After the founding of the People’s Republic of China, the National Peking Library was renamed the National Beijing Library on March 6, 1950, and the Beijing Library on June 12, 1951, becoming the only national library of the People’s Republic of China.</p>

    <p className="grey-text">中国国家图书馆的前身是于1909年9月9日始建的京师图书馆。中华民国成立后，北洋政府的教育部接管京师图书馆，后将其改名为国立京师图书馆，1912年（民国元年）8月27日正式开馆接待读者。 
<br/>
<br/>
1928年北伐成功后，国立京师图书馆改名国立北平图书馆，并迁址到中南海居仁堂。
<br/>
<br/>
中华人民共和国成立后，于1950年3月6日国立北平图书馆更名为国立北京图书馆，1951年6月12日更名为北京图书馆，成为中华人民共和国唯一的国家图书馆。
    
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86#%E5%8E%86%E5%8F%B2">
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
                            <h5>2019/07/30</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/13.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>It is not allowed to carry large bags into the library, you need to store the bags before entering.</p>
                                    <p>On the first floor, you can swipe your ID card to enter the library to borrow books</p>
                                    
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2/1063477?fromtitle=%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2&fromid=69546&fr=aladdin#2_2">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    <div className="titles" id="title8">
                        <h4 className="tooltipped title" data-tooltip="海淀剧院">Haidian Theatre</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/8.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Haidian+Theater/@39.9650077,116.3034553,14z/data=!4m8!1m2!2m1!1z5rW35reA5Ymn6Zmi!3m4!1s0x0:0xf05dfe722ef4b08f!8m2!3d39.9766474!4d116.3182479">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Haidian Theatre</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal32">Price</a>
<div id="modal32" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Haidian Theatre - Price</h4>
    <p>Price: Different performances, different prices</p>
    <p className="grey-text">门票价格: 不同演出不同价格</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal31">Address</a>
<div id="modal31" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Haidian Theatre - Address</h4>
    <p>Address: 28 Zhongguancun St, Haidian District, Beijing, China</p>
    <p className="grey-text">地址: 北京市海淀区中关村大街28号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Haidian+Theater/@39.9650077,116.3034553,14z/data=!4m8!1m2!2m1!1z5rW35reA5Ymn6Zmi!3m4!1s0x0:0xf05dfe722ef4b08f!8m2!3d39.9766474!4d116.3182479">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal30">Architecture</a>
<div id="modal30" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Haidian Theatre - Architecture</h4>
    <p>Haidian Theater is the only comprehensive large-scale cultural facility with first-class architecture, first-class equipment, and first-class functional quality in northwestern Beijing. The hall with 980 seats and two luxurious small halls with 120 spectators each have very complete and advanced facilities. The hall stage has a music pool, a lifting stage, a sound cover, and a band platform, which can meet the various requirements of dance drama, opera, drama, opera, song and dance, folk art and symphony concerts.</p>
    <p className="grey-text">海淀剧院是北京西北地区惟一一座建筑一流、设备一流、功能品质一流的综合性大型文化设施。能够容纳980个座位的大厅和两个各容纳120名观众的豪华小厅，设施非常完备、高级。大厅舞台既有乐池、升降舞台，又有音罩、乐队平台，可以满足舞剧、歌剧、话剧、戏曲、歌舞、曲艺及交响音乐会的各种要求。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B5%B7%E6%B7%80%E5%89%A7%E9%99%A2#1">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal29">History</a>
<div id="modal29" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Haidian Theatre - History</h4>
    <p>The Haidian Theater reconstruction project, which the Haidian District Government invested heavily in construction, officially started on March 1, 2001 and was completed on November 30, 2003. During this period, the district committee and government paid great attention and support to the construction project of Haidian Theater. After active preparations from all parties, the Haidian Theater officially reopened on December 28, 2003.</p>

    <p className="grey-text">海淀区政府斥巨资兴建的海淀剧院重建工程于2001年3月1日正式开工，2003年11月30日竣工。在此期间，区委区政府对海淀剧院的建设工程给予了极大的关注和支持。经过各方积极的筹备，海淀剧院于2003年12月28日正式重张开业。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B5%B7%E6%B7%80%E5%89%A7%E9%99%A2#2">
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
                            <h5>2019/07/30 --- 7:30pm</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/14.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Musical - Rachmaninoff</p>

                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/15.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>The story is based on a small fragment in the life of the famous Russian musician Rachmaninov (1873-1943): After the failure of the premiere of "Symphony No. 1", he faced various doubts. Since then, the 24-year-old young musician He fell into a slump and fell into a three-year window of creation. After that, he defeated heart disease under the psychological treatment of "hypnosis" and "talk" by the psychologist Dali, and wrote the landmark "Second Piano Concerto", which was dedicated to Dali.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.sohu.com/a/277094198_169580">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className="titles" id="title9">
                        <h4 className="tooltipped title" data-tooltip="四季民福">Siji Minfu Roast Duck Shop</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/9.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Siji+Minfu+Roast+Duck+Shop/@39.963138,116.4161941,17z/data=!4m8!1m2!2m1!1z5YyX5Lqs5biC5pyd6Ziz5Yy65a6J5a6a6Zeo5ZKM5bmz6YeM6KW_6KGXMjHlj7fljJfkuqzllYbmiqUxLDLlsYI!3m4!1s0x35f054aaa0489603:0x656edf40e4a77243!8m2!3d39.9623871!4d116.4180227">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">Siji Minfu Roast Duck Shop</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal36">Price</a>
<div id="modal36" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Siji Minfu Roast Duck Shop - Price</h4>
    <p>Price: RMB160 per person on average</p>
    <p className="grey-text">价格: 人均160RMB</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal35">Address</a>
<div id="modal35" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Siji Minfu Roast Duck Shop - Address</h4>
    <p>Address: Hepingli W St, Andingmen, Chaoyang, Beijing, China</p>
    <p className="grey-text">地址: 北京市朝阳区安定门和平里西街21号北京商报1,2层</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Siji+Minfu+Roast+Duck+Shop/@39.963138,116.4161941,17z/data=!4m8!1m2!2m1!1z5YyX5Lqs5biC5pyd6Ziz5Yy65a6J5a6a6Zeo5ZKM5bmz6YeM6KW_6KGXMjHlj7fljJfkuqzllYbmiqUxLDLlsYI!3m4!1s0x35f054aaa0489603:0x656edf40e4a77243!8m2!3d39.9623871!4d116.4180227">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

{/* <a className="btn-flat modal-trigger right info " href="#modal34">建筑</a>
<div id="modal34" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">四季民福 - 建筑</h4>
    <p></p>
    <p className="grey-text"></p>
    <a className="right" href="">
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div> */}

<a className="btn-flat modal-trigger right info " href="#modal33">Restaurant Introduction</a>
<div id="modal33" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">Siji Minfu Roast Duck Shop - Restaurant Introduction</h4>
    <p>Siji Minfu mainly specializes in Beijing cuisine and roast duck. Dengshikou store is decorated in antique style with style and gorgeousness, which is very old Beijing. The walls made of blue bricks, the gray tiled houses and the vermilion signboards are like an old photo of old Beijing, carrying unique memories that belong to old Beijing. Entering the restaurant, the rectangular tables and chairs are all in place, and you feel like you smell the old Beijing again. The dishes are mainly old Beijing specialties and roast duck. The excellent taste of the dishes, the actual portion and the reasonable price have been praised by many diners. "Crispy and tender roast duck" is the home-cooked dish in the store. Selected Beijing stuffed duck is roasted in a traditional hanging oven with fruit trees. The meat is tender and crispy. In addition, "Baylor barbecue", "Surfing Red Ginseng", "Huang Tan Xiang" and other Beijing specialties are also worth tasting.</p>

    <p className="grey-text">四季民福主营北京菜和烤鸭，灯市口店装修古色古香中透着气派和华丽，很有老北京的味道。青砖砌成的墙面、灰色瓦房配上朱红色的招牌，仿佛是一张老北京的古老照片，承载着属于老北京特有的独特记忆。走进餐厅，清一色的长方桌，靠背椅，置身其中仿佛又嗅到了属于老北京的味道。菜品主要是老北京特色菜和烤鸭，菜品绝佳的味道，实在的份量以及公道的价格受到了很多食客的一致好评。“酥香嫩烤鸭”是店内当家菜品，精选北京填鸭，采用传统挂炉，用果木进行烘烤，肉质鲜嫩、酥香。此外，“贝勒烤肉”、“冲浪红极参”、“黄坛香”等京味儿特色菜也很值得品尝。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%9B%9B%E5%AD%A3%E6%B0%91%E7%A6%8F%EF%BC%88%E7%8E%8B%E5%BA%9C%E4%BA%95%E5%BA%97%EF%BC%89">
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
                            <h5>2019/07/31</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/16.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Siji Minfu Roast Duck Shop - Hepingli</p>

                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/17.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Snacks platter, old Beijing fried noodles, lobster soup and rice</p>
                                    <p>

                                    Honey Crispy Shrimp, Giveaway, Palace Almond Tofu

</p>
                                    <p>Mixed bean sprouts, half roast duck, Jingcheng crispy pork pot</p>

                                </div>
                            </div>


                        </div>
                        
                    </div>
                    
                    <div className="titles" id="title10">
                        <h4 className="tooltipped title" data-tooltip="中国国家博物馆">National Museum of China</h4>
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/10.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">National Museum of China</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                            <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal40">Price</a>
<div id="modal40" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Museum of China - Price</h4>
    <p>Price: free to visit</p>
    <p className="grey-text">门票价格: 免费参观</p>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal39">Address</a>
<div id="modal39" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Museum of China - Address</h4>
    <p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
    <p className="grey-text">地址: 北京市西城区文津街1号</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Find it on map...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal38">Architecture</a>
<div id="modal38" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Museum of China - Architecture</h4>
    <p>The National Museum of China is located on the east side of Tiananmen Square, 16 East Chang'an Street, Dongcheng District, Beijing, China. With a total construction area of nearly 200,000 square meters, a collection of more than 1.4 million pieces, and 48 exhibition halls, it is the largest museum in the world with a single building area and one of the museums with the richest collection of cultural relics in China.</p>
    <p className="grey-text">中国国家博物馆，位于中国北京市东城区东长安街16号、天安门广场东侧。总建筑面积近20万平方米，藏品数量140余万件，展厅数量48个，是世界上单体建筑面积最大的博物馆，是中华文物收藏量最丰富的博物馆之一。</p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%8D%9A%E7%89%A9%E9%A6%86">
        {/* <i className="material-icons left">details</i>   */}
        <span className="blue-text">[Source From...]</span>
    </a>    
    </div>
    <div className="modal-footer">
    <a href="#!" className="modal-close btn-flat">Close</a>
    </div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal37">History</a>
<div id="modal37" className="modal modal-fixed-footer">
    <div className="modal-content">
    <h4 className="title">National Museum of China - History</h4>
    <p>The Preparatory Office of the National Museum of History established by the Ministry of Education of the Republic of China in the Imperial College on July 9, 1912. In 1917, the Ministry of Education decided to designate the area from Duanmen to Wumen of the Forbidden City as the site of the National Museum of History. Moved in in July 1918, and opened the Meridian Main Building, Yanchi Building and Sijiao Pavilion into 10 showrooms, with three offices in each of the east and west halls, and storage rooms in the east and west halls. There are more than 150 buildings and cultural relics. More than 50,000 pieces. It was officially publicly exhibited on August 1, 1924. Named the National Museum of History in 1926. After the founding of the People’s Republic of China on October 1, 1949, it was renamed the National Beijing History Museum under the Ministry of Culture of the Central People’s Government.
<br/>
<br/>
The predecessor of the Chinese Revolution Museum was the Preparatory Office of the Central Revolution Museum established in March 1950.
<br/>
<br/>
In August 1960, the Beijing History Museum officially changed its name to the Chinese History Museum, and the Central Revolution Museum officially changed its name to the Chinese Revolution Museum.
<br/>
<br/>
In September 1969, the Chinese Revolution Museum and the Chinese History Museum were merged to form the Chinese Revolution History Museum.
<br/>
<br/>
On February 28, 2003, the two museums merged again to form the National Museum of China. At that time, the National Museum had a total area of ​​more than 65,000 square meters. The central part and the middle of the two wings were twelve giant square pillar porches. Passing through the porch and into the central hall, the whole building is divided into two symmetrical north and south parts.
<br/>
<br/>
The National Museum of China will be closed for expansion on January 31, 2007, and the design plan was announced in the 2007 Spring Festival. The project started in April 2007 and was completed on March 1, 2010. It lasted 3 years and invested 2.5 billion yuan. The building area has increased from 65,000 square meters to 191,900 square meters, making the museum the largest museum in the world with a single building area. The number of exhibition halls is 48, with "Ancient China" and "Rejuvenation Road". There are two main basic exhibitions, with more than ten thematic exhibitions of various art categories and international exchange exhibitions.</p>

    <p className="grey-text">1912年7月9日中华民国教育部于国子监设立的国立历史博物馆筹备处。 1917年，教育部决议将紫禁城端门至午门一带划为国立历史博物馆馆址。 1918年7月迁入，并将午门正楼、雁翅楼及四角亭辟为10个陈列室，东西庑各三间为办公室，东西朝房为储藏室，总计馆舍150余间，文物五万余件。 1924年8月1日在正式对外公开展览。 1926年定名为国立历史博物馆。 1949年10月1日中华人民共和国建国后，改为国立北京历史博物馆，隶属中央人民政府文化部。
<br/>
<br/>
中国革命博物馆的前身为1950年3月成立的中央革命博物馆筹备处。
<br/>
<br/>
1960年8月，北京历史博物馆正式更名为中国历史博物馆，中央革命博物馆正式更名为中国革命博物馆。
<br/>
<br/>
1969年9月，中国革命博物馆和中国历史博物馆合并，称中国革命历史博物馆。
<br/>
<br/>
2003年2月28日两馆再次合并，成立中国国家博物馆。国博当时总面积65,000多平方米，中央部分和两翼的中部是十二根巨型方柱式的门廊。穿过门廊，走进中央大厅，整个建筑分成互相对称的南北两部分。
<br/>
<br/>
中国国家博物馆从2007年1月31日起闭馆进行扩建，设计方案于2007年春节公布。工程于2007年4月开始至2010年3月1日完工，历时3年，投资25亿人民币。建筑面积由6.5万平方公​​尺增加到19.19万平方公尺,使得该馆成为世界上单体建筑面积最大的博物馆，展厅数量为48个，设有“古代中国”、“复兴之路”两个主要的基本陈列，设有十余个各艺术门类的专题展览及国际交流展览。
    
    </p>
    <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%8D%9A%E7%89%A9%E9%A6%86#%E6%B2%BF%E9%9D%A9">
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
                            <h5>2019/07/31</h5>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/18.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Need to make an appointment 1-5 days in advance on the official account</p>
                                    <p>

                                    Official account: 国家博物馆

</p>
                                    <p>The price of the deposit package is 5RMB/package</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/19.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Jade Dragon - Hongshan Culture</p>
                                    <p>The Neolithic Hongshan Culture Jade Dragon is a Neolithic jade (sacrifice ritual vessel), unearthed in 1971 at the Sanxingthala site in Wengniute Banner, Inner Mongolia Autonomous Region.
<br/>
<br/>
The Neolithic Hongshan Culture Jade Dragon is dark green, 26 cm high, intact, curled up in a "C" shape. The muzzle is stretched forward, slightly bent upwards, the mouth is closed tightly, there are symmetrical double nostrils, and the protruding eyes are prismatic, with hyena. The dragon's back has a symmetrical single hole. Most of the dragon's body has no lines, only the forehead and the bottom of the jaw are carved with fine grid patterns, and the grid protrusions are regular small diamonds.
<br/>
<br/>
The Neolithic Hongshan cultural jade dragon was carved from dark green Xiuyan jade. The whole body is smooth and clean, the head is long with kisses and the eyes are trimmed, the mane is flying, and the body is curled like a hook. Vivid in shape and exquisitely carved, it is known as the "Three-Star Tara Red Mountain Cultural Jade Dragon", also known as the "China's First Dragon".</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%B0%E7%9F%B3%E5%99%A8%E6%97%B6%E4%BB%A3%E7%BA%A2%E5%B1%B1%E6%96%87%E5%8C%96%E7%8E%89%E9%BE%99/23706890?fromtitle=%E7%8E%89%E9%BE%99&fromid=1050781&fr=aladdin">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/20.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                <p>Four Rams Bronze Square Zun - Late Shang Dynasty</p>
                                    <p>The Four-Goat Fangzun is a bronze ritual vessel and sacrificial item in the late Shang Dynasty. It was unearthed on the mountainside of Zhuan Erlun in Yueshanpu, Huangcai Town, Ningxiang County, Hunan Province in 1938. It is now the Tanheli site. Collection in the National Museum of China.
<br/>
<br/>
The Four-Goat Fang Zun is the largest of the Shang dynasty bronze Fang Zun still remaining in China. Each side is 52.4 cm long, 58.3 cm high, and weighs 34.5 kg. It has a long neck, high ring feet, a tall neck, and banana leaves on all sides. The center of the statue is the center of gravity of the vessel. The four corners of the statue are each made of a sheep. The four corners of the shoulders are four curly sheep heads. The head and neck of the sheep stick out of the vessel. Attach the leg of lamb to the abdomen and foot ring. At the same time, Fang Zun’s shoulders are decorated with a high-relief snake body and claw-like dragon pattern. The zun’s four sides are in the middle, where the two sheep are adjacent to each other. .
<br/>
<br/>
The Four-Goat Fangzun may have been cast using two separate casting techniques, that is, the horns and the dragon head are cast individually, and then they are placed in the outer range, and then cast as a whole. The whole object was cast in a block method, and it was made in one go. It shows the superb casting level. It is called "the ultimate bronze model" by the historian and ranks among the top ten national treasures.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%9B%9B%E7%BE%8A%E6%96%B9%E5%B0%8A/617449?fr=aladdin">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                        </div>
                        
                    </div>


                    <h4 className="title"> </h4>

                </div>
            </div>

                <div className="row hide-on-med-and-up" id="travelNoteBeijing">

                <div className="col s12 m12 l12 noteBeijing">
                   {/* <Testnav/> */}
                    <a href="" className="sidenav-trigger menu-bars" data-target="mobile-menu999" >
                        <i className="material-icons smallnotenav" >menu</i>
                    </a>
                    <ul className="sidenav grey lighten-2 sidenav999" id="mobile-menu999">
                            <div className="bigTitle">Beijing</div>
                            <li className="titleDate">
                                <a href="#title11">2019/07/28</a>
                            </li>
                            <li className="smallTitle">

                                <a href="#title11">Performing Arts Centre</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title12">2019/07/29</a>
                            </li>
                            <li className="smallTitle">
                           
                                <a href="#title12">Jingshan Park</a>
                            </li>
                            <li className="smallTitle">
                             
                                <a href="#title13">Beihai Park</a>
                            </li>
                            <li className="smallTitle">

                                <a href="#title14">Modernista</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title15">2019/07/30</a>
                            </li>
                            <li className="smallTitle">
                               
                                <a href="#title15">Prince Gong Mansion</a>
                            </li>
                            <li className="smallTitle">
                               
                                <a href="#title16">Geological Museum of China</a>
                            </li>
                            <li className="smallTitle">
                                
                                <a href="#title17">National Library of China</a>
                            </li>
                            <li className="smallTitle">
                                
                                <a href="#title18">Haidian Theatre</a>
                            </li>

                            <li className="titleDate">
                                <a href="#title19">2019/07/31</a>
                            </li>
                            <li className="smallTitle">
                             
                                <a href="#title19">Siji Minfu Roast Duck</a>
                            </li>
                            <li className="smallTitle">
                                
                                <a href="#title20">National Museum of China</a>
                            </li>
                        
                    </ul>
                

                        <div className="row">
                            <div className="col s10 m10 l10 offset-s1 offset-m1 offset-l1 ">
                            <div className="row travelDetail">
                                <div className="time col s12 m4 l4">
                                    <i className=" material-icons left">access_time</i>
                                    <span>Departure</span>
                                    <span> / </span>
                                    <span>2019-07-28</span>
                                </div>
                                <div className="day col s12 m4 l4">
                                    <i className=" material-icons left">wb_sunny</i>
                                    <span>Travel Days</span>
                                    <span> / </span>
                                    <span>4 days</span>
                                </div>
                                <div className="people col s12 m4 l4">
                                    <i className=" material-icons left">account_circle</i>
                                    <span>People</span>
                                    <span> / </span>
                                    <span>With Friends</span>
                                </div>
                            </div>
                            <div className="col s1 m1 l1"></div>
                            </div>
                        </div>

                    <div className="titles" id="title11">
                        <h4 className="tooltipped title" data-tooltip="国家大剧院">National Centre for the Performing Arts of China</h4>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../img7/1.jpg"  alt="" className="responsive-img"></img>
                                <br></br>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Centre+for+the+Performing+Arts/@39.904799,116.3874825,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0528e22e7a273:0x8b74ec5b2f1aaa87!8m2!3d39.904799!4d116.3896712">
                                    <i className="tiny material-icons">location_on</i>
                                    <span className="titleMap">National Centre for the Performing Arts of China</span>
                                </a>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">

                            <div className="details">

                        <a className="btn-flat modal-trigger right info " href="#modal41">Price</a>
                        <div id="modal41" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Price</h4>
                            <p>Price: 40 yuan/adult and 20 yuan/half-price ticket</p>
                            <p className="grey-text">门票价格: 参观票价分为成人票40元/张和半价票20元/张</p>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal42">Address</a>
                        <div id="modal42" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Address</h4>
                            <p>Address: 2 W Chang'an Ave, Xicheng District, China, 100031</p>
                            <p className="grey-text">地址: 中国国家大剧院位于北京市西城区西长安街2号</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Centre+for+the+Performing+Arts/@39.904799,116.3874825,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0528e22e7a273:0x8b74ec5b2f1aaa87!8m2!3d39.904799!4d116.3896712">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Find it on map...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal43">Architecture</a>
                        <div id="modal43" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - Architecture</h4>
                            <p>The National Centre for the Performing Arts covers an area of 118,93 thousand square meters, with a total construction area of 149,520 square meters. The main building consists of an external envelope and an internal opera house, theater, concert hall, public hall and supporting rooms. The National Centre for the Performing Arts has a total of 5366 seats, including 2081 seats in the opera theater, 957 seats in the theater, 1859 seats in the concert hall, and 469 seats in the small theater.
<br/>
<br/>
The outer envelope steel structure shell is semi-ellipsoidal, and its plane projection is 212.20 meters long from east to west, 143.64 meters wide from north to south, and the building is 46.285 meters high. The deepest part of the foundation is 32.5 meters.
The ellipsoidal roof is mainly finished with titanium metal plate, and the middle part is a gradually opening glass curtain wall. The ellipsoid shell surrounds the artificial lake, with an area of 35,500 square meters, and various channels and entrances are located under the water surface.</p>
                            <p className="grey-text">国家大剧院占地11.893万平方米，总建筑面积149520平方米，主体建筑由外部围护结构和内部歌剧院、戏剧场、音乐厅和公共大厅及配套用房组成。国家大剧院共設有5366个座位，其中歌剧院席位2081个，戏剧院席位957个，音乐厅席位1859个，小剧场席位469个。
<br/>
<br/>
外部围护钢结构壳体呈半椭球形，其平面投影东西长212.20米，南北宽143.64米，建筑物高46.285米，基础埋深的最深部分达到32.5米。
椭球形屋面主要采用钛金属板饰面，中部为渐开式玻璃幕墙。椭球壳体外环绕人工湖，湖面面积达35500平方米，各种通道和入口都设在水面下。
                            
                            
                            </p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2">
                                {/* <i className="material-icons left">details</i>   */}
                                <span className="blue-text">[Source From...]</span>
                            </a>    
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <a className="btn-flat modal-trigger right info " href="#modal44">History</a>
                        <div id="modal44" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">National Centre for the Performing Arts of China - History</h4>
                            <p>The project started on December 13, 2001 and was completed in September 2007. It was audited and put into use on September 25, 2007. It was officially put into operation on December 22, 2007. The National Grand Theater is located on the west side of the Great Hall of the People in Beijing, China, with a total investment of 2.68838 billion yuan. The designer is French architect Paul Andreu.</p>

                            <p className="grey-text">工程于2001年12月13日开工，2007年9月建成，2007年9月25日进行试演、投入使用，2007年12月22日正式投入运营。国家大剧院位于中国北京人民大会堂西侧，总投资26.8838亿元人民币，设计师为法国建筑师保罗·安德鲁。</p>
                            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2">
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
                            <h5>2019/07/28 --- 6:30pm</h5>
                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/1.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>We bought tickets for the Kunihiko Sugano Jazz Piano Concert from 7:30pm-9:30pm.</p>
                                    <p>If you have bought a performance ticket, you can check in 1h in advance to visit the National Centre for the Performing Arts of China
                                        <br/>
                                        (No need to buy additional visit tickets).</p>
                                    <p>The National Centre for the Performing Arts of China is equipped with supporting facilities such as an opera house, a concert hall, a theater, an art exhibition hall, a restaurant, and an audio-visual store. If your mobile phone is dead, you can rent a power bank in the art gallery in the theater.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/2.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>The Jazz Piano Concert by Kunihiko Sugano is held in the concert hall.</p>
                                    <p>The style of the concert hall is fresh and elegant, suitable for large-scale symphony and folk music, and can hold various concerts. It has 1859 seats (including standing seats). The concert hall has the largest pipe organ in the country, which can meet the needs of performing various works of different genres. In addition, the design of digital walls, abstract relief ceilings with modern aesthetics, GRC walls, and turtle back acoustic panels can make the sound diffuse and reflect evenly and softly, enabling the concert hall to achieve the combination of architectural aesthetics and acoustic aesthetics.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2/1063477?fromtitle=%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2&fromid=69546&fr=aladdin#2_2">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/3.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>Kunihiko Sugano Jazz Piano Concert - A quick photo taken at the beginning of the show</p>
                                    <p>Kunihiko Sugano - He started his playing career in Yoshiya Jun's band during his college years. After only working for a year after graduation, I returned to the world of music. In 1960, a trio with Ho Suzuki and GEORGE Otsuka began. And he was greatly appreciated by Tony Scott, who was coming to Japan at that time, and began a musical performance together. Between 1963 and 1964, he re-formed the quartet with Hidehiko Matsumoto. After disbanding, as a piano soloist, he released 70 vinyl records. Sugano's blues-sense piano solo is not only sought after by music fans in Japan, but also recognized in jazz circles all over the world.</p>
                                    <a className="right" target="_blank" rel="noopener noreferrer" href="http://www.chncpaticket.org/pic_detail.asp?id=5782">
                                        <span className="grey-text">[Source From...]</span>
                                    </a>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 l5">
                                    <img src="../img8/4.jpg"  alt="" className="responsive-img"></img>
                                </div>
                                <div className="col s12 m12 l6 offset-l1">
                                    <p>National Centre for the Performing Arts of China at night</p>
                                    <p>

After the concert, the three of us walked slowly along the lake. There would be ducks on the lake, which was very pleasant.</p>
                                </div>
                            </div>
                        </div>
                         
                    </div>
     
                    <div className="titles" id="title12">
<h4 className="tooltipped title" data-tooltip="景山公园">Jingshan Park</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/2.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Jingshan+Park/@39.9251029,116.3946546,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e0cf4da489:0x95549f0b9c7f635b!8m2!3d39.9250988!4d116.3968433">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Jingshan Park</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal9998">Price</a>
<div id="modal9998" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Jingshan Park - Price</h4>
<p>Price: 2 yuan/adult; 1 yuan/half-price ticket</p>
<p className="grey-text">门票价格: 成人票2元/张; 半价票1元/张</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal9997">Address</a>
<div id="modal9997" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Jingshan Park - Address</h4>
<p>Address: 44 Jingshan W St, Xicheng District, Beijing, China, 100009</p>
<p className="grey-text">地址: 北京市西城区景山西街44号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Jingshan+Park/@39.9251029,116.3946546,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e0cf4da489:0x95549f0b9c7f635b!8m2!3d39.9250988!4d116.3968433">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal9996">Architecture</a>
<div id="modal9996" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Jingshan Park - Architecture</h4>
<p>Jingshan Park Management Office is affiliated to Beijing Park Management Center and is located in Jingshanqian Street, Xicheng District, Beijing, China. There are ginkgo garden, begonia garden, peony garden, peach garden, apple garden, vineyard, and persimmon forest in the park. The whole park faces south, with red walls and yellow tiles, covering an area of 230,000 square meters. The mountain is 43 meters high and has a circumference of 1015 meters. The flower lawn in the garden covers an area of 1,100 square meters.</p>
<p className="grey-text">景山公园管理处隶属于北京市公园管理中心，位于中国北京市西城区景山前街。公园中有银杏园、海棠园、牡丹园、桃园、苹果园、葡萄园、柿子林。全园坐北朝南，红墙黄瓦围墙，占地23万平方米。山高43米，周长1015米。园内花卉草坪占地1100 平方米。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD/63814?fr=aladdin#3">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>   
<br/>
<br/>
<p>The building includes surrounding walls and river channels, inner walls, outer walls, bridges, Chenghuang Temple, Jingshan Five Pavilions.</p>
<p className="grey-text">建筑包含围墙与河道，内墙，外墙，桥梁，城隍庙，景山五亭。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD#%E5%BB%BA%E7%AD%91">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>   

</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal9995">History</a>
<div id="modal9995" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Jingshan Park - History</h4>
<p>In the early years of Hongwu in the Ming Dynasty, Xiao Xun, a medic of the Ministry of Industry, participated in the demolition of the Yuan Palace, and saw the scenery of the back garden, the golden palace, the green palace, the flower pavilion, and the felt pavilion. During the Yongle period, Ming Chengzu Zhu Di built large-scale cities, palaces and gardens in Beijing. According to the saying "Canglong, White Tiger, Suzaku, Xuanwu, the four spirits of the sky, in order to be square", the north of the Forbidden City is the place of Xuanwu, and there should be mountains. Therefore, the soil from the Tongzi River, Taiye, and South China Sea in the Forbidden City was piled up on the "green hills" to form five peaks, called "Long Live Mountain".
<br/>
<br/>
On March 19 in the 17th year of Ming Chongzhen (1644), Li Zicheng invaded Beijing, which was a change in Jiashen. Ming Sizong hanged himself on an old locust tree at the foot of Long Live Mountain. After the Qing army entered the customs, in order to win people's hearts, the locust tree was called the "guilt locust", and it was locked with iron chains, and the royal family and civil and military officials were required to dismount and walk when passing by to show their respect for Ming Sizong.
<br/>
<br/>
In the twelfth year of Shunzhi in Qing Dynasty (1655), "Long Live Mountain" was renamed "Jingshan". In the spring of the nineteenth year of Kangxi (1680), Emperor Kangxi climbed Jingshan to look at the capital. Seeing the morning mist, the rays of light and the flowing clouds, he wrote a poem, including "The clouds are thousands of feet leaning against the Danqiu, and the mountains and rivers are overlooked. "Sentence. Danqiu is the abode of gods, and here is a metaphor for Jingshan.
<br/>
<br/>
During the Gengzi Incident in the twenty-sixth year of Guangxu (1900), the Eight-Nation Alliance occupied Beijing and Jingshan was severely damaged. In the 17th year of the Republic of China (1928), Jingshan was turned into a park, which was managed by the Palace Museum and was repaired for visitors to watch.</p>
<p className="grey-text">明朝洪武初年，工部郎中萧洵参与拆毁元故宫，亲览后苑景色以及金殿、翠殿、花亭、毡阁等建筑。永乐年间，明成祖朱棣在北京大规模营建城池、宫殿和园林。依据“苍龙、白虎、朱雀、玄武，天之四灵，以正四方”之说，紫禁城之北乃是玄武之位，当有山。故将挖掘紫禁城筒子河和太液、南海的泥土堆积在“青山”，形成五座山峰，称“万岁山”。
<br/>
<br/>
明崇祯十七年（1644年）三月十九日，李自成攻入北京，是为甲申之变，明思宗自缢于万岁山东麓一株老槐树上。清军入关后，为笼络人心，将此槐树称为“罪槐”，用铁链锁住，并规定皇族、文武官员路过此地都要下马步行，以示对明思宗的尊敬。
<br/>
<br/>
清顺治十二年（1655年）将“万岁山”改称“景山”。康熙十九年（1680年）春，康熙帝登景山眺望京师，见晨雾缭绕，霞光流云，一派春色，即作诗一首，其中有“云霄千尺倚丹丘，辇下山河一望收”之句。丹丘乃神仙居所，此处以其比喻景山.
<br/>
<br/>
光绪二十六年（1900年）庚子事变时，八国联军占领北京，景山受到严重破坏。民国17年（1928年），景山被辟为公园，属故宫博物院管理，修葺后供游人观赏。 



</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%99%AF%E5%B1%B1%E5%85%AC%E5%9B%AD">
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
    <h5>2019/07/29</h5>
    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/5.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Ming Sizong's martyrdom</p>
            <p>In Jingshan Park, Beijing, there is a well-known old locust tree. According to reports, Chongzhen, the last emperor of the Dynasty, hanged himself here. Beside the tree, there are two stone steles. One is engraved with six characters "Ming Sizong's Martyrdom", written by the famous calligrapher Shen Yinmo in the Palace Museum in 1930; the other is "Ming Sizong Three Hundred Years Monument" by Fu Zengxiang, a former imperial imperial Qing Dynasty in 1944 .</p>
            <p>As the sixteenth emperor of the Ming Dynasty, Chongzhen probably never expected that he would become the king of the Ming Dynasty. Before him, two emperors like Jiajing and Wanli did not go to court for decades, which has caused the internal political corruption of the Ming Dynasty to become more and more serious, and the external intrusion from Houjin gradually deepened. Chongzhen, on the other hand, tried to reform the government at the beginning of his ascension, and dealt with the castrate party headed by Wei Zhongxian, "being generous and promising," which gave people a glimmer of hope. Persevering, the country has been accumulating abuses for a long time, and even if Chongzhen worked hard, he could no longer save the crisis. The attack of internal and external troubles eventually contributed to the hanging of Chongzhen and the demise of the Ming Dynasty.</p>
            <p>In 1944, the year of Jiashen in the lunar calendar, which was also 300 years after the end of the Ming Dynasty, a new monument was erected at the place where Chongzhen hanged himself. The inscription was written by Fu Zengxiang, a famous bibliophile who was the chief of education of the Beiyang Government. In the nearly 1,000-character inscription, you can not only see Mr. Fu's trace of the demise of the Ming Dynasty and the death of Chongzhen, but also feel the deep connotation and care behind his words.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="http://culture.people.com.cn/n/2015/0618/c22219-27174724.html">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>

</div>


</div>

<div className="titles" id="title13">
<h4 className="tooltipped title" data-tooltip="北海公园">Beihai Park</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/3.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Beihai+Park/@39.9254515,116.3870752,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e6b32b6159:0xe22c80c89d0ec575!8m2!3d39.9254474!4d116.3892639">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Beihai Park</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99912">Price</a>
<div id="modal99912" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Beihai Park - Price</h4>
<p>Price: 20 yuan/adult and 10 yuan/half-price ticket</p>
<p className="grey-text">门票价格: 联票成人票20元/张; 半价票10元/张</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99911">Address</a>
<div id="modal99911" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Beihai Park - Address</h4>
<p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
<p className="grey-text">地址: 北京市西城区文津街1号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Beihai+Park/@39.9254515,116.3870752,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052e6b32b6159:0xe22c80c89d0ec575!8m2!3d39.9254474!4d116.3892639">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99910">Architecture</a>
<div id="modal99910" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Beihai Park - Architecture</h4>
<p>The entire Beihai Park occupies an area of about 70 hectares, of which the water area occupies more than half of the area. There are Qionghua, Tuancheng and Xishantai islands in Taichi, which symbolize Penglai, Yingzhou and Fangzhang, respectively, and embody the pursuit of Penglai's fairyland. It is a purely artificial garden with water as the main body. The islands are arranged in the Taiye Pool and connected to the shore by bridges. 
<br/>
<br/>
Its architectural style is influenced by some gardens in the south of the Yangtze River, but on the whole it still maintains the characteristics of dignity and dignity of northern gardens. The garden is very religious. There is not only Yong'an Temple on Qionghua Island, but also Buddhist and Taoist buildings such as Chanfu Temple, Xitian Fanjing, Xiaoxitian, Longwang Temple, and Xiancantan on the north and east banks. A grand imperial palace with palaces, mansions, temples and gardens.</p>
<p className="grey-text">北海全园占地约70公顷，其中水域占据了一半以上的面积。太池中有琼华、团城和犀山台三岛，分别象征着蓬莱、瀛洲和方丈，体现了对蓬莱仙境的追求。是一座纯粹的人工园林，布局以水为主体，在太液池中布置岛屿，用桥和岸边相连。
<br/>
<br/>
它的建筑风格受到一些江南园林的影响，但总体上仍然保持了北方园林持重端庄的特点。园内宗教色彩十分浓厚，不仅琼华岛上有永安寺，在北岸和东岸还有阐福寺、西天梵境、小西天、龙王庙、先蚕坛等佛教、道教建筑，因此是一座集宫室、宅第、寺庙、园林于一体的宏大帝王宫苑。


</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal9999">History</a>
<div id="modal9999" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Beihai Park - History</h4>
<p>    Beihai has undergone the construction of the Liao, Jin, Yuan, Ming, and Qing dynasties successively, with a long history and many inheritances during reconstruction. In the eleventh year of Guangxu at the end of Qing Dynasty (1885), Empress Dowager Cixi used the navy and military expenses to increase the Beihai privately. When the Eight-Nation Alliance Forces captured Beijing in 1900, they caused considerable damage to the Beihai, and they were rebuilt two years later. After the founding of the People's Republic of China, Zhongnanhai became the residence of the Central People's Government and Beihai opened as a park. In 1961, Beihai and Tuancheng were announced by the State Council of the People's Republic of China as one of the first batch of national key cultural relics protection units. From 1969 to 1979, Beihai Park was closed on the grounds of "protecting Zhongnanhai", and visitors were prohibited from entering. After 1979, Beihai Park was reopened to the public.</p>

<p className="grey-text">北海先后历经辽、金、元、明、清五朝的兴建，历史悠久且重建时承袭较多。清代末光绪十一年（1885年），慈禧太后私自动用海军军费增修过北海。1900年八国联军攻占北京时，对北海有过较大的破坏，两年后进行了重建。中华人民共和国成立后，中南海成为了中央人民政府的驻地，北海作为公园开放。1961年，北海及团城被中华人民共和国国务院公布为第一批全国重点文物保护单位之一。1969年至1979年，北海公园以“保护中南海安全”为由关闭，禁止游人入内。1979年后北海公园重新对公众开放。

</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD">
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
    <h5>2019/07/29</h5>
    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/6.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>After coming out of Jingshan Park, you can walk to Beihai Park in a few minutes.</p>
            <p>The whole park is centered on Beihai and mainly consists of Qionghua Island, East Coast and North Coast scenic spots. The trees on Qionghua Island are lush, the pavilions are quiet, and the white pagoda stands on the top of the mountain, becoming the symbol of the park.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8C%97%E6%B5%B7%E5%85%AC%E5%9B%AD/253388?fr=aladdin#3_3">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>

    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/7.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Beihai White Tower is located on Qionghua Island in Beihai Park, Beijing.</p>
            <p>Built in the eighth year of Shunzhi in the early Qing Dynasty (1651), it is a Tibetan-style Lama Tower and a landmark in Beihai. The Beihai White Pagoda was recorded by the stone stele of the construction of the tower. At that time, "there were lamas from the Western Regions, who wanted to praise the emperor in Buddhism, please erect the pagoda temple, and live the country and bless the people."
<br/>
<br/>
The tower body is entirely a mixed structure of brick, wood and stone, consisting of five parts: tower base, tower body, phase wheel, canopy, and pagoda. The tower body is covered with bowls, so only bricks and stones can be seen from the surface of the tower, but the wooden frame is not visible. The height of the tower is 35.9 meters, the upper circle and the lower part are full of changes. It is in the style of Mount Sumeru. The top of the tower is decorated with sun, moon and flame patterns to indicate that the "Dharma" shines like the sun and the moon. Shoot, always shine on the earth.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%8C%97%E6%B5%B7%E7%99%BD%E5%A1%94/748542?fr=aladdin">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>

    </div>



</div>

</div>

<div className="titles" id="title14">
<h4 className="title">Modernista</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/4.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/44+Baochao+Hutong,+Dongcheng+Qu,+Beijing+Shi,+China,+100190/@39.9445096,116.3996862,19.89z/data=!4m5!3m4!1s0x35f0533ee6163ddd:0x16b7703fe6644049!8m2!3d39.944584!4d116.399862">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Modernista</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99916">Price</a>
<div id="modal99916" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Modernista - Price</h4>
<p>门票价格: 90元/张</p>
<p className="grey-text">Price: 90 yuan/ticket</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99915">Address</a>
<div id="modal99915" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Modernista - Address</h4>
<p>地址: 北京市东城区鼓楼东大街宝钞胡同44号</p>
<p className="grey-text">Address: 44 Baochao Hutong, Dongcheng, Beijing, China</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/44+Baochao+Hutong,+Dongcheng+Qu,+Beijing+Shi,+China,+100190/@39.9445881,116.3976733,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0533ee6163ddd:0x16b7703fe6644049!8m2!3d39.944584!4d116.399862">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
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
    <h5>2019/07/29</h5>

    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/8.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>After dinner, we came to Modernista, the place is in Baochao Hutong, which is not easy to find.

</p>
            <p>Many foreigners come here, and there are different bands every night.</p>
        </div>
    </div>




</div>
</div>

<div className="titles" id="title15">
<h4 className="tooltipped title" data-tooltip="恭王府">Prince Gong Mansion</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/5.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Prince+Gong+Mansion/@39.935774,116.3776523,15z/data=!4m8!1m2!2m1!1sgongwangfu!3m4!1s0x35f05303c65abf2b:0x6ec74549d7c3a6f5!8m2!3d39.935774!4d116.386407">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Prince Gong Mansion</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99920">Price</a>
<div id="modal99920" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Prince Gong Mansion - Price</h4>
<p>Price: 40 yuan/adult and 20 yuan/half-price ticket</p>
<p className="grey-text">门票价格: 成人票40元/张; 半价票20元/张</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99919">Address</a>
<div id="modal99919" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Prince Gong Mansion - Address</h4>
<p>Address: 17 Qianhai W St, Shi Cha Hai, Xicheng District, Beijing, China</p>
<p className="grey-text">地址: 北京市西城区什刹海前海西街17号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Prince+Gong+Mansion/@39.935774,116.3776523,15z/data=!4m8!1m2!2m1!1sgongwangfu!3m4!1s0x35f05303c65abf2b:0x6ec74549d7c3a6f5!8m2!3d39.935774!4d116.386407">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99918">Architecture</a>
<div id="modal99918" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Prince Gong Mansion - Architecture</h4>
<p>Prince Gong’s Mansion is composed of two parts: a mansion and a garden. It is about 330 meters long from north to south and 180 meters wide from east to west.
<br/>
<br/>
The palace of Prince Gong's residence is in the south, and the garden is in the north. The palace is separated from the garden by a tall back cover.
<br/>
<br/>
Prince Gong's Mansion is divided into three roads, the east and the west, which are composed of more than courtyards, followed by a two-story rear cover building with a length of 160 meters.
<br/>
<br/>
Prince Gong's Mansion Garden is also divided into three roads. The middle road is Xiyangmen, Dulefeng, Manta Pond, Anshan Hall and Mingdaotang, Dihuaxuan, Fuzi Tablet, Inviting Platform, Bat Hall; East Road is Yishen Suohuamen, Daxilou, Banjiaoyuan; west The road is the pavilion in the heart of the lake. In addition, there are Longwang Temple, Yuguan, Miaoxiang Pavilion, Liubei Pavilion, and Yishu Garden.</p>
<p className="grey-text">恭王府由府邸和花园两部分组成，南北长约330米，东西宽180余米，占地面积约61120平方米，其中府邸占地32260平方米，花园占地28860平方米。
<br/>
<br/>
恭王府王府在南，花园在北，由高高的后罩楼将王府与花园分开。
<br/>
<br/>
恭王府分中东西三路，分别由多过四合院组成，后为长160米的二层后罩楼。
<br/>
<br/>
恭王府花园也分为三路。中路是西洋门，独乐峰，蝠池，安善堂及左右配殿明道堂，棣华轩，福字碑，邀月台，蝠厅；东路是怡神所垂花门，大戏楼，芭蕉院；西路是湖心亭，澄怀撷秀。此外还有龙王庙、榆关、妙香亭、流杯亭、艺蔬圃。

</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C#%E5%BB%BA%E7%AD%91">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99917">History</a>
<div id="modal99917" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Prince Gong Mansion - History</h4>
<p>Prince Gong’s Mansion and the Garden were originally built on the basis of the regulations of Heshen and Princess Gu Lun as the residence of Erpin Hubu. It was built in the first month of the fourth year of Jiaqing (1799), and Heshen was bestowed to death. In April, "Heshen’s House was rewarded to Qingjun Wang Yonglin for residence; Heshen’s Garden was rewarded to Cheng Prince Yongxuan’s residence.", After the first year of Xianfeng, the grandson of Prince Qing, Yiqiu, was heredically reduced to the general of the auxiliary country, and was replaced by the former University Shiqi Shan’s House on Dedingfu Street. The original palace was taken back by the House of Internal Affairs and later given to Yixin as a residence in the Xianfeng period. Prince Gong's Mansion.
<br/>
<br/>
In 1921, Prince Gong Yixin’s grandsons Pu Wei and Pu Ru (Pu Xinshe) pledged the Prince Gong’s mansion and garden to the Catholic Church, which was later bought by Fu Jen Catholic University as a school building, and later served as the Beijing Normal University and the Chinese Conservatory of Music. School building. The building of Prince Gong's Mansion was partly occupied by Beijing Air Conditioner Factory, and it was retired in the 1980s. Since October 1996, Prince Gong’s Mansion Garden has been used as a tourist attraction for the public to visit. On August 20, 2008, the restored Prince Gong's Mansion was all opened to the public.
<br/>
<br/>
In 2017, the Prince Gong's Mansion Museum of the Ministry of Culture was named the third batch of national first-class museums by the Chinese Museum Association.</p>

<p className="grey-text">恭王府及花园原是固伦和孝公主在和珅作为二品户部侍郎邸的规制基础上，花六年增建的公主府，相当于郡王府规制，西路建筑是大臣和珅的府邸以一品大员建造，嘉庆四年（1799年）正月，和珅遭赐死，四月「和珅之宅，赏给庆郡王永璘居住；和珅之园，赏给成亲王永瑆居住。」，咸丰元年后由于庆亲王的孙子奕劻世袭降低为辅国将军，换至得定府大街原大学士琦善宅，原王府由内务府收回，后于咸丰年间赐予奕欣作为府邸，称为恭王府。 
<br/>
<br/>
1921年，恭亲王奕欣的孙子溥伟、 溥儒（溥心畲）将恭王府和花园抵押给天主教会，后由辅仁大学买去作为校舍，后先后为北京师范大学、中国音乐学院的校舍。恭王府建筑曾部分为北京空调机厂占用，1980年代腾退。 1996年10月起，恭王府花园作为旅游景点供公众参观。 2008年8月20日，修复后的恭王府全部对外开放。
<br/>
<br/>
2017年，文化部恭王府博物馆被中国博物馆协会评为第三批国家一级博物馆。

</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C#%E5%8E%86%E5%8F%B2">
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
    <h5>2019/07/30</h5>

    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/9.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Prince Gong's Mansion Garden</p>
            <p>The palace of Prince Gong's residence is in the south, and the garden is in the north. The palace is separated from the garden by a tall back cover.</p>
            <p>Prince Gong's Mansion Garden is also divided into three roads. The middle road is Xiyangmen, Dulefeng, Manta Pond, Anshan Hall and Mingdaotang, Dihuaxuan, Fuzi Tablet, Inviting Platform, Bat Hall; East Road is Yishen Suohuamen, Daxilou, Banjiaoyuan; west The road is the pavilion in the heart of the lake. In addition, there are Longwang Temple, Yuguan, Miaoxiang Pavilion, Liubei Pavilion, and Yi Vegetable Garden.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E6%81%AD%E7%8E%8B%E5%BA%9C">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>

    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/10.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Prince Gong's Mansion Grand Theater</p>
            <p>Prince Gong’s Mansion on the north shore of Shichahai Lake is the largest courtyard house in the world and the most complete one of the more than 60 Qing Dynasty palaces in Beijing today. Daxilou, also called Yishensuo, is the second best in Prince Gong's Garden.
            <br/>
            <br/>
            The entire theater building is a pure wood structure, with a three-volume hook-up roof. It used to be used by the prince to watch the play. The hall inside the theater is very large, but the acoustics are very good. It is located in the farthest corner of the lobby, and the singing on the stage is also audible Clearly, this has indeed reached a wonderful position in design.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%81%AD%E7%8E%8B%E5%BA%9C%E5%A4%A7%E6%88%8F%E6%A5%BC">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>


</div>

</div>

<div className="titles" id="title16">
<h4 className="tooltipped title" data-tooltip="中国地质博物馆">The Geological Museum of China</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/6.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/The+Geological+Museum+of+China,+Xicheng+Qu,+Beijing+Shi,+China/@39.9235363,116.3696596,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052587d891865:0x9acf47983e4925f!8m2!3d39.9235322!4d116.3718483">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">The Geological Museum of China</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99924">Price</a>
<div id="modal99924" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">The Geological Museum of China - Price</h4>
<p>Price: 30 yuan/adult and 15 yuan/half-price ticket</p>
<p className="grey-text">门票价格: 成人票30元/张; 半价票15元/张</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99923">Address</a>
<div id="modal99923" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">The Geological Museum of China - Address</h4>
<p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
<p className="grey-text">地址: 北京市西城区文津街1号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/The+Geological+Museum+of+China,+Xicheng+Qu,+Beijing+Shi,+China/@39.9235363,116.3696596,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052587d891865:0x9acf47983e4925f!8m2!3d39.9235322!4d116.3718483">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99922">Exhibition</a>
<div id="modal99922" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">The Geological Museum of China - Exhibition</h4>
<p>The China Geological Museum has more than 200,000 geological specimens, including giant Shandong dragon, Chinese dragon bird and other dinosaur fossils, Peking man, Yuanmou man, Shanding cave man and other ancient human fossils, fish, birds, insects and other prehistoric creature fossils. In addition, there are the world’s largest "Crystal King", giant fluorite calcite crystal cluster specimens, azurite, cinnabar, realgar, orpiment, scheelite, antimonite and other mineral specimens with Chinese characteristics, various gems and jade And other treasures.
<br/>
<br/>
The China Geological Museum has been carrying out researches on mineral petrology, stratigraphic paleontology, gemology, and museology for a long time, especially in the fields of early vertebrates, entomology, and Jehol Biota in western Liaoning. The museum has guided the scientific research, popularization and market consumption of contemporary gems in China through systematic gem display and gem research results.
<br/>
<br/>
The China Geological Museum launches displays and exhibitions throughout the year. The basic display is arranged according to the structure of the earth circle, showing minerals, rocks, gems, and fossils, paying attention to the human living environment, and using bionics, digitization, virtual reality and other technologies to enable the audience to have a unique experience in the geoscience space.
<br/>
<br/>
The China Geological Museum founded "Earth" in 1981, and it is the only popular geological magazine in the People's Republic of China. The museum also holds a national youth geoscience summer camp every year.</p>
<p className="grey-text">中国地质博物馆收藏有20余万件地质标本，其中包括巨型山东龙、中华龙鸟等恐龙化石，北京人、元谋人、山顶洞人等古人类化石，鱼类、鸟类、昆虫等史前生物化石，此外还有有世界最大的“水晶王”、巨型萤石方解石晶簇标本、蓝铜矿、辰砂、雄黄、雌黄、白钨矿、辉锑矿等有中国特色的矿物标本，各种宝石、玉石等珍品。
<br/>
<br/>
中国地质博物馆长期开展矿物岩石学、地层古生物学、宝石学、博物馆学研究，特别是在早期脊椎动物学、昆虫学、辽西热河生物群等领域取得突出成果。该馆通过系统的宝石陈列及宝石研究成果，引导了中国当代宝石科学研究、普及及市场消费。
<br/>
<br/>
中国地质博物馆常年推出陈列及展览。基本陈列按照地球圈层结构进行布局，展示矿物、岩石、宝石、化石，关注人类生存环境，并且通过仿生、数字化、虚拟现实等等技术，使观众在地学空间中获得独特体验。
<br/>
<br/>
中国地质博物馆于1981年创刊《地球》，是中华人民共和国唯一的地学科普杂志。该馆还每年举办全国青少年地学夏令营。


</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86#%E5%B1%95%E8%A7%88%E5%8F%8A%E7%A0%94%E7%A9%B6">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99921">Architecture</a>
<div id="modal99921" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">The Geological Museum of China - Architecture</h4>
<p>The main building of the China Geological Museum has 6 floors with a total height of about 36 meters, 40 meters long from east to west, and 70 meters long from north to south. The building area is nearly 11,000 square meters and the architectural style is stable and generous.
<br/>
<br/>
The exhibition hall of the China Geological Museum includes six parts: the earth hall, the mineral rock hall, the gem and jade hall, and the prehistoric biology hall, covering a total area of 2500 square meters and a temporary exhibition area of 1500 square meters.</p>
<p className="grey-text">中国地质博物馆主馆共有大楼6层，总高约36米，东西长40米，南北长70米，建筑面积近11000平方米，建筑风格稳重大方。
<br/>
<br/>
中国地质博物馆展厅包括地球厅、矿物岩石厅、宝石玉厅、史前生物厅等六个部分，面积共2500平方米，另有临时展览面积1500平方米。

</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86#2_1">
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
    <h5>2019/07/30</h5>
    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/11.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>The Geological Museum of China is divided into the Earth Exhibition Hall, Gem Exhibition Hall, Mineral Rock Exhibition Hall, Prehistoric Biology Exhibition Hall, Care and Inspiration Hall and Virtual Exhibition Hall</p>
            <p>The Geological Museum of China has a collection of more than 200,000 geological specimens, covering various fields of geosciences. The collection includes giant Shandong dragon, Chinese dragon bird and other dinosaur fossils, Peking man, Yuanmou man, Shanding cave man and other ancient human fossils, as well as a large number of precious prehistoric creatures such as fish, birds and insects that integrate scientific and ornamental value. There are the world’s largest "Crystal King", giant fluorite calcite crystal cluster specimens, exquisite azurite, cinnabar, realgar, orpiment, scheelite, stibnite and other Chinese characteristic mineral specimens, as well as a wide variety of gems and jade Waiting for a batch of national treasures.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E8%B4%A8%E5%8D%9A%E7%89%A9%E9%A6%86">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/12.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Chinese Sinornithosaurus</p>
            <p>

Chinese Sinornithosaurus (genus name: Sinornithosaurus, meaning "Chinese bird lizard"), is a feathered dinosaur of the Trichosaurus family. Fossils were found in the Yixian Formation of China and dated to the Lower Cretaceous Middle Baremian.

</p>
            <p>The body length is 1.5 meters, the weight is 8 kg, and it is a carnivorous food.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E9%B8%9F%E9%BE%99">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>


</div>

</div>

<div className="titles" id="title17">
<h4 className="tooltipped title" data-tooltip="中国国家图书馆">National Library of China</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/7.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Library+of+China/@39.943019,116.3143563,15z/data=!4m8!1m2!2m1!1z5Lit5Zu95Zu95a625Zu-5Lmm6aaG!3m4!1s0x35f05180c674fe5d:0x1a31b5d9e3498011!8m2!3d39.943019!4d116.323111">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">National Library of China</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99928">Price</a>
<div id="modal99928" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Library of China - Price</h4>
<p>Price: free to visit</p>
<p className="grey-text">门票价格: 免费参观</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99927">Address</a>
<div id="modal99927" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Library of China - Address</h4>
<p>Address: 33 Zhongguancun S St, Zi Zhu Qiao, Haidian District, China</p>
<p className="grey-text">地址: 北京市海淀区紫竹桥中关村南大街33号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Library+of+China/@39.943019,116.3143563,15z/data=!4m8!1m2!2m1!1z5Lit5Zu95Zu95a625Zu-5Lmm6aaG!3m4!1s0x35f05180c674fe5d:0x1a31b5d9e3498011!8m2!3d39.943019!4d116.323111">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99926">Architecture</a>
<div id="modal99926" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Library of China - Architecture</h4>
<p>The Southern District of the National Library of China receives an average of 12,000 readers per day, and the collection far exceeds the designed capacity of 20 million pieces. The original building is no longer sufficient.
<br/>
<br/>
In 2003, approved by the state, a project was established for expansion. The second phase of the new building was opened in September 2008 and became the north area of the National Library of China. After the expansion, the total area of the National Library of China reached 250,000 square meters.</p>
<p className="grey-text">中国国家图书馆总馆南区日均接待读者1.2万人次，馆藏远远超过2000万件的设计容量，原有馆舍已不敷使用。
<br/>
<br/>
2003年，经国家批准，立项扩建，二期新馆舍于2008年9月启用，成为中国国家图书馆总馆北区，扩建完成后中国国家图书馆的馆舍总面积达到25万平方米。


</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86#%E5%BB%BA%E7%AD%91">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99925">History</a>
<div id="modal99925" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Library of China - History</h4>
<p>The predecessor of the National Library of China was the Jingshi Library which was founded on September 9, 1909. After the establishment of the Republic of China, the Ministry of Education of the Beiyang Government took over the Jingshi Library and later renamed it the National Jingshi Library. It was officially opened on August 27 to receive readers.
<br/>
<br/>
After the successful Northern Expedition in 1928, the National Capital Library was renamed the National Beiping Library and moved to Jurentang, Zhongnanhai.
<br/>
<br/>
After the founding of the People’s Republic of China, the National Peking Library was renamed the National Beijing Library on March 6, 1950, and the Beijing Library on June 12, 1951, becoming the only national library of the People’s Republic of China.</p>

<p className="grey-text">中国国家图书馆的前身是于1909年9月9日始建的京师图书馆。中华民国成立后，北洋政府的教育部接管京师图书馆，后将其改名为国立京师图书馆，1912年（民国元年）8月27日正式开馆接待读者。 
<br/>
<br/>
1928年北伐成功后，国立京师图书馆改名国立北平图书馆，并迁址到中南海居仁堂。
<br/>
<br/>
中华人民共和国成立后，于1950年3月6日国立北平图书馆更名为国立北京图书馆，1951年6月12日更名为北京图书馆，成为中华人民共和国唯一的国家图书馆。


</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86#%E5%8E%86%E5%8F%B2">
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
    <h5>2019/07/30</h5>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/13.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>It is not allowed to carry large bags into the library, you need to store the bags before entering.</p>
            <p>On the first floor, you can swipe your ID card to enter the library to borrow books</p>
            
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2/1063477?fromtitle=%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%89%A7%E9%99%A2&fromid=69546&fr=aladdin#2_2">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>

</div>

</div>

<div className="titles" id="title18">
<h4 className="tooltipped title" data-tooltip="海淀剧院">Haidian Theatre</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/8.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Haidian+Theater/@39.9650077,116.3034553,14z/data=!4m8!1m2!2m1!1z5rW35reA5Ymn6Zmi!3m4!1s0x0:0xf05dfe722ef4b08f!8m2!3d39.9766474!4d116.3182479">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Haidian Theatre</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99932">Price</a>
<div id="modal99932" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Haidian Theatre - Price</h4>
<p>Price: Different performances, different prices</p>
<p className="grey-text">门票价格: 不同演出不同价格</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99931">Address</a>
<div id="modal99931" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Haidian Theatre - Address</h4>
<p>Address: 28 Zhongguancun St, Haidian District, Beijing, China</p>
<p className="grey-text">地址: 北京市海淀区中关村大街28号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Haidian+Theater/@39.9650077,116.3034553,14z/data=!4m8!1m2!2m1!1z5rW35reA5Ymn6Zmi!3m4!1s0x0:0xf05dfe722ef4b08f!8m2!3d39.9766474!4d116.3182479">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99930">Architecture</a>
<div id="modal99930" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Haidian Theatre - Architecture</h4>
<p>Haidian Theater is the only comprehensive large-scale cultural facility with first-class architecture, first-class equipment, and first-class functional quality in northwestern Beijing. The hall with 980 seats and two luxurious small halls with 120 spectators each have very complete and advanced facilities. The hall stage has a music pool, a lifting stage, a sound cover, and a band platform, which can meet the various requirements of dance drama, opera, drama, opera, song and dance, folk art and symphony concerts.</p>
<p className="grey-text">海淀剧院是北京西北地区惟一一座建筑一流、设备一流、功能品质一流的综合性大型文化设施。能够容纳980个座位的大厅和两个各容纳120名观众的豪华小厅，设施非常完备、高级。大厅舞台既有乐池、升降舞台，又有音罩、乐队平台，可以满足舞剧、歌剧、话剧、戏曲、歌舞、曲艺及交响音乐会的各种要求。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B5%B7%E6%B7%80%E5%89%A7%E9%99%A2#1">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99929">History</a>
<div id="modal99929" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Haidian Theatre - History</h4>
<p>The Haidian Theater reconstruction project, which the Haidian District Government invested heavily in construction, officially started on March 1, 2001 and was completed on November 30, 2003. During this period, the district committee and government paid great attention and support to the construction project of Haidian Theater. After active preparations from all parties, the Haidian Theater officially reopened on December 28, 2003.</p>

<p className="grey-text">海淀区政府斥巨资兴建的海淀剧院重建工程于2001年3月1日正式开工，2003年11月30日竣工。在此期间，区委区政府对海淀剧院的建设工程给予了极大的关注和支持。经过各方积极的筹备，海淀剧院于2003年12月28日正式重张开业。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%B5%B7%E6%B7%80%E5%89%A7%E9%99%A2#2">
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
    <h5>2019/07/30 --- 7:30pm</h5>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/14.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Musical - Rachmaninoff</p>

        </div>
    </div>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/15.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>The story is based on a small fragment in the life of the famous Russian musician Rachmaninov (1873-1943): After the failure of the premiere of "Symphony No. 1", he faced various doubts. Since then, the 24-year-old young musician He fell into a slump and fell into a three-year window of creation. After that, he defeated heart disease under the psychological treatment of "hypnosis" and "talk" by the psychologist Dali, and wrote the landmark "Second Piano Concerto", which was dedicated to Dali.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://www.sohu.com/a/277094198_169580">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>


</div>

</div>

<div className="titles" id="title19">
<h4 className="tooltipped title" data-tooltip="四季民福">Siji Minfu Roast Duck Shop</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/9.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Siji+Minfu+Roast+Duck+Shop/@39.963138,116.4161941,17z/data=!4m8!1m2!2m1!1z5YyX5Lqs5biC5pyd6Ziz5Yy65a6J5a6a6Zeo5ZKM5bmz6YeM6KW_6KGXMjHlj7fljJfkuqzllYbmiqUxLDLlsYI!3m4!1s0x35f054aaa0489603:0x656edf40e4a77243!8m2!3d39.9623871!4d116.4180227">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">Siji Minfu Roast Duck Shop</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99936">Price</a>
<div id="modal99936" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Siji Minfu Roast Duck Shop - Price</h4>
<p>Price: RMB160 per person on average</p>
<p className="grey-text">价格: 人均160RMB</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99935">Address</a>
<div id="modal99935" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Siji Minfu Roast Duck Shop - Address</h4>
<p>Address: Hepingli W St, Andingmen, Chaoyang, Beijing, China</p>
<p className="grey-text">地址: 北京市朝阳区安定门和平里西街21号北京商报1,2层</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/Siji+Minfu+Roast+Duck+Shop/@39.963138,116.4161941,17z/data=!4m8!1m2!2m1!1z5YyX5Lqs5biC5pyd6Ziz5Yy65a6J5a6a6Zeo5ZKM5bmz6YeM6KW_6KGXMjHlj7fljJfkuqzllYbmiqUxLDLlsYI!3m4!1s0x35f054aaa0489603:0x656edf40e4a77243!8m2!3d39.9623871!4d116.4180227">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

{/* <a className="btn-flat modal-trigger right info " href="#modal99934">建筑</a>
<div id="modal99934" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">四季民福 - 建筑</h4>
<p></p>
<p className="grey-text"></p>
<a className="right" href="">
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div> */}

<a className="btn-flat modal-trigger right info " href="#modal99933">Restaurant Introduction</a>
<div id="modal99933" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">Siji Minfu Roast Duck Shop - Restaurant Introduction</h4>
<p>Siji Minfu mainly specializes in Beijing cuisine and roast duck. Dengshikou store is decorated in antique style with style and gorgeousness, which is very old Beijing. The walls made of blue bricks, the gray tiled houses and the vermilion signboards are like an old photo of old Beijing, carrying unique memories that belong to old Beijing. Entering the restaurant, the rectangular tables and chairs are all in place, and you feel like you smell the old Beijing again. The dishes are mainly old Beijing specialties and roast duck. The excellent taste of the dishes, the actual portion and the reasonable price have been praised by many diners. "Crispy and tender roast duck" is the home-cooked dish in the store. Selected Beijing stuffed duck is roasted in a traditional hanging oven with fruit trees. The meat is tender and crispy. In addition, "Baylor barbecue", "Surfing Red Ginseng", "Huang Tan Xiang" and other Beijing specialties are also worth tasting.</p>

<p className="grey-text">四季民福主营北京菜和烤鸭，灯市口店装修古色古香中透着气派和华丽，很有老北京的味道。青砖砌成的墙面、灰色瓦房配上朱红色的招牌，仿佛是一张老北京的古老照片，承载着属于老北京特有的独特记忆。走进餐厅，清一色的长方桌，靠背椅，置身其中仿佛又嗅到了属于老北京的味道。菜品主要是老北京特色菜和烤鸭，菜品绝佳的味道，实在的份量以及公道的价格受到了很多食客的一致好评。“酥香嫩烤鸭”是店内当家菜品，精选北京填鸭，采用传统挂炉，用果木进行烘烤，肉质鲜嫩、酥香。此外，“贝勒烤肉”、“冲浪红极参”、“黄坛香”等京味儿特色菜也很值得品尝。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%9B%9B%E5%AD%A3%E6%B0%91%E7%A6%8F%EF%BC%88%E7%8E%8B%E5%BA%9C%E4%BA%95%E5%BA%97%EF%BC%89">
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
    <h5>2019/07/31</h5>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/16.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Siji Minfu Roast Duck Shop - Hepingli</p>

        </div>
    </div>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/17.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Snacks platter, old Beijing fried noodles, lobster soup and rice</p>
            <p>

            Honey Crispy Shrimp, Giveaway, Palace Almond Tofu

</p>
            <p>Mixed bean sprouts, half roast duck, Jingcheng crispy pork pot</p>

        </div>
    </div>


</div>

</div>

<div className="titles" id="title20">
<h4 className="tooltipped title" data-tooltip="中国国家博物馆">National Museum of China</h4>
<div className="row">
    <div className="col s12 m12 l5">
        <img src="../img7/10.jpg"  alt="" className="responsive-img"></img>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
            <i className="tiny material-icons">location_on</i>
            <span className="titleMap">National Museum of China</span>
        </a>
    </div>
    <div className="col s12 m12 l6 offset-l1">
    <div className="details">

<a className="btn-flat modal-trigger right info " href="#modal99940">Price</a>
<div id="modal99940" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Museum of China - Price</h4>
<p>Price: free to visit</p>
<p className="grey-text">门票价格: 免费参观</p>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99939">Address</a>
<div id="modal99939" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Museum of China - Address</h4>
<p>Address: 1 Wenjin St, Xicheng District, China, 100034</p>
<p className="grey-text">地址: 北京市西城区文津街1号</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://www.google.ca/maps/place/National+Museum+of+China/@39.9050986,116.3993942,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052b94ab111e7:0x2476241f0e8c609!8m2!3d39.9050945!4d116.4015829">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Find it on map...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99938">Architecture</a>
<div id="modal99938" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Museum of China - Architecture</h4>
<p>The National Museum of China is located on the east side of Tiananmen Square, 16 East Chang'an Street, Dongcheng District, Beijing, China. With a total construction area of nearly 200,000 square meters, a collection of more than 1.4 million pieces, and 48 exhibition halls, it is the largest museum in the world with a single building area and one of the museums with the richest collection of cultural relics in China.</p>
<p className="grey-text">中国国家博物馆，位于中国北京市东城区东长安街16号、天安门广场东侧。总建筑面积近20万平方米，藏品数量140余万件，展厅数量48个，是世界上单体建筑面积最大的博物馆，是中华文物收藏量最丰富的博物馆之一。</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%8D%9A%E7%89%A9%E9%A6%86">
{/* <i className="material-icons left">details</i>   */}
<span className="blue-text">[Source From...]</span>
</a>    
</div>
<div className="modal-footer">
<a href="#!" className="modal-close btn-flat">Close</a>
</div>
</div>

<a className="btn-flat modal-trigger right info " href="#modal99937">History</a>
<div id="modal99937" className="modal modal-fixed-footer">
<div className="modal-content">
<h4 className="title">National Museum of China - History</h4>
<p>The Preparatory Office of the National Museum of History established by the Ministry of Education of the Republic of China in the Imperial College on July 9, 1912. In 1917, the Ministry of Education decided to designate the area from Duanmen to Wumen of the Forbidden City as the site of the National Museum of History. Moved in in July 1918, and opened the Meridian Main Building, Yanchi Building and Sijiao Pavilion into 10 showrooms, with three offices in each of the east and west halls, and storage rooms in the east and west halls. There are more than 150 buildings and cultural relics. More than 50,000 pieces. It was officially publicly exhibited on August 1, 1924. Named the National Museum of History in 1926. After the founding of the People’s Republic of China on October 1, 1949, it was renamed the National Beijing History Museum under the Ministry of Culture of the Central People’s Government.
<br/>
<br/>
The predecessor of the Chinese Revolution Museum was the Preparatory Office of the Central Revolution Museum established in March 1950.
<br/>
<br/>
In August 1960, the Beijing History Museum officially changed its name to the Chinese History Museum, and the Central Revolution Museum officially changed its name to the Chinese Revolution Museum.
<br/>
<br/>
In September 1969, the Chinese Revolution Museum and the Chinese History Museum were merged to form the Chinese Revolution History Museum.
<br/>
<br/>
On February 28, 2003, the two museums merged again to form the National Museum of China. At that time, the National Museum had a total area of ​​more than 65,000 square meters. The central part and the middle of the two wings were twelve giant square pillar porches. Passing through the porch and into the central hall, the whole building is divided into two symmetrical north and south parts.
<br/>
<br/>
The National Museum of China will be closed for expansion on January 31, 2007, and the design plan was announced in the 2007 Spring Festival. The project started in April 2007 and was completed on March 1, 2010. It lasted 3 years and invested 2.5 billion yuan. The building area has increased from 65,000 square meters to 191,900 square meters, making the museum the largest museum in the world with a single building area. The number of exhibition halls is 48, with "Ancient China" and "Rejuvenation Road". There are two main basic exhibitions, with more than ten thematic exhibitions of various art categories and international exchange exhibitions.</p>

<p className="grey-text">1912年7月9日中华民国教育部于国子监设立的国立历史博物馆筹备处。 1917年，教育部决议将紫禁城端门至午门一带划为国立历史博物馆馆址。 1918年7月迁入，并将午门正楼、雁翅楼及四角亭辟为10个陈列室，东西庑各三间为办公室，东西朝房为储藏室，总计馆舍150余间，文物五万余件。 1924年8月1日在正式对外公开展览。 1926年定名为国立历史博物馆。 1949年10月1日中华人民共和国建国后，改为国立北京历史博物馆，隶属中央人民政府文化部。
<br/>
<br/>
中国革命博物馆的前身为1950年3月成立的中央革命博物馆筹备处。
<br/>
<br/>
1960年8月，北京历史博物馆正式更名为中国历史博物馆，中央革命博物馆正式更名为中国革命博物馆。
<br/>
<br/>
1969年9月，中国革命博物馆和中国历史博物馆合并，称中国革命历史博物馆。
<br/>
<br/>
2003年2月28日两馆再次合并，成立中国国家博物馆。国博当时总面积65,000多平方米，中央部分和两翼的中部是十二根巨型方柱式的门廊。穿过门廊，走进中央大厅，整个建筑分成互相对称的南北两部分。
<br/>
<br/>
中国国家博物馆从2007年1月31日起闭馆进行扩建，设计方案于2007年春节公布。工程于2007年4月开始至2010年3月1日完工，历时3年，投资25亿人民币。建筑面积由6.5万平方公​​尺增加到19.19万平方公尺,使得该馆成为世界上单体建筑面积最大的博物馆，展厅数量为48个，设有“古代中国”、“复兴之路”两个主要的基本陈列，设有十余个各艺术门类的专题展览及国际交流展览。

</p>
<a className="right" target="_blank" rel="noopener noreferrer" href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%8D%9A%E7%89%A9%E9%A6%86#%E6%B2%BF%E9%9D%A9">
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
    <h5>2019/07/31</h5>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/18.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Need to make an appointment 1-5 days in advance on the official account</p>
            <p>

            Official account: 国家博物馆

</p>
            <p>The price of the deposit package is 5RMB/package</p>
        </div>
    </div>


    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/19.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
            <p>Jade Dragon - Hongshan Culture</p>
            <p>The Neolithic Hongshan Culture Jade Dragon is a Neolithic jade (sacrifice ritual vessel), unearthed in 1971 at the Sanxingthala site in Wengniute Banner, Inner Mongolia Autonomous Region.
<br/>
<br/>
The Neolithic Hongshan Culture Jade Dragon is dark green, 26 cm high, intact, curled up in a "C" shape. The muzzle is stretched forward, slightly bent upwards, the mouth is closed tightly, there are symmetrical double nostrils, and the protruding eyes are prismatic, with hyena. The dragon's back has a symmetrical single hole. Most of the dragon's body has no lines, only the forehead and the bottom of the jaw are carved with fine grid patterns, and the grid protrusions are regular small diamonds.
<br/>
<br/>
The Neolithic Hongshan cultural jade dragon was carved from dark green Xiuyan jade. The whole body is smooth and clean, the head is long with kisses and the eyes are trimmed, the mane is flying, and the body is curled like a hook. Vivid in shape and exquisitely carved, it is known as the "Three-Star Tara Red Mountain Cultural Jade Dragon", also known as the "China's First Dragon".</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E6%96%B0%E7%9F%B3%E5%99%A8%E6%97%B6%E4%BB%A3%E7%BA%A2%E5%B1%B1%E6%96%87%E5%8C%96%E7%8E%89%E9%BE%99/23706890?fromtitle=%E7%8E%89%E9%BE%99&fromid=1050781&fr=aladdin">
                <span className="grey-text">[Source From...]</span>
            </a>  
        </div>
    </div>

    <div className="row">
        <div className="col s12 m12 l5">
            <img src="../img8/20.jpg"  alt="" className="responsive-img"></img>
        </div>
        <div className="col s12 m12 l6 offset-l1">
        <p>Four Rams Bronze Square Zun - Late Shang Dynasty</p>
            <p>The Four-Goat Fangzun is a bronze ritual vessel and sacrificial item in the late Shang Dynasty. It was unearthed on the mountainside of Zhuan Erlun in Yueshanpu, Huangcai Town, Ningxiang County, Hunan Province in 1938. It is now the Tanheli site. Collection in the National Museum of China.
<br/>
<br/>
The Four-Goat Fang Zun is the largest of the Shang dynasty bronze Fang Zun still remaining in China. Each side is 52.4 cm long, 58.3 cm high, and weighs 34.5 kg. It has a long neck, high ring feet, a tall neck, and banana leaves on all sides. The center of the statue is the center of gravity of the vessel. The four corners of the statue are each made of a sheep. The four corners of the shoulders are four curly sheep heads. The head and neck of the sheep stick out of the vessel. Attach the leg of lamb to the abdomen and foot ring. At the same time, Fang Zun’s shoulders are decorated with a high-relief snake body and claw-like dragon pattern. The zun’s four sides are in the middle, where the two sheep are adjacent to each other. .
<br/>
<br/>
The Four-Goat Fangzun may have been cast using two separate casting techniques, that is, the horns and the dragon head are cast individually, and then they are placed in the outer range, and then cast as a whole. The whole object was cast in a block method, and it was made in one go. It shows the superb casting level. It is called "the ultimate bronze model" by the historian and ranks among the top ten national treasures.</p>
            <a className="right" target="_blank" rel="noopener noreferrer" href="https://baike.baidu.com/item/%E5%9B%9B%E7%BE%8A%E6%96%B9%E5%B0%8A/617449?fr=aladdin">
                <span className="grey-text">[Source From...]</span>
            </a>  
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
            
                <footer className="page-footer black darken-3">
                <div className="container">
                <div className="row">

                    <div className="flex text-xs-center col l1 m2 s12">
                        {/* <img s alt="" className="responsive-img"></img> */}
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
  
            </section>
         
        )
    }
}







export default travelNoteBeijing;