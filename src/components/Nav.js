import { Link } from "react-scroll"

export default function Nav() {

    return (
        <div id="nav" className="sticky">
            <div id="logo">julian c.</div>
            <div id='btn-container'>
                <Link className="nav-btn" to="home" spy={true} smooth={true} duration={900}>
                    Home
                </Link>
                <div className="spacer-nav"></div>
                <Link className="nav-btn" to="about" spy={true} smooth={true} duration={700}>
                    <p>About</p>
                </Link>
                <div className="spacer-nav"></div>
                <Link className="nav-btn" to="gallery" spy={true} smooth={true} duration={700}>
                    <p>Gallery</p>
                </Link>
            </div>
        </div>

    )
}