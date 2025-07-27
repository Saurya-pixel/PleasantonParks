import KenMercerImg from '../assets/kenmercer.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function KenMercer() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${KenMercerImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Ken Mercer Sports Park</h1>
        <p>
          Nestled in the heart of Pleasanton, California, Ken Mercer Sports Park is a vibrant community hub that blends recreational amenities, scenic walking trails, 
          and inclusive design. Located at 5800 Parkside Drive, the park spans a large, open space filled with multi-use sports fields, basketball and volleyball courts, 
          batting cages, and a paved 1.9-mile trail popular with joggers and dog-walkers alike. From soccer and baseball diamonds to a skateboard track and picnic areas, 
          the park invites individuals and families of all ages to enjoy outdoor activity year-round. Open daily from 8 a.m. to 10 p.m., it offers one of the region's most 
          diverse recreational landscapes. 

          Originally named Pleasanton Sports Park, the park was renamed in 2014 to honor former mayor Ken Mercer, who played a key role in its creation and expansion. 
          Today, the park continues to evolve with forward-thinking community projects: an ADA-accessible all-abilities playground is under development, 
          and construction is underway for a new cricket field to serve Pleasanton's growing interest in the sport. A large-scale skate park upgrade, approved in 2022, 
          reflects the city's commitment to inclusive design and youth engagement. Moreover, the installation of PFAS monitoring wells in early 2024 highlights 
          local efforts toward environmental responsibility. As both a recreational venue and a symbol of civic pride, Ken Mercer Sports Park remains central to Pleasanton's 
          identity and future.
        </p>
      </div>
    </div>
    );
    
}
export default KenMercer;