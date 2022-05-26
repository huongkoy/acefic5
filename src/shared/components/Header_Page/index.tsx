import { NavLink, Link } from "react-router-dom";
import { Container } from "styles/container";
import { ListHeaderPage } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataHeder } from "../store/action";

const HeaderPage = () => {
    const openSibebar = () => {
        const showNav: any = document.querySelector(".menu");
        showNav.classList.toggle("active");
    }

    const closeSidebar = () => {
        const closeNav: any = document.querySelector(".menu");
        closeNav.classList.toggle("active");
    }

    const REDUXdata = useSelector((state: any) => state.ShareComponent.headerDataReducer)
    // console.log("DATAHEADER", REDUXdata);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataHeder())
    }, [dispatch])


    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <ListHeaderPage>
            <div className="headerTop">
                <Container>
                    <div className="top-content clearfix">
                        <div className="header-social">
                            <div className="header-phone">
                                <img src="images/phone.png" alt="" />
                                <p className="phone-text">{REDUXdata.hottel}</p>
                            </div>
                        </div>
                        <div className="header-conect">
                            <span className="show__top" title="menu top">
                                <i className="far fa-caret-square-down"></i>
                            </span>
                            <div className="menu-top">
                                <div className="menu-item clearfix">
                                    <li>
                                        <div className="menu-about">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Search..."
                                            />
                                            <a href="aa">
                                                <i className="fas fa-search"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="menu-nation">
                                            <div className="nation-about">
                                                <div className="nation-item">
                                                    <img src="images/co.png" alt="" />
                                                    <select name="" id="">
                                                        <option value="">
                                                        </option>
                                                        <option value=""> </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={showTopBtn ? "headerNav sticky" : "headerNav"}>
                <Container>
                    <div className="nav-content clearfix">
                        <div className="logo">
                            <Link to="/">
                                <img src={REDUXdata.image_logo} alt="" />
                            </Link>
                        </div>
                        <div className="nav">
                            <span className="show__menu">
                                <i className="fas fa-bars" onClick={openSibebar}></i>
                            </span>
                            <div className="menu">
                                <span className="close__menu" >
                                    <i className="far fa-window-close" onClick={closeSidebar}></i>
                                </span>
                                <ul className="header-ul">
                                    {REDUXdata?.navs?.map((nav: any, index: any) => {
                                        return (
                                            < li className="header-li " key={index}>
                                                <NavLink
                                                    to={nav.slug}
                                                    exact className="header-a"
                                                    onClick={goToTop}
                                                >
                                                    {nav.navname}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </ListHeaderPage >
    )
}

export default HeaderPage;