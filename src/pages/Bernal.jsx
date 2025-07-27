import BernalImg from '../assets/Bernal.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function Bernal() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BernalImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Bernal Community Park</h1>
        <p>
          Take a stroll through Bernal Community Park—nestled within a city-owned 318-acre parcel—where community spirit and nature coexist. Designed by RRM Design Group 
          under a master plan approved by Pleasanton voters, the park spans approximately 50 acres dedicated to active recreation and open space. At its heart lies the 
          Stanford Medicine Sports Complex (formerly Patelco Sports Complex), featuring three lighted synthetic-turf multi-sport fields, including a championship soccer 
          field with stadium seating, concession stands, restrooms, and press booths. Supporting youth baseball, soccer, rugby, lacrosse, and football leagues, 
          the complex opened to great fanfare in 2016 and remains a hub for year-round sports activity. Bordering the athletic zone is a peaceful Oak Woodland meadow 
          landscaped with native grasses, decomposed granite walkways, benches, and boardwalks. This tranquil area was part of the park's $16.5 million second phase, 
          designed for environmental education and family gatherings, irrigated using recycled water. Bernal's layout includes group picnic areas, playgrounds, and open 
          grassy expanses, thoughtfully situated at the park's core to ensure a welcoming and uncluttered atmosphere. The park provides walking, jogging, and biking trails 
          around the perimeter and within the Oak Woodland. These are popular among local residents and match Perfectly with the larger Pleasanton community's outdoor 
          interests.
        </p>
      </div>
    </div>
    );
    
}
export default Bernal;