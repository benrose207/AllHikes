import React from "react";
import PhotosModal from "./photos_modal";

class PhotoFeed extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            clickedPhotoId: null,
        }

        this.openPhotosModal = this.openPhotosModal.bind(this)
    }

    componentDidMount() {
        let contentType
        let idType


        if (this.props.location.pathname.includes("hikes")){
            contentType = "hikes";
            idType = "hikeId";
        } else {
            contentType = "users";
            idType = "userId";
        }
        
        this.props.fetchPhotos(contentType, this.props.match.params[idType])
    }

    openPhotosModal(input) {
        return (e) => {
            this.setState({ clickedPhotoId: input })
        }
    }

    render () {
        return (
            <>
                { this.state.clickedPhotoId ? 
                    <PhotosModal 
                        photos={this.props.photos} 
                        initialPhotoId={parseInt(this.state.clickedPhotoId)}
                        closeModal={this.openPhotosModal}
                    />
                    : null }
                <section className="photo-feed">
                    {this.props.photos.map((photo, idx) => (
                        <picture 
                            key={photo.id} 
                            className="photo-feed-item" 
                            onClick={this.openPhotosModal(idx)}
                        >
                            <img src={photo.photo} alt="hike photo"/>
                        </picture>
                    ))}
                </section>
            </>
        )
    }
}

export default PhotoFeed;