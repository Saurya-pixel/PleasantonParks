import ShadowCliffImg from '../assets/ShadowCliff.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function ShadowCliff() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ShadowCliffImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Shadow Cliffs Regional Park</h1>
        <p>
            <strong>Address: </strong>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2500+Stanley+Boulevard,+Pleasanton,+CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              2500 Stanley Boulevard, Pleasanton, CA
            </a>
        </p>
        <p>
          Shadow Cliffs Regional Recreation Area, straddling the Pleasanton-Livermore border in California's Tri-Valley, is a 266-acre park centered around an 80-acre 
          former quarry lake. Donated in 1971 by Kaiser Industries and developed with federal grants, the site now offers abundant recreational opportunities within the 
          East Bay Regional Park District. Located at 2500 Stanley Boulevard, just a mile from downtown Pleasanton, Shadow Cliffs features well-engineered amenities—including 
          a sandy lake beach, boathouse, picnic grounds, multiple reservable picnic sites with varying capacities (from 50 to 200 people), and expansive solar-shaded parking 
          lots powered by 1.2 MW carport arrays. Visitors can enjoy swimming, with lifeguards on duty in summer and a refreshment stand open seasonally. 
          Beach wheelchairs are available on request. Note that swimming is not allowed in the arroyo sections; pets and glass containers are prohibited on the sandy beach. 
          For fishing and boating, Shadow Cliffs hosts trout and catfish planting weekly, alongside populations of bluegill and black bass. Anglers need a daily permit plus 
          a state fishing license. Non-motorized boating is allowed—up to 17 ft vessels with electric motors—and boat rentals are available during peak season. 
          Boating in arroyo zones is prohibited. Extensive trail systems, including levee and arroyo routes through a 116-acre cottonwood-willow riparian area, 
          offer peaceful hiking, biking, and birdwatching away from the main lake scene. For hours, fees (such as a $6 per vehicle parking fee and $5 beach parking), 
          and seasonal availability, be sure to check the official East Bay Regional Park District website or call ahead for up-to-date conditions and programming.
        </p>
      </div>
    </div>
    );
    
}
export default ShadowCliff;