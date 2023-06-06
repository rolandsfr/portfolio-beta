import styled from "styled-components";
import { Container } from "../../styled/misc";
import Cta from "../blocks/Cta";
import Image from "next/image";
import useScreenSize from "../../hooks/useScreenSize";
import { useEffect, useRef } from "react";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  h1 {
    font-size: 5rem;
    font-family: "Playfair Display";
    font-weight: 600;
    max-width: 750px;
    line-height: 1.5;
    flex-wrap: wrap;
    margin-top: 20%;
    margin-bottom: 0.2em;

    b {
      font-weight: 800;
    }
  }

  .name {
    margin-top: 15%;
    h2 {
      font-size: 2.5rem;
    }

    p {
      color: #3a3a3a;
      margin-top: -0.2em;
    }
  }

  .info {
    z-index: 1;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100% !important;
  }

  .image {
    position: absolute;
    right: 0;
    z-index: 0;
    height: 100%;
    width: 450px;

    .image-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    @media only screen and (max-width: 1025px) {
      min-height: auto !important;
      .name {
        order: 1;
        margin-top: 0em;
      }

      h1 {
        order: 2;
        font-size: 2.5rem;
        width: 100% !important;
        margin-top: 58vh;
      }

      .info {
        justify-content: right !important;
        height: auto !important;
      }

      ${Container} {
        flex-direction: column;
      }

      .cta-wrapper {
        order: 3;
        margin-top: 1.5em;
        width: 100%;
        margin-bottom: 5em;

        .overlay {
          width: 5em;
          left: 8em;
        }

        & > div {
          width: 100%;
        }
      }

      .image,
      .image-wrapper {
        height: 50vh !important;
        width: 100% !important;
        padding-right: 15px;
        padding-left: 15px;
        top: 4.7em !important;
      }

      .foreground {
        transform: scale(1.6);
        bottom: 4em !important;
      }

      .background {
        opacity: 0.08;
      }
    }

    @media only screen and (min-width: 1024px) and (min-height: 800px) {
      .image-wrapper {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 85%;
        right: 0;
        bottom: 0;
      }
    }

    .background-container {
      width: 100%;
      height: 95%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-top-right-radius: 170px;
      border-top-left-radius: 170px;
      overflow: hidden;
      background-image: url("/lnb_background.jpg");
      background-size: 300%;
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
    }

    .foreground {
      position: absolute;
      right: 0;
      bottom: 50px;
      height: 350px;
      width: 500px;

      img {
        width: 100%;
        height: 100%;
        transform: scale(1.5);
      }
    }
  }

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  // tablet portrait mode & phone
  @media only screen and (min-width: 320px) and (min-height: 400px) and (max-width: 900px) {
    .image-wrapper {
      width: 100%;
    }

    .image {
      width: 95%;
      left: 50%;
      transform: translateX(-50%);
      top: 0em;

      div.background-container {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        height: 100%;
        top: 0 !important;
      }

      .foreground {
        img {
          transform: scale(0.9);
        }
      }
    }

    .info {
      height: auto;

      h1 {
        margin-top: 0;
      }
    }
  }

  @media only screen and (max-width: 920px) and (min-height: 1000px) {
    .name {
      margin-top: 10em !important;
    }

    .image {
      margin-top: 5em;
    }
  }

  /* Additional specific media quires */

  /* Galaxy fold */

  @media only screen and (max-width: 280px) and (max-height: 660px) {
    .image {
      top: 1.5em !important;
    }
  }

  @media only screen and (width: 717px) and (max-height: 520px) {
    h1 {
      margin-top: 62vh !important;
    }
  }

  /* Nest Hub */

  @media only screen and (width: 1024px) and (height: 600px) {
    h1 {
      margin-top: 77vh !important;
    }

    .foreground {
      bottom: 0em !important;
    }
  }
`;

const Hero: React.FC = () => {
  const { deviceType, orientation } = useScreenSize();
  const imageSection = useRef<HTMLDivElement | null>(null);

  return (
    <Section>
      <Container>
        <div
          className="info"
          style={
            deviceType == "tablet" || deviceType == "mobile"
              ? {
                  marginTop:
                    (imageSection.current?.clientHeight as number) + 100,
                }
              : {}
          }
        >
          <h1 data-scroll data-scroll-speed={1.5}>
            Providing luxurious quality web experiences is my <b>duty</b> rather
            than a hobby.
          </h1>
          <div data-scroll data-scroll-speed={2} className="cta-wrapper">
            <Cta link={"/"}>Explore my portfolio</Cta>
          </div>

          <div className="name" data-scroll data-scroll-speed={0.6}>
            <h2>Roland Fridemanis</h2>
            <p>UX/UI Designer & Fullstack developer</p>
          </div>
        </div>

        <div className="image">
          <div className="image-wrapper">
            <div className="background-container">
              <div
                ref={imageSection}
                className="background"
                data-scroll
                data-scroll-speed={2}
              ></div>
            </div>
            <div className="foreground" data-scroll data-scroll-speed={-0.5}>
              <Image alt="Self" src="/lnb_foreground.png" layout="fill" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
