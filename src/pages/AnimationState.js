import React, { useState } from "react";
import { moveBall } from "../helpers/animation";
import Ball from "../components/Ball";
import { Content, SingleWrapper, HeaderBar } from "../components/common";
import Button from "../components/Button";

const AnimationState = (props) => {
  const [animation, changeParam] = useState([""]);

  const play = () => {
    changeParam([{ name: moveBall, playState: "running" }]);
  };
  const paused = () => {
    changeParam([{ name: moveBall, playState: "paused" }]);
  };

  return (
    <SingleWrapper>
      <HeaderBar>
        <Button onClick={() => play()} label="play" />
        <Button onClick={() => paused()} label="pause" />
      </HeaderBar>
      <Content>
        <Ball animation={animation[0]} label="play / pause" />
      </Content>
    </SingleWrapper>
  );
};

export default AnimationState;
