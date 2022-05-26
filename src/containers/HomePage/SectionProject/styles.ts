import styled from "styled-components";
import "../../../styles/styles.css";

export const ListProject = styled.section`
  /* padding-top: 306px; */
  padding-top: 212px;
  overflow: hidden;
  padding-bottom: 326px;
  margin-top: -279px;
  /* height: 100%; */

  .module-project {
    position: relative;

    &::before {
      content: "";
      background-image: url(../images/project_img.png);
      position: absolute;
      top: -1106px;
      left: -386px;
      width: 878px;
      height: 2000px;
      background-repeat: no-repeat;
      z-index: -1;
      animation: style-after 10s infinite ease-in-out;
      transform-origin: left center;
    }

    .module-title {
      .title-project {
        margin: 0px;
        padding-top: 10px;
        color: #1bcd8d;
        font-family: "OpenSansc";
        font-size: 21px;
        margin-left: -3px;
      }
    }

    .module-content {
      position: relative;
      z-index: 1;
      /* height: 100%; */

      .project-menu {
        padding-top: 7px;
        margin-left: 8px;
        /* height: 100%; */

        .title {
          margin: 0px;
          margin: -2px 0 5px -10px;
          font-family: "avo_bold";
          color: #1d407d;
          line-height: 56px;
          font-size: 42px;
          padding-right: 50px;
        }

        .project-circle {
          padding: 10px 0 10px 0px;
          margin-left: -9px;

          .project-icon-con {
            padding: 10px 0 0 0;

            .project-con {
              display: flex;
              align-items: center;

              img {
                max-width: 100%;
              }

              .between {
                padding-right: 4px;
              }
            }
          }
        }

        .tab-control {
          .project-nav {
            padding-top: 45px;
            margin-left: -29px;
            position: relative;
            overflow: hidden;

            .project-a {
              margin: 9px 0;
              list-style: none;
              padding: 13px 20px;
              color: #1d407d;
              font-family: "OpenSansc-semi";
              font-size: 20px;
              position: relative;
              cursor: pointer;
              box-shadow: 0 0 0 rgb(0 0 0 / 40%);
              &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to right, #1fd392, #fff);
                transform: translateX(120%);
                transition: all 0.5s;
                z-index: -1;
                display: none;
              }

              &:hover {
                &::after {
                  content: "";
                  display: block;
                  transform: translateX(0);
                }
              }
              &.active {
                background-image: linear-gradient(to right, #1fd392, #fff);
              }
            }
          }
        }
      }

      .project-about-con1 {
        position: relative;
        height: 100%;

        &::after {
          content: "";
          background-image: url(../images/project-rigth2.png);
          position: absolute;
          top: 489px;
          right: -608px;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          z-index: -1;
          animation: style-after 10s infinite ease-in-out;
          transform-origin: right center;
        }

        .project-item {
          float: right;
          padding: 15px 2px 0px;

          img {
            border-radius: 25px;
            margin: 0 2px;
            box-shadow: 0 7px 20px rgba(31, 201, 145, 0.55);
          }
        }

        .project-about-con {
          /* clear: right; */
          position: relative;
          top: -11px;
          /* height: 100%; */

          .project-item2 {
            padding-top: 14px;
            .project-image {
              display: block;
              top: 0;
              position: relative;
              z-index: 1;
              transition: all 0.3s;
              height: 100%;

              &:hover {
                top: -13px;
                &::before {
                  content: "";
                  width: 100%;
                  height: 30px;
                  position: absolute;
                  left: 0;
                  bottom: -20px;
                }
                .project-img {
                  img {
                    max-width: 100%;
                  }
                }

                .project-about {
                  // margin-top: -85px;
                  z-index: 0;
                  box-shadow: 0 5px 25px rgba(66, 73, 95, 0.25);

                  .project-about-new {
                    .project-about-con2 {
                    }

                    .project-icon1 {
                      img {
                        box-shadow: 0 5px 25px rgba(24, 201, 137, 0.55);
                        animation: box-link 0.5s ease;
                      }
                    }
                  }
                }
              }

              .project-img {
                position: relative;
                padding-bottom: 112%;

                &:hover {
                  box-shadow: 0 5px 25px rgba(66, 73, 95, 0.25);
                }

                img {
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 100%;
                  object-fit: cover;
                  padding: 5px;
                  box-shadow: 0 0px 15px rgba(66, 73, 95, 0.15);
                }
              }

              .project-about {
                top: -61px;
                padding: 0 7px;
                position: relative;
                z-index: -1;

                .project-about-new {
                  background: #fff;

                  .project-about-con2 {
                    padding: 2px 15px 1px;

                    .about-title {
                      margin: 0px;
                      padding-top: 10px;
                      padding-bottom: 3px;
                      color: #1bcd8d;
                      font-size: 14px;
                    }

                    .about-text {
                      margin: 0px;
                      font-size: 12px;
                      padding-bottom: 9px;
                    }
                  }

                  .project-icon1 {
                    position: absolute;
                    top: 12px;
                    right: 20px;

                    img {
                      max-width: 100%;
                      transform: rotate(180deg);
                      animation: box-link 0.5s ease;
                      // box-shadow: 1px 2px 10px;
                      // box-shadow   : 0px 0px 10px rgba(24, 201, 137, 0.5);
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

  .project-pro {
    margin: -20px -5px;

    .pro-text {
      font-size: 87px;
      font-family: avo_bold;
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

  @media screen and (min-width: 1200px) {
    .module-project {
      .module-content {
        .project-menu {
          .title {
            padding-right: 45px;
            text-align: left;
          }
        }

        .project-about-con1 {
          .project-about-con {
            .project-image {
              padding: 9px 8px 1px;

              .project-img {
                position: relative;
                padding-bottom: 100% !important;

                img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  max-height: 301px;
                }
              }

              .project-about {
                top: -34px !important;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    padding-bottom: 120px;
    .module-project {
      .module-title {
        .title-project {
          font-size: 19px;
        }
      }

      .module-content {
        .project-menu {
          .title {
            text-align: left;
            font-size: 40px;
            padding-left: 10px;
            padding-right: 42px;
          }

          .project-circle {
            padding: 10px 0 0px 0;
            .project-icon-con {
              padding-left: 11px;
            }
          }
          .tab-control {
            .project-nav {
              padding-top: 35px;

              .project-a {
                padding: 18px 0 14px 23px;
                font-size: 18px;
              }
            }
          }
        }

        .project-about-con1 {
          .project-item {
            float: right;
            padding: 0 15px 15px;
          }

          .project-about-con {
            .project-item2 {
              padding-top: 27px;
              .project-image {
                .project-img {
                  img {
                    max-width: 100%;
                  }
                }

                .project-about {
                  top: -58px;

                  .project-about-new {
                    .project-about-con2 {
                      .about-title {
                        font-size: 12px;
                      }

                      .about-text {
                        font-size: 13px;
                        padding-bottom: 4px;
                      }
                    }

                    .project-icon1 {
                      position: absolute;
                      top: 9px;
                      right: 15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .project-pro {
      text-align: center;
      margin-top: -15px;
    }
    .slick-prev {
      top: 0;
      left: 88% !important;
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 120px;

    .module-project {
      .module-title {
        .title-project {
          font-size: 19px;
        }
      }

      .module-content {
        .project-menu {
          .title {
            font-size: 37px;
            padding-left: 0px;
          }

          .project-circle {
            padding: 5px 0;
            .project-icon-con {
              padding-left: 0px;
            }
          }

          .tab-control {
            .project-nav {
              padding-top: 35px;
              text-align: center;
              display: inline-block;

              .project-a {
                padding: 17px 30px;
                margin: 5px;
                font-size: 16px;
                display: inline-block;
                border: 1px solid #88e8c5;
              }
            }
          }
        }

        .project-about-con1 {
          .project-item {
            float: right;
            padding: 0 15px 15px;
          }

          .project-about-con {
            .project-item2 {
              padding-top: 0px;
              .project-image {
                .project-img {
                  img {
                    max-width: 100%;
                  }
                }

                .project-about {
                  top: -57px;

                  .project-about-new {
                    .project-about-con2 {
                      .about-title {
                        font-size: 12px;
                      }

                      .about-text {
                        font-size: 13px;
                        padding-bottom: 4px;
                      }
                    }

                    .project-icon1 {
                      position: absolute;
                      top: 9px;
                      right: 15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .project-pro {
      text-align: center;
      margin-top: -15px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding-bottom: 120px;
    margin-top: -310px;

    .module-project {
      .module-title {
        .title-project {
          font-size: 18px;
        }
      }

      .module-content {
        .project-menu {
          .title {
            font-size: 30px;
            padding-right: 0px;
          }

          .project-circle {
            padding: 10px 0 0px 0;
          }
          .tab-control {
            .project-nav {
              padding-top: 30px;
              margin: 0px;

              .project-a {
                padding: 8px 12px;
                margin: 3px;
                font-size: 14px;
                display: inline-block;
                border: 1px solid #88e8c5;
              }
            }
          }
        }

        .project-about-con1 {
          .project-item {
            float: right;
            padding: 0 15px 15px;
          }

          .project-about-con {
            .project-item2 {
              padding-top: 40px;
              .project-image {
                .project-img {
                  img {
                    width: 100%;
                  }
                }

                .project-about {
                  top: -54px;

                  .project-about-new {
                    .project-about-con2 {
                      .about-title {
                        font-size: 12px;
                      }

                      .about-text {
                        font-size: 12px;
                        padding-bottom: 4px;
                      }
                    }

                    .project-icon1 {
                      position: absolute;
                      top: 10px;
                      right: 15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .project-pro {
      text-align: center;
      margin-top: -15px;

      .pro-text {
        font-size: 60px;
      }
    }
    .slick-prev {
      top: 0px;
      left: 0% !important;
    }
  }

  @media only screen and (max-width: 575px) {
    padding-bottom: 120px;

    .module-project {
      .module-title {
        .title-project {
          font-size: 15px;
        }
      }

      .module-content {
        .project-menu {
          .title {
            font-size: 23px;
            padding-right: 0px;
          }

          .project-circle {
            padding: 5px 0 0px 0;

            .project-icon-con {
              padding: 0px;
            }
          }
          .tab-control {
            .project-nav {
              padding-top: 20px;

              .project-a {
                padding: 14px 13px;
                font-size: 14px;
              }
            }
          }
        }

        .project-about-con1 {
          .project-item {
            float: right;
            padding: 0 0px 15px;
          }

          .project-about-con {
            .project-item2 {
              .project-image {
                .project-img {
                  img {
                    max-width: 100%;
                  }
                }

                .project-about {
                  top: -55px;
                  .project-about-new {
                    .project-about-con2 {
                      .about-title {
                        white-space: nowrap;
                        overflow: auto;
                      }

                      .about-text {
                        font-size: 12px;
                        padding-bottom: 5px;
                        white-space: nowrap;
                        overflow: hidden;
                      }
                    }

                    .project-icon1 {
                      position: absolute;
                      top: 10px;
                      right: 17px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .project-pro {
      text-align: center;
      margin: 0px;
      padding-top: 5px;

      .pro-text {
        font-size: 50px;
      }
    }
  }

  @media only screen and (max-width: 479px) {
    padding-bottom: 120px;

    .module-project {
      .module-title {
        .title-project {
          font-size: 15px;
        }
      }

      .module-content {
        .project-menu {
          .title {
            font-size: 23px;
            padding-right: 0px;
          }

          .project-circle {
            padding: 5px 0 0px 0;

            .project-icon-con {
              padding: 0px;
            }
          }
          .tab-control {
            .project-nav {
              padding-top: 20px;

              .project-a {
                padding: 5px 10px;
                margin: 2px;
                font-size: 13px;
                display: inline-block;
                border: 1px solid #88e8c5;
              }
            }
          }
        }

        .project-about-con1 {
          .project-item {
            float: right;
            padding: 0 0px 15px;
          }

          .project-about-con {
            .project-item2 {
              .project-image {
                .project-img {
                  img {
                    max-width: 100%;
                  }
                }

                .project-about {
                  top: -56px;

                  .project-about-new {
                    .project-about-con2 {
                      .about-title {
                        white-space: nowrap;
                        overflow: auto;
                      }

                      .about-text {
                        font-size: 13px;
                        padding-bottom: 6px;
                        white-space: nowrap;
                        overflow: hidden;
                      }
                    }

                    .project-icon1 {
                      position: absolute;
                      top: 10px;
                      right: 17px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .project-pro {
      text-align: center;
      margin: 0px;
      padding-top: 5px;

      .pro-text {
        font-size: 50px;
      }
    }
  }
`;
