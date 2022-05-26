import NewInfoBanner from "./NewInfoBanner";
import NewInfoContent from "./NewInfoContent";
import HeaderPage from './../../../shared/components/Header_Page';
import FooterPage from "../../../shared/components/Footer_Page";


const NewInformation = () => {
    return (
        <div>
            <HeaderPage></HeaderPage>
            <NewInfoBanner />
            <NewInfoContent />
            <FooterPage></FooterPage>
        </div>
    )
};

export default NewInformation;
