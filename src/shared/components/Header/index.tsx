import { NavLink, Link } from "react-router-dom";
import { ListHeader } from "./styles";
import { Container } from "styles/container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataHeder } from "../store/action";

const Header = () => {
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
      <ListHeader>
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
                  <div className="logo" >
                     <Link to="/"
                        data-aos="fade-right"
                     // onClick={goToTop}
                     >
                        <img src={REDUXdata?.image_logo} alt="" />
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
                                 <li className={nav.id === 1 ? "header-li active" : "header-li"} key={index}>

                                    <NavLink to={nav.slug} exact
                                       className="header-a"
                                       data-aos="fade-right"
                                       data-aos-delay="200"
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

         <div className="headerBanner">
            <div className="header-menu">
            </div>
            <div className="header-menu-con clearfix">
               <div className="header-about clearfix">
                  <Container>
                     <div className="header-banner-from">
                        <div className="from-menu">
                           <h3 className="from-title" data-aos="fade-right" data-aos-delay="300"
                              data-aos-easing="ease-in-sine">{REDUXdata?.banner?.title}</h3>
                           <p className="from-text" data-aos="fade-right" data-aos-delay="700"
                              data-aos-easing="ease-in-sine">{REDUXdata?.banner?.text}</p>
                           <button className="from-btn" data-aos="fade-right" data-aos-delay="1000"
                              data-aos-easing="ease-in-sine">{REDUXdata?.banner?.button}</button>
                        </div>
                     </div>
                  </Container>
               </div>
            </div>
         </div>
      </ListHeader >
   );
};

export default Header;
