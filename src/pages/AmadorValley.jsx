import AmadorValleyImg from '../assets/Amador-Valley-Community-Park-1.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function AmadorValley() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AmadorValleyImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Amador Valley Community Park</h1>
        <p>
          Nestled in the heart of Pleasanton, Amador Valley Community Park stands as a vibrant hub for recreation, community gatherings, and nature appreciation. 
          Located at 4301 Black Avenue, this spacious park spans over 23 acres and offers an impressive array of amenities for residents and visitors alike. 
          Open 24 hours a day, the park is known for its family-friendly atmosphere, well-maintained facilities, and its proximity to the Dolores Bengtson Aquatic Center, 
          allowing for a full day of outdoor fun. The park features multiple sports fields, basketball courts, and horseshoe pits, 
          making it a favorite among local sports leagues and casual players. Children enjoy modern play structures, while families gather at picnic tables 
          and reservable ramadas nestled beneath shade trees. Dog lovers appreciate the fenced dog play area and scenic walking paths where leashed pets are welcome. 
          With restrooms, ample parking, and bike racks, Amador Valley Community Park offers convenience along with charm. Nature enthusiasts will find tranquility along the 
          0.7–0.8 mile walking trail that loops around the park. This flat, stroller- and wheelchair-friendly trail follows Amador Creek, where visitors may spot ducks, 
          herons, and even beavers in and around the pond. The trail also connects to the Iron Horse Regional Trail, inviting longer excursions for walkers, joggers, 
          cyclists, and equestrians. The park’s natural setting, combined with its accessibility and connectivity, makes it a beloved destination for all ages. Beyond 
          its physical features, Amador Valley Community Park serves as a center for community programs and seasonal events. Youth camps, teen activities, 
          and summer excursions are organized in coordination with the adjacent recreation center, fostering a strong sense of community and inclusion. 
          Whether for a weekend picnic, a youth soccer game, or a peaceful walk by the creek, Amador Valley Community Park offers a perfect blend of activity, nature, 
          and relaxation—earning its place as one of Pleasanton’s most treasured green spaces.
        </p>
      </div>
    </div>
    );
    
}
export default AmadorValley;