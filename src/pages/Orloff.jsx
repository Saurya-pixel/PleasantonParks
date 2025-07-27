import OrloffImg from '../assets/orloff.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function Orloff() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${OrloffImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Orloff Park</h1>
        <p>
          Orloff Park is a vibrant and well-loved community space located at 1800 Santa Rita Road in Pleasanton, California. Spanning over 8 acres, this neighborhood park is a 
          go-to destination for families, children, and outdoor enthusiasts alike. Its welcoming layout includes large green lawns shaded by mature trees, walking paths, and a 
          peaceful atmosphere that offers a retreat from the city’s bustle. Whether you're enjoying a stroll or planning a family outing, Orloff Park provides a balanced blend 
          of recreation and relaxation. The park features two playgrounds, each designed to entertain kids of different ages and abilities. The larger playground is packed with 
          exciting structures including twisty slides, climbing walls, a net tower, balance ropes, a sandbox with mini-excavators, a merry-go-round, and even a tire swing. 
          On the other side of the basketball courts is a train-themed play area ideal for younger children, complete with swings, monkey bars, teeter-totters, and unique 
          features like a crocodile balance beam. These creatively designed areas encourage imaginative play and physical activity, making them a big hit with local families.
          For sports and fitness lovers, Orloff Park offers two full-sized basketball courts, outdoor exercise equipment such as pull-up bars and monkey bars, and a looped 
          asphalt walking path perfect for jogging or leisurely strolls. The loop measures approximately 0.6 miles—about 1,500 steps—making it a convenient way to stay active. 
          Picnic tables, benches, and open shaded areas make it easy to relax or enjoy lunch under the trees. While restroom facilities are not available, the park is 
          well-maintained and easily accessible with ample street parking nearby. Visitors praise the park for its peaceful environment, colorful and modern play structures, 
          and the thoughtful placement of benches and picnic areas throughout. It’s also a popular spot for local events, casual exercise groups, and social gatherings, 
          fostering a strong sense of community.
        </p>
      </div>
    </div>
    );
    
}
export default Orloff;