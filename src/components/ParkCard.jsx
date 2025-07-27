import "../css/ParkCard.css";
function ParkCard({ park }) {
    
    function onParkClick() {
        window.location.href = `/park/${park.id}`;
    }
    return <div className="park-card" onClick={onParkClick}>
        <div className = "park-overlay">
        </div>
        <div
      className="park-card-image"
      style={{ backgroundImage: `url(${park.image})` }}
    >
        </div>
        <div className="park-info">
            <h3>{park.name}</h3>
        </div>
    </div>
    }
    export default ParkCard