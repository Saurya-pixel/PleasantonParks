import ParkCard from "../components/ParkCard"
import {useState} from "react";
import '../css/Home.css';
import parkimg from '../assets/park.jpeg';
import KenMercerImg from '../assets/kenmercer.jpg';
import AmadorValleyImg from '../assets/Amador-Valley-Community-Park-1.jpg';
import ValVistaImg from '../assets/val-vista-park.jpg';
import KottingerImg from '../assets/Kottinger.jpg';
import BernalImg from '../assets/Bernal.jpg';
import ShadowCliffImg from '../assets/ShadowCliff.jpg';
import MissionHillsImg from '../assets/missionhills.jpg';
import PleasantonRidgeImg from '../assets/pleasantonridge.jpg';
import KottingerVillageImg from '../assets/kottingervillage.jpeg';
import TawnyImg from '../assets/tawny.png';
import OrloffImg from '../assets/orloff.jpg';
import AlvisoAdobeImg from '../assets/alviso.jpg';
import FairlandsImg from '../assets/fairlands.webp';
import HansenImg from '../assets/hansen.jpg';
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const parks = [
        {id: 1, name: "Ken Mercer Sports Park", image: KenMercerImg},
        {id: 2, name: "Amador Valley Community Park", image: AmadorValleyImg},
        {id: 3, name: "Val Vista Community Park", image: ValVistaImg},
        {id: 4, name: "Kottinger Community Park", image: KottingerImg},
        {id: 5, name: "Bernal Community Park", image: BernalImg},
        {id: 6, name: "Shadow Cliffs Regional Park", image: ShadowCliffImg},
        {id: 7, name: "Mission Hills Park", image: MissionHillsImg},
        {id: 8, name: "Pleasanton Ridge Regional Park", image: PleasantonRidgeImg},
        {id: 9, name: "Kottinger Village Park", image: KottingerVillageImg},
        {id: 10, name: "Tawny Park", image: TawnyImg},
        {id: 11, name: "Orloff Park", image: OrloffImg},
        {id: 12, name: "Alviso Adobe Community Park", image: AlvisoAdobeImg},
        {id: 13, name: "Fairlands Park", image: FairlandsImg},
        {id: 14, name: "Hansen Park", image: HansenImg}
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