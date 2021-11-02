import React, { useState } from "react";
import { moveBall } from "../helpers/animation";
import Ball from "../components/Ball";
import { Content, SingleWrapper, HeaderBar,BackButton } from "../components/common";
import Button from "../components/Button";

const AnimationDelay = (props) => {
  const [animation, changeParam] = useState(["", "", ""]);

  const onClick = () => {
    changeParam([
      { name: moveBall, delay: "0" },
      { name: moveBall, delay: "1s" },
      { name: moveBall, delay: "2s" },
    ]);
  };

  return (
    <SingleWrapper>
      <HeaderBar>
        <BackButton to="/" > {`< back`} </BackButton>
        <Button onClick={() => onClick()} label="play" />
      </HeaderBar>
      <Content>
        <Ball animation={animation[0]} label="0s" />
        <Ball animation={animation[1]} label="1s" />
        <Ball animation={animation[2]} label="2s" />
      </Content>
    </SingleWrapper>
  );
};

export default AnimationDelay;
