import styled from "styled-components";
export const ListAbout = styled.section`
  overflow: hidden;
  width: 100%;
  padding-top: 340px;
  margin-top: -369px;
  .module-ipad {
    .module-content {
      .ipad-menu {
        position: relative;

        &::before {
          content: "";
          background-image: url(../images/banner-may.png);
          position: absolute;
          top: -98%;
          left: -25%;
          width: 401px;
          height: 576px;
          background-repeat: no-repeat;
          /* transform-origin: left center; */
          animation: intro-style 5s infinite ease;
        }

        .ipad-img {
          position: relative;

          &::after {
            content: "";
            background-image: url(../images/banner-ipad1.png);
            position: absolute;
            top: -172px;
            left: 384px;
            width: 552px;
            height: 312px;
            background-repeat: no-repeat;
            z-index: -1;
            animation: style-after 10s infinite ease-in-out;
            transform-origin: left center;
          }

          &::before {
            content: "";
            background-image: url(../images/banner-ipad2.png);
            position: absolute;
            top: 196px;
            left: -70px;
            width: 369px;
            height: 314px;
            background-repeat: no-repeat;
            transform-origin: right center;
            animation: style-after 10s infinite ease-in-out;
          }

          .ipad-menu-con {
            margin-left: -12px;
            padding-top: 5px;

            img {
              /* max-width: 100%; */
              width: 100%;
              position: relative;
              z-index: 1;
            }
          }
        }

        .ipad-about {
          padding: 53px 0 0 8px;

          .ipad-item {
            position: relative;

            .title {
              margin: 0px;
              font-family: "avo_bold";
              color: #1d407d;
              font-size: 42px;
            }

            .ipad-icon {
              padding: 1px 0 0 7px;

              .ipad-icon1 {
                padding: 18px 0 22px 21px;

                .ipad-con {
                  img {
                    max-width: 100%;
                    padding-left: 3px;
                  }
                }
              }
            }

            .ipad-text {
              margin: 0px;
              padding-top: 21px;
              font-family: "avo_italic";
              color: #1d407d;
              font-size: 13px;
              line-height: 29px;
              letter-spacing: 0.1px;
            }

            .ipad-xt {
              background: #1bcd8d;
              border: none;
              color: #fff;
              border-radius: 0;
              padding: 10px 46px;
              margin-top: 30px;
              margin-left: 7px;
              &:hover {
                box-shadow: 0 15px 35px rgba(31, 211, 146, 0.45);
              }
            }
          }
        }

        .ipad-us {
          float: right;
          clear: right;
          margin-top: 0px;

          .us-text {
            font-size: 90px;
            font-family: "avo_bold";
            white-space: nowrap;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(31, 211, 146, 0.74);
            color: #fff;
            position: relative;
            z-index: 1;
            animation: style-section 5s infinite;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .module-ipad {
      .module-content {
        .ipad-menu {
          margin-left: -85px;
          .ipad-img {
            .ipad-menu-con {
              img {
                padding-left: 85px;
              }
            }
          }
          .ipad-us {
            float: right;
            clear: right;
            padding-right: 51px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    padding-top: 205px;
    padding-bottom: 50px;
    .module-ipad {
      .module-content {
        .ipad-menu {
          .ipad-img {
            .ipad-menu-con {
              margin: 0px;
              padding: 0px;
            }
          }

          .ipad-about {
            padding: 0px 0 0 10px;

            .ipad-item {
              .title {
                margin: 0;
                font-family: avo_bold;
                color: #1d407d;
                font-size: 39px;
              }

              .ipad-icon {
                .td-con {
                  padding: 20px 0px 15px 10px;
                }
              }

              .ipad-text {
                padding-top: 15px;
                text-align: justify;
                line-height: 25px;
              }

              .ipad-xt {
                padding: 11px 35px;
                margin-top: 20px;
              }
            }
          }

          .ipad-us {
            margin-top: -25px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding-top: 470px;
    padding-bottom: 98px;
    .module-ipad {
      .module-content {
        .ipad-menu {
          .ipad-img {
            .ipad-menu-con {
              margin: 0px;
              padding: 0px;
            }
          }

          .ipad-about {
            margin-top: -50px;
            padding: 0px 0 0 10px;

            .ipad-item {
              .title {
                margin: 0;
                font-family: avo_bold;
                color: #1d407d;
                font-size: 36px;
              }

              .ipad-icon {
                .td-con {
                  padding: 20px 0px 15px 10px;
                }
              }

              .ipad-text {
                padding-top: 15px;
                text-align: justify;
                line-height: 25px;
              }

              .ipad-xt {
                padding: 9px 35px;
                margin-top: 20px;
              }
            }
          }

          .ipad-us {
            margin-top: -25px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding-top: 255px;
    .module-ipad {
      .module-content {
        .ipad-menu {
          &::before {
            display: none;
          }
          .ipad-img {
            .ipad-menu-con {
              margin: 0px;
              padding: 0 35px;
              padding-top: 30px;
              text-align: center;

              img {
                max-width: 100%;
              }
            }
          }

          .ipad-about {
            text-align: center;
            padding: 60px 0 0 0px;

            .ipad-item {
              .title {
                margin: 0;
                font-family: "avo_bold";
                color: #1d407d;
                font-size: 32px;
              }

              .ipad-icon {
                padding: 0px;

                .ipad-icon1 {
                  padding: 17px 0px 10px 10px;
                }
              }

              .ipad-text {
                padding: 15px 50px 0;
                text-align: justify;
                line-height: 25px;
              }

              .ipad-xt {
                padding: 9px 35px;
                margin-top: 20px;
              }
            }
          }

          .ipad-us {
            // margin-top   : -10px;
            padding-top: 20px;
            float: none;
            padding-right: 0px;
            text-align: center;

            .us-text {
              font-size: 60px;
              padding-right: 0px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding-top: 230px;
    .module-ipad {
      .module-content {
        .ipad-menu {
          .ipad-img {
            .ipad-menu-con {
              padding-top: 25px;
              padding: 10px 0 0;
              margin: 0px;
              text-align: center;

              img {
                max-width: 100%;
              }
            }
          }

          .ipad-about {
            text-align: center;
            padding: 88px 0 0 0px;

            .ipad-item {
              .title {
                margin: 0;
                font-family: "avo_bold";
                color: #1d407d;
                font-size: 23px;
              }

              .ipad-icon {
                .ipad-icon1 {
                  padding: 20px 0px 15px 10px;

                  .ipad-con {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .between {
                      padding-right: 5px;
                    }
                  }
                }
              }

              .ipad-text {
                padding: 6px 10px 0;
                text-align: justify;
                line-height: 25px;
              }

              .ipad-xt {
                padding: 9px 35px;
                margin-top: 20px;
              }
            }
          }

          .ipad-us {
            // margin-top   : -10px;
            padding-top: 15px;
            float: none;
            padding-right: 0px;
            text-align: center;

            .us-text {
              font-size: 50px;
              padding-right: 0px;
            }
          }
        }
      }
    }
  }
`;
