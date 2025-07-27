import FairlandsImg from '../assets/fairlands.webp';
import React from 'react';
import '../css/ParkInfo.css';
function Fairlands() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${FairlandsImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Fairlands Park</h1>
        <p>
          Tucked away in the quiet Pleasanton Meadows neighborhood, Fairlands Park is a cozy, well-loved community space located at 4100 Churchill Drive in Pleasanton, 
          California. Open 24/7 and easily accessible with nearby street parking, the park serves as both a recreational hub and a peaceful retreat for local families. 
          Though modest in size compared to larger regional parks, Fairlands Park offers a welcoming atmosphere and a thoughtful blend of amenities designed for both play 
          and relaxation. The park's main attraction is its engaging playground area, which includes a large slide, swings, a rope-net climbing structure, 
          and a small rock wall—all designed to appeal to a range of age groups. Adjacent to the playground is a smooth riding loop, perfect for kids on bikes or scooters. 
          Parents and caregivers can easily supervise from one of the many shaded benches that line the path. The surrounding greenbelt adds to the park's tranquil charm, 
          with tree-lined walking routes that are popular among walkers and joggers. These routes range from a 1.5-mile inner loop with about 3,500 steps to a longer 2.7-mile 
          greenbelt trail with minimal elevation gain—ideal for low-impact exercise or a quiet evening stroll. Beyond the playground, Fairlands Park includes tennis courts and 
          access to a seasonal outdoor pool, amenities supported by the nearby Pleasanton Meadows Cabana Club. The park is also enriched by its community features—scattered 
          benches, shaded picnic spots, and even “little free libraries” tucked along walking paths. These details give the park a neighborhood feel that encourages casual 
          connection and frequent visits. While it doesn't have public restrooms and has limited lighting in the evening hours, the park remains a favorite spot for residents 
          seeking an easy, comfortable place to unwind or spend quality time with family.
        </p>
      </div>
    </div>
    );
    
}
export default Fairlands;