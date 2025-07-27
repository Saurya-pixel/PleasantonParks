import PleasantonRidgeImg from '../assets/pleasantonridge.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function PleasantonRidge() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${PleasantonRidgeImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Pleasanton Ridge Regional Park</h1>
        <p>
          Pleasanton Ridge Regional Park is a breathtaking expanse of natural beauty nestled along the western edge of Pleasanton, California. Encompassing over 5,200 acres, 
          the park offers a serene retreat from urban life, with rolling oak-studded hills, sweeping grasslands, and panoramic views of the Livermore Valley. 
          Originally established in 1988 with 1,700 acres, the park has since more than tripled in size, most notably through the acquisition of Tyler and Robertson Ranches 
          in 2012. This expansion added nearly 18 miles of new trails and further enriched the park's diverse ecosystem and recreational offerings. Visitors can access the 
          park through several staging areas, including the Foothill Staging Area and the newer Tyler Ranch Staging Area, both equipped with parking, restrooms, 
          and equestrian facilities. Admission is free, making Pleasanton Ridge an accessible destination for all. The park is particularly popular with hikers, trail runners, 
          mountain bikers, and equestrians, who are drawn to its over 25 miles of multi-use trails. These paths range from the short and scenic Woodland Loop to the more 
          demanding Courdet-to-Ridgeline circuit, with elevation gains reaching nearly 2,700 feet. Regardless of the trail, visitors are rewarded with quiet ridgelines, 
          shady oak groves, and expansive valley views. Flora and fauna are abundant throughout the park. In spring, wildflowers like lupine, buttercups, and blue-eyed grass 
          blanket the hillsides, while wildlife such as bobcats, coyotes, and wild turkeys can be spotted year-round. Cattle grazing is also maintained to manage vegetation 
          and preserve the land's pastoral character. Despite its growing popularity, Pleasanton Ridge retains a tranquil ambiance thanks to its careful development, limited 
          infrastructure, and minimal signage, allowing nature to remain the focal point. For those seeking a peaceful escape rich in natural beauty, history, and outdoor 
          recreation, Pleasanton Ridge Regional Park is a cherished destination. Its blend of rugged charm and thoughtful stewardship stands as a model of conservation and 
          public enjoyment. Whether exploring for an hour or a full day, the park offers something for every outdoor enthusiast — from casual walkers to seasoned adventurers.
        </p>
      </div>
    </div>
    );
    
}
export default PleasantonRidge;