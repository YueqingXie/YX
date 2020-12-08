import React, { Component } from 'react';
import Footer from '../layout/Footer';




class calligraphyCN extends Component {
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
    <li><a href="/calligraphy" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/calligraphy" className="sidenavtext">ENG</a></li>

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
                    <li className="tab col s2">
                    <a href="#kaishu" className=" black-text">楷书</a>
                    </li>
                    <li className="tab col s2">
                    <a href="#lishu" className="black-text">隶书</a>
                    </li>

                    <li className="tab col s2">
                    <a href="#xingshu" className="black-text">行书</a>
                    </li>
                    <li className="tab col s2">
                    <a href="#zhuanshu" className="black-text">篆书</a>
                    </li>
                    <li className="tab col s2">
                    <a href="#caoshu" className="active black-text">草书</a>
                    </li>

                    <li className="tab col s2">
                    <a href="#qitaziti" className="black-text">其他</a>
                    </li>

                </ul>
                </div>
            </div>
            </div>
            </section>


            <section className="container section" id="kaishu">
            <h4 className="title modal-trigger" href="#modal1">楷书</h4>
            <div id="modal1" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">楷书</h4>
                            <p>楷书，字体名，也叫正楷、真书、正书、小楷。由隶书逐渐演变而来，更趋简化，横平竖直。《辞海》书中解释说它“形体方正，笔画平直，可作楷模”。这种汉字字体端正，就是现代通行的汉字手写正体字。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E6%A5%B7%E4%B9%A6/482941?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>  

                        <div id="kaishuContent">
                            <div className="kaishuContent1">
                                <img src="../imgcalligraphy/39.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="kaishuContent2">
                                <img src="../imgcalligraphy/40.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="kaishuContent3">
                                <img src="../imgcalligraphy/41.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                        </div>

            </section>   

            <section className="container section" id="lishu">
            <h4 className="title modal-trigger" href="#modal2">隶书</h4>
            <div id="modal2" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">隶书</h4>
                            <p>隶书，有秦隶、汉隶等，一般认为由篆书发展而来，字形多呈宽扁，横画长而竖画短，讲究“蚕头燕尾”、“一波三折”。
                            <br/><br/>
根据出土简牍，隶书始创于秦朝，传说程邈作隶，汉隶在东汉时期达到顶峰，上承篆书传统，下开魏晋、南北朝，对后世书法有不可小觑的影响，书法界有“汉隶唐楷”之称。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E9%9A%B6%E4%B9%A6/835864?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/42.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/43.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/44.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/45.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

                        
            </section>   

            <section className="container section" id="xingshu">
            <h4 className="title modal-trigger" href="#modal4">行书</h4>
            <div id="modal4" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">行书</h4>
                            <p>行书，是一种书法统称，分为行楷和行草两种。它在楷书的基础上发展起源的，是介于楷书、草书之间的一种字体，是为了弥补楷书的书写速度太慢和草书的难于辨认而产生的。
                            <br/><br/>
                            “行”是“行走”的意思，因此它不像草书那样潦草，也不像楷书那样端正。实质上它是楷书的草化或草书的楷化。楷法多于草法的叫“行楷”，草法多于楷法的叫“行草”。行书实用性和艺术性皆高，而楷书是文字符号，实用性高且见功夫；相比较而言，草书则是艺术性高，但是实用性显得相对不足。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E8%A1%8C%E4%B9%A6/472950?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/1.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/2.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/3.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/4.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/5.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/6.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/7.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/8.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/9.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/10.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/11.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/12.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/13.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/14.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/15.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/16.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/17.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/18.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/19.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/20.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../imgcalligraphy/21.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/22.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/23.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
            <img src="../imgcalligraphy/24.jpg" alt="" className="responsive-img materialboxed"/>
                {/* <span className="card-title">国家大剧院</span> */}
            </div>
            </div>
        </div>
        </div>


            </section>   

            <section className="container section" id="zhuanshu">
            <h4 className="title modal-trigger" href="#modal5">篆书</h4>
            <div id="modal5" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">篆书</h4>
                            <p>篆书是大篆、小篆的统称。大篆指金文、籀文、六国文字，其保存着古代象形文字的明显特点。小篆也称“秦篆”，是秦国的通用文字、大篆的简化字体，其特点是形体均匀齐整、字体较籀文容易书写。其笔法瘦劲挺拔，曲线较多，直线较少，起笔有方笔、圆笔，也有尖笔，收笔“悬针”较多。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E7%AF%86%E4%B9%A6/890743?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <div id="zhuanshuContent">
                            <div className="zhuanshuContent1">
                                <img src="../imgcalligraphy/25.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent2">
                                <img src="../imgcalligraphy/26.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent3">
                                <img src="../imgcalligraphy/27.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent4">
                                <img src="../imgcalligraphy/28.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent5">
                                <img src="../imgcalligraphy/29.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent6">
                                <img src="../imgcalligraphy/30.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent7">
                                <img src="../imgcalligraphy/31.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="zhuanshuContent8">
                                <img src="../imgcalligraphy/32.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                        </div>


