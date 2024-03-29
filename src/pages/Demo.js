import React from "react";
import styled from "styled-components";
import {
  DemoContent,
  SingleWrapper,
  HeaderBar,
  BackButton,
} from "../components/common";
import { demoLeft, demoRight } from "../helpers/animation";

const Pendulum = styled.div`
  width: 4px;
  height: 200px;
  background-color: #fdfdfd;
  margin: 0px 18px;
  position: relative;
  transform-origin: center top;
  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    left: -20px;
    bottom: -39px;
    border-radius: 50%;
    background-color: #fdfdfd;
  }
  &:first-child {
    animation-name: ${demoLeft};
    animation-delay: 0;
    animation-direction: normal;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
  &:last-child {
    animation-name: ${demoRight};
    animation-delay: 1s;
    animation-direction: normal;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;
const Demo = (props) => {
  return (
    <SingleWrapper>
      <HeaderBar>
        <BackButton to="/"> {`< back`} </BackButton>
      </HeaderBar>
      <DemoContent>
        <Pendulum />
        <Pendulum />
        <Pendulum />
        <Pendulum />
        <Pendulum />
      </DemoContent>
    </SingleWrapper>
  );
};

export default Demo;
