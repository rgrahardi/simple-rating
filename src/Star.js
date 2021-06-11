import { FaStar } from 'react-icons/fa'

function Star({selected, onClick}) {
    return (
        <div
        className="star"
        onClick={onClick}
        >
        <FaStar color={selected ? "red" : "grey"} />
        </div>
    )
}
export default Star;