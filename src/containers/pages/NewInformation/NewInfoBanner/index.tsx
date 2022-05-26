import { ListNewInformation } from './styles';
import { Container } from 'styles/container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDataNewInfo } from 'containers/pages/store/action';

const NewInfoBanner = () => {

    const REDUXdata = useSelector((state: any) => state.Page.newInfoDataReducer)
    // console.log(REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataNewInfo())
    }, [])

    return (
        <ListNewInformation>
            <div className="banner-menu">
                <Container>
                    <div className="module module-header" data-aos="flip-up" data-aos-delay="300">
                        <div className="module-title">
                            <h2 className="title">{REDUXdata.title_menu}</h2>
                        </div>
                        <div className="module-content">
                            <Link to="/" className="banner-text active">Trang chủ</Link>
                            <Link to="/news" className="banner-text">Tin tức</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </ListNewInformation>
    )
}

export default NewInfoBanner;