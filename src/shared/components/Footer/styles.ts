import styled from "styled-components";

export const ListFooter = styled.section`
  margin-top: -65px;
  background: #17305c;
  z-index: 0;

  .footer-menu {
    padding-top: 80px;

    .footer-content {
      .footer-img {
        img {
          max-width: 100%;
          float: left;
          padding-left: 37px;
        }
      }

      .footer-about {
        .footer-acefic {
          margin: 0px;
          padding-top: 20px;
          text-align: initial;
          font-family: "avo_italic";
          line-height: 25px;
          color: #fff;
        }
      }
    }

    .footer-item {
      padding-top: 27px;
      padding-left: 38px;
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
          padding: 10px 0;
          color: #fff;
          font-family: "OpenSansc";

          &:hover {
            color: lawngreen;
          }
        }
      }
    }

    .footer-icon {
      padding: 28px 0px 50px;
      .icon-text {
        float: left;
        color: #fff;
        padding-bottom: 20px;
        padding-left: 23px;
        font-size: 15.2px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-menu {
      .footer-content {
        .footer-about {
          .footer-acefic {
            margin: 0;
            padding-top: 18px;
            text-align: initial;
            line-height: 21px;
            padding-right: 128px;
            padding-left: 21px;
            font-size: 13px;
          }
        }
      }

      .footer-item {
        &.item {
          padding: 27px 0 0 23px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .footer-menu {
      .footer-item {
        .title {
          font-size: 23px;
        }

        .text {
          font-size: 13px;
        }
      }

      .footer-content {
        .footer-img {
          img {
            padding-left: 15px;
          }
        }

        .footer-about {
          .footer-acefic {
            padding-top: 15px;
            line-height: 25px;
            padding-right: 50px;
            font-size: 14px;
            text-align: justify;
          }
        }
      }

      .footer-icon {
        .icon-text {
          padding-left: 0px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .footer-menu {
      .footer-item {
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
            padding-top: 15px;
            line-height: 25px;
            padding-right: 50px;
            font-size: 13px;
            text-align: justify;
          }
        }
      }

      .footer-icon {
        .icon-text {
          padding-left: 0px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    .footer-menu {
      .footer-item {
        padding-left: 0px;

        .title {
          font-size: 23px;
        }

        .text {
          font-size: 14px;
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
            line-height: 25px;
            padding: 15px 15px;
            font-size: 14px;
            text-align: justify;
          }
        }
      }

      .footer-icon {
        padding: 30px 15px 48px;

        .icon-text {
          padding-left: 0px;
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .footer-menu {
      .footer-item {
        padding-left: 10px;

        .title {
          font-size: 23px;
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
            line-height: 25px;
            padding: 15px 15px;
            font-size: 13px;
            text-align: justify;
          }
        }
      }

      .footer-icon {
        padding: 30px 10px 48px;

        .icon-text {
          padding-left: 0px;
        }
      }
    }
  }
`;
