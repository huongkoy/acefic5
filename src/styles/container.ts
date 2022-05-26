import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1200px) {
    max-width: 1170px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    max-width: 970px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    max-width: 750px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  @media screen and (max-width: 479px) {
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }
`;
