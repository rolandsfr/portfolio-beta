import styled from "styled-components";
import Link from "next/link";

interface CtaProps {
  link: string;
  children: React.ReactNode;
}

const CtaContainer = styled.div`
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  * {
    transition: 0.3s all;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    z-index: 2;
    width: 60%;
    height: 50%;
    right: -1.3em;
    top: 0.3em;
    bottom: 0;
    background-color: #e1c3ec;
  }

  span {
    position: relative;
    z-index: 3;
  }

  .underline {
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: -0.7em;
    background: #000;
  }

  .arrow {
    margin-top: -0.3em;
    margin-right: 0.5em;
  }

  &:hover {
    .arrow {
      margin-right: 0.8em;
    }

    .overlay {
      width: 70%;
    }
  }
`;

const Cta: React.FC<CtaProps> = ({ link, children }) => {
  return (
    <CtaContainer className="cta">
      <div className="overlay"></div>
      <Link href={link}>
        <span>
          <span className="arrow">→</span> <span>{children}</span>
        </span>
      </Link>
      <div className="underline"></div>
    </CtaContainer>
  );
};

export default Cta;
