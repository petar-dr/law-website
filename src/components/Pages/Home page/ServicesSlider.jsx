// import React, { Component } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import family from "../../../services/family.jpg";
// import crime from "../../../services/crime.jpg";
// import injury from "../../../services/injury.jpg";
// import corporate from "../../../services/corporate.jpg";
// import realEstate from "../../../services/realEstate.jpg";


// export default class PauseOnHover extends Component {
//   render() {
    
//     var settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       swipeToSlide: true,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       pauseOnHover: true,
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <CustomSlider index={1} title={"Family law"}  imgUrl={family}/>
//           <CustomSlider index={2} title={"Criminal defence"} imgUrl={crime}/>
//           <CustomSlider index={3} title={"Real estate"} imgUrl={realEstate}/>
//           <CustomSlider index={4} title={"Corporate law"} imgUrl={corporate}/>
//           <CustomSlider index={5} title={"Personal injury"} imgUrl={injury}/>
//         </Slider>
//       </div>
//     );
//   }
// }

// function CustomSlider({ index, title, imgUrl }) {
//   return (
//     <Link className="customSlider">
//       <h2 className="customSlider__title">{title}</h2>
//       <img src={imgUrl} alt=""  className="customSlider__img"/>
      
//     </Link>
//   );
// }
