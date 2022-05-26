
import { ListField } from "./styles";
import { Container } from "styles/container";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataFields } from "../store/action";

const Fields = () => {
    const REDUXdata = useSelector((state: any) => state.HomePage.fieldsDataReduce)
    // console.log("REDUXdata", REDUXdata.list_fields.list_title);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataFields())
    }, [])

    return (
        <div>
            <ListField>
                <Container>
                    <div className="module-activity">
                        <div className="module-title">
                            <div className="activity-title">
                                <h2 className="title" data-aos="fade-right" data-aos-delay="300">{REDUXdata?.title}</h2>
                            </div>
                            <div className="activity-icon" data-aos="fade-right" data-aos-delay="500">
                                <div className="activity-icon1">
                                    <div className="activity-con">
                                        <img src="images/square.png" alt="" className="between" />
                                        <img src="images/news-doc.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="module-content">
                            <div className="row">
                                <div className="col col-lg-5 col-12">
                                    <div className="activity-menu" data-aos="fade-right" data-aos-delay="800">
                                        <div className="activity-item">
                                            {REDUXdata?.list_fields?.map((fiend: any, index: any) => {
                                                return (
                                                    <div className="activity-about" key={index}>
                                                        <div className="activity-about-item1">
                                                            <div className="activi-number">{fiend.id}</div>
                                                            <a href="a" className="tk">{fiend.list_title}</a>
                                                        </div>
                                                        <div className="activity-about-item2">
                                                            <p className="text">{fiend.content}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-7 col-12">
                                    <div className="activity-img" data-aos="flip-down" data-aos-delay="400">
                                        <img src={REDUXdata.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="activity-mar" data-aos="flip-down" data-aos-delay="1100">
                        <p className="mar-text">{REDUXdata.desc}</p>
                    </div>
                </Container>
            </ListField>
        </div>
    )


};

export default Fields;
