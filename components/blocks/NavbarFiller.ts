import styled from "styled-components";

const NavbarFiller = styled.div`
  width: 100%;
  height: 9em;

  @media only screen and (min-width: 1025px) {
    display: none;
  }

  @media only screen and (max-width: 920px) and (max-height: 600px) {
    height: 13em;
  }
  @media only screen and (max-width: 920px) and (min-height: 1300px) {
    height: 13em;
  }

  @media only screen and (min-width: 768px) and (min-height: 768px) {
    height: 13em;
  }

  @media only screen and (max-width: 920px) and (min-height: 1000px) {
    height: 5em;
  }
`;

export default NavbarFiller;
