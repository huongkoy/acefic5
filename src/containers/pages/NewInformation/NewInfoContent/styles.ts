import styled from "styled-components";

export const ListNewInfoContent = styled.section`
  padding: 66px 0 68px 0;

  .index-menu {
    position: relative;

    // section-lorem
    .section-detail {
      .detail-menu {
        border: 1px solid #e9effa;

        .detail-item {
          padding: 20px 30px 43px 32px;

          .detail-about {
            .title {
              font-size: 21px;
              margin: 0;
              padding: 12px 0 8px;
              color: #2366e1;
              font-family: "OpenSansc-semi";
            }

            .detail-icon {
              // position: relative;
              // padding: 8px 0 16px 28px;

              .detail-clock {
                // white-space: nowrap;
                // overflow   : auto;

                i {
                  float: left;
                  padding-top: 5px;
                  color: #8397b9;
                }

                .detail-time {
                  float: left;
                  padding-left: 5px;
                  color: #8397b9;
                }
              }

              .vertical {
                &::after {
                  content: "|";
                  padding: 0 7px;
                }
              }

              .detail-view {
                // position: absolute;
                // float: left;

                // left : 120px;
                padding-left: 175px;

                img {
                  padding-top: 5px;
                  max-width: 100%;
                  float: left;
                }

                .detail-so {
                  // float       : left;
                  padding-left: 29px;
                  color: #8397b9;
                }
              }
            }

            img {
              max-width: 100%;
            }

            .detail-text {
              padding: 19px 0;

              .text {
                margin: 0px;
                font-family: "OpenSansc";
                padding: 15px 0 12px;
                line-height: 25px;
                font-size: 14.5px;
                text-align: justify;
              }
            }
          }
        }
      }
    }

    // end section-lorem

    // lg-20
    .bar {
      margin-left: 4px;
      .search {
        position: relative;

        input {
          width: 100%;
          padding: 12px 10px;
          background: #e9effa;
          font-style: italic;
          border-radius: 0;
          border: 1px solid #e9effa;
        }

        .search-item {
          position: absolute;
          top: 11px;
          right: 16px;

          img {
            max-width: 100%;
          }
        }
      }

      .section-news-con {
        background: #e9effa;
        margin-top: 32px;

        .news-module {
          padding: 1px 11px 15px 20px;

          .news-menu {
            .news-title {
              .title {
                font-size: 15px;
                padding: 11px 0 0 2px;
                color: #304e8e;
              }

              hr {
                border: 1px solid #1fd392;
                width: 95%;
                margin: 13px 0 7px;
              }

              .news-about {
                .about-item {
                  padding: 12px 0 40px;

                  img {
                    max-width: 100%;
                    float: left;
                  }

                  .news-con {
                    padding-left: 95px;

                    .con-text {
                      .con-text-a {
                        text-decoration: none;

                        .text {
                          font-size: 13px;
                          margin: 0px;
                          padding: 0 0 9px 0;
                          color: #000;
                          font-family: "OpenSansc";
                          line-height: 16px;
                        }
                      }

                      i {
                        float: left;
                        padding-top: 4px;
                        font-size: 12px;
                        padding-right: 5px;
                      }

                      .time {
                        // float       : left;
                        font-family: "OpenSansc";
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .index-menu {
      .section-detail {
        .detail-menu {
          .detail-item {
            .detail-about {
              .detail-icon {
                padding: 5px 0 6px 25px;
              }
            }
          }
        }
      }

      .bar {
        .section-news-con {
          .news-module {
            .news-menu {
              .news-title {
                .news-about {
                  .about-item {
                    .news-con {
                      .con-text {
                        .time {
                          float: left;
                          padding-left: 5px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    padding: 35px 0 50px;

    .index-menu {
      .section-detail {
        .detail-menu {
          .detail-item {
            padding: 20px 30px 30px 32px;

            .detail-about {
              .title {
                font-size: 16px;
              }

              .detail-icon {
                padding: 4px 0 10px 25px;
              }

              .detail-text {
                padding: 12px 0;
                font-size: 14px;
              }
            }
          }
        }
      }

      .bar {
        .search {
          input {
            font-size: 13px;
            padding: 8px 10px;
          }

          .search-item {
            position: absolute;
            top: 6px;
            right: 12px;
          }
        }

        .section-news-con {
          .news-module {
            padding: 1px 11px 5px 15px;

            .news-menu {
              .news-title {
                .title {
                  color: #304e8e;
                  font-weight: 700;
                  font-size: 16px;
                }

                .news-about {
                  .about-item {
                    padding: 5px 0;
                    img {
                      width: 70px;
                    }

                    .news-con {
                      padding-left: 85px;

                      .con-text {
                        .con-text-a {
                          .text {
                            font-size: 11px;
                            padding: 0 0 5px;
                          }
                        }

                        i {
                          font-size: 10px;
                          padding-top: 2px;
                        }

                        .time {
                          padding-left: 16px;
                          font-size: 10px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding: 35px 0 0px;

    .index-menu {
      .section-detail {
        .detail-menu {
          .detail-item {
            padding: 15px;

            .detail-about {
              .title {
                font-size: 17px;
              }

              .detail-icon {
                padding: 4px 0 10px 25px;
              }

              .detail-text {
                padding: 12px 0;
                font-size: 14px;
              }
            }
          }
        }
      }

      .bar {
        padding: 20px 0 45px;

        .search {
          float: right;
          clear: right;

          input {
            width: 280px;
            padding: 10px;
          }

          .search-item {
            // position: absolute;
            // top     : 11px;
            // left    : 255px;
          }
        }

        .section-news-con {
          margin-top: 70px;

          .news-module {
            padding: 1px 11px 25px 20px;

            .news-menu {
              .news-title {
                .news-about {
                  .about-item {
                    padding: 20px 0;

                    .news-con {
                      .con-text {
                        .con-text-a {
                          .text {
                            font-size: 16px;
                          }
                        }

                        i {
                          padding-top: 3px;
                        }

                        .time {
                          padding-left: 21px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    padding: 35px 0 0px;

    .index-menu {
      .section-detail {
        .detail-menu {
          .detail-item {
            padding: 15px;

            .detail-about {
              .title {
                font-size: 14px;
              }

              .detail-icon {
                padding: 0px 0 3px 10px;

                .detail-clock {
                  // overflow: hidden;

                  i {
                    padding-top: 3px;
                  }

                  .detail-time {
                    font-size: 13px;
                  }
                }

                .detail-view {
                  padding-left: 20px;

                  img {
                    padding-right: 5px;
                  }

                  .detail-so {
                    font-size: 13px;
                    padding-left: 0px;
                  }
                }
              }

              .detail-text {
                padding: 12px 0;
                font-size: 15px;

                .text {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

      .bar {
        padding: 15px 15px 40px;

        .search {
          float: right;
          clear: right;

          input {
            width: 250px;
            padding: 10px;
          }
        }

        .section-news-con {
          margin-top: 65px;

          .news-module {
            padding: 1px 11px 25px 20px;

            .news-menu {
              .news-title {
                .news-about {
                  .about-item {
                    padding: 17px 0;

                    .news-con {
                      .con-text {
                        .con-text-a {
                          .text {
                            font-size: 14px;
                          }
                        }

                        i {
                          padding-top: 4px;
                        }

                        .time {
                          padding-left: 21px;
                          font-size: 13px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding: 35px 0 0px;

    .index-menu {
      .section-detail {
        .detail-menu {
          .detail-item {
            padding: 20px 15px 20px 15px;

            .detail-about {
              .title {
                font-size: 14px;
              }

              .detail-icon {
                overflow: auto;
                display: flex;
                padding: 5px 0 5px 5px;

                .detail-clock {
                  display: flex;
                  white-space: nowrap;
                  // overflow   : auto;

                  i {
                    padding-top: 3px;
                  }

                  .detail-time {
                    font-size: 13px;
                  }
                }

                .detail-view {
                  padding-left: 0px;

                  img {
                    padding-right: 3px;
                  }

                  .detail-so {
                    font-size: 13px;
                    padding-left: 25px;
                  }
                }
              }

              .detail-text {
                padding: 9px 0;
                font-size: 14px;

                .text {
                  padding: 10px 0;
                  font-size: 13px;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }

      .bar {
        padding: 15px 0 40px;

        .search {
          float: right;
          clear: right;

          input {
            width: 100%;
            padding: 10px;
            font-size: 14px;
          }
          .search-item {
            top: 10px;
            right: 10px;
          }
        }

        .section-news-con {
          margin-top: 65px;

          .news-module {
            padding: 1px 11px 15px 14px;

            .news-menu {
              .news-title {
                .title {
                  font-size: 17px;
                }

                .news-about {
                  .about-item {
                    padding: 15px 0;

                    img {
                      padding-right: 15px;
                    }

                    .news-con {
                      padding: 0px;

                      .con-text {
                        .con-text-a {
                          .text {
                            font-size: 13px;
                          }
                        }

                        i {
                          padding-top: 4px;
                        }

                        .time {
                          // padding-left: 21px;
                          font-size: 13px;
                          white-space: nowrap;
                          overflow: auto;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
