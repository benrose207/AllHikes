import React from "react"

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
        
        this.props.createPhotos(formData);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="photo-upload">Choose Photos</label>
                <input 
                    type="file" 
                    id="photo-upload" 
                    multiple 
                    required
                    onChange={this.handlePhotoInput}/>
                <button>Remove</button> 

                <label htmlFor="caption">Caption</label>
                <input type="text" id="caption"/>

                <button className="primary-cta">Upload</button>
                <a className="tag" onClick={this.props.closeFormAction}>Cancel</a>
            </form>
        )
    }
}

export default PhotosForm;