import Header from 'shared/components/Header';
import SectionAbout from './SectionAbout';
import SectionProject from './SectionProject';
import SectionFields from './SectionFields';
import SectionRecruit from './SectionRecruit';
import SectionNews from './SectionNews';
import SectionPartner from './SectionPartner';
import Footer from 'shared/components/Footer';
// import { useEffect, useState } from 'react';



const HomePage = () => {
  // const [showTopBtn, setShowTopBtn] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 0) {
  //       setShowTopBtn(true);
  //     } else {
  //       setShowTopBtn(false);
  //     }
  //   });
  // }, [showTopBtn]);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <SectionAbout />
      <SectionFields />
      <SectionProject />
      <SectionRecruit />
      <SectionNews handScroll={goToTop} />
      <SectionPartner />
      <Footer />
    </div>
  )
}
export default HomePage;
