import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class PhotosModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = { currentPhotoId: this.props.initialPhotoId }

        this.toggleBack = this.toggleBack.bind(this);
        this.toggleForward = this.toggleForward.bind(this);
        this.modalNavHandler = this.modalNavHandler.bind(this);
    }

    modalNavHandler(event) {
            if (event.key === "ArrowRight") {
                event.preventDefault();
                this.toggleForward();
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                this.toggleBack();
            } else if (event.key === "Escape") {
                this.props.closeModal(null)();
            }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.modalNavHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.modalNavHandler);
    }

    toggleBack() {
        let newIndex = this.state.currentPhotoId - 1;
        if (this.state.currentPhotoId === 0) {
            newIndex = this.props.photos.length - 1
        }

        this.setState({currentPhotoId: newIndex })
    }

    toggleForward() {
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
                <div className="modal-nav">
                    <button onClick={this.props.closeModal(null)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="modal-content">
                    <button onClick={this.toggleBack}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <picture className="modal-image">
                        <img src={photos[this.state.currentPhotoId].photo || photos[this.state.currentPhotoId]} alt="spotlight image"/>
                    </picture>
                    <button onClick={this.toggleForward}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
                <div className="modal-nav">
                    <p>{photos[this.state.currentPhotoId].caption}</p>
                </div>
            </div>
        )
    }
}

export default PhotosModal;