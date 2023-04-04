import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import Modal from './Modal'
import axios from 'axios'

export default function Gallery() {

    const [gallery, setGallery] = useState([])
    const [page, setPage] = useState(4)
    const [galLength, setGalLength] = useState(0)
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3000/api/gallery/'
        }

        axios.request(options).then(res => {
            setGallery(res.data.media)
            setGalLength(res.data.total_results)
        })
    }, []);

    const loadMore = () => {
        const options = {
            method: 'GET',
            url: `http://localhost:3000/api/paginate/`,
            params: { page: page }
        }
        axios.request(options).then(res => setGallery([...gallery, ...res.data.media]))
        setPage(page + 1)
    }

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = (index) => {
        setOpenModal(false)
    }
    const prevSlide = () => {
        if (slideNumber === 0) {
            setSlideNumber(gallery.length - 1)
        } else {
            setSlideNumber(slideNumber - 1)
        }
    }
    const nextSlide = () => {
        if (slideNumber + 1 === gallery.length) {
            setSlideNumber(0)
        } else {
            setSlideNumber(slideNumber + 1)
        }
    }

    return (
        <div id="gallery">

            {openModal &&
                <Modal
                    handleCloseModal={handleCloseModal}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    gallery={gallery}
                    slideNumber={slideNumber}
                />
            }

            <div className="gallery-wrap">
                {gallery && gallery.map((img, index) => {
                    return <div
                        className='single'
                        key={index}
                        onClick={() => handleOpenModal(index)}
                    >
                        <img src={img.src.large} alt={"photo" + index} />
                    </div>
                })}
            </div>
            {gallery.length !== galLength && <button onClick={loadMore}><p>More Results...</p></button>}
            {gallery.length === galLength && < Footer />}
        </div>
    )
}