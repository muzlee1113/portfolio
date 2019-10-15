import React from "react";
import { Modal, Button } from 'react-bootstrap';


export default function ImageModal(props) {
    console.log(props.url)

    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{backgroundColor:"transparent"}}
      >
        <Modal.Body>
          <img className="project_image_model" src={process.env.PUBLIC_URL + props.url}/>
        </Modal.Body>
      </Modal>
    );
  }
  
 
