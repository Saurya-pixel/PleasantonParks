import TawnyImg from '../assets/tawny.png';
import React from 'react';
import '../css/ParkInfo.css';
function Tawny() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${TawnyImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Tawny Park</h1>
        <p>
            <strong>Address: </strong>
            <a
              href="https://www.google.com/maps/search/?api=1&query=400+Tawny+Drive,+Pleasanton,+CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              400 Tawny Drive, Pleasanton, CA
            </a>
        </p>
        <p>
          Tucked into a quiet residential neighborhood in east Pleasanton, Tawny Park offers a serene, family-friendly retreat at 400 Tawny Drive. This 3.2-acre neighborhood 
          park is modest in size but rich in charm, serving as a peaceful escape for local residents seeking nature, play, and casual recreation. Following a thoughtful 
          renovation in 2021, Tawny Park has been updated with new play structures and improved amenities, making it safer and more engaging for children and families. 
          While small, the park is well-maintained and thoughtfully designed—earning it a place among Pleasanton's most pleasant hidden gems. The park features a recently 
          upgraded playground tailored for younger children, offering climbing structures and slides, though notably no swings. There are also two half-court basketball hoops, 
          giving kids and teens a space for light recreational play. A walking loop surrounds the park, making it a great spot for joggers, dog walkers, or young children 
          learning to ride bikes or scooters. Ample shade from mature trees, open grass fields, and benches provide both sunny and cool spots for picnicking or unwinding 
          with a book. While Tawny Park does not have restroom facilities, it does offer water fountains, street parking, and is dog-friendly (though pets must remain on-leash, 
          even though some visitors report occasional off-leash dogs in the evenings). Its proximity to nearby homes and peaceful atmosphere make it especially attractive for 
          families with toddlers or those looking for a quiet walk, rather than larger crowds or organized sports. What Tawny Park lacks in size, it makes up for in calm, 
          comfort, and community. It's the kind of neighborhood park where children make their first playground memories, neighbors chat under shady trees, and joggers find a 
          quick scenic loop. With its recent upgrades and well-kept charm, Tawny Park stands as a testament to Pleasanton's dedication to preserving green spaces that foster 
          relaxation, connection, and family-friendly fun.
        </p>
      </div>
    </div>
    );
    
}
export default Tawny;