import ValVistaImg from '../assets/val-vista-park.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function ValVista() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ValVistaImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Val Vista Community Park</h1>
        <p>
          Val Vista Community Park, located at 7350 Johnson Drive in Pleasanton, CA, is a vibrant community hub offering diverse amenities for families, kids, athletes, 
          gardeners, and nature lovers. Open daily from 9am to 8pm, the park spans over 100 acres and features expansive soccer fields, a modern skate park, 
          inline hockey rink, labyrinth, and a multi-use perimeter path ideal for walking or jogging. The main playground is spectacular: a large, multi-level structure with 
          a HUGE spiral slide (complete with a plexiglass window), triple slide, rope web, balance beam, climbing wall, gymnastics bar, spinning toys, and more. 
          A smaller toddler playground and seasonal splash pads add appeal for younger visitors, all situated among picnic sites, barbecue pits, restrooms, 
          and shaded seating areas. Adjacent to these play zones is Pleasanton's only community garden—33 large plots (~225 sqft) and 7 smaller ones (~100 sqft), 
          available to Pleasanton residents by annual reservation. Gardeners grow vegetables, flowers, and share produce with food banks, 
          fostering a strong sense of community around cultivation and healthy eating. Sports fans will appreciate the turf soccer fields and skateboarding facilities: 
          the 25,000-sq-ft sculpted concrete bowl/skatepark was designed with user input, and even hosts youth roller-hockey leagues. Nearby paved trails and a footbridge 
          over Pleasanton Canal enhance outdoor access and connectivity. Visitors report the park is very clean, well-maintained, and excellent for family outings, dog walks, 
          and sports gatherings. Some note occasional parking difficulty during tournaments and occasional odors attributed to a nearby water treatment facility—but 
          these are infrequent and do not significantly detract from the experience.
        </p>
      </div>
    </div>
    );
    
}
export default ValVista;