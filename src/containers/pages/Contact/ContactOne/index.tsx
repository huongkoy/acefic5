import { ListContactOne } from "./styles";
import { Container } from "styles/container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataContact } from "containers/pages/store/action";


const ContactOne = () => {

    const REDUXdata = useSelector((state: any) => state.Page.contactReducer);
    // console.log("dataContact", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataContact())
    }, [dispatch])


    return (
        <ListContactOne>
            <div className="banner-menu">
                <Container>
                    <div className="row">
                        <div className="col">
                            <div className="module module-header" data-aos="flip-up">
                                <div className="module-title">
                                    <h2 className="title">{REDUXdata.title}</h2>
                                </div>
                                <div className="module-content">
                                    <Link to="/" className="banner-text active">Trang chủ</Link>
                                    <Link to="/contact" className="banner-text">Liên hệ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </ListContactOne>
    )

}

export default ContactOne;
