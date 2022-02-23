import React from "react";
import { Button, Table } from "react-bootstrap";

function EducationalTable({ getEditableEducation, updateShowModal, educationalData, seteducationalData }) {

    const sendEducationData = (education, index) => {
        getEditableEducation(education, index)
    }
    const delets = (id) => {
        seteducationalData((old) => {
            return old.filter((v, i) => {
                return i !== id
            })
        })
    }
    return (
        <div style={{ display: '', width: '56vw', textAlign: 'center',margin:'100px -170px' }} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: '100px',border:'2px solid black' }}>Education</th>
                        <th style={{ width: '100px',border:'2px solid black' }}>Course</th>                       
                        <th style={{ width: '100px',border:'2px solid black' }}>Year of Passing</th>
                        <th style={{ width: '100px',border:'2px solid black' }}>Percentage</th>
                        <th style={{ width: '100px',border:'2px solid black' }}>
                            <Button variant="outline-primary" onClick={() => { updateShowModal('add', true) }}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {educationalData.map((education, index) => {
                        return (
                            <tr key={index} >
                                {/* <td>{index + 1}</td> */}
                                <td>{education.education}</td>
                                <td>{education.course}</td>
                                <td>{education.yop}</td>
                                <td>{education.percentage}</td>
                                <td>
                                    <Button style={{ marginRight: '5px' }}
                                        variant="outline-success" onClick={() => {
                                            sendEducationData(education, index)
                                        }}>
                                        Update
                                    </Button>
                                    <Button style={{marginTop:'5px'}} variant="outline-danger" onClick={() => {
                                        delets(index)
                                    }}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default EducationalTable;
