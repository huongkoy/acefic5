import styled from "styled-components";

export const ListFooterPage = styled.section`
  margin-top: 0px;
  background-image: url(../images/footer.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding-top: 30px;
  .footer-menu {
    padding-top: 9px;

    .footer-content {
      .footer-img {
        text-align: left;
        img {
          padding-left: 22px;
        }
      }

      .footer-about {
        .footer-acefic {
          margin: 0;
          padding-top: 39px;
          text-align: initial;
          line-height: 25px;
          padding-right: 130px;
          padding-left: -6px;
          padding-left: 13px;
          font-size: 15px;
          margin-left: -8px;
          font-family: "avo_italic";
        }
      }
    }

    .footer-item {
      padding-top: 49px;
      padding-left: 22px;
      text-align: initial;
      .title {
        color: #fff;
        margin: 0px;
        text-decoration: underline;
        padding-bottom: 30px;
        font-family: "OpenSansc- bold";
        font-size: 25px;
      }
      a {
        text-decoration: none;

        .text {
          margin: 0px;
          padding: 8px 0;
          color: #fff;
          font-family: "OpenSansc";

          &:hover {
            color: lawngreen;
          }
        }
      }
      &.item2 {
        padding-left: 5px;
      }
    }
  }

  .footer-icon {
    padding: 23px 0px;

    .footer-icon-item {
      background: #1d407d;

      .icon-text {
        margin: 0px;
        padding: 22px 0 20px 15px;
        font-family: "OpenSansc";
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .footer-menu {
      .footer-ietm {
        .title {
          font-size: 20px;
        }
        .text {
          font-size: 13px;
        }
      }
      .footer-content {
        .footer-about {
          .footer-acefic {
            margin: 0 0 0 -8px;
            padding-top: 39px;
            text-align: initial;
            line-height: 26px;
            padding-right: 95px;
            padding-left: 0;
            font-size: 13px;
          }
        }
      }

      .footer-item {
        padding-left: 0px;
        .title {
          font-size: 23px;
        }
        .text {
          font-size: 14px;
        }
      }
    }

    .footer-icon {
      .footer-icon-item {
        .icon-text {
          padding: 15px 0 15px 0px;
          font-size: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .footer-menu {
      .footer-item {
        padding-left: 0px;
        padding-top: 70px;
        .title {
          font-size: 20px;
        }

        .text {
          font-size: 13px;
        }
      }
      .footer-content {
        .footer-img {
          img {
            padding-left: 0px;
          }
        }
        .footer-about {
          .footer-acefic {
            margin: 0 0 0 -8px;
            padding-top: 39px;
            text-align: initial;
            line-height: 26px;
            padding-right: 45px;
            padding-left: 0;
            font-size: 13px;
            text-align: justify;
          }
        }
      }
    }

    .footer-icon {
      .footer-icon-item {
        .icon-text {
          padding: 15px 0 15px 0px;
          font-size: 13px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    .footer-menu {
      .footer-img {
        img {
          max-width: 100%;
          padding-left: 0px;
        }
      }
      .footer-content {
        .footer-about {
          .footer-acefic {
            margin: 0 0 0 -8px;
            padding-top: 39px;
            text-align: initial;
            line-height: 26px;
            padding-right: 0px;
            padding-left: 0;
            padding: 25px 15px;
            font-size: 13px;
            text-align: justify;
          }
        }
      }
      .footer-item {
        padding-left: 0px;
        padding-top: 25px;
        .title {
          font-size: 23px;
        }
        .text {
          font-size: 14px;
        }
      }
    }

    .footer-icon {
      .footer-icon-item {
        .icon-text {
          padding: 15px 20px 15px 20px;
          font-size: 13px;
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .footer-menu {
      .footer-content {
        .footer-about {
          .footer-acefic {
            margin: 0 0 0 -8px;
            padding-top: 39px;
            text-align: initial;
            line-height: 26px;
            padding-right: 0px;
            padding-left: 0;
            padding: 25px 15px;
            font-size: 13px;
            text-align: justify;
          }
        }
      }

      .footer-item {
        padding-left: 10px;
        padding-top: 30px;

        .title {
          font-size: 23px;
        }

        .text {
          font-size: 13px;
        }
      }
    }

    .footer-icon {
      .footer-icon-item {
        .icon-text {
          padding: 15px 20px 15px 20px;
          font-size: 13px;
          overflow: auto;
        }
      }
    }
  }
`;
