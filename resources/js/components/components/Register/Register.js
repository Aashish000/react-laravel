import React, {useState} from 'react'
import { Button,Modal } from 'react-bootstrap'
import api from '../../../api';
import './Register.css';

class Register extends React.Component {
    constructor(){
        super();
        this.addFormData = this.addFormData.bind(this);
        this.state = {
            showHide : false
        }
    }
    // const [loading, setLoading] = useState(false);
    // const [title, setTitle] = useState('')
    // const onAddSubmit = async() => {

    // }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                Register your interest
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Thanks for your interest in us! 
                        <p>Leave your details below and we'll get back to you with more information</p>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form  ref={(el) => this.myFormRef = el}>
                            <div className='form-group'>
                                <label htmlFor='name'>Name:</label>
                                <input type='text' name='name' id='name' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' name='email' id='email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='callback'>Would you like to receive a callback about this?</label>
                                <div className='option'>
                                    <input type='radio' name='callback' id='callback' defaultChecked={true} />Yes
                                </div>
                                <div className='option'>
                                    <input type='radio' name='callback' id='callback' />No
                                </div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='mobile'>Mobile:</label>
                                <input type='number' name='mobile' id='mobile' />
                            </div>
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            // <div>
            //     <button type="button" id="registerBtn" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            //         Register your interest
            //     </button>

            //     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            //         <div className="modal-dialog modal-dialog-centered">
            //             <div className="modal-content">
            //                 <div className="modal-header">
            //                     <div className='title'>
            //                         <h5 className="modal-title" id="staticBackdropLabel">
            //                             Thanks for your interest in us!
            //                         </h5>
            //                         <p>Leave your details below and we'll get back to you with more information</p>
            //                     </div>
            //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //                 </div>
            //                 <div className="modal-body">
            //                     <form>
            //                         <div className='form-group'>
            //                             <label htmlFor='name'>Name:</label>
            //                             <input type='text' name='name' id='name' />
            //                         </div>

            //                         <div className='form-group'>
            //                             <label htmlFor='email'>Email:</label>
            //                             <input type='email' name='email' id='email' />
            //                         </div>

            //                         <div className='form-group'>
            //                             <label htmlFor='callback'>Would you like to receive a callback about this?</label>
            //                             <div className='option'>
            //                                 <input type='radio' name='callback' id='callback' defaultChecked={true} />Yes
            //                             </div>
            //                             <div className='option'>
            //                                 <input type='radio' name='callback' id='callback' />No
            //                             </div>
            //                         </div>

            //                         <div className='form-group'>
            //                             <label htmlFor='mobile'>Mobile:</label>
            //                             <input type='number' name='mobile' id='mobile' />
            //                         </div>
            //                     </form>
            //                 </div>
            //                 <div className="modal-footer">
            //                     <button type="button" className="btn btn-secondary modal-button" data-bs-dismiss="modal">Cancel</button>
            //                     <button type="button" className="btn btn-primary modal-button">Submit</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Register;