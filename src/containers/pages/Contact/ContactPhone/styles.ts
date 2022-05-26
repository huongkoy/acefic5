import styled from "styled-components";

export const ListContactPhone = styled.section`
  padding-top: 53px;
  min-height: 213px;
  .module-tt {
    .tt-menu {
      .tt-about {
        display: flex;
        align-items: center;
        .tt-item {
          .circle {
            width: 94px;
            height: 94px;
            background: #eff4fa;
            border-radius: 50%;
            transition: all 0.3s;
            position: relative;

            img {
              position: absolute;
              max-width: 100px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .default_icon {
            opacity: 1;
          }

          .hover_icon {
            opacity: 0;
          }
        }

        .tt-text {
          padding-left: 10px;
          margin: 0;
          font-family: "OpenSansc";
          font-size: 16px;
          /* transition: all 0.1s; */
        }

        .con {
          margin: 0;
          padding-top: 30px;
          padding-left: 110px;
          font-family: "OpenSansc";
          font-size: 16px;
        }

        &:hover {
          .tt-item {
            border-radius: 54px;
            background: #1bcd8d;

            .circle {
              background: #1bcd8d;
              box-shadow: 0px 0px 10px 0px rgba(27, 205, 141, 55);
            }

            .default_icon {
              opacity: 0;
            }

            .hover_icon {
              opacity: 1;
            }
          }

          .tt-text {
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    min-height: 185px;

    .module-tt {
      .tt-menu {
        .tt-about {
          .tt-text {
            font-size: 13px;
          }

          .con {
            padding-top: 30px;
          }

          &:hover {
            .tt-text {
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-bottom: 30px;
    padding-top: 30px;

    .module-tt {
      .tt-menu {
        padding: 20px 0;

        .tt-about {
          .tt-item {
            i {
              font-size: 80px;
              color: #eff3fa;
            }
          }

          .tt-text {
            font-size: 15px;
          }

          .con {
            padding-top: 30px;
            margin: 0px;
          }

          &:hover {
            .tt-text {
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    padding-bottom: 30px;
    padding-top: 30px;

    .module-tt {
      .tt-menu {
        padding: 20px 0;

        .tt-about {
          .tt-item {
            i {
              font-size: 80px;
              color: #eff3fa;
            }
          }

          .tt-text {
            font-size: 14px;
          }

          .con {
            padding-top: 30px;
            margin: 0px;
          }

          &:hover {
            .tt-item {
              border-radius: 54px;
              background: #1bcd8d;

              i {
                border: none;
                border-radius: 54px;
                color: #1bcd8d;
                box-shadow: 0px 0px 10px 0px rgba(27, 205, 141, 55);
              }

              img {
                color: #fff;
              }
            }

            .tt-text {
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding-bottom: 30px;
    padding-top: 30px;

    .module-tt {
      .tt-menu {
        padding: 20px 0;

        .tt-about {
          .con {
          }

          .tt-item {
            i {
              font-size: 75px;
              color: #eff3fa;
            }
          }

          .tt-text {
            font-size: 13px;
            overflow: auto;
          }

          .con {
            padding-top: 30px;
            margin: 0px;
            overflow: auto;
          }

          &:hover {
            .tt-item {
              border-radius: 54px;
              background: #1bcd8d;

              i {
                border: none;
                border-radius: 54px;
                color: #1bcd8d;
                box-shadow: 0px 0px 10px 0px rgba(27, 205, 141, 55);
              }

              img {
                color: #fff;
              }
            }

            .tt-text {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
