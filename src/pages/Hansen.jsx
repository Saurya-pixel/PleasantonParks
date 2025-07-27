import HansenImg from '../assets/hansen.jpg';
import React from 'react';
import '../css/ParkInfo.css';
function Hansen() {
    return ( <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${HansenImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Hansen Park</h1>
        <p>
          Tucked into a quiet neighborhood at 5697 Black Avenue, Hansen Park is a 6.1-acre community oasis that welcomes visitors around the clock. With its lush open lawns, 
          shaded walking paths, and playground, the park offers a relaxing and family-friendly environment for people of all ages. A paved path loops through the space, 
          shaded by mature trees, making it an inviting setting for walkers and joggers alike. The park consistently earns a strong reputation, with high ratings and 
          positive feedback from Pleasanton residents. The heart of Hansen Park is its recently rebuilt space-themed playground, featuring brightly colored slides, swings, 
          and climbing structures designed to inspire imaginative play for children aged 3 to 10. The fenced layout ensures safety, and nearby shaded benches provide comfort 
          for parents and caregivers. A raised half-court basketball area and spacious green turf make the park ideal for casual sports, ball games, and relaxed afternoons 
          with pets, who are welcome on-leash. While the park does not include public restrooms, a water fountain near the playground offers some convenience for visitors.
          In recent years, Hansen Park has become even more cherished by the community following its recovery from a 2020 arson incident that destroyed the original playground. 
          The rebuilt playground now stands as a symbol of resilience and renewal, offering modern, engaging structures in a safe and welcoming environment. 
          The park is often praised for its cleanliness, peaceful atmosphere, and suitability for families with young children. Hansen Park has also taken on a new role in city 
          infrastructure, serving as one of the test locations for Pleasanton's Regional Groundwater Facilities Project. A groundwater test well was installed in 2025, with 
          construction carefully managed to minimize any impact on park visitors.
        </p>
      </div>
    </div>
    );
    
}
export default Hansen;