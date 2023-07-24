import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo';

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
`;

function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faInstagram} size="2px" />
        </Column>
        <Column>
          {isLoggedIn ? (
            <>
              <Icon>
                <FontAwesomeIcon icon={faHome} size="1g" />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faCompass} size="1g" />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faUser} size="1g" />
              </Icon>
            </>
          ) : null}
        </Column>
      </Wrapper>
    </SHeader>
  );
}

export default Header;
