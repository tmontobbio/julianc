import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div id="footer">
            <div>
                <div>
                    <p>Design by Tyler Montobbio</p>
                </div>
                <div className='icon-spacer'></div>
                <div id='icon-container'>
                    <a href="https://github.com/tmontobbio/julian-cristman-art" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    <div className='icon-spacer'></div>
                    <a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                </div>
            </div>
        </div>
    )
}