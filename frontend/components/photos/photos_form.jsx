import React from "react"

class PhotosForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <form>
                <label htmlFor="photo-upload">Choose Photos</label>
                <input type="file" id="photo-upload" multiple/>
            </form>
        )
    }
}

export default PhotosForm;