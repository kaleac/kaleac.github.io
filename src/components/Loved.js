import './Loved.css';

function Loved(props) {
    return <div className="Love"><img className="Loved" src={props.image} alt={props.alt_text}></img><div className="caption">{props.caption}</div></div>;
}

export default Loved;