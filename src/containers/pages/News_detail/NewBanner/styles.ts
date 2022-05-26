import styled from "styled-components";

export const ListNewBanner = styled.section`
  background: #eff3fa;
  text-align: center;
  /* box-shadow: 0px 0px 30px rgb(29 64 125 / 20%); */
  .banner-menu {
    padding: 47px 0 37px;

    .module-header {
      // padding-top: 40px;

      .module-title {
        .title {
          margin: 0px;
          color: #1d407d;
          font-family: "OpenSansc- bold";
          padding-bottom: 10px;
          font-size: 26px;
          padding-left: 7px;
        }
      }

      .module-content {
        display: inline-flex;

        .banner-text {
          text-decoration: none;
          color: #1d407d;
          font-weight: bold;
          font-size: 15px;
          margin: 0px;
        }

        .active {
          &::after {
            content: "/";
            padding: 0 2px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .banner-menu {
      .module-header {
        .module-content {
          padding-left: 3px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    background: #eff3fa;
    text-align: center;

    .banner-menu {
      padding: 40px 0;

      .module-header {
        // padding-top: 40px;

        .module-title {
          .title {
            margin: 0px;
            color: #1d407d;
            font-weight: bold;
            padding-bottom: 10px;
            font-size: 26px;
          }
        }

        .module-content {
          display: inline-flex;

          .banner-text {
            color: #1d407d;
            font-weight: bold;
            font-size: 15px;
            margin: 0px;
          }

          .active {
            &::after {
              content: "/";
              padding: 0 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    background: #eff3fa;
    text-align: center;

    .banner-menu {
      padding: 30px 0;

      .module-header {
        // padding-top: 40px;

        .module-title {
          .title {
            margin: 0px;
            color: #1d407d;
            font-weight: bold;
            padding-bottom: 5px;
            font-size: 23px;
          }
        }

        .module-content {
          display: inline-flex;

          .banner-text {
            color: #1d407d;
            font-weight: bold;
            font-size: 14px;
            margin: 0px;
          }

          .active {
            &::after {
              content: "/";
              padding: 0 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    background: #eff3fa;
    text-align: center;

    .banner-menu {
      padding: 30px 0;

      .module-header {
        // padding-top: 40px;

        .module-title {
          .title {
            margin: 0px;
            color: #1d407d;
            font-weight: bold;
            padding-bottom: 0px;
            font-size: 22px;
          }
        }

        .module-content {
          display: inline-flex;

          .banner-text {
            color: #1d407d;
            font-weight: bold;
            font-size: 14px;
            margin: 0px;
          }

          .active {
            &::after {
              content: "/";
              padding: 0 5px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    background: #eff3fa;
    text-align: center;

    .banner-menu {
      padding: 20px 0;

      .module-header {
        // padding-top: 40px;

        .module-title {
          .title {
            margin: 0px;
            color: #1d407d;
            font-weight: bold;
            padding-bottom: 0px;
            font-size: 20px;
          }
        }

        .module-content {
          display: inline-flex;

          .banner-text {
            color: #1d407d;
            font-weight: bold;
            font-size: 13px;
            margin: 0px;
          }

          .active {
            &::after {
              content: "/";
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
`;
