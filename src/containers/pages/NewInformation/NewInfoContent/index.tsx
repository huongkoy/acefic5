
import { ListNewInfoContent } from './styles';
import { Container } from 'styles/container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataNewInfo } from 'containers/pages/store/action';

const NewInfoContent = () => {

    const REDUXdata = useSelector((state: any) => state.Page.newInfoDataReducer);
    // console.log("dadanewcontent", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataNewInfo());
    }, [])

    return (
        <ListNewInfoContent>
            <Container>
                <div className="index-menu">
                    <div className="row row-lg-15 row-md-15">
                        <div className="col col-lg-9 col-sm-12 col-12">
                            <div className="section-detail">
                                <div className="detail-menu">
                                    <div className="detail-item">
                                        <div className="detail-about">
                                            <h3 className="title" data-aos="flip-up">{REDUXdata?.title_page}</h3>
                                            <div className="detail-icon" data-aos="fade-down" data-aos-delay="300">
                                                <div className="detail-clock">
                                                    <i className="far fa-clock"></i>
                                                    <p className="detail-time vertical">{REDUXdata?.time}</p>
                                                </div>
                                                <div className="detail-view">
                                                    <img src="images/nai.png" alt="" />
                                                    <p className="detail-so">{REDUXdata?.view}</p>
                                                </div>
                                            </div>
                                            <img src={REDUXdata?.image} alt="" data-aos="zoom-in" data-aos-delay="500" />
                                            <div className="detail-text">
                                                {REDUXdata?.desc?.map((item: any, index: any) => {
                                                    // console.log(item);
                                                    return (
                                                        <p className="text" data-aos="fade-down" data-aos-delay="700" key={index}>
                                                            {item.text}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-sm-12 col-12">
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
                                                <h4 className="title" data-aos="flip-up">{REDUXdata?.hotnewsinformation?.title}</h4>
                                                <hr />
                                                <div className="news-about">
                                                    {REDUXdata?.hotnewsinformation?.list_hostnews?.map((item: any, index: any) => {
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
            </Container>
        </ListNewInfoContent>
    )
}

export default NewInfoContent;