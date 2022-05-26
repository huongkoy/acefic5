import { ListContactPhone } from "./styles";
import { Container } from "styles/container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataContact } from "containers/pages/store/action";

const ContactPhone = () => {
    const REDUXdata = useSelector((state: any) => state.Page.contactReducer);
    // console.log("dataContactPhone", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataContact())
    }, []);

    return (
        <ListContactPhone>
            <Container>
                <div className="module-tt">
                    <div className="row row-center">
                        {REDUXdata?.address?.map((item: any, index: any) => {
                            return (
                                <div className="col-12 col-lg-4 " key={index}>
                                    <div className="tt-menu" data-aos="flip-down" data-aos-delay="600">
                                        <div className="tt-about">
                                            <div className="tt-item clearfix">
                                                <div className="circle">
                                                    <img src={item.image} alt="" className="default_icon" />
                                                    <img src={item.image_hover} alt="" className="hover_icon" />
                                                </div>
                                            </div>
                                            <p className="tt-text">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </ListContactPhone>
    )
}

export default ContactPhone;
