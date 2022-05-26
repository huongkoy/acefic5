import { Container } from "styles/container";
import { ListFooter } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataFooter } from "../store/action";
import { Link } from "react-router-dom";
const Footer = () => {

    const REDUXdata = useSelector((state: any) => state.ShareComponent.footerDataReducer);
    // console.log("dataFôter", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataFooter());
    }, [])

    return (
        <ListFooter>
            <Container>
                <div className="footer-menu">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="footer-content">
                                <div className="footer-img clearfix">
                                    <Link to="/" data-aos="fade-down">
                                        <img src={REDUXdata?.image} alt="" />
                                    </Link>
                                </div>
                                <div className="footer-about">
                                    <p className="footer-acefic" data-aos="fade-down" data-aos-delay="300">{REDUXdata?.desc}</p>
                                </div>
                            </div>
                        </div>
                        {REDUXdata?.info_list?.map((item: any, index: any) => {
                            return (
                                <div className="col col-lg-3 col-md-3 col-sm-6 col-12" key={index}>
                                    <div className="footer-item clearfix">
                                        <h3 className="title" data-aos="fade-down" data-aos-delay="700">{item.name}</h3>
                                        {item?.list?.map((i: any, index: any) => {
                                            return (
                                                <a href="a" key={index}>
                                                    <p className="text" data-aos="fade-down" data-aos-delay="900">
                                                        {i}
                                                    </p>
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer-icon">
                        <div className="footer-icon-item">
                            <p className="icon-text clearfix">{REDUXdata?.text}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </ListFooter>
    )
};

export default Footer;
