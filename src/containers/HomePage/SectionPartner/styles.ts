import styled from "styled-components";

export const ListPartner = styled.section`
  position: relative;
  z-index: 1;
  .module-dt {
    position: relative;

    .module-content {
      padding: 20px 70px;
      position: relative;

      .dt-menu {
        border-radius: 10px;
        box-shadow: 0 10px 45px rgba(29, 64, 125, 0.25);
        background: linear-gradient(
          to bottom right,
          #2af19f 0,
          #fff 35%,
          #fff 65%,
          #2bf19f 100%
        );
        position: relative;
        // z-index      : 1;

        &::before {
          content: "";
          position: absolute;
          background: #fff;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 10px;
        }

        .dt-menu-con {
          position: relative;
          background-image: url(../images/banner-dt.png);
          background-size: 100%;
          height: 100%;

          .dt-item {
            padding: 10px 0;
            text-align: center;
            position: relative;

            .dt-about {
              padding: 24px 0 10px 0;

              .dt-title {
                padding-right: 14px;
                margin: 0px;
                padding-bottom: 20px;
                font-family: "montse";
                font-size: 21px;
              }

              .dt-img {
                padding: 15px 0;
                display: inline-flex;

                .dt-logo {
                  padding: 0 22px;
                  // background: #fff;

                  img {
                    padding: 0px 1px;
                    max-width: 100%;
                    box-shadow: 0 10px 30px rgba(23, 48, 92, 0.2);

                    &:hover {
                      box-shadow: 0 0px 15px rgba(66, 73, 95, 0.15);
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

  @media only screen and (max-width: 1199px) {
    padding-top: 30px;

    .module-dt {
      .module-content {
        .dt-menu {
          .dt-menu-con {
            .dt-item {
              .dt-about {
                .dt-title {
                  font-size: 21px;
                  padding-right: 0px;
                }
              }
            }
          }
        }
      }
    }

    // end section-dt
  }

  @media only screen and (max-width: 991px) {
    .module-dt {
      .module-content {
        padding: 20px 70px 20px;

        .dt-menu {
          .dt-menu-con {
            .dt-item {
              .dt-about {
                .dt-title {
                  font-size: 19px;
                  padding-bottom: 15px;
                  padding-right: 0px;
                }

                .dt-img {
                  .dt-logo {
                    padding: 0 12px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // end section-dt
  }

  @media only screen and (max-width: 767px) {
    .module-dt {
      .module-content {
        padding: 15px 35px 20px;

        .dt-menu {
          .dt-menu-con {
            .dt-item {
              .dt-about {
                .dt-title {
                  font-size: 13px;
                  padding-bottom: 4px;
                  padding-right: 0px;
                }

                .dt-img {
                  .dt-logo {
                    padding: 0 14px;
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
    padding: 0px;
    .module-dt {
      .module-content {
        padding: 10px 5px;

        .dt-menu {
          .dt-menu-con {
            .dt-item {
              .dt-about {
                .dt-title {
                  font-size: 13px;
                  padding-bottom: 4px;
                  padding-right: 0px;
                }

                .dt-img {
                  .dt-logo {
                    padding: 0 10px;
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
