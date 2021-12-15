import React from "react";
import Slider from "react-slick";
import FeatureCard from './FeatureCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './FeatureProduct.css';

const featuresProducts = [
    
    {
            title: 'Torch',
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: 'https://i.ibb.co/FzBq2GW/torch-prev-ui.png',
            rating:5,
            price:10

        },

        {
            title: "Travel Tools",
            desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: 'https://i.ibb.co/JmBNMBV/tools-prev-ui.png',
            rating:5,
            price:15
        },
   
        {
            title: 'WaterProof Tent',
            desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: 'https://i.ibb.co/vjN2Bk5/tent-prev-ui.png',
            rating:5,
            price:12
        },
        
        {
            title: 'Sleeping Kit',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'https://i.ibb.co/XZTm79y/sleepkit-prev-ui.png',
            rating:5,
            price:80
        },
        
        {
            title: 'Travel Rope',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/3fZchhF/rope-prev-ui.png',
            rating:5,
            price:320
        },
        {
            title: 'Lamp',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/g67GwWX/lamp-prev-ui.png',
            rating:5,
            price:25
        },
        {
            title: 'Knife Set',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/gdDRWJy/knife-prev-ui.png',
            rating:5,
            price:20
        },
        
        {
            title: 'Compus',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/yff2LQ6/compus-prev-ui.png',
            rating:5,
            price:30
        },
        {
            title: 'Boot Shoe',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/HBtjyMf/boot-prev-ui.png',
            rating:5,
            price:100
        },
        {
            title: 'Travel Bag',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.ibb.co/NrF01jz/bag-prev-ui.png',
            rating:5,
            price:40
        }

];


var settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}

      style={{ ...style, display: "block", background: "red" }}
    
      onClick={onClick}
    />
  );
}



const FeatureProducts =()=> {
  

  return(

    <Container className="my-4 shadow-lg">
    <h3 className="fs-2 fw-bold pt-4">Travel Kit</h3>
    <div className="px-3 py-4">
    <Slider {...settings} className='p-3  rounded-2'>

  { 
  featuresProducts.map(product=><FeatureCard key={Math.random()} product={product}></FeatureCard>)
  }
      
    </Slider>
    
    </div>
    
    
  </Container>
     
        
    );
};

export default FeatureProducts;





