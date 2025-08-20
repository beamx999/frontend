import Carousel from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Carousel />
      <h1
  className="display-4 fw-bold mb-3"
  style={{
    color: '#ffffff',
    textShadow: '0 0 5px rgba(102, 255, 0, 0.8), 0 0 10px rgba(0, 255, 200, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
    filter: 'drop-shadow(0 0 10px rgba(255, 0, 85, 0.7))'
  }}
><center>
  Mr.Thanakit Supanya
</center></h1>
      <Card />
    </>
  );
}