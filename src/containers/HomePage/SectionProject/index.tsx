import { Container } from "styles/container";
import { ListProject } from "./styles";
import MyModal from "shared/components/MyModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCategory, getDataProject } from "../store/action";
import "antd/dist/antd.css";
import Slider from "react-slick";

const Project = () => {
    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <img
                src="images/project-img1.png" alt=""
                className={className}
                style={{ ...style, display: "block", borderRadius: "15px", width: "40px", height: "40px", position: "absolute", top: "0px", right: "0px", zIndex: "9999" }}
                onClick={onClick}
            />
        );
    }
    const SamplePrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <img
                src="images/project-img.png" alt=""
                className={className}
                style={{ ...style, display: "block", borderRadius: "15px", width: "40px", height: "40px", position: "absolute", top: "0px", left: "90%", zIndex: "9999" }}
                onClick={onClick}
            />
        );
    }
    const [tab, setTab] = useState(1);
    const REDUXdata = useSelector((state: any) => state.HomePage.projectDataReduce);
    // console.log("Project", REDUXdata.projectItem);
    const REDUXcate = useSelector((state: any) => state.HomePage.categoryDataReduce);
    const dataCate = Array.from(REDUXcate);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataProject(tab));
        dispatch(getDataCategory());
    }, [dispatch, tab]);

    const result = REDUXdata?.projectItem?.filter((item: any) => {
        if (tab === 1) return true;
        return item.type === tab;
    })
    // console.log(result);

    // let new_arr: any[] = [];
    // if (result?.length > 0) {
    //     new_arr = new Array(Math.ceil(result.length / 6)).fill([]);
    //     console.log("new_arr: " + new_arr);
    //     // result?.forEach((element: any, index: number) => {
    //     //     return
    //     // });
    //     for (let index = 0; index < result.length; index++) {
    //         const element = result[index];
    //         new_arr[Math.floor(index / 6)] = [...new_arr[Math.floor(index / 6)], element]
    //     }
    //     console.log("new_arr: ", new_arr);
    // }


    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        speed: 500,
        rows: 2,
        slidesPerRow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },


            {
                breakpoint: 550,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    };


    return (

        <ListProject>
            <Container>
                <div className="module-project">
                    <div className="module-title">
                        <h4 className="title-project" data-aos="fade-right">
                            {REDUXdata?.title}
                        </h4>
                    </div>

                    <div className="module-content">
                        <div className="row">
                            <div className="col col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div className="project-menu">
                                    <h2 className="title" data-aos="fade-right">{REDUXdata?.title_big}</h2>
                                    <div className="project-circle">
                                        <div className="project-icon-con" data-aos="fade-right">
                                            <div className="project-con">
                                                <img src="images/square.png" alt="" className="between" />
                                                <img src="images/news-doc.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-control" data-aos="fade-right" data-aos-delay="450">
                                        <ul className="project-nav tab">
                                            {dataCate?.map((item: any, index: any) => {
                                                return (
                                                    <li className={`project-a ${tab === index + 1 ? "active" : ""}`}
                                                        onClick={() => (setTab(index + 1))}
                                                        key={index}
                                                    >
                                                        {item.name}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-9">
                                <div className="project-about-con1">
                                    <div className="project-about-con" data-aos="zoom-in-up">
                                        <div className="project-item2" >
                                            <Slider {...settings}>
                                                {result?.map((item: any, index: any) => {
                                                    return (
                                                        <div className="project-image active" key={index}>
                                                            <div className="project-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="project-about">
                                                                <div className="project-about-new">
                                                                    <div className="project-about-con2">
                                                                        <h4 className="about-title">{item.name}
                                                                        </h4>
                                                                        <p className="about-text">{item.text}</p>
                                                                    </div>
                                                                    <div className="project-icon1">
                                                                        <MyModal />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-pro" data-aos="flip-down">
                    <p className="pro-text">{REDUXdata?.desc_text}</p>
                </div>
            </Container>
        </ListProject >
    )
};

export default Project;



