import { Container } from "styles/container";
import { ListPartner } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataPartner } from "containers/HomePage/store/action";

const Partner = () => {
    const REDUXdata = useSelector((state: any) => state.HomePage.partnerDataReduce);
    // console.log(REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataPartner());
    }, [])

    return (
        <ListPartner>
            <Container>
                <div className="module-dt">
                    <div className="module-content" data-aos="flip-down">
                        <div className="dt-menu">
                            <div className="dt-menu-con">
                                <div className="dt-item">
                                    <div className="dt-about">
                                        <h4 className="dt-title">{REDUXdata?.title}</h4>
                                        <div className="dt-img">
                                            {REDUXdata?.list_partner?.map((item: any, index: any) => {
                                                return (
                                                    <a href="a" className="dt-logo" key={index}>
                                                        <img src={item} alt="" />
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ListPartner>
    )
};

export default Partner;
