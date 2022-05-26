import { ListNewContent } from "./styles";
import { Container } from 'styles/container';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataNewDetail } from "containers/pages/store/action";

const NewContent = ({ handScroll }: { handScroll: any }) => {
    const goToTop = () => {
        handScroll();
    }
    const REDUXdata = useSelector((state: any) => state.Page.newDetailDataReducer)
    // console.log(REDUXdata.news_list);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataNewDetail())
    }, [])

    return (
        <ListNewContent>
            <Container>
                <div className="index-menu">
                    <div className="row row-lg-15 row-md-15">
                        <div className="col col-lg-9 col-sm-12">
                            <div className="section-lorem">
                                <div className="row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        {REDUXdata?.news_list?.map((item: any, index: any) => {
                                            return (
                                                <div className="lorem-menu" key={index}>
                                                    <div className="lorem-item">
                                                        <div className="lorem-img">
                                                            <Link to="/news-detail" data-aos="zoom-in">
                                                                <img src={item.image} alt="" onClick={goToTop} />
                                                            </Link>
                                                        </div>
                                                        <div className="lorem-icon" data-aos="fade-down" data-aos-delay="300">
                                                            <div className="lorem-clock">
                                                                <i className="far fa-clock"></i>
                                                                <p className="lorem-time vertical">{item.time}</p>
                                                            </div>
                                                            <div className="lorem-view">
                                                                <img src="images/nai.png" alt="" />
                                                                <p className="view-so">{item.view}</p>
                                                            </div>
                                                        </div>
                                                        <div className="lorem-title">
                                                            <Link to="/news-detail" className="title" data-aos="fade-down" data-aos-delay="700" onClick={goToTop}>
                                                                {item.title}
                                                            </Link>
                                                            <p className="lorem-text" data-aos="fade-down" data-aos-delay="900">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <Link to="/news-detail">
                                                        <div className="lorem-about" data-aos="zoom-in">
                                                            <div className="about-day">
                                                                <h3 className="lorem-so">25</h3>
                                                                <p className="ja">january</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        {REDUXdata?.news_list?.map((item: any, index: any) => {
                                            return (
                                                <div className="lorem-menu" key={index}>
                                                    <div className="lorem-item">
                                                        <div className="lorem-img">
                                                            <Link to="/news-detail" data-aos="zoom-in" >
                                                                <img src={item.image} alt="" onClick={goToTop} />
                                                            </Link>
                                                        </div>
                                                        <div className="lorem-icon" data-aos="fade-down" data-aos-delay="300">
                                                            <div className="lorem-clock">
                                                                <i className="far fa-clock"></i>
                                                                <p className="lorem-time vertical">{item.time}</p>
                                                            </div>
                                                            <div className="lorem-view">
                                                                <img src="images/nai.png" alt="" />
                                                                <p className="view-so">{item.view}</p>
                                                            </div>
                                                        </div>
                                                        <div className="lorem-title">
                                                            <Link to="/news-detail" className="title" data-aos="fade-down" data-aos-delay="700" onClick={goToTop}>
                                                                {item.title}
                                                            </Link>
                                                            <p className="lorem-text" data-aos="fade-down" data-aos-delay="900">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <Link to="/news-detail">
                                                        <div className="lorem-about" data-aos="zoom-in">
                                                            <div className="about-day">
                                                                <h3 className="lorem-so">25</h3>
                                                                <p className="ja">january</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )

                                        })}
                                    </div>
                                </div>
                                <div className="lorem-page">
                                    <div className="page-menu" data-aos="zoom-in" data-aos-delay="1400">
                                        <a href="a" className="pre">Prew</a>
                                        <a href="a" className="number">1</a>
                                        <a href="a" className="number">2</a>
                                        <a href="a" className="number">3</a>
                                        <a href="a" className="number">60</a>
                                        <a href="a" className="pre">Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-sm-12">
                            <div className="bar">
                                <div className="search" data-aos="zoom-in">
                                    <input type="text" placeholder="Tìm kiếm" className="search-ip" />
                                    <div className="search-item">
                                        <a href="a">
                                            <img src="images/search_img.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="section-news-con">
                                    <div className="news-module">
                                        <div className="news-menu">
                                            <div className="news-title">
                                                <h4 className="title" data-aos="flip-up">{REDUXdata?.hotnews?.title}</h4>
                                                <hr />
                                                <div className="news-about">
                                                    {REDUXdata?.hotnews?.list_hostnews?.map((item: any, index: any) => {
                                                        return (
                                                            <div className="about-item" data-aos="fade-down" data-aos-delay="300" key={index}>
                                                                <img src={item.image} alt="" />
                                                                <div className="news-con">
                                                                    <div className="con-text">
                                                                        <Link to="/news-detail" className="con-text-a">
                                                                            <p className="text">{item.desc}</p>
                                                                        </Link>
                                                                        <i className="far fa-clock"></i>
                                                                        <p className="time">{item.time}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </ListNewContent >
    )
}

export default NewContent;