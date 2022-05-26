import { Container } from "styles/container";
import { ListNews } from "./styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataNew } from "../store/action";
import { useEffect } from "react";
const News = ({ handScroll }: any) => {
    const onCroolTop = () => {
        handScroll();
    }

    const REDUXdata = useSelector((state: any) => state.HomePage.newDataReduce);
    // console.log(REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataNew())
    }, [])

    return (
        <ListNews>
            <Container>
                <div className="module-news">
                    <div className="news-banner">
                        <div className="module-title">
                            <div className="news-contact">
                                <h2 className="contact-title" data-aos="flip-up">{REDUXdata?.title}</h2>
                                <div className="news-icon1" data-aos="flip-up" data-aos-delay="400">
                                    <div className="news-con">
                                        <img src="images/news-doc.png" alt="" />
                                        <img src="images/square.png" alt="" className="between" />
                                        <img src="images/news-doc.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="module-content">
                            <div className="module-content-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                                data-aos-delay="700">
                                <div className="row justify-content-center">
                                    {REDUXdata?.list_new?.map((item: any, index: any) => {
                                        return (
                                            <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                                <div className="news-menu item">
                                                    <div className="news-img">
                                                        <Link to="/news" onClick={onCroolTop} ><img src={item.image} alt="" /></Link>
                                                    </div>
                                                    <div className="news-about">
                                                        <div className="news-about-item">
                                                            <div className="about-item">
                                                                <div className="news-time">
                                                                    <div className="news-icon">
                                                                        <div className="news-clock">
                                                                            <i className="far fa-clock"></i>
                                                                            <p className="news-time vertical">5. december.2020</p>
                                                                        </div>
                                                                        <div className="news-view">
                                                                            <img src="images/nai.png" alt="" />
                                                                            <p className="news-so">328</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Link to="/news" className="title" onClick={onCroolTop}>{item.title}</Link>
                                                                <div className="news-item">
                                                                    <Link to="/news" className="text-time">Xem thêm</Link>
                                                                    <Link to="/news" className="news-image">
                                                                        <img src={item.img_icon} alt="" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="news-xt">
                                <div className="news-xt-con"> <button className="news-btn" data-aos="flip-up"
                                    data-aos-delay="1000">{REDUXdata?.button}</button>
                                </div>
                            </div>
                        </div>
                        <div className="news-lat" data-aos="flip-down" data-aos-delay="1100">
                            <p className="lat-text">{REDUXdata?.desc}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </ListNews>
    )
};

export default News;
