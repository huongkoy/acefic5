import { ListRecruit } from "./styles";
import { Container } from "styles/container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataRecruit } from "../store/action";

const Recruit = () => {
    const REDUXdata = useSelector((state: any) => state.HomePage.recruitDataReduce);
    // console.log("Recruit", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataRecruit());
    }, []);
    return (
        <div>
            <ListRecruit>
                <Container>
                    <div className="module-td">
                        <div className="module-content">
                            <div className="td-menu">
                                <div className="row">
                                    <div className="col-12 col-lg-6 order-lg-1 order-2">
                                        <div className="td-img" data-aos="zoom-in">
                                            <img src={REDUXdata?.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 order-lg-2 order-1">
                                        <div className="about-td">
                                            <div className="td-item">
                                                <h2 className="title" data-aos="fade-left">{REDUXdata?.title}</h2>
                                                <div className="td-icon">
                                                    <div className="td-con" data-aos="fade-left" data-aos-delay="500">
                                                        <div className="td-con1">
                                                            <img src="images/square.png" alt="" className="between" />
                                                            <img src="images/news-doc.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="text" data-aos="fade-left" data-aos-delay="700">{REDUXdata?.text}</p>
                                                    <button className="nd" data-aos="fade-left" data-aos-delay="900">{REDUXdata?.button} </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="td-banner" data-aos="flip-down" data-aos-delay="1100">
                                    <p className="recr-text">{REDUXdata.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </ListRecruit>
        </div>
    )

};

export default Recruit;
