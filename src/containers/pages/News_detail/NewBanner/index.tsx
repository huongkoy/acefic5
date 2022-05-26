import { ListNewBanner } from "./styles";
import { Container } from "styles/container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataNewDetail } from "containers/pages/store/action";

const NewBanner = () => {
    const REDUXdata = useSelector((state: any) => state.Page.newDetailDataReducer)
    // console.log(REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataNewDetail())
    }, [])

    return (
        <ListNewBanner>
            <div className="banner-menu">
                <Container>
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="module module-header" data-aos="flip-up" data-aos-delay="300">
                                <div className="module-title">
                                    <h2 className="title">{REDUXdata.title}</h2>
                                </div>
                                <div className="module-content">
                                    <Link to="/" className="banner-text active">Trang chủ</Link>
                                    <Link to="/news" className="banner-text">Tin tức</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </ListNewBanner>
    )
};

export default NewBanner;
