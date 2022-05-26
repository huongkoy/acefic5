import styled from "styled-components";

export const ListHeaderPage = styled.section`
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  .headerTop {
    /* padding-bottom: 45px; */
    padding-bottom: 9px;
    width: 100%;
    position: relative;
    background: #1d407d;
    z-index: 2;

    .top-content {
      .header-social {
        float: left;
        color: #fff;
        margin-right: 12px;
        .header-phone {
          padding-top: 11px;
          padding-left: 7px;
        }
        img {
          float: left;
          max-width: 100%;
          padding-top: 6px;
        }

        .phone-text {
          color: #fff;
          margin: 0px;
          padding-left: 15px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          padding-top: 3px;
        }
      }
      .header-conect {
        float: right;
        .show__top {
          display: none;
        }
        .menu-top {
          .menu-item {
            float: left;
            clear: left;
            padding-top: 5px;
            position: relative;
            padding-right: 9px;
            li {
              display: inline-table;
              padding: 0 6px;
              position: relative;
              z-index: 1;
            }
            .menu-about {
              input {
                border: none;
                border-radius: 30px;
                font-style: italic;
                height: 24px;
                font-size: 11px;
                width: 177px;
                padding-left: 15px;
              }

              i {
                position: absolute;
                top: 6px;
                right: 14px;
                font-size: 13px;
                color: #21c16c;
              }
            }
            .menu-nation {
              .nation-about {
                padding: 5px 2px 3px;
                background: #fff;

                .nation-item {
                  img {
                    margin: -4px 0 0 3px;
                    max-width: 100%;
                  }

                  select {
                    width: 20px;
                    background: none;
                    border: none;
                    color: #000;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .headerNav {
    padding: 12px 3px 12px 2px;
    /* position: fixed; */
    width: 100%;
    z-index: 1;
    border-top: 1px solid #cdd3e9;
    transition: padding 0.5s ease, color 1s ease;
    &.sticky {
      background: #fff;
      padding: 12px 0;
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border-top: 0px;
      .nav-content .nav .menu .header-ul .header-li .header-a {
        padding: 9px 12px;
      }
    }
    .nav-content {
      .logo {
        float: left;
        img {
          max-width: 100%;
          padding-top: 3px;
        }
      }
      .nav {
        float: right;

        .show__menu {
          display: none;
        }

        .menu {
          .close__menu {
            display: none;
          }

          .header-ul {
            padding-top: 0px;
            // margin        : 0 -25px;
            margin: 0 -20px;
            float: left;
            // text-align : right;

            .header-li {
              float: left;
              padding: 16px 6px 14px;
              margin: 0 2px;
              overflow: hidden;
              position: relative;

              &::before {
                content: "";
                height: 2px;
                width: 100%;
                background: #1bcd8d;
                position: absolute;
                top: 0px;
                left: -100%;
                animation: menu-top infinite 1s linear;
                display: none;
              }

              &::after {
                content: "";
                width: 2px;
                height: 100%;
                background: #1bcd8d;
                position: absolute;
                top: -100%;
                right: 0%;
                animation: menu-right infinite 1s linear;
                animation-delay: 0.5s;
                display: none;
              }
              .header-a {
                text-decoration: none;
                color: #1d407d;
                font-family: "Open Sans", sans-serif;
                font-size: 15px;
                padding: 10px 12px;
                position: relative;

                &.active1 {
                  background: #1bcd8d;
                  color: #fff;
                }
                &::before {
                  content: "";
                  height: 2px;
                  width: 100%;
                  background: #1bcd8d;
                  position: absolute;
                  bottom: -7px;
                  right: calc(-100% - 6px);
                  animation: menu-left infinite 1s linear;
                  animation-delay: 1s;
                  display: none;
                }

                &::after {
                  content: "";
                  width: 2px;
                  height: 100%;
                  background: #1bcd8d;
                  position: absolute;
                  bottom: -100%;
                  left: -6px;
                  animation: menu-bottom infinite 1s linear;
                  animation-delay: 0.5s;
                  display: none;
                }
                &:hover {
                  color: #fff;
                  background: #1bcd8d;
                }
              }

              &.active,
              &:hover {
                &::before,
                &::after {
                  content: "";
                  display: block;
                }

                .header-a {
                  &::before,
                  &::after {
                    content: "";
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @keyframes menu-top {
    0% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  @keyframes menu-right {
    0% {
      top: -100%;
    }

    100% {
      top: 100%;
    }
  }

  @keyframes menu-bottom {
    0% {
      bottom: -100%;
    }

    100% {
      bottom: 100%;
    }
  }

  @keyframes menu-left {
    0% {
      right: -100%;
    }

    100% {
      right: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    .header-nav {
      .nav-content {
        .nav {
          .menu {
            .header-ul {
              .header-li {
                .header-a {
                  &.lh {
                    // margin: 0 0 0 2px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .header-banner {
      position: relative;

      .header-menu {
      }

      .header-menu-con {
        .header-about {
          .header-banner-from {
            max-width: 550px;
            padding-top: 215px;

            .from-menu {
              padding: 0 2px;

              .from-title {
                margin: 0px;
                padding: 18px 0;
                line-height: 59px;
                font-family: "OpenSansc- bold";
                color: #1d407d;
              }

              .from-text {
                padding: 21px 0 38px 0;
                margin: 0px;
                color: #1d619f;
                font-family: "OpenSansc";
                font-size: 24px;
              }

              .from-btn {
                background: #1bcd8d;
                color: #fff;
                border-radius: 0;
                padding: 10px 43px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .headerTop {
      .top-content {
        .header-social {
          .header-phone {
            padding-left: 0px;
            img {
              padding-top: 5px;
            }
            .phone-text {
              margin: 0;
              padding-left: 13px;
            }
          }
        }

        .header-conect {
          .menu-top {
            .menu-item {
              padding-right: 0px;

              li {
                padding: 0 3px 0 6px;

                .menu-nation {
                  .nation-about {
                    padding: 3px;
                  }
                }
              }

              .menu-about {
                i {
                  position: absolute;
                  top: 6px;
                  right: 8px;
                  font-size: 14px;
                  color: #21c16c;
                }
              }
            }
          }
        }
      }
    }

    .headerNav {
      &.sticky {
        .nav-content {
          .nav {
            .menu {
              .header-ul {
                padding-top: 10px;
                .header-li {
                  float: left;
                  padding: 11px 6px;
                  .header-a {
                    padding: 7px 7px;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
      .nav-content {
        .nav {
          .menu {
            .header-ul {
              padding-right: 10px;

              .header-li {
                float: left;
                padding: 11px 6px;

                .header-a {
                  padding: 7px 7px;
                  font-size: 14px;

                  &:hover {
                    // padding: 10px 17px;
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
    .headerTop {
      background: #1d407d;
      padding-top: 3px;

      .top-content {
        .header-social {
          .header-phone {
            padding: 7px 0 0 0;

            img {
              padding-top: 2px;
            }

            .phone-text {
              margin: 0;
              padding-left: 14px;
              font-size: 12px;
              color: #fff;
            }
          }
        }

        .header-conect {
          .menu-top {
            .menu-item {
              padding-right: 0px;

              li {
                padding: 0 0 0 5px;

                .menu-nation {
                  .nation-about {
                    padding: 3px;
                  }
                }
              }

              .menu-about {
                i {
                  position: absolute;
                  top: 6px;
                  right: 7px;
                  font-size: 14px;
                  color: #21c16c;
                }
                input {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }

    .headerNav {
      padding: 15px 0px;
      &.sticky {
        .nav-content {
          .nav {
            .menu {
              .header-ul {
                padding-top: 10px;
                .header-li {
                  padding-top: 0px;
                  .header-a {
                    padding: 5px 2px;
                    font-size: 13px;
                    color: #1d407d;
                  }
                }
              }
            }
          }
        }
      }

      .nav-content {
        .logo {
          img {
            padding: 0px;
            width: 150px;
          }
        }

        .nav {
          .menu {
            .header-ul {
              padding-top: 0px;
              padding-right: 13px;

              .header-li {
                padding: 9px 5px 9px;

                .header-a {
                  padding: 5px 2px;
                  font-size: 13px;
                  color: #1d407d;

                  &.active {
                    color: #1d407d;
                  }

                  &::before {
                    content: "";
                    height: 2px;
                    width: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -6px;
                    right: -5px;
                    animation: menu-left infinite 1s linear;
                    animation-delay: 1s;
                    display: none;
                  }

                  &::after {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -100%;
                    left: -5px;
                    animation: menu-bottom infinite 1s linear;
                    animation-delay: 0.5s;
                    display: none;
                  }

                  &:hover {
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .headerTop {
      z-index: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      background: #1d407d;

      .top-content {
        .header-social {
          .header-phone {
            padding: 7px 0 0 0;

            img {
              padding-top: 4px;
            }

            .phone-text {
              margin: 0;
              padding: 0 0 0 2px;
              font-size: 12px;
              color: #fff;
              display: inline-block;
            }
          }
        }

        .header-conect {
          padding: 5px 0;
          .menu-top {
            .menu-item {
              padding-right: 0px;
              padding-top: 0px;

              li {
                padding: 0px;

                .menu-nation {
                  .nation-about {
                    padding: 3px;
                  }
                }
              }

              .menu-about {
                padding: 2px 3px;

                input {
                  height: 23px;
                  font-size: 12px;
                  width: 100%;
                  padding-left: 5px;
                }
              }

              .menu-about {
                i {
                  position: absolute;
                  top: 7px;
                  right: 9px;
                  font-size: 14px;
                  color: #21c16c;
                }
              }
            }
          }
        }
      }
    }

    .headerNav {
      padding: 10px 0px 10px;
      background: #fff;
      z-index: 1000;
      position: relative;

      .nav-content {
        .logo {
          img {
            max-width: 100%;
            padding-top: 0px;
          }
        }

        .nav {
          .show__menu {
            display: block;
            color: #000;
            font-size: 30px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            .fas {
              width: 30px;
              height: 30px;
            }
          }

          .menu {
            position: fixed;
            top: 0;
            padding-top: 51px;
            z-index: 1;
            left: 0;
            background: #1d407d;
            height: 100%;
            overflow: auto;
            padding-right: 10px;
            padding-left: 10px;
            transform: translateX(-100%);
            transition: all 0.5s ease;

            &.active {
              transform: translateX(0);
            }

            .close__menu {
              display: block;
              color: #fff;
              font-size: 25px;
              position: absolute;
              top: 5px;
              right: 10px;
            }

            .menu-list {
              .menu-list__item {
                padding-left: 40px;
                padding-top: 16px;
                float: none;
              }
            }

            .header-ul {
              margin: 0px;
              padding: 0 10px;

              .header-li {
                text-align: left;
                float: none;
                padding: 6px 7px;
                margin: 10px 0;

                .header-a {
                  padding: 7px 10px;
                  display: block;
                  color: #fff;

                  &::before {
                    content: "";
                    height: 2px;
                    width: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -6px;
                    right: -5px;
                    animation: menu-left infinite 1s linear;
                    animation-delay: 1s;
                    display: none;
                  }

                  &::after {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -100%;
                    left: -7px;
                    animation: menu-bottom infinite 1s linear;
                    animation-delay: 0.5s;
                    display: none;
                  }

                  // font-size: 14px;
                  // color    : #fff;
                  // margin-left: 10px;
                  &.active {
                    // padding: 7px 20% 7px 5px;
                  }

                  &:hover {
                    // padding: 7px 20% 7px 5px;
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
    .headerTop {
      padding: 3px 0;
      background: #1d407d;
      z-index: 1000;

      .top-content {
        .header-social {
          .header-phone {
            height: 16px;
            padding-top: 14px;

            img {
              padding-top: 2px;
            }

            .phone-text {
              white-space: nowrap;
              color: #000;
              margin: 0;
              padding-left: 4px;
              color: #fff;
              font-size: 12px;
            }
          }
        }

        .header-conect {
          .menu-top {
            .menu-item {
              padding-right: 0px;

              li {
                padding: 3px 0 3px 0px;

                .menu-nation {
                  .nation-about {
                    padding: 2px;
                  }
                }
              }

              .menu-about {
                padding: 2px 0px;
                padding-right: 3px;

                input {
                  height: 23px;
                  font-size: 12px;
                }
              }

              .menu-about {
                i {
                  position: absolute;
                  top: 10px;
                  right: 9px;
                  font-size: 14px;
                  color: #21c16c;
                }
              }
            }
          }
        }
      }
    }

    .headerNav {
      padding-top: 10px;
      padding-bottom: 10px;

      .nav-content {
        .logo {
          img {
            max-width: 100%;
          }
        }

        .nav {
          .show__menu {
            display: block;
            color: #000;
            font-size: 30px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
          }

          .menu {
            position: fixed;
            top: 0;
            padding-top: 51px;
            left: 0;
            background: #1d407d;
            height: 100%;
            overflow: auto;
            padding-right: 10px;
            padding-left: 10px;
            transform: translateX(-100%);
            transition: all 0.5s ease;

            &.active {
              transform: translateX(0);
            }

            .close__menu {
              display: block;
              color: #fff;
              font-size: 25px;
              position: absolute;
              top: 5px;
              right: 10px;
            }

            .menu-list {
              .menu-list__item {
                padding-left: 40px;
                padding-top: 16px;
                float: none;
              }
            }

            .header-ul {
              margin: 0px;
              padding: 0 5px;

              .header-li {
                text-align: left;
                float: none;
                padding: 6px 7px;
                margin: 10px 0;

                .header-a {
                  padding: 5px 10px;
                  display: block;
                  color: #fff;

                  &::before {
                    content: "";
                    height: 2px;
                    width: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -6px;
                    right: -5px;
                    animation: menu-left infinite 1s linear;
                    animation-delay: 1s;
                    display: none;
                  }

                  &::after {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background: #1bcd8d;
                    position: absolute;
                    bottom: -100%;
                    left: -7px;
                    animation: menu-bottom infinite 1s linear;
                    animation-delay: 0.5s;
                    display: none;
                  }

                  // font-size: 14px;
                  // color    : #fff;
                  // margin-left: 10px;
                  &.active {
                    // padding: 7px 20% 7px 5px;
                  }

                  &:hover {
                    // padding: 7px 20% 7px 5px;
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
