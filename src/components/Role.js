import './Role.css';

// function Bullet() {
//     return <div className="Bullet">*</div>;
// }

// function Role({exp}) {
//     return <div className="Role"><hr className="line"></hr>
//     <div className="bullet">{exp.fields.bullet}</div>
//     &nbsp;<div className="date">{exp.fields.date}</div>
//     {exp.fields.position}
//     </div>;
// }

function Role(props) {
    return <div className="Role"><hr className="line"></hr>
    <div className="bullet">{props.bullet}</div>
    &nbsp;<div className="date">{props.date}</div>
    {props.position}
    </div>;
}

export default Role;