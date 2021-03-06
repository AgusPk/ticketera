import styled from "@emotion/styled";


export const ModalContainer = styled.div`  
  background-color: #091e35;
  position: absolute;
  right: 50%;
  top: 79%;
  transform: translate(7.5%,10%); 
  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
`

export const TriangleContainer = styled.div`
  background-color: #091e35
`;

export const Triangle = styled.div`
  margin-left: 312px;
  width: 0;
  background-color: #091e35;
  border-bottom: 16px solid #132d46;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
`;

export const NotificationContainer = styled.div`
  background-color: #132d46;
  width: 360px;
  padding-top: 16px;
  min-height: 88px; 
  
`;

export const Notification = styled.p`
  float: right;
  text-align: left;
  margin: 0;
  height: 70px;
  width: 288px;
  padding-right: 48px;
  border-bottom: 1px solid #ffffff40;
  display: inline-block; 
  font-family: Montserrat;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
  opacity: 90%;
  

`;

export const AvatarContainer = styled.img`
  width: 40px;
  height: 40px;
  color: #ffffff;
  float: left;
  margin-left: 16px;
  margin-right: 16px;
  opacity: 40%;
`