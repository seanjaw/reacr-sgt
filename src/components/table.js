import React from 'react';
import StudentRow from './student_row';



const Table = props=>{

        const {studentList} = props;
        let studentRows = [];
        if (Array.isArray(studentList) && studentList.length){
            studentRows = props.studentList.map((student) => {
                return <StudentRow delete = {props.deleteStudent} key ={student.id} student={student}/>
            });
        }
        else{
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                    <h4 className= "center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }

        return (

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentRows}
                        </tbody>
                    </table>

        );
    }


export default Table;