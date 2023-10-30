import Carousel from "react-bootstrap/Carousel";
import handShakeImage from '../assets/hand-shake.jpg';
import turnTableImage from '../assets/turn-table.jpg';
import djMoney from '../assets/dj-money.png';

export default function CustomCarousel() {
 
  const imageUrls = [handShakeImage, turnTableImage, djMoney];

  return (
    <div className="carousel">
    <Carousel>
      {imageUrls.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <img className="carousel"
            
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}