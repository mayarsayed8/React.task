import React from 'react';
import './ImageUpload.css';

class ImageUpload extends React.Component {
    state = {
        files: [],
        imagesPreviewUrls: [],
       
    };
   
    _handleImageChange = e =>{
        e.preventDefault();

        // FileList to Array
        let files = Array.from(e.target.files);

        // File Reader for Each file and and update state arrays
        files.forEach((file, i) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState(prevState => ({
                    files: [...prevState.files, file],
                    imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader.result]
                }));
            }

            reader.readAsDataURL(file);
        });
    }

    render() {
        let {imagesPreviewUrls} = this.state;

        return (
            <div className="label_container" >
                <label  className="btn " htmlFor="file">
                <i className="fas fa-image fa-fw" aria-hidden="true">
                   </i>
                    <input  className="upload" 
                    type="file" 
                    onChange={this._handleImageChange} 
                    multiple/>
                </label>
                {imagesPreviewUrls.map(function(imagePreviewUrl, i){
                    return <img width={300} height={300} key={i} src={imagePreviewUrl} />
                })}
       
            </div>
        )
    }
}

export default ImageUpload;

