import styled from "styled-components";

export const ListContactMap = styled.section`
  overflow: hidden;
  .map-content {
    .map-menu {
      iframe {
        width: 100%;
      }
    }

    .map-about {
      background: #1bcd8d;
      position: relative;

      .map-tt {
        padding: 27px 41px 0px 28px;

        .title {
          padding-top: 5px;
          margin: 0px;
          color: #fff;
          font-family: "OpenSansc- bold";
          font-size: 25px;
        }

        .map-text {
          margin: 0px;
          padding-top: 5px;
          padding-bottom: 10px;
          color: #fff;
          padding-left: 1px;
          font-size: 15px;
        }

        .map-input {
          padding-bottom: 66px;

          .input1 {
            padding: 6px 0;

            input {
              width: 37%;
              background: #56d8ab;
              border: none;
              margin-right: 10px;
              padding: 7px 7px 7px 17px;
              ::placeholder {
                color: #fff;
              }
            }
          }

          .input2 {
            padding-top: 9px;

            .ip2 {
              background: #56d8ab;
              color: #fff;
              width: 75.6%;
              border: none;
              padding-top: 20px;
              padding-bottom: 100px;
              padding: 4px 6px 92px 15px;
              ::placeholder {
                color: #fff;
              }
            }

            button {
              width: 75.6%;
              margin-top: 10px;
              background: #fff;
              padding: 10px 0;
              color: #000;
              font-family: "OpenSansc";
              font-family: "OpenSansc";
              padding: 10px 38px 5px 0px;
              border: none;
            }
          }
        }
      }

      .map-menu1 {
        &::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -159px;
          width: 0;
          height: 100%;
          border-top: 0px solid transparent;
          border-bottom: 452px solid #1bcd8d;
          border-left: 159px solid transparent;
          border-right: 0px solid transparent;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .map-content {
      .map-about {
        margin-left: -43px;
        .map-tt {
          .title {
            padding-left: 3px;
          }
          .map-text {
            padding-left: 5px;
          }
          .map-input {
            padding-top: 13px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .map-content {
      .map-menu {
        iframe {
          width: 100%;
          height: 382px;
        }
      }

      .map-about {
        .map-tt {
          padding: 27px 41px 0px 10px;
          .title {
            padding-top: 2px;
            font-size: 22px;
          }

          .map-input {
            padding-top: 10px;
            padding-bottom: 53px;

            .input1 {
              input {
                width: 38%;
                font-size: 13px;
                padding: 5px 10px;
              }
            }

            .input2 {
              .ip2 {
                width: 79%;
                border: none;
                padding: 10px 10px 55px;
                font-size: 13px;
              }

              button {
                width: 79%;
                font-size: 13px;
                padding: 10px 0;
              }
            }
          }
        }

        .map-menu1::after {
          top: -70px;
          left: -149px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .map-content {
      .map-about {
        .map-tt {
          padding: 30px 52px 50px;

          .title {
            padding-top: 2px;
            font-size: 23px;
          }

          .map-input {
            padding-top: 15px;
            padding-bottom: 0px;

            .input1 {
              input {
                width: 42%;
                font-size: 13px;
                padding: 10px;
              }
            }

            .input2 {
              .ip2 {
                width: 86%;
                border: none;
                padding: 20px 10px 70px;
                font-size: 13px;
              }

              button {
                width: 86%;
                font-size: 13px;
                padding: 10px 0;
              }
            }
          }
        }

        .map-menu1::after {
          content: "";
          top: 0;
          left: -158px;
          border-top: 0 solid transparent;
          border-bottom: 386px solid #1bcd8d;
          border-left: 159px solid transparent;
          border-right: 0 solid transparent;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 480px) {
    .map-content {
      .map-about {
        .map-tt {
          padding: 30px 35px 40px;

          .title {
            padding-top: 2px;
            font-size: 21px;
          }

          .map-input {
            padding-bottom: 0px;

            .input1 {
              input {
                width: 42%;
                font-size: 13px;
                padding: 10px;
              }
            }

            .input2 {
              .ip2 {
                width: 86%;
                border: none;
                padding: 20px 10px 50px;
                font-size: 13px;
              }

              button {
                width: 86%;
                font-size: 13px;
                padding: 10px 0;
              }
            }
          }
        }

        .map-menu1::after {
          content: "";
          top: 0;
          left: -158px;
          border-top: 0 solid transparent;
          border-bottom: 386px solid #1bcd8d;
          border-left: 159px solid transparent;
          border-right: 0 solid transparent;
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .map-content {
      .map-about {
        .map-tt {
          padding: 30px 15px 40px;

          .title {
            padding-top: 2px;
            font-size: 20px;
          }

          .map-input {
            padding-bottom: 0px;

            .input1 {
              padding: 0px;

              input {
                width: 100%;
                font-size: 13px;
                padding: 10px;
                margin-bottom: 15px;
              }
            }

            .input2 {
              padding: 0px;

              .ip2 {
                width: 100%;
                border: none;
                padding: 20px 10px 50px;
                font-size: 13px;
              }

              button {
                width: 100%;
                font-size: 13px;
                padding: 10px 0;
              }
            }
          }
        }

        .map-menu1::after {
          content: "";
          top: 0;
          left: -158px;
          border-top: 0 solid transparent;
          border-bottom: 386px solid #1bcd8d;
          border-left: 159px solid transparent;
          border-right: 0 solid transparent;
        }
      }
    }
  }
`;
