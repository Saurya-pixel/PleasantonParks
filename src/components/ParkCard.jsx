import "../css/ParkCard.css";
function ParkCard({ park }) {
    function onSaveClick() {
        alert("clicked")
    }
    return <div className="park-card">
        <div className = "park-card-image">
            <img src={park.image} alt={park.name} />
            <div className = "park-overlay">
                <button className="save-button" onClick={onSaveClick}>
                    ✔
                </button>
            </div>
        </div>
        <div className="park-info">
            <h3>{park.name}</h3>
        </div>
    </div>
    }
    export default ParkCard