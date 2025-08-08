import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to MyStore</h1>
        <p>Explore amazing products at the best prices!</p>
      </div>
    </>
  );
}
