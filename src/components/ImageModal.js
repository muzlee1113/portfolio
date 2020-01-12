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
          <div className="project_model_wrapper">
            <img className={props.direction?("project_image_model_portrait"):("project_image_model")} src={process.env.PUBLIC_URL + props.url}/>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
 
