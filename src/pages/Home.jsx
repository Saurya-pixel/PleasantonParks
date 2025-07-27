import ParkCard from "../components/ParkCard"
import {useState} from "react";
import '../css/Home.css';
import parkimg from '../assets/park.jpeg';
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const parks = [
        {id: 1, name: "Ken Mercer Sports Park", image: parkimg},
        {id: 2, name: "Amador Valley Community Park", image: parkimg},
        {id: 3, name: "Val Vista Community Park", image: parkimg},
        {id: 4, name: "Kottinger Community Park", image: parkimg},
        {id: 5, name: "Bernal Community Park", image: parkimg},
        {id: 6, name: "Shadow Cliffs Regional Park", image: parkimg},
        {id: 7, name: "Mission Hills Park", image: parkimg},
        {id: 8, name: "Pleasanton Ridge Regional Park", image: parkimg},
        {id: 9, name: "Kottinger Village Park", image: parkimg},
        {id: 10, name: "Tawny Park", image: parkimg},
        {id: 11, name: "Orloff Park", image: parkimg},
        {id: 12, name: "Alviso Adobe Community Park", image: parkimg},
        {id: 13, name: "Fairlands Park", image: parkimg},
        {id: 14, name: "Hansen Park", image: parkimg}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
    <div className= "home"> 
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search Parks..." className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="parks-grid">
            {parks.map((park) =>  
               park.name.toLowerCase().startsWith(searchQuery) && 
               ( <ParkCard park={park} key={park.id} /> ))}
        </div>
    </div>
    );
}
export default Home;