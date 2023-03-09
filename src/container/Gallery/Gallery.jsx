import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Gallery = () => {
    const scrollRef = React.useRef(null);  // utiliser le hook useRef pour obtenir une référence à l'élément DOM de la galerie

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram"/>
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type="button" className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {/* boucler à travers le tableau d'images de la galerie */}
                    {galleryImages.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_images-${index + 1}`}> {/* créer une div pour chaque carte d'image de la galerie */}
                            <img src={image} alt="gallery" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                        <div className="app__gallery-images_arrows">
                            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} /> {/* afficher l'icône de flèche gauche avec un événement de clic pour faire défiler la galerie vers la gauche */}
                            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
