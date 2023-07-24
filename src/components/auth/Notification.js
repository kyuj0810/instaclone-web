import { styled } from 'styled-components';

const SNotification = styled.span`
  color: #2ecc71;
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0px 0px 0px;
`;

function Notification({ message }) {
  return message === '' || !message ? null : (
    <SNotification>{message}</SNotification>
  );
}

export default Notification;
