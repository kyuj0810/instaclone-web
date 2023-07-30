import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar, logUserOut } from '../apollo';
import { useEffect } from 'react';

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  // 사용자가 Local Storage를 통해 로그인 한 경우에만 실행되는 query
  const { data } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });

  //useEffect 는 hook가 마운트되면 한 번 실행되고, 데이터가 변경될 때 마다 실행됨.
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return { data };
}
export default useUser;
