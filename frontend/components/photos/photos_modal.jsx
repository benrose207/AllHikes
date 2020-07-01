import React from "react"

class PhotosModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = { currentPhotoId: this.props.initialPhotoId }

        this.toggleBack = this.toggleBack.bind(this);
        this.toggleForward = this.toggleForward.bind(this);
    }

    toggleBack(e) {
        let newIndex = this.state.currentPhotoId - 1;
        if (this.state.currentPhotoId === 0) {
            newIndex = this.props.photos.length - 1
        }

        this.setState({currentPhotoId: newIndex })
    }

    toggleForward(e) {
        let newIndex = this.state.currentPhotoId + 1;
        if (this.state.currentPhotoId === this.props.photos.length - 1) {
            newIndex = 0
        }
        
        this.setState({currentPhotoId: newIndex })
    }

    render () {
        const { photos } = this.props;
        return (
            <div id="photos-modal">
                <picture className="modal-image">
                    <img src={photos[this.state.currentPhotoId].photo} alt="spotlight image"/>
                </picture>
                <button onClick={this.toggleBack}>Back</button>
                <button onClick={this.toggleForward}>Forward</button>
            </div>
        )
    }
}

export default PhotosModal;