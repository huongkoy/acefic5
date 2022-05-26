import styled from "styled-components";

export const ListNews = styled.section`
  padding: 40px 0 46px 0;
  overflow: hidden;

  .module-news {
    position: relative;

    .news-banner {
      background-image: url(../images/news-img.png);
      background-size: 100%;
      height: 100%;
      background-repeat: no-repeat;

      .module-title {
        padding-top: 97px;

        .news-contact {
          text-align: center;

          .contact-title {
            margin: 0;
            padding: 17px 12px 13px 0;
            font-family: "avo_bold";
            color: #1d407d;
            position: relative;

            font-size: 41px;
          }

          .news-icon1 {
            padding: 5px 10px;

            .news-con {
              padding: 0px 7px 90px 0px;
            }

            img {
              max-width: 100%;
              // float    : left;
            }

            .between {
              padding: 0 5px;
            }

            .hori {
              .hori-menu {
              }
            }
          }
        }
      }

      .module-content {
        position: relative;

        .module-content-item {
          .news-menu {
            &:hover {
              .news-about {
                .news-about-item {
                  .about-item {
                    box-shadow: 0 28px 35px rgba(131, 151, 185, 0.18);

                    .news-time {
                      .news-icon {
                      }
                    }

                    .title {
                      color: #1d619f;
                    }

                    .news-item {
                      .text-time {
                      }

                      .news-image {
                        img {
                        }
                      }
                    }
                  }
                }
              }
            }

            .news-img {
              a {
                display: block;

                img {
                  max-width: 100%;
                }
              }
            }

            .news-about {
              position: relative;
              margin-top: -102px;
              padding: 20px 27px;

              .news-about-item {
                border-radius: 5px;
                background: #fff;

                .about-item {
                  padding: 0 15px;

                  .news-time {
                    position: relative;
                    margin: 0 auto;
                    display: table;
                    padding-bottom: 4px;
                    .news-icon {
                      padding: 10px 0 1px 0;
                      height: 20px;
                      // position: relative;
                      // padding: 8px 0 16px 28px;

                      .news-clock {
                        i {
                          float: left;
                          padding-top: 5px;
                          color: #8397b9;
                        }

                        .news-time {
                          float: left;
                          padding-left: 5px;
                          color: #8397b9;
                        }

                        // &::after {
                        //     content     : "|";
                        //     padding-left: 30px;
                        // }
                      }

                      .vertical {
                        &::after {
                          content: "|";
                          padding: 0 8px;
                        }
                      }

                      .news-view {
                        // position: absolute;
                        // float: left;

                        // left : 120px;
                        padding-left: 160px;

                        img {
                          padding-top: 5px;
                          max-width: 100%;
                          float: left;
                        }

                        .news-so {
                          // float       : left;
                          padding-left: 29px;
                          color: #8397b9;
                        }
                      }
                    }
                  }

                  .title {
                    color: #000;
                    text-decoration: none;
                    font-size: 20px;
                    line-height: 26px;
                    margin: 0px;
                    padding: 0;
                    letter-spacing: 0.4px;
                    font-family: "OpenSansc-semi";

                    &:hover {
                      color: #1d619f;
                    }
                  }

                  .news-item {
                    padding: 23px 0 20px 0;

                    .text-time {
                      padding-top: 2px;
                      text-decoration: none;
                      color: #000;
                      font-family: "OpenSansc-semi";
                      font-size: 15px;
                    }

                    .news-image {
                      img {
                        max-width: 100%;
                        margin-left: 6px;
                        box-shadow: 0 10px 25px rgba(31, 211, 146, 0.45);
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .news-xt {
          text-align: center;
          margin-top: 58px;

          .news-btn {
            background: #1bcd8d;
            color: #fff;
            border-radius: 0px;
            padding: 10px 49px;
            border: none;
            &:hover {
              box-shadow: 0 15px 35px rgba(31, 211, 146, 0.45);
            }
          }
        }
      }

      .news-lat {
        float: right;
        clear: right;
        margin: -106px -105px 0 0;
        height: 130px;

        .lat-text {
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

  @media screen and (min-width: 1200px) {
    .module-news {
      position: relative;

      .news-banner {
        .module-content {
          .news-menu {
            .news-about {
              &.active {
                padding: 20px 46px 0 25px;
              }
            }

            &.item {
              /* margin-left: 21px; */
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    padding: 50px 0 0px;
    .module-news {
      .news-banner {
        .module-title {
          padding-top: 30px;

          .news-contact {
            .contact-title {
              font-size: 39px;
              padding: 20px 0px 20px 0;
            }

            .news-icon1 {
              .news-con {
                padding: 0 0px 45px 0;
              }
            }
          }
        }

        .module-content {
          .module-content-item {
            .news-menu {
              .news-img {
                img {
                  max-width: 100%;
                }
              }

              .news-about {
                .news-about-item {
                  .about-item {
                    .news-time {
                      .news-icon {
                        i {
                          font-size: 13px;
                        }

                        .news-time {
                          font-size: 13px;
                        }

                        .news-view {
                          padding-left: 150px;

                          .news-so {
                            padding-left: 25px;
                          }
                        }
                      }
                    }

                    .title {
                      font-size: 14px;
                    }

                    .news-item {
                      padding: 15px 0 20px;

                      .text-time {
                        font-size: 14px;
                      }

                      .news-img {
                        img {
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .news-xt {
            margin: 0px;

            .news-btn {
              padding: 9px 40px;
            }
          }
        }

        .news-lat {
          margin: 5px -50px 0 0;
          height: 120px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .module-news {
      .news-banner {
        .module-title {
          padding-top: 25px;

          .news-contact {
            .contact-title {
              font-size: 35px;
              padding: 20px 0px 20px 0;
            }

            .news-icon1 {
              .news-con {
                padding: 0 0px 30px 0;
              }
            }
          }
        }

        .module-content {
          .module-content-item {
            .news-menu {
              .news-img {
                img {
                  max-width: 100%;
                }
              }

              .news-about {
                padding: 20px 25px 30px;
                .news-about-item {
                  .about-item {
                    .news-time {
                      .news-icon {
                        i {
                          font-size: 13px;
                        }

                        .news-time {
                          font-size: 13px;
                        }

                        .news-view {
                          padding-left: 150px;

                          .news-so {
                            padding-left: 25px;
                          }
                        }
                      }
                    }

                    .title {
                      font-size: 17px;
                    }

                    .news-item {
                      padding: 15px 0 20px;

                      .text-time {
                        font-size: 15px;
                      }

                      .news-img {
                        img {
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .news-xt {
            margin: 0px;

            .news-btn {
              border: 1px solid;
              padding: 9px 35px;
            }
          }
        }

        .news-lat {
          margin: 10px -50px 0 0;
          float: none;
          text-align: center;
          height: 90px;
          .lat-text {
            font-size: 60px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .module-news {
      .news-banner {
        .module-title {
          padding-top: 11px;

          .news-contact {
            .contact-title {
              font-size: 28px;
              padding: 12px 0px 10px 0;
            }

            .news-icon1 {
              .news-con {
                padding: 0 0px 20px 0;

                img {
                  max-width: 100%;
                }

                .between {
                  max-width: 100%;
                }
              }
            }
          }
        }

        .module-content {
          .module-content-item {
            .news-menu {
              max-width: 500px;
              margin: 0 auto;

              .news-img {
                img {
                  width: 100%;
                }
              }

              .news-about {
                padding: 50px 25px;

                .news-about-item {
                  .about-item {
                    .news-time {
                      .news-icon {
                        i {
                          padding-top: 4px;
                          font-size: 12px;
                        }

                        .news-time {
                          font-size: 12px;
                        }

                        .news-view {
                          padding-left: 135px;

                          img {
                            padding-top: 4px;
                          }

                          .news-so {
                            padding-left: 25px;
                            font-size: 12px;
                          }
                        }
                      }
                    }

                    .title {
                      font-size: 17px;
                    }

                    .news-item {
                      padding: 15px 0 20px;

                      .text-time {
                        font-size: 14px;
                      }

                      .news-img {
                        img {
                        }
                      }
                    }
                  }
                }
              }
            }

            .news-xt {
              margin: 0px;

              .news-btn {
                padding: 9px 40px;
              }
            }
          }
        }

        .news-lat {
          margin: 0px;
          padding-top: 20px;

          .lat-text {
            font-size: 45px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding: 30px 0 20px;
    .module-news {
      .news-banner {
        .module-title {
          .news-contact {
            .contact-title {
              font-size: 25px;
              padding: 20px 0px 10px 0;
            }

            .news-icon1 {
              .news-con {
                display: flex;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
                overflow: auto;
                padding: 0 0px 15px 0;

                img {
                  max-width: 100%;
                }

                .between {
                  max-width: 100%;
                }
              }
            }
          }
        }

        .module-content {
          padding-top: 30px;
          .module-content-item {
            .news-menu {
              // padding: 0 55px;

              .news-img {
                img {
                  width: 100%;
                }
              }

              .news-about {
                padding: 50px 25px 35px;

                .news-about-item {
                  .about-item {
                    .news-time {
                      align-items: center;
                      display: flex;
                      justify-content: center;
                      padding-bottom: 17px;

                      .news-icon {
                        display: flex;
                        white-space: nowrap;
                        /* overflow: auto; */

                        .news-clock {
                          display: flex;

                          i {
                            padding-top: 4px;
                            font-size: 13px;
                          }

                          .news-time {
                            margin-top: 10px;
                            font-size: 12px;
                          }
                        }

                        .news-view {
                          padding-left: 0px;

                          img {
                            padding-top: 4px;
                          }

                          .news-so {
                            font-size: 12px;
                            padding-left: 25px;
                          }
                        }
                      }
                    }

                    .title {
                      font-size: 17px;
                    }

                    .news-item {
                      padding: 15px 0 20px;

                      .text-time {
                        font-size: 14px;
                      }

                      .news-img {
                        img {
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .news-xt {
            margin: 0px;

            .news-btn {
              padding: 5px 25px;
            }
          }
        }

        .news-lat {
          margin: 0px;
          padding-top: 20px;
          height: 65px;

          .lat-text {
            font-size: 28px;
          }
        }
      }
    }
  }
`;
