import React from "react";
import PhotosModal from "../photos/photos_modal";
import HikeIndex from "../hikes/hike_index";
import HikeFilters from "../hikes/hike_filters";
import SubNav from "../nav/sub_nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class ParkShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clickedPhotoId: null,
            currentOffset: 0,
            firstPosImgIdx: 0,
            filtered: false
        }

        this.onCarouselNav = this.onCarouselNav.bind(this);
        this.openPhotosModal = this.openPhotosModal.bind(this);
        this.toggleFiltered = this.toggleFiltered.bind(this);
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
            .then(() => {
                const stickyElem = document.querySelector(".sticky-scroll-bar");
                const observer = new IntersectionObserver(
                    ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
                    { threshold: [1] }
                );
                observer.observe(stickyElem);
            });
    }

    toggleFiltered(queryStr) {
        if (queryStr) {
            this.setState({ filtered: true });
        } else {
            this.setState({ filtered: false });
        }
    }

    onCarouselNav(e) {
        e.preventDefault();
        const direction = parseInt(e.currentTarget.dataset.direction);
        const newFirstPosImgIdx = this.state.firstPosImgIdx += direction;
        
        const newOffset = this.state.currentOffset += (direction * -350);
        const carouselImgs = document.querySelectorAll(".photo-carousel picture");
        for (let i = 0; i < carouselImgs.length; i++) {
            const img = carouselImgs[i];
            img.style.transform = `translateX(${newOffset}px)`;
        }

        this.setState({
            currentOffset: newOffset,
            firstPosImgIdx: newFirstPosImgIdx
        })
    }

    openPhotosModal(input) {
        return (e) => {
            this.setState({ clickedPhotoId: input })
        }
    }

    render() {
        if (!this.props.park) return null;
        const { park, totalReviews, avgRating, hikes, coverPhotos, filteredHikes } = this.props;
        const hikeList = this.state.filtered ? filteredHikes : hikes;
        const staticMapWidth = window.innerWidth < 400 ? 355 : 750;
        
        // Park Review Stars
        const reviewStars = [];
        for (let i = 1; i < 6; i++) {
            const starClass = Math.round(avgRating) >= i ? " filled" : "";
            reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
        }

        //Park Static Map Pins
        let staticMapPinStr = "/";
        hikes.forEach((hike, idx) => {
            let newPin = `pin-s+4D9709(${hike.lng},${hike.lat})`;
            staticMapPinStr += newPin;
            if (idx !== hikes.length - 1) staticMapPinStr += ",";
        })
        
        //Photo Carousel Images
        const carouselPhotos = coverPhotos.map((photo, idx) => (
            <picture key={idx} className="park-carousel-image" onClick={this.openPhotosModal(idx)}>
                <img src={photo} alt={`${park.name}`} />
            </picture>
        ));

        //Photo Carousel Nav buttons
        const carouselNavButtons = (
            <>
                {this.state.firstPosImgIdx > 0 ? (
                    <button
                        className="photo-carousel-nav-btn btn-overflow-left"
                        data-direction="-1"
                        aria-label="Navigate left through photos"
                        onClick={this.onCarouselNav}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                ) : null}
                {this.state.firstPosImgIdx <= hikes.length - 3 ? (
                    <button
                        className="photo-carousel-nav-btn btn-overflow-right"
                        data-direction="1"
                        aria-label="Navigate right through photos"
                        onClick={this.onCarouselNav}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                ) : null}
            </>
        )
        
        return (
            <>
                {this.state.clickedPhotoId !== null ?
                    <PhotosModal
                        photos={coverPhotos}
                        initialPhotoId={parseInt(this.state.clickedPhotoId)}
                        closeModal={this.openPhotosModal}
                    />
                    : null}
                <SubNav parentType="parks" parentObject={park}/>
                <main className="primary-content park-container">
                    <section className="park-content-wrapper">
                        <div className="photo-carousel-wrapper">
                            <div className="photo-carousel">
                                {carouselPhotos}
                            </div>
                                {carouselNavButtons}
                        </div>
                        <h1 className="header-text">Best Trails in {park.name}</h1>
                        <div className="page-summary-info">
                            <div>
                                {reviewStars}
                            </div>
                            {totalReviews} Reviews
                        </div>
                        <p className="park-summary">{park.summary}</p>
                        <h2 className="header-text sm-header-size">Description</h2>
                        <p>{park.description}</p>
                        <div className="park-static-map">
                            <img src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static${staticMapPinStr}/${park.lng},${park.lat},8,0/${staticMapWidth}x240@2x?access_token=${window.mapboxAPIKey}`} alt="map-preview" />
                        </div>
                        <section className="park-actions">
                            <div>
                                <a 
                                    href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lng}`} 
                                    target="_blank" 
                                    rel="noopener"
                                    className="park-action">
                                    <FontAwesomeIcon icon={faMapSigns} />
                                    <p>Directions</p>
                                </a>
                            </div>
                        </section>
                        <section className="park-information">
                            <h2 className="header-text">Park Information</h2>
                            <div className="park-information-details">
                                <div>
                                    <article>
                                        <h3 className="header-text">Acreage</h3>
                                        <p>{park.acreage} acres</p>
                                    </article>
                                    <article>
                                        <h3 className="header-text">Contact</h3>
                                        <p>{park.contact}</p>
                                    </article>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>
                <section className="park-container">
                    <div className="sticky-scroll-bar">
                        <div className="primary-content">
                            <HikeFilters
                                parkId={park.id}
                                fetchParkHikes={this.props.fetchParkHikes}
                                toggleFiltered={this.toggleFiltered}
                                filtered={this.state.filtered}
                            />
                        </div>
                    </div>
                    <div className="primary-content park-hikes-container">
                        <section className="park-content-wrapper">
                            <h2 className="header-text">Top Trails ({hikeList.length})</h2>
                            <HikeIndex hikes={hikeList} parkName={park.name}/>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default ParkShow;