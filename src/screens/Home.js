import { gql, useQuery } from '@apollo/client';
import Photo from '../components/feed/Photo';
import PageTitle from '../components/PageTitle';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments {
        createdAt
      }
      createdAt
      isMine
      isLiked
    }
  }
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}
export default Home;
/**
 key={photo.id}
 id={photo.id}
 user={photo.user}
 file={photo.file}
 isLiked={photo.isLiked}
 likes={photo.likes}
 => {...photo} 모든 key들이 똑같다면(모든 PropTypes가 photo의 properties와 같다면) {...photo}로 쉽게 해줄 수 있음
 
  
*/
