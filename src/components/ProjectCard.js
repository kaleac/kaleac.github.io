import './ProjectCard.css';

// function Bullet() {
//     return <div className="Bullet">*</div>;
// }
function ProjectCard(props) {
    return <div className="ProjectCard">
            <div className="front">{props.front}
                <div className="front_star">*</div>
            </div>

            <div className="back">
                {/* <div className="back_star">*</div> */}
                {props.back}
            </div>
    
    </div>;
}

export default ProjectCard;