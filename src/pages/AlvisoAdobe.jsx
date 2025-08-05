import AlvisoImg from '../assets/alviso.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function AlvisoAdobe() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AlvisoImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Alviso Adobe Community Park</h1>
        <p>
          <strong>Address: </strong>
        <a
          href="https://www.google.com/maps/search/?api=1&query=3465+Old+Foothill+Road,+Pleasanton,+CA"
          target="_blank"
          rel="noopener noreferrer"
        >
          3465 Old Foothill Road, Pleasanton, CA
        </a>
        </p>
        <p>
          Nestled at the base of the Pleasanton Ridge, Alviso Adobe Community Park is a unique seven-acre historical and environmental site that brings the rich heritage of 
          California to life. Located at 3465 Old Foothill Road in Pleasanton, California, this park is centered around a fully restored adobe home built in 1854 by Francisco 
          Alviso, a descendant of Spanish settlers and a tenant of the Rancho Santa Rita land grant. The site has since evolved from a family homestead to the first certified 
          dairy in California—Meadowlark Dairy—before eventually being transformed into a community park by the City of Pleasanton in 2008 following an extensive $4.4 million 
          restoration. Today, it stands as a designated California Historical Landmark (#510), preserving more than 160 years of regional history and culture. The park offers a 
          rare window into three major eras of California history: the Native American (specifically Ohlone), the Spanish rancho period, and early American agricultural life. 
          Visitors can explore the original adobe home, which is furnished as it would have appeared in the 1920s, and walk through a reconstructed Milking Barn that features 
          interactive dairy exhibits. Engaging and family-friendly, the park includes hands-on activities such as milking "Fiona" the life-sized fiberglass cow, exploring 
          animal tracks in kinetic sand, and practicing roping skills with wooden livestock figures. Throughout the site, interpretive signs and digital tour options provide 
          layered context to the exhibits, making learning both accessible and immersive. Alviso Adobe is not just a historical site—it's also an educational hub. The park 
          regularly hosts school field trips for grades K-4, guided group tours, and community programs that bring natural and cultural history to life. Visitors can borrow 
          themed educational backpacks, enjoy a self-guided scavenger hunt via the Adventure Lab App, or relax at one of the scenic picnic areas overlooking the Amador Valley 
          and Mt. Diablo. Volunteers play an important role in keeping the park vibrant, and opportunities are available for students and adults alike to contribute through 
          docent programs and event support. The park also serves as a gateway to nearby outdoor adventures. Trail maps available at the visitor center connect Alviso Adobe to 
          other local parks and preserves, including Augustin Bernal Park, the Castleridge Trailhead, and the Marilyn Murphy Kane Trail. Whether you're interested in local 
          history, environmental education, or simply enjoying a peaceful afternoon outdoors, Alviso Adobe Community Park offers a deeply enriching experience for all ages, 
          blending cultural preservation with natural beauty in the heart of Pleasanton.
        </p>
      </div>
    </div>
    );
    
}
export default AlvisoAdobe