            </section>   

            <section className="container section" id="caoshu">
            <h4 className="title modal-trigger" href="#modal6">草书</h4>
            <div id="modal6" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">草书</h4>
                            <p>草书发展可分为早期草书、章草和今草三大阶段。
                            <br/><br/>
早期草书是跟隶书平行的书体，一般称为隶草，实际上夹杂了一些篆草的形体。
<br/><br/>
初期的草书，打破隶书方整规矩严谨，是一种草率的写法。称为“章草”。章草是早期限草书和汉隶相融的雅化草体，波挑鲜明，笔画钩连呈“波”形，字字独立，字形遍方，笔带横势 。章草在汉魏之际最为盛行，后至元朝方复兴，蜕变于明朝。
<br/><br/>
汉末，章草进一步“草化”，脱去隶书笔画行迹，上下字之间笔势牵连相通，偏旁部首也做了简化和互借，称为“今草”。今草，是章草去尽波挑而演变成的，今草书体自魏晋后盛行不衰。到了唐代，今草写的更加放纵，笔势连绵环绕，字形奇 变百出，称为“狂草”，亦名大草。
<br/><br/>
到了今天，草书的审美价值远远超越了其实用价值。 草书是按一定规律将字的点划连字，结构简省，偏旁假借，并不是随心所欲的乱写。草书符号的 主要特征之一是笔画带钩连，包括上下钩连和左右钩连。隶化笔法的横势倾向，为左右钩连的草化提供了依据。章草笔法用“一”形，今草笔法用“s”形。这是两者的根本区别。运笔放纵、点画狼藉的又称大草或狂草。
</p>
                            <a className="right" href="https://www.google.ca/maps/place/National+Centre+for+the+Performing+Arts/@39.904799,116.3874825,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0528e22e7a273:0x8b74ec5b2f1aaa87!8m2!3d39.904799!4d116.3896712">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/36.jpg" width="420" height="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《题都城南庄》 - 崔护[唐]</p>
                                    
                                    <p className="center">去年今日此门中，人面桃花相映红。
                                    <br/>人面不知何处去，桃花依旧笑春风。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
去年春天，在这户人家里，我看见那美丽的脸庞和桃花互相衬托，显得分外红润。今日再来此地，姑娘不知去向何处，只有桃花依旧，含笑怒放春风之中。</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/34.jpg" width="420" height="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《再下第》 - 孟郊[唐]</p>
                                    
                                    <p className="center">一夕九起嗟，梦短不到家。
                                    <br/>
                                    两度长安陌，空将泪见花。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                一夜睡不好，多次醒来长叹，每次做梦都太短，来不及梦到回家就醒了，内心既幽愤又思乡，还有愧对父老的深深自责.两度赴京考试都落第，只好泪流满面地面对长安花景，辜负这帝都春色与大好年华。</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/35.jpg" width="420" height="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《逢雪宿芙蓉山主人》 - 刘长卿[唐]</p>
                                    
                                    <p className="center">日暮苍山远，天寒白屋贫。
                                    <br/>
柴门闻犬吠，风雪夜归人。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                当暮色降临山苍茫的时候就越来越觉得路途遥远，当天气越寒冷茅草屋显得更加孤零零。
柴门外忽传来犬吠声声，原来是有人冒着风雪归家门。</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/37.jpg" width="420" height="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《寻隐者不遇 / 孙革访羊尊师诗》 - 贾岛[唐]</p>
                                    
                                    <p className="center">松下问童子，言师采药去。
                                    <br/>
只在此山中，云深不知处。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                苍松下询问年少的学童，他说他的师傅已经去山中采药了。
只知道就在这座大山里，可山中云雾缭绕不知道他的行踪。</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/38.jpg" width="420" height="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《送别》 - 王维[唐]</p>
                                    
                                    <p className="center">下马饮君酒，问君何所之。君言不得意，归卧南山陲。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                请你下马来喝一杯酒，敢问朋友你要去何方？
你说因为生活不得意，回乡隐居在终南山旁。
只管去吧我何须再问，看那白云正无边飘荡。</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/33.jpg" width="420"  alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《雪谤后逢李叔度》- 卢纶[唐]</p>
                                    
                                    <p className="center">相逢空握手，往事不堪思。
                                    <br/>
                                    见少情难尽，愁深语自迟。
                                    <br/>
                                    草生分路处，雨散出山时。
                                    <br/>
                                    强得宽离恨，唯当说后期。</p>
                                </div>

