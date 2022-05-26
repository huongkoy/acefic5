import ContactOne from "./ContactOne";
import ContactPhone from "./ContactPhone";
import ContactMap from "./ContactMap";
import HeaderPage from './../../../shared/components/Header_Page';
import Footer from "../../../shared/components/Footer";


const Contact = () => {

    return (
        <div>
            <HeaderPage></HeaderPage>
            <ContactOne></ContactOne>
            <ContactPhone></ContactPhone>
            <ContactMap></ContactMap>
            <Footer></Footer>
        </div>
    )
}

export default Contact;
