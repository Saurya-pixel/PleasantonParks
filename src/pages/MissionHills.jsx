import MissionHillsImg from '../assets/missionhills.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function MissionHills() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MissionHillsImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Mission Hills Park</h1>
        <p>
          Tucked into the rolling hills of Pleasanton's Mission Park neighborhood, Mission Hills Park is a beloved community destination that offers a perfect blend of 
          adventure, serenity, and family fun. Located at 600 Junipero Street, the park is best known for its iconic 50-foot metal hillside slide, recently renovated and 
          reopened in 2020. Now featuring two side-by-side lanes and a new scramble wall, the slide is both a nostalgic landmark and a thrilling favorite for kids and 
          teens alike. Funded by a $385,000 city improvement project, the upgrade reflects Pleasanton's commitment to maintaining safe, exciting recreational spaces. 
          Mission Hills Park offers much more than just a slide. The park is home to two distinct playgrounds tailored to children of different ages and activity levels. 
          The larger playground features a climbing wall, rope bridge, high platforms, drum instruments, and imaginative play spaces, while the smaller one provides slides, 
          tunnels, ladders, and classic playground equipment for younger visitors. For fitness enthusiasts, the park includes outdoor exercise stations, a half basketball court,
          and paved loop trails ideal for walking, jogging, or cycling. A seasonal creek runs through the park, complete with wooden footbridges and shaded sitting areas 
          that invite relaxation and exploration. Though the park lacks public restrooms and has only street parking, it makes up for it with scenic views, mature trees 
          providing ample shade, and grassy open areas perfect for picnics or casual games. It's open daily from 6:00 a.m. to 9:00 p.m., and includes wheelchair-accessible 
          paths for inclusive access. Nestled in a quiet residential area, Mission Hills Park remains a hidden gem in Pleasanton—balancing the excitement of its unique hillside 
          slide with the peaceful charm of a neighborhood retreat.
        </p>
      </div>
    </div>
    );
    
}
export default MissionHills;