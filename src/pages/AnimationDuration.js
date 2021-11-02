import React, { useState } from "react";
import { moveBall } from "../helpers/animation";
import Ball from "../components/Ball";
import {
  Content,
  SingleWrapper,
  HeaderBar,
  BackButton,
} from "../components/common";
import Button from "../components/Button";

const AnimationDuration = (props) => {
  const [animation, changeParam] = useState(["", ""]);

  const onClick = () => {
    changeParam([
      { name: moveBall, duration: "3s" },
      { name: moveBall, duration: "1s" },
    ]);
  };

  return (
    <SingleWrapper>
      <HeaderBar>
        <BackButton to="/"> {`< back`} </BackButton>
        <Button onClick={() => onClick()} label="play" />
      </HeaderBar>
      <Content>
        <Ball animation={animation[0]} label="3s" />
        <Ball animation={animation[1]} label="1s" />
      </Content>
    </SingleWrapper>
  );
};

export default AnimationDuration;
