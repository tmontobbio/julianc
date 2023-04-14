import left from "../img/left.png"
import right from "../img/right.png"
import close from "../img/close.png"

export default function Modal({ handleCloseModal, prevSlide, nextSlide, gallery, slideNumber }) {

    return (
        <div className='slider-wrap'>
            <div id="counter">
                <p>
                    {slideNumber + 1} / {gallery.length}
                </p>
            </div>
            <img src={close} alt="close" className="btn-close" onClick={handleCloseModal} />
            <img src={left} alt="left" className="btn-prev" onClick={prevSlide} />
            <img src={right} alt="right" className="btn-next" onClick={nextSlide} />
            <div className='fs-img' onClick={handleCloseModal}>
                <img src={gallery[slideNumber].src.original} alt={"thumbnail" + gallery[slideNumber]} />
            </div>
        </div>
    )
}