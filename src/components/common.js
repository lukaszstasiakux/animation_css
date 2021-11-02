import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const Area = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  color: #fdfdfd;
  text-align: left;
`;
export const SingleWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const HeaderBar = styled.div`
  display: flex;
	align-items: center;
`;
export const DemoContent = styled.div`
  border-top: 6px solid #fdfdfd;
  max-width: 400px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  flex-direction: row;
`;
export const BackButton = styled(Link)`
	color:#ffffff;
	width:90px;
`;
