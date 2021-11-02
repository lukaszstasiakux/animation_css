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

const AnimationFill = (props) => {
  const [animation, changeParam] = useState(["", "", "", ""]);

  const onClick = () => {
    changeParam([
      { name: moveBall, fillMode: "none", count: 1 },
      { name: moveBall, fillMode: "forwards", count: 1 },
      { name: moveBall, fillMode: "backwards", count: 1 },
      { name: moveBall, fillMode: "both", count: 1 },
    ]);
  };

  return (
    <SingleWrapper>
      <HeaderBar>
        <BackButton to="/"> {`< back`} </BackButton>
        <Button onClick={() => onClick()} label="play" />
      </HeaderBar>
      <Content>
        <Ball animation={animation[0]} label="none" />
        <Ball animation={animation[1]} label="forwards" />
        <Ball animation={animation[2]} label="backwards" />
        <Ball animation={animation[3]} label="both" />
      </Content>
    </SingleWrapper>
  );
};

export default AnimationFill;
