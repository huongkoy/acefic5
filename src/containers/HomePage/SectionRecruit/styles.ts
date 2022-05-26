import styled from "styled-components";

export const ListRecruit = styled.section`
  overflow: hidden;
  margin-top: -92px;

  .module-td {
    .module-content {
      .td-menu {
        position: relative;

        .td-img {
          img {
            max-width: 100%;
            padding-left: 5px;
          }
        }

        .about-td {
          // padding: 119px 0 0 77px;

          .td-item {
            .title {
              margin: 0px;
              font-family: "avo_bold";
              color: #1d407d;
              font-size: 41px;
            }

            .td-icon {
              padding: 5px 10px;

              .td-con {
                padding: 17px 0 38px;

                .td-con1 {
                  img {
                    max-width: 100%;
                  }

                  .between {
                    padding-right: 8px;
                  }
                }
              }
            }

            .text {
              margin: 0px;
              // font-family: 'avo_italic';
              color: #1d619f;
              font-size: 15px;
              line-height: 25px;
              font-family: "OpenSansc";
            }

            .nd {
              margin-top: 23px;
              padding: 19px 49px;
              background: #1bcd8d;
              border-radius: 26px;
              color: #fff;
              border: none;

              &:hover {
                box-shadow: 0 15px 35px rgba(31, 211, 146, 0.45);
              }
            }
          }
        }

        .td-banner {
          float: right;
          // clear        : right;
          // margin-top   : -160px;
          // padding-right: 83px;

          .recr-text {
            font-size: 84px;
            font-family: "avo_bold";
            white-space: nowrap;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(31, 211, 146, 0.74);
            color: #fff;
            position: relative;
            z-index: 1;
            -webkit-animation: style-section 5s infinite;
            animation: style-section 5s infinite;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .module-td {
      .module-content {
        .td-menu {
          .td-img {
            padding-left: 11px;
          }
          .about-td {
            padding: 118px 0 0 72px;
          }

          .td-banner {
            float: right;
            clear: right;
            margin-top: -165px;
            padding-right: 80px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .module-td {
      .module-content {
        .td-menu {
          .td-img {
            img {
              padding: 0px;
            }
          }

          .about-td {
            padding: 119px 0 0 45px;

            .td-item {
              .title {
                font-size: 39px;
              }

              .td-icon {
                .td-con {
                  padding: 20px 0 41px;
                }
              }

              .nd {
                padding: 17px 45px;
              }
            }
          }

          .td-banner {
            margin-top: -35px;

            .recr-text {
              padding-left: 344px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .module-td {
      .module-content {
        .td-menu {
          .td-img {
            text-align: center;

            img {
              padding: 0px;
            }
          }

          .about-td {
            padding: 0px;
            padding-bottom: 55px;
            text-align: center;

            .td-item {
              .title {
                font-size: 39px;
              }

              .td-icon {
                .td-con {
                  padding: 20px 0 25px;

                  .td-con1 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                }
              }

              .text {
                padding: 0 60px;
                text-align: justify;
              }

              .nd {
                padding: 12px 40px;
              }
            }
          }

          .td-banner {
            margin-top: -15px;
            float: none;

            .recr-text {
              padding-left: 0px;
              font-size: 70px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .module-td {
      .module-content {
        .td-menu {
          .td-img {
            text-align: center;
          }

          .about-td {
            padding: 0px;
            padding-bottom: 45px;
            text-align: center;

            .td-item {
              .title {
                font-size: 34px;
              }

              .td-icon {
                .td-con {
                  padding: 20px 0 25px;
                }
              }

              .text {
                padding: 0 45px;
                text-align: justify;
              }

              .nd {
                padding: 12px 30px;
              }
            }
          }

          .td-banner {
            padding-top: 0px;

            .recr-text {
              font-size: 45px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .module-td {
      .module-content {
        .td-menu {
          .td-img {
            padding: 0 10px;
            text-align: center;
          }

          .about-td {
            padding: 0px;
            padding-bottom: 45px;
            text-align: center;

            .td-item {
              .title {
                font-size: 29px;
              }

              .td-icon {
                .td-con {
                  padding: 10px 0 25px;
                }
              }

              .text {
                padding: 0px;
                text-align: justify;
                font-size: 13px;
              }

              .nd {
                padding: 10px 25px;
              }
            }
          }

          .td-banner {
            padding-top: 0px;
            margin-top: -30px;

            .recr-text {
              font-size: 35px;
              text-align: center;
            }
          }
        }
      }
    }
  }
`;
