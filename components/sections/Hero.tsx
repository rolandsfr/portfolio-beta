import styled from "styled-components";
import { Container } from "../../styled/misc";
import Cta from "../blocks/Cta";
import Image from "next/image";

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
      background-color: green;
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
      width: 500px !important;

      img {
        width: 100%;
        height: 100% !important;
        transform: scale(1.5) !important;
      }
    }
  }

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-height: 1000px) {
    .image {
      top: 53% !important;
    }

    .info {
      margin-top: -5em;
    }
  }

  @media only screen and (min-width: 1025px) {
    .image {
      top: 50%;
      transform: translateY(-50%);
    }
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
      transform: scale(1.6) !important;
      bottom: 4em !important;
    }

    .background {
      border-radius: 0 !important;
      opacity: 0.08;
    }
  }

  @media only screen and (max-width: 920px) and (max-height: 450px) {
    .image-wrapper {
      height: 80vh !important;
    }

    h1 {
      margin-top: 100vh;
    }

    .foreground {
      transform: scale(0.8) !important;
      bottom: -30vh !important;
    }
  }

  @media only screen and (max-width: 920px) and (min-height: 1000px) {
    .name {
      margin-top: 5em !important;
    }

    h1 {
      margin-top: 55vh !important;
    }

    .foreground {
      transform: scale(1.2) !important;
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

  @media only screen and (max-width: 1025px) and (max-height: 768px) {
    .image {
      height: 49vh !important;
      width: 100% !important;
      padding-right: 15px;
      padding-left: 15px;
      /* top: 45% !important; */
    }

    .image-wrapper {
      margin-top: -0.4em !important;
    }

    .name {
      /* margin-top: 13em !important; */
    }

    .info {
      width: 94%;
    }

    .foreground {
      /* top: 0em; */
      bottom: -60% !important;
      transform: scale(1) !important;
    }
  }

  @media only screen and (max-width: 540px) and (max-height: 740px) {
    .foreground {
      /* top: 0em; */
      bottom: 1em !important;
      transform: scale(1.3) !important;
    }
  }

  @media only screen and (min-width: 768px) and (min-height: 768px) and (max-width: 1024px) {
    min-height: 100vh;

    .image-wrapper {
      height: 70vh !important;
    }

    .foreground {
      /* top: 0em; */
      bottom: 1em !important;
      transform: scale(1.3) !important;
    }

    h1 {
      margin-top: 76vh !important;
    }

    .cta {
      width: auto !important;
    }
  }

  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    h1 {
      margin-top: 75vh !important;
    }

    .foreground {
      transform: scale(1.1) !important ;
      margin-bottom: -10em;
    }
  }

  @media only screen and (max-width: 300px) and (min-height: 600px) {
    .image {
      margin-top: 9vh;
    }

    .foreground {
      transform: scale(2) !important;
      margin-bottom: 4em;
    }

    .name {
      h2 {
        line-height: 1.3;
      }
      p {
        margin-top: 0.4em;
      }
    }
  }

  @media only screen and (min-width: 1024px) and (max-height: 800px) {
    .image-wrapper {
      height: 67vh !important;
    }

    .foreground {
      margin-bottom: -25em !important;
    }
  }

  @media only screen and (min-width: 1200px) and (max-height: 800px) {
    .name {
      margin-top: 7em !important;
    }

    .image {
      bottom: -8em !important;
    }

    .image-wrapper {
      height: 80vh !important;
    }

    .foreground {
      margin-bottom: 0em !important;
    }

    h1 {
      margin-top: 20vh !important;
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
  return (
    <Section>
      <Container>
        <div className="info">
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
