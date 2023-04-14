import github from "../img/github.png"
import linkedin from "../img/linkedin.png"

export default function Footer() {
    return (
        <div id="footer">
            <div>
                <div>
                    <a href="https://tmontobbio.dev" target="_blank" rel="noreferrer" id="tmontobbio">
                        <p>Design by Tyler Montobbio</p>
                    </a>
                </div>
                <div className='icon-spacer'></div>
                <div id='icon-container'>
                    <a href="https://github.com/tmontobbio/julian-cristman-art" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" className="icon" />
                    </a>
                    <div className='icon-spacer'></div>
                    <a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin" className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}