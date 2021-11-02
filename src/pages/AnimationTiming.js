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

const AnimationTiming = (props) => {
  const [animation, changeParam] = useState(["", "", "", "", "", ""]);

  const onClick = () => {
    changeParam([
      { name: moveBall, timing: "ease" },
      { name: moveBall, timing: "linear" },
      { name: moveBall, timing: "ease-in" },
      { name: moveBall, timing: "ease-out" },
      { name: moveBall, timing: "ease-in-out" },
      { name: moveBall, timing: "cubic-bezier(0.35, 0.63, 0.57, 0.18)" },
    ]);
  };

  return (
    <SingleWrapper>
      <HeaderBar>
        <BackButton to="/"> {`< back`} </BackButton>
        <Button onClick={() => onClick()} label="play" />
      </HeaderBar>
      <Content>
        <Ball animation={animation[0]} label="ease" />
        <Ball animation={animation[1]} label="linear" />
        <Ball animation={animation[2]} label="ease-in" />
        <Ball animation={animation[3]} label="ease-out" />
        <Ball animation={animation[4]} label="ease-in-out" />
        <Ball
          animation={animation[5]}
          label="cubic-bezier(0.35, 0.63, 0.57, 0.18)"
        />
      </Content>
    </SingleWrapper>
  );
};

export default AnimationTiming;
