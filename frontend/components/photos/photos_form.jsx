import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class PhotosForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: [],
            photoUrls: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoInput = this.handlePhotoInput.bind(this);
    }

    handlePhotoInput(e) {
        const files = Object.values(e.currentTarget.files)
        
        const processPhoto = (photo) => {
            if ((photo.size/1024/1024).toFixed(4) > 3) {
                alert("Only enter files smaller than 3MB")
                return
            }

            const reader = new FileReader();
            
            reader.onloadend = () => (
                this.setState({ 
                    photos: this.state.photos.concat(photo), 
                    photoUrls: this.state.photoUrls.concat(reader.result)
                })
            )

            reader.readAsDataURL(photo);
        }
        
        if (files) {
            files.forEach(file => processPhoto(file));
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        const { hikeId, userId } = this.props;
        const { photos } = this.state;
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('hike_id', hikeId)
        formData.append('user_id', userId)

        for (let i = 0; i < photos.length; i++) {
            formData.append('photos[]', photos[i]);
        }

        $(document).ajaxStart(() => {
            $("#loading").removeClass("hidden")
        })

        $(document).ajaxComplete(() => {
            $("#loading").addClass("hidden")
        })
        
        this.props.createPhotos(formData)
            .then(this.props.closeFormAction);
    }

    render () {

        const previewImages = ( this.state.photoUrls.length > 0 ? (
            <>
                <button 
                    className="cancel-button"
                    onClick={() => this.setState({ photos: [], photoUrls: [] })}>
                Remove</button> 

                <div>
                    {this.state.photoUrls.map((url, idx) => (
                        <picture key={idx} className="preview-image">
                            <img src={url} alt="preview image"/>
                        </picture>
                    ))}
                </div>
            </>
        ) : null )

        const errors = (this.props.errors ? (
            <ul className="form-errors">
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        ) : "")

        const uploaderClass = (this.state.photos.length > 0 ? "photo-uploader selected-div" : "photo-uploader")

        return (
            <>
                <div id="loading" className="hidden">
                    <FontAwesomeIcon icon={faSpinner} spin/>
                </div>
                <form onSubmit={this.handleSubmit} className="review-photo-form">
                    <div className={uploaderClass}>
                        <label htmlFor="photo-upload">Choose Photos</label>
                        <input 
                            type="file" 
                            id="photo-upload" 
                            multiple 
                            required
                            accept="image/*"
                            onChange={this.handlePhotoInput}/>
                    </div>
                    {previewImages}
    {/* 
                    <label htmlFor="caption">Caption</label>
                    <input type="text" id="caption"/> */}
                    {errors}
                    <button className="primary-cta">Upload</button>
                    <a className="tag" onClick={this.props.closeFormAction}>Cancel</a>
                </form>
            </>
        )
    }
}

export default PhotosForm;