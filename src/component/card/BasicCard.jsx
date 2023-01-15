import React, { Component , useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './basicCard.css'
import Modal from 'react-bootstrap/Modal';



export default function (){
    const [show, setShow] = useState(false);
    return (
      <div>
         <Card className="text-center  m-4 ">
      <Card.Header>{this.props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{this.props.location}</Card.Title>
        <Card.Text>

          {this.props.price}
        </Card.Text>
        
        <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>

      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
      </div>

    )
  }

