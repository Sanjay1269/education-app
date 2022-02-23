import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Modal ,Form } from 'react-bootstrap'

function EducationalForm(props) {
    const [educationFormData, seteducationFormData] = useState({
        education:' ',
        course: '',
        institution: '',
        yop: '',
        percentage: ' '
    })
    const handleClose = () => {
        props.updateShowModal('', false)
    }
    const saveData = () => {
        props.getEducationData(educationFormData)

    }
    useEffect(() => {
        seteducationFormData({ ...props.editableEducation })
    }, [props.editableEducation])

    return (
        <div >
            <Modal show={props.showModal} onHide={handleClose} >
                <Modal.Header closeButton style={{ borderRadius: '10px', boxShadow: '' }}>
                    <Modal.Title>Education:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup style={{fontWeight: 'bold' }}>
                            <label style={{display:'block' , marginLeft:'21px' }}  >Education: </label>
                            <input style={{ margin: '2px', borderRadius: '10px', boxShadow: '',width:'450px',height:'50px',border:'2px solid blue' }}
                                value={educationFormData.education}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                education: e.target.value
                            })
                        }} /><br />
                            <label style={{ display: 'block', marginLeft: '21px' }}  >Course: </label>
                            <input   style={{ margin: '2px',borderRadius:'10px', boxShadow: '',width:'450px',height:'50px',border:'2px solid blue' }}
                                value={educationFormData.course}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        course: e.target.value
                                    })
                                }}/>
                            <label style={{ display: 'block', margin: '21px' }} >Year of Passing: </label>
                            <input   style={{ margin: '2px', borderRadius: '10px', boxShadow: '',width:'450px',height:'50px',border:'2px solid blue' }}
                                value={educationFormData.yop}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        yop: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', marginLeft: '21px'    }}  >Percentage: </label>
                            <input   style={{ margin: '2px', borderRadius: '10px' , boxShadow: '',width:'450px',height:'50px',border:'2px solid blue'}}
                        value={educationFormData.percentage}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                percentage: e.target.value
                            })
                        }} />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveData}>
                        {props.modalType === 'add' ? 'ADD' : 'EDIT'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EducationalForm
