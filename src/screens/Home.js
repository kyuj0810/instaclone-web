function Home({ setIsLoggendIn }) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setIsLoggendIn(false)}>Log out now!</button>
    </div>
  );
}
export default Home;
