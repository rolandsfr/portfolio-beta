import styled from "styled-components";
import { Container } from "../../styled/misc";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { useSpring, animated, to } from "react-spring";

const NavbarStyled = styled.div`
  padding: 6em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .initials {
    display: flex;
    gap: 1.3em;
    align-items: center;
    .name {
      font-weight: 600;
      line-height: 1;
      margin-top: -0.4em;
    }
  }

  nav {
    .close {
      display: none;
    }

    ul {
      font-size: 0;
      display: flex;
    }

    li {
      list-style: none;
      display: inline-block;
      margin-right: 3.8em;

      .nr,
      .slogan {
        display: none;
      }

      &:last-child {
        margin-right: -0em;
      }

      a {
        color: #000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .initials-watermark {
    display: none;
  }

  .burger {
    display: none;
  }

  .nav-wrapper {
    justify-content: end;
    display: flex;
  }

  @media only screen and (max-width: 768px),
    (max-width: 920px) and (max-height: 1400px),
    (max-width: 1025px) and (max-height: 768px) {
    padding: 2em 0em;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(15px);

    .burger {
      cursor: pointer;
      display: block;
      padding-right: 1em;

      svg {
        font-size: 2em;
      }
    }

    nav {
      width: 100vw;
      height: 100vh;
      background: #f9f9f9;
      position: fixed;
      z-index: 30;
      left: 100%;
      top: 0;
      right: 0;
      overflow: hidden;

      .nav-wrapper {
        position: relative;
        width: 100vw;
        height: 100vh;
        padding-left: 20vw;
        display: block !important;
      }

      .initials-watermark {
        position: absolute;
        gap: 1.3em;
        align-items: center;
        opacity: 2%;
        height: 200px;
        width: 100%;
        clear: both;
        display: block;

        span,
        img {
          width: 25vw !important;
          height: 25vw !important;
          overflow: visible !important;
          float: left;
          margin-bottom: -13vw !important;
          margin-right: 12vw !important;
        }

        .name {
          font-weight: 800;
          line-height: 1;
          margin-top: -0.8em;
          float: right;
          p {
            font-size: 15vw;
          }
        }

        transform: rotate(90deg);
        transform-origin: top center;
        margin: 0;
        padding: 0;

        &:first-child {
          left: -14vw;
          top: 24vw;
        }

        &:last-child {
          left: 69vw;
          bottom: -25vw;
        }
      }

      .close {
        display: flex;
        align-items: center;
        gap: 1em;
        position: absolute;
        top: 5em;
        cursor: pointer;

        svg {
          font-size: 1.6rem !important;
          font-weight: 400 !important;
        }
        span {
        }
      }

      ul {
        flex-direction: column;
        position: absolute;
        bottom: 9%;
        padding: 0 !important;
      }

      li {
        margin-top: 30%;
        margin-right: 0 !important;

        .nr,
        .slogan {
          display: inline-block;
        }

        .slogan {
          font-size: 1.4rem;
          color: #3e3e3e;
        }

        .point {
          margin-bottom: -1.8em;
          display: block;
          position: relative;

          .highlight {
            position: absolute;
            left: 0;
            top: 70%;
            transform: translateY(-50%);
            height: 30%;
            width: 0%;
            z-index: -1;
            background: linear-gradient(
              90deg,
              rgba(241, 241, 241, 1) 0%,
              rgba(0, 0, 0, 1) 100%,
              rgba(0, 0, 0, 1) 100%
            );
            opacity: 0.2;
            transition: 0.4s all ease-in-out;
          }

          * {
            font-family: "Playfair Display";
            font-weight: 600;
          }

          .nr {
            span:last-child {
              font-size: 3.3rem;
            }
          }

          .point-name {
            font-size: 2.5rem;
            margin-left: 0.1em;
          }
        }

        &.active {
          .highlight {
            width: 40% !important;
          }
        }

        &::hover {
          .highlight {
            display: none !important;
            width: 40% !important;
          }
        }

        a {
          &:hover {
            text-decoration: none;
            .highlight {
              width: 40% !important;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) and (max-height: 500px) {
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(15px);
    padding: 3em 0;
  }

  @media only screen and (max-width: 920px) and (max-height: 500px) {
    .nav-wrapper {
      padding-left: 8em !important;
      align-items: center;
    }

    nav {
      ul {
        justify-content: center;
        position: absolute;
        bottom: 0;
        top: 0;
        li {
          margin-top: 0em !important;
          transform: scale(0.7);

          &:first-child {
            margin-top: -0.5em !important;
          }
        }
      }
    }

    .close {
      right: 7em;
      bottom: -17em;
      transform: scale(0.9);
      z-index: 10000;
    }
  }
`;

const Navbar: React.FC = () => {
  const [navStyles, navApi] = useSpring(() => ({
    left: "100%",
  }));

  const [upperStyles, upperApi] = useSpring(() => ({
    marginTop: "-90%",
  }));

  const [lowerStyles, lowerApi] = useSpring(() => ({
    marginLeft: "50%",
  }));

  return (
    <NavbarStyled>
      <Container>
        <div className="initials">
          <Image src={"/Logo.svg"} width={25} height={50} />
          <div className="name">
            <p>
              Roland <br /> Fridemanis
            </p>
          </div>
        </div>
        <animated.nav style={navStyles}>
          <div className="nav-wrapper">
            <animated.div style={upperStyles} className="initials-watermark">
              <Image src={"/Logo.svg"} width={120} height={120} />
              <div className="name">
                <p>
                  Roland <br /> Fridemanis
                </p>
              </div>
            </animated.div>
            <div
              className="close"
              onClick={() => {
                navApi.start({
                  left: "100%",
                });

                upperApi.start({
                  marginTop: "-90%",
                });

                lowerApi.start({
                  marginLeft: "50%",
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
              <span>Close</span>
            </div>
            <ul>
              <li className="active">
                <a href="#">
                  <span className="point">
                    <span className="highlight"></span>
                    <span className="nr">
                      <span>0</span> <span>1</span>{" "}
                    </span>{" "}
                    <span className="point-name">Home</span>
                  </span>{" "}
                  <br />
                  <span className="slogan">Back to start</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="point">
                    <span className="highlight"></span>
                    <span className="nr">
                      <span>0</span> <span>2</span>{" "}
                    </span>{" "}
                    <span className="point-name">Portfolio</span>
                  </span>
                  <br />
                  <span className="slogan">View my best works</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="point">
                    <span className="highlight"></span>
                    <span className="nr">
                      <span>0</span> <span>3</span>{" "}
                    </span>{" "}
                    <span className="point-name">About me</span>
                  </span>
                  <br />
                  <span className="slogan">Get to know me closer</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="point">
                    <span className="highlight"></span>
                    <span className="nr">
                      <span>0</span> <span>4</span>{" "}
                    </span>{" "}
                    <span className="point-name">Contact</span>
                  </span>
                  <br />
                  <span className="slogan">Get in touch now</span>
                </a>
              </li>
            </ul>

            <animated.div style={lowerStyles} className="initials-watermark">
              <Image src={"/Logo.svg"} width={100} height={100} />
              <div className="name">
                <p>
                  Roland <br /> Fridemanis
                </p>
              </div>
            </animated.div>
          </div>
        </animated.nav>
        <div
          className="burger"
          onClick={() => {
            navApi.start({
              left: "0",
            });

            upperApi.start({
              marginTop: "0",
            });

            lowerApi.start({
              marginLeft: "0",
            });
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
