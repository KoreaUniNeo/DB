import styled from "styled-components";

interface BackgroundImg {
  url: string;
}

export const FooterWrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  justify-content: space-around;
  background-color: #ffffff;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1280px;
`;
export const Logo = styled.div`
  height: 35px;
  font-size: 17px;
  color: #3c3c3c;
`;

export const Box1 = styled.div`
  display: flex;
  width : 100%
  align-items:center;
  justify-content: space-between;
`;

export const Box2 = styled.div`
display: flex;
width : 100%
align-items:center;
justify-content: left;
margin-top : 20px;
`;

export const Box3 = styled.div`
display: flex;
width : 100%
align-items:center;
justify-content: center;
`;

export const FooterItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #3c3c3c;
  margin-left: 5%;
`;

export const FooterItem = styled.div`
  border-radius: 10px;
  cursor: pointer;
  x :hover {
  }

  :active {
  }
  & + & {
    margin-left: 30px;
  }
  color: #3c3c3c;
  font-size: 14px;
`;

export const Info1 = styled.div`
  text-align: left;
  vertical-align: center;
  line-height: 24px;
  font-weight: normal;
  color: #3c3c3c;
  font-size: 12px;
  #bold {
    color: #3c3c3c;
    font-weight: bold;
  }
`;
export const SnsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Sns = styled.button<BackgroundImg>`
  border-radius: 30px;
  height: 31px;
  width: 31px;
  cursor: pointer;
  & + & {
    margin-left: 17px;
  }
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Info2 = styled.div`
  color: #3c3c3c;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
`;

export const HrWrapper = styled.div`
  margin: 30px;
`;
