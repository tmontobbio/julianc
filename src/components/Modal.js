import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

export default function Modal({ handleCloseModal, prevSlide, nextSlide, gallery, slideNumber }) {

    return (
        <div className='slider-wrap'>
            <div id="counter">
                <p>
                    {slideNumber + 1} / {gallery.length}
                </p>
            </div>
            <FontAwesomeIcon
                icon={faCircleXmark}
                className="btn-close"
                onClick={handleCloseModal}
            />
            <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className="btn-prev"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="btn-next"
                onClick={nextSlide}
            />
            <div className='fs-img' onClick={handleCloseModal}>
                <img src={gallery[slideNumber].src.original} alt={"thumbnail" + gallery[slideNumber]} />
            </div>
        </div>
    )
}