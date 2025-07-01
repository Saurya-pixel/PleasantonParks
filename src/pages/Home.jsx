import ParkCard from "../components/ParkCard"
import {useState} from "react";
import '../css/Home.css';
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const parks = [
        {id: 1, name: "Ken Mercer Sports Park"},
        {id: 2, name: "Amador Valley Community Park"},
        {id: 3, name: "Val Vista Community Park"},
        {id: 4, name: "Kottinger Community Park"},
        {id: 5, name: "Bernal Community Park"},
        {id: 6, name: "Shadow Cliffs Regional Park"},
        {id: 7, name: "Mission Hills Park"},
        {id: 8, name: "Pleasanton Ridge Regional Park"},
        {id: 9, name: "Kottinger Village Park"},
        {id: 10, name: "Tawny Park"},
        {id: 11, name: "Orloff Park"},
        {id: 12, name: "Alviso Adobe Community Park"},
        {id: 13, name: "Fairlands Park"},
        {id: 14, name: "Hansen Park"}
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