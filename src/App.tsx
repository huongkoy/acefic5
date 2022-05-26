import React from 'react';
import HomePage from './containers/HomePage';
import Contact from './containers/pages/Contact';
import NewsDetail from './containers/pages/News_detail';
import NewInformation from './containers/pages/NewInformation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/fonts.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  AOS.init({
    once: true,
  });
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact ><HomePage /></Route>
          <Route path="/news"> <NewsDetail /> </Route>
          <Route path="/news-detail"> <NewInformation /> </Route>
          <Route path="/contact"> <Contact /> </Route>
        </Switch>
      </Router>
      {/* <GlobalStyle />  */}
    </>
  )
}
export default App;
