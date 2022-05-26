import { ListAbout } from "./styles";
import { Container } from "styles/container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataAbout } from "../store/action";
const About = () => {
    const REDUXdata = useSelector((state: any) => state.HomePage.aboutDataReduce);
    // console.log("dataABOUT", REDUXdata)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataAbout());
    }, [dispatch]);

    return (
        <>
            <ListAbout>
                <Container>
                    <div className="module-ipad">
                        <div className="module-content">
                            <div className="ipad-menu">
                                <div className="row">
                                    <div className="col col-lg-7 col-md-7  order-md-1 order-2">
                                        <div className="ipad-img">
                                            <div className="ipad-menu-con" data-aos="zoom-in">
                                                <img src={REDUXdata?.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5  order-md-2 order-1 ">
                                        <div className="ipad-about">
                                            <div className="ipad-item">
                                                <h2 className="title" data-aos="fade-left" data-aos-delay="200">{REDUXdata?.title}</h2>
                                                <div className="ipad-icon">
                                                    <div className="ipad-icon1">
                                                        <div className="ipad-con" data-aos="fade-left" data-aos-delay="400">
                                                            <img src="images/square.png" alt="" className="between" />
                                                            <img src="images/news-doc.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <p className="ipad-text" data-aos="fade-left" data-aos-delay="600">
                                                        {REDUXdata?.text}
                                                    </p>
                                                    <button className="ipad-xt" data-aos="fade-left" data-aos-delay="800">{REDUXdata?.button}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ipad-us" data-aos="flip-down" data-aos-delay="1100">
                                    <p className="us-text">{REDUXdata?.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </ListAbout>
        </>
    )
};

export default About;
