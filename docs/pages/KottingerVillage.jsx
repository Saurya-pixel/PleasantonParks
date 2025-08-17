import KottingerVillageImg from '../assets/kottingervillage.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function KottingerVillage() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${KottingerVillageImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Kottinger Village Park</h1>
        <p>
            <strong>Address: </strong>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4100+Vineyard+Avenue,+Pleasanton,+CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              4100 Vineyard Avenue, Pleasanton, CA
            </a>
        </p>
        <p>
          Kottinger Village Park is a peaceful and scenic neighborhood park located at 4100 Vineyard Avenue in Pleasanton, California. Tucked away in a quiet residential area 
          and surrounded by tall redwood trees, the park offers a tranquil retreat for residents and visitors alike. Covering approximately 4 acres, it serves as a green oasis 
          within the city, offering a refreshing balance of nature and recreational space. Its inviting atmosphere, combined with modern amenities, makes it a beloved spot for 
          families, seniors, and anyone seeking a leisurely outdoor experience. One of the highlights of Kottinger Village Park is its 1.1-mile loop trail, which is perfect for 
          walking, jogging, and dog-walking. The trail is paved and wheelchair accessible, featuring resting benches throughout and scenic views that bring a calming presence 
          to one's day. Though the park is not as busy as others in Pleasanton, it offers a small playground and a basketball court, making it an ideal setting for light 
          recreation. A clever dual water fountain, designed for both people and pets, underscores the park's thoughtful amenities. What makes this park especially unique is 
          its proximity to Kottinger Gardens, a senior housing community designed with accessibility in mind. Residents of the development enjoy seamless access to the park's 
          green spaces, garden plots, and looped trails, fostering a strong sense of community and wellness. The connection between the park and Kottinger Gardens is a model of 
          inclusive, senior-friendly urban planning, offering additional outdoor features such as a bocce court and fitness space, further blending recreation with livability.
          Open 24 hours a day, Kottinger Village Park maintains a 4.5-star rating on local review sites, with visitors praising its cleanliness, peaceful setting, 
          and dog-friendliness. While a few reviews mention dry lawns during warmer months, the park remains well-kept and safe. Its serenity and shaded walkways make it feel 
          like a small forest tucked within a growing town, attracting locals who value a quiet environment for reflection, exercise, or a stroll with their pets. Whether 
          you're a senior enjoying retirement, a local looking for a serene walking route, or simply someone seeking fresh air and greenery, Kottinger Village Park stands out 
          as one of Pleasanton's hidden gems—charming, accessible, and rooted in community values.
        </p>
      </div>
    </div>
    );
    
}
export default KottingerVillage;