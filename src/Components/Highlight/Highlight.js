import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CP from '../../Assests/CP.jpg';
import codeforcesimg from '../../Assests/codeforcesimg.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 
const Highlight = () => {
  return (
    <Carousel>
      <div>
        <img src={CP} alt="Kitten 1" width="400" height="600" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={codeforcesimg} alt="Kitten 2" width="400" height="600" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={CP} alt="Kitten 3" width="400" height="600" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Highlight;
