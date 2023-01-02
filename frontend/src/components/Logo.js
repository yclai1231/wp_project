import styled from "styled-components";
import "./.css";

const LogoImg = styled.div`
  margin: 2vmin;
  width: max(120px, 32vmin);
  height: calc(max(120px, 32vmin) * 0.75);
  position: relative;
  border-radius: 50%;
  border-width: 1vmin;
  border-style: double;
  border-color: darkgoldenrod;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-image: url(${({ img }) => img});
`;

export default function Logo({ img }) {
  return <LogoImg img={img}></LogoImg>;
}