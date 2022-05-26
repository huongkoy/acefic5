import styled from "styled-components";
export const ListField = styled.section`
  overflow: hidden;
  padding-top: 313px;
  margin-top: -225px;
  padding-bottom: 125px;

  .module-activity {
    position: relative;

    .module-title {
      position: relative;

      .activity-title {
        .title {
          font-family: "avo_bold";
          color: #1d619f;
          margin: 0px;
          margin-left: -5px;
          padding-bottom: 10px;
          font-size: 42px;
        }
      }

      .activity-icon {
        padding: 9px 0 35px 14px;
        .activity-icon1 {
          .activity-con {
            img {
              max-width: 100%;
            }

            .between {
              padding-right: 8px;
            }
          }
        }
      }
    }

    .module-content {
      position: relative;

      &::after {
        content: "";
        background-image: url(../images/banner-may2.png);
        position: absolute;
        top: -550px;
        right: -35%;
        width: 530px;
        height: 772px;
        background-repeat: no-repeat;
        z-index: -1;
        transform-origin: right center;
        animation: intro-style2 5s infinite ease;
      }

      .activity-menu {
        .activity-item {
          padding-left: 31px;
          padding-top: 21px;

          .activity-about {
            padding: 13px 0;
            transition: all 0.3s;

            &:hover {
              .activity-about-item1 {
              }

              .activity-about-item2 {
                .text {
                  background-image: linear-gradient(to right, #88e8c5, #fff);
                  margin-left: -20px;
                  box-shadow: 5px 0 20px rgb(23 48 92 / 20%);
                }
              }
            }

            .activity-about-item1 {
              position: relative;

              .activi-number {
                position: absolute;
                font-family: "SFUDaxCondensedExtraBold";
                font-size: 60px;
                top: -48px;
                left: -40px;
                color: #dee6f4;
                z-index: -1;
              }

              .tk {
                text-decoration: none;
                margin: 0px;
                padding: 10px 0;
                color: #1d619f;
                font-family: "OpenSansc- bold";
                font-size: 17px;
                position: relative;
                z-index: 1;
              }
            }

            .activity-about-item2 {
              margin-left: -13px;
              margin-top: 6px;
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                from(#2af19e),
                to(#0bb1e7)
              );
              background: linear-gradient(#2af19e, #0bb1e7);
              border-radius: 5px;
              position: relative;

              &::before {
                content: "";
                z-index: -1;
                position: absolute;
                left: 1px;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                background: #fff;
                z-index: 1;
                display: block;
                width: calc(100% - 2px);
                height: calc(100% - 2px);
              }

              .text {
                position: relative;
                border-radius: 5px;
                margin: 0px;
                padding: 5px 0 7px 10px;
                color: #1d407d;
                z-index: 1;
              }
            }
          }
        }
      }

      .activity-img {
        padding-top: 4px;
        padding-left: 23px;

        img {
          // width: 100%;
        }
      }
    }
  }

  .activity-mar {
    padding-top: 4px;
    // padding-left: 236px;

    .mar-text {
      font-size: 83px;
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

  @media screen and (min-width: 1200px) {
    .module-activity {
      .module-content {
        margin-left: 26px;
        .activity-img {
          margin-left: 30px;
        }
      }
    }
    .activity-mar {
      padding-top: 0px;
      padding-left: 234px;
    }
  }

  @media only screen and (max-width: 1199px) {
    padding-top: 255px;

    .module-activity {
      .module-title {
        .activity-title {
          .title {
            font-size: 35px;
            margin: 0px;
          }
        }

        .activity-icon {
        }
      }

      .module-content {
        .activity-menu {
          .activity-item {
            padding-top: 10px;

            .activity-about {
              .activity-about-item2 {
                .text {
                  font-size: 13px;
                }
              }
            }
          }
        }

        .activity-img {
          padding: 70px 0 0 25px;

          img {
            max-width: 100%;
          }
        }
      }
    }

    .activity-mar {
      // padding-left: 236px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 991px) {
    .module-activity {
      .module-title {
        .activity-title {
          .title {
            font-size: 35px;
            margin: 0px;
          }
        }

        .activity-icon {
        }
      }

      .module-content {
        &::after {
          right: -63%;
        }
        .activity-menu {
          .activity-item {
            padding-top: 10px;

            .activity-about {
              .activity-about-item1 {
                .tk {
                  font-size: 20px;
                }
              }

              .activity-about-item2 {
                .text {
                  font-size: 14px;
                }
              }
            }
          }
        }

        .activity-img {
          text-align: center;
          padding: 25px 0 0;

          img {
            max-width: 100%;
          }
        }
      }
    }

    .activity-mar {
      margin-top: 0px;
      // padding-left: 215px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 767px) {
    padding-top: 150px;
    padding-bottom: 45px;

    .module-activity {
      padding: 0 5px;

      .module-title {
        text-align: center;
        .activity-title {
          position: relative;
          z-index: 1;

          .title {
            font-size: 30px;
            margin: 0px;
          }
        }

        .activity-icon {
          padding: 10px 7px 15px;

          .td-con {
            padding: 10px 7px;
          }
        }
      }

      .module-content {
        .activity-menu {
          .activity-item {
            padding-top: 10px;

            .activity-about {
              .activity-about-item1 {
                .tk {
                  font-size: 17px;
                }
              }

              .activity-about-item2 {
                .text {
                  font-size: 13px;
                }
              }
            }
          }
        }

        .activity-img {
          text-align: center;
          padding: 25px 0 0;

          img {
            max-width: 100%;
          }
        }
      }
    }

    .activity-mar {
      margin-top: 0px;
      padding-top: 20px;
      text-align: center;

      .mar-text {
        font-size: 60px;
      }
    }
  }

  @media screen and (max-width: 479px) {
    .module-activity {
      padding: 0 5px;

      .module-title {
        text-align: center;
        .activity-title {
          position: relative;
          z-index: 1;

          .title {
            font-size: 21px;
            margin: 0px;
          }
        }

        .activity-icon {
          padding: 0px 7px 15px;
          justify-content: center;

          .activity-icon1 {
            padding: 5px 0;

            .activity-con {
              display: flex;
              align-items: center;
            }
          }
        }
      }

      .module-content {
        &::after {
          /* display: none; */
        }
        .activity-menu {
          .activity-item {
            padding-top: 10px;

            .activity-about {
              .activity-about-item1 {
                .tk {
                  font-size: 15px;
                }
              }

              .activity-about-item2 {
                .text {
                  font-size: 13px;
                }
              }
            }
          }
        }

        .activity-img {
          text-align: center;
          padding: 20px 0 0 0;

          img {
            max-width: 100%;
          }
        }
      }
    }

    .activity-mar {
      margin-top: 0px;
      padding-top: 20px;
      text-align: center;

      .mar-text {
        font-size: 50px;
      }
    }
  }
`;
