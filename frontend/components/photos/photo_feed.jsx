import React from "react";

class PhotoFeed extends React.Component {
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

    render () {
        return (
            <section className="photo-feed">
                {this.props.photos.map(photo => (
                    <picture key={photo.id} className="photo-feed-item">
                        <img src={photo.photo} alt="hike photo"/>
                    </picture>
                ))}
            </section>
        )
    }
}

export default PhotoFeed;