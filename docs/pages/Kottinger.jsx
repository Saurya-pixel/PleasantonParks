import KottingerImg from '../assets/Kottinger.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function Kottinger() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${KottingerImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Kottinger Community Park</h1>
        <p>
            <strong>Address: </strong>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kottinger+Drive,+Pleasanton,+CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kottinger Drive, Pleasanton, CA
            </a>
        </p>
        <p>
          Nestled in the heart of Pleasanton, Kottinger Community Park—also known as Kottinger Ranch Community Park—is a quietly stunning green space 
          stretching along Kottinger Drive and Vineyards Avenue. Meandering approximately two miles from east to west along a lush hillside, the park incorporates a 
          paved walking trail, a charming creek with a pedestrian bridge, and pockets of expansive lawns and shaded tree cover. With a rating of 4.6 out of 5 from multiple reviewers, it is celebrated as one of Pleasanton's “hidden gems”—a peaceful, 
          scenic locale ideal for walking, running, picnicking, and quiet reflection. The park offers a paved 1.1-mile loop trail (Kottinger Community Park Loop) and a shorter out-and-back path (Kottinger Park South Trail) that traverse along a drainage creek 
          and through tree-lined corridors. The trails are mostly flat and accessible—though there's a modest incline mid-trail—and feature benches for resting and 
          wide concrete paths that can accommodate strollers or mobility aids, though some assistance may be needed on steeper sections. Adjacent to the park is 
          Kottinger Village Park, connected by accessible pedestrian paths that were upgraded as part of a community-driven enhancement project to 
          improve ADA access between senior housing (Kottinger Gardens) and the park amenities. The partnership between city planners and residents resulted in a 
          wider access route from Vineyard Avenue to Kottinger Drive, making the area particularly inclusive for seniors and people with disabilities. Locals often 
          describe Kottinger Park as serene and inviting, perfect for private picnics or quiet strolls away from crowds. 
          As noted on Reddit: “Kottinger Community Park is very beautiful and quiet. It doesn't have a playground, so few kids.” With minimal foot traffic, few children's 
          play features, and scenic creekside sections, the park serves as a peaceful retreat for adults and nature lovers alike.
        </p>
      </div>
    </div>
    );
    
}
export default Kottinger;