                                <br/>
                                
                            </div>
                        </div>

                    
                        

            </section>   

            <section className="container section" id="qitaziti">
            <h4 className="title modal-trigger" href="#modal3">行楷</h4>
            <div id="modal3" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">行楷</h4>
                            <p>行楷，也称“汉字行楷手写体字形”，是偏重于楷书书写笔法（法则），比楷书行笔自由，又比行草规正的行书字体。或曰：是汉字在楷书基础上简约书写笔画、增强书写映带。
<br/><br/>
表现书写意趣以适当加快书写速度的，少量改变书写笔顺，且具较强易识、易学特征的实用性手写体字体。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E8%A1%8C%E6%A5%B7/9415199?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/46.jpg" width="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《鹿柴》 - 王维[唐]</p>
                                    
                                    <p className="center">空山不见人，但闻人语响。
                                    <br/>
返景入深林，复照青苔上。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                诗中描写了鹿柴附近空山深林傍晚时幽静的景色。采用反衬手法，来突现诗的意境。空山万籁俱寂，偶尔传来人语声; 闻人声，却不见人迹，极言林深树茂。暂时的 “人声”更加突出了山林长久的空寂。此时一抹余辉射入林中，斑驳的树影落在树下的青苔上，小片的光影与大片的天边的幽暗形成强烈对比，令人更觉深林的幽暗。</p>
                            </div>
                        </div>



                        <h4 className="title modal-trigger" href="#modal7">魏碑</h4>
            <div id="modal7" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">魏碑</h4>
                            <p>魏碑是我国南北朝时期（公元420-588年）北朝文字刻石的通称，以北魏为最精，大体可分为碑刻、墓志、造像题记和摩崖刻石四种。此时书法是一种承前启后、继往开来的过渡性书法体系，钟致帅称魏碑“上可窥汉秦旧范，下能察隋唐习风。”魏碑书法对后来的隋和唐楷书体的形成产生了巨大影响。历代书家在创新变革中也多从其中汲取有益的精髓。
                            <br/><br/>
魏碑风格多样，朴拙险峻，舒畅流丽。极有名的如《郑文公碑》《张猛龙碑》《高贞碑》《元怀墓志》及《张玄墓志》，已开隋、唐楷书法则的先河。清代中期倡导“尊碑抑帖”，冲破“馆阁体”的束缚，碑学兴起，书风为之一变。魏碑上承汉隶传统，下启唐楷新风，为现代汉字的结体、笔法奠定了坚实的基础。但有许多摩崖石刻，并不是先行书丹上石，而是直接在石面上雕凿的，临写时要注意不使刀痕夸张，免生习气。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E9%AD%8F%E7%A2%91/7187676?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/47.jpg" width="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《渡汉江》 - 宋之问[唐]</p>
                                    
                                    <p className="center">岭外音书断，经冬复历春。
                                    <br/>
近乡情更怯，不敢问来人。</p>
                                </div>

                                <br/>
                                <p>译文
                                <br/>
                                客居岭外与家里音信断绝，

经过了冬天又到了春天。

离故乡越近心中越胆怯，

不敢询问遇到的家乡来人。</p>
                            </div>
                        </div>


                        <h4 className="title modal-trigger" href="#modal8">小楷</h4>
            <div id="modal8" className="modal modal-fixed-footer">
                            <div className="modal-content">
                            <h4 className="title">小楷</h4>
                            <p>小楷，顾名思义，是楷书之小者，创始于三国魏时的钟繇，他原是位隶书最杰出的权威大家，所作楷书的笔意，亦脱胎于汉隶，笔势恍如飞鸿戏海，极生动之致，惟结体宽扁，横画长而直画短，仍存隶分的遗意，然已备尽楷法，实为正书之祖。到了东晋，王羲之将小楷书法加以悉心钻研，使之达到了尽善尽美的境界，亦奠立了中国小楷书法优美的欣赏标准。</p>
                            <a className="right" href="https://baike.baidu.com/item/%E5%B0%8F%E6%A5%B7/8566047?fr=aladdin">
                                <span className="blue-text">[Source From...]</span>
                            </a> 
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Close</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../imgcalligraphy/48.jpg" width="420" alt="" className="responsive-img materialboxed"></img>
                            </div>
                            <div className="col s12 m12 l6 offset-l1">
                                <div className="gushi">
                                    <p className="center">《游包山集》 - 王宠</p>
                                    
                                    <p className="center"></p>
                                </div>

                                <br/>
                            </div>
                        </div>


            </section>   
<Footer/>
            </body>
        )
    }
}




export default calligraphyCN;
