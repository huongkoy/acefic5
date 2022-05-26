/* eslint-disable jsx-a11y/iframe-has-title */
import { getDataContact } from "containers/pages/store/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListContactMap } from "./styles";

const ContactMap = () => {
    const REDUXdata = useSelector((state: any) => state.Page.contactReducer.supper);
    // console.log("dataContactMap", REDUXdata);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataContact())
    }, [dispatch]);
    return (
        <ListContactMap>
            <div className="map-content">
                <div className="row ">
                    <div className="col-12 col-lg-7 px-0">
                        <div className="map-menu" data-aos="flip-up">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.602629703322!2d105.7703402!3d21.026657000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1615798852857!5m2!1svi!2s"
                                width="600" height="450" >
                            </iframe>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 px-0">
                        <div className="map-about">
                            <div className="map-tt">
                                <h2 className="title" data-aos="fade-left">{REDUXdata?.title}</h2>
                                <p className="map-text" data-aos="fade-left" data-aos-delay="400">{REDUXdata?.desc}</p>
                                <div className="map-input">
                                    <div className="input1">
                                        <input type="text" name="" id="" placeholder="Họ và tên" className="ip1 clearfix"
                                            data-aos="fade-left" data-aos-delay="700" />
                                        <input type="text" name="" id="" placeholder="Tổ chức" data-aos="fade-left"
                                            data-aos-delay="900" />
                                    </div>
                                    <div className="input1">
                                        <input type="text" name="" id="" placeholder="Email" data-aos="fade-left"
                                            data-aos-delay="1100" />
                                        <input type="text" name="" id="" placeholder="Số điện thoại" data-aos="fade-left"
                                            data-aos-delay="1300" />
                                    </div>
                                    <div className="input2">
                                        <input type="text" name="" id="" placeholder="Nội dung..." className="ip2"
                                            data-aos="fade-left" data-aos-delay="1500" /><br></br>
                                        <button data-aos="fade-left" data-aos-delay="1700">GỬI TIN</button>
                                    </div>
                                </div>
                            </div>
                            <div className="map-menu1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ListContactMap>
    )
};

export default ContactMap;
