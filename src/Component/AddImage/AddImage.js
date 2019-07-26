import React from 'react';
import { add_image_container, add_image_box, has_error } from './AddImage.module.scss'


export default ({ getUrl, add, error }) => {
  return (
    <div className={ add_image_container }>
      <div className={ add_image_box }>
        <input type="text"
               className={ error ? has_error : null }
               placeholder="Add a valid image URL"
               onChange={ getUrl } />
        <button onClick={ add }>Add Image</button>
      </div>
    </div>
  )
}
