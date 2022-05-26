
import NewBanner from './NewBanner';
import NewContent from './NewContent';
import HeaderPage from 'shared/components/Header_Page';
import FooterPgae from 'shared/components/Footer_Page';
import { useEffect, useState } from 'react';
const NewsDetail = () => {
    // const [showTopBtn, setShowTopBtn] = useState(false);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 0) {
    //             setShowTopBtn(true);
    //         } else {
    //             setShowTopBtn(false);
    //         }
    //     });
    // }, [showTopBtn]);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <HeaderPage />
            <NewBanner />
            <NewContent handScroll={goToTop} />
            <FooterPgae />
        </div>
    )
};

export default NewsDetail;
