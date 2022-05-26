import styled from "styled-components";

export const ListNewContent = styled.section`
  padding: 67px 0 16px;

  .index-menu {
    .section-lorem {
      .lorem-menu {
        position: relative;
        padding-bottom: 55px;

        .lorem-item {
          .lorem-img {
            a {
              display: block;

              img {
                max-width: 100%;
                border-radius: 9px;
              }
            }
          }

          .lorem-icon {
            // position: relative;
            padding: 21px 0 9px 0px;

            .lorem-clock {
              i {
                float: left;
                padding-top: 3px;
                color: #8397b9;
              }

              .lorem-time {
                margin: 0px;
                float: left;
                padding-left: 5px;
                color: #8397b9;
                font-size: 13px;
              }
            }

            .vertical {
              &::after {
                content: "|";
                padding: 0 6px;
              }
            }

            .lorem-view {
              padding-left: 160px;

              img {
                padding-right: 5px;
                padding-top: 5px;
                max-width: 100%;
                float: left;
              }

              .view-so {
                margin: 0px;
                padding-left: 25px;
                color: #8397b9;
              }
            }
          }

          &:hover {
            .lorem-img {
              img {
                box-shadow: 0px 0px 8px 0px rgba(48, 78, 142, 3);
              }
            }
          }

          .lorem-title {
            .title {
              margin: 0px;
              text-decoration: none;
              font-family: "OpenSansc-semi";
              color: #2366e1;
              font-size: 21px;
              line-height: 27px;
            }

            .lorem-text {
              margin: 0;
              padding: 12px 0 0 1px;
              line-height: 25px;
              font-family: "OpenSansc";
              text-align: justify;
              font-size: 15px;
            }
          }
        }

        .lorem-about {
          position: absolute;
          top: 21px;
          left: 19px;
          background: #304e8e;
          width: 55px;
          height: 55px;
          border-radius: 3px;

          .about-day {
            text-align: center;
            padding: 5px 0;

            .lorem-so {
              line-height: 24px;
              color: #fff;
              margin: 0px;
              font-family: "OpenSansc- bold";
            }

            .ja {
              margin: 0;
              color: #fff;
              font-size: 12px;
              font-family: "OpenSansc";
            }
          }
        }
      }

      .lorem-page {
        padding-top: 31px;
        padding-bottom: 67px;
        text-align: center;

        .page-menu {
          .pre {
            padding: 12px 27px;
            text-decoration: none;
            background-color: #ced0e5;
            border-radius: 25px;
            color: #49415e;
            font-family: "OpenSansc-semi";
          }

          .number {
            margin: 3px;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 100%;
            border: 2px solid #ced0e5;
            color: #49415e;
            font-family: "OpenSansc-semi";
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
          padding: 1px 11px 25px 20px;

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
                  padding: 10px 0;

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
      .section-lorem {
        .lorem-menu {
          &.active {
            /* margin-left: 22px; */
          }
        }

        .lorem-page {
          padding-top: 31px;
          padding-bottom: 67px;
          text-align: center;

          .page-menu {
            .pre {
              padding: 12px 27px;
              background-color: #ced0e5;
              border-radius: 25px;
              color: #49415e;
              font-family: "OpenSansc-semi";
            }

            .number {
              margin: 3px;
              padding: 10px 15px;
              border-radius: 100%;
              border: 2px solid #ced0e5;
              color: #49415e;
              font-family: "OpenSansc-semi";
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .index-menu {
      .section-lorem {
        .lorem-menu {
          padding-bottom: 45px;

          .lorem-item {
            .lorem-title {
              .title {
                padding: 8px 0;
                font-size: 16px;
              }

              .lorem-text {
                font-size: 13px;
                padding: 5px 0 0;
              }
            }

            .lorem-icon {
              padding: 10px 0 0px;

              .lorem-view {
                .view-so {
                  margin: 0 0 6px;
                }
              }

              .lorem-clock {
                i {
                  padding-top: 3px;
                }
              }
            }
          }
        }

        .lorem-page {
          padding-top: 31px;
          padding-bottom: 67px;
          text-align: center;

          .page-menu {
            .pre {
              padding: 12px 27px;
              background-color: #ced0e5;
              border-radius: 25px;
              font-family: "OpenSansc-semi";
              font-size: 13px;
              color: #49415e;
            }

            .number {
              margin: 3px;
              padding: 10px 15px;
              border-radius: 100%;
              border: 2px solid #ced0e5;
              font-family: "OpenSansc-semi";
              color: #49415e;
              font-size: 13px;
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
                    padding: 15px 0;
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
    .index-menu {
      .section-lorem {
        .lorem-menu {
          padding-bottom: 45px;

          .lorem-item {
            .lorem-img {
              a {
                img {
                  width: 100%;
                }
              }
            }

            .lorem-title {
              .title {
                font-size: 17px;
              }
            }

            .lorem-icon {
              padding: 14px 0 0px;
            }
          }
        }

        .lorem-page {
          padding-top: 20px;
          padding-bottom: 40px;
          text-align: center;

          .page-menu {
            .pre {
              padding: 12px 27px;
              background-color: #ced0e5;
              border-radius: 25px;
              font-family: "OpenSansc-semi";
              font-size: 13px;
              color: #49415e;
            }

            .number {
              margin: 3px;
              padding: 10px 15px;
              border-radius: 100%;
              border: 2px solid #ced0e5;
              font-family: "OpenSansc-semi";
              color: #49415e;
              font-size: 13px;
            }
          }
        }
      }

      .bar {
        padding: 20px 0 30px;

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
    padding: 67px 0 50px;
    .index-menu {
      .section-lorem {
        padding: 0 15px;
        .lorem-menu {
          padding-bottom: 45px;

          .lorem-item {
            .lorem-img {
              a {
                img {
                  width: 100%;
                }
              }
            }

            .lorem-title {
              .title {
                font-size: 16px;
              }
            }

            .lorem-icon {
              padding: 12px 0 5px;
            }
          }
        }

        .lorem-page {
          padding-top: 20px;
          padding-bottom: 40px;
          text-align: center;

          .page-menu {
            .pre {
              padding: 8px 20px;
              background-color: #ced0e5;
              border-radius: 25px;
              font-family: "OpenSansc-semi";
              font-size: 13px;
              color: #49415e;
            }

            .number {
              margin: 3px;
              padding: 8px 13px;
              border-radius: 100%;
              border: 2px solid #ced0e5;
              font-family: "OpenSansc-semi";
              color: #49415e;
              font-size: 13px;
            }
          }
        }
      }

      .bar {
        padding: 15px 15px 0;

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
    padding: 67px 0 39px;

    .index-menu {
      .section-lorem {
        .lorem-menu {
          padding-bottom: 25px;

          .lorem-item {
            .lorem-img {
              a {
                img {
                  width: 100%;
                }
              }
            }
            .lorem-title {
              .title {
                font-size: 16px;
                line-height: 23px;
              }

              .lorem-text {
                font-size: 13px;
              }
            }

            .lorem-icon {
              padding: 12px 0 7px;
              display: flex;
              align-items: center;
              overflow: auto;

              .lorem-clock {
                display: flex;
                white-space: nowrap;
              }

              .lorem-view {
                padding-left: 0px;
              }
            }
          }

          .lorem-about {
            position: absolute;
            top: 15px;
            left: 15px;
            background: #304e8e;
            width: 45px;
            height: 45px;
            border-radius: 5px;

            .about-day {
              padding: 8px 0;

              .lorem-so {
                font-size: 15px;
              }

              .ja {
                font-size: 10px;
              }
            }
          }
        }

        .lorem-page {
          padding-top: 20px;
          padding-bottom: 40px;
          text-align: center;

          .page-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;

            .pre {
              /* padding: 7px 10px; */
              background-color: #ced0e5;
              border-radius: 25px;
              font-family: "OpenSansc-semi";
              font-size: 13px;
              color: #49415e;
            }

            .number {
              margin: 3px;
              /* padding: 8px 15px; */

              border-radius: 100%;
              border: 2px solid #ced0e5;
              font-family: "OpenSansc-semi";
              color: #49415e;
              font-size: 13px;
            }
          }
        }
      }

      .bar {
        padding-top: 15px;

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
            padding: 1px 11px 10px 14px;

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
                        .text {
                          // overflow: hidden;
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
