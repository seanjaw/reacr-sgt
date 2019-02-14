import React, { Component } from 'react';
import StudentRow from './student_row';
import {formatPostData} from '../helpers';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Table extends Component {
    state = {
        students: []
    }
    componentDidMount() {
        this.getStudentData();
    }

    async getStudentData() {
        const response = await axios.get('/server/getstudentlist.php');

        console.log('get list response:' ,response)
        this.setState({
            students: response.data.data || []
        })
        // if (response.data.success){
        //     this.setState({
        //         students: response.data.data
        //     })
        // }
        // else{
        //     this.setState({

        //         students: [] 
        //     })
        // }
       
        //Call server to get student data
        // axios.get('http://localhost/server/getstudentlist.php').then((response)=>{
        //     console.log('Server Reponse:', response.data.data);
        //     this.setState({
        //         students: response.data.data
        //     });
        // });
       
    }

    deleteStudent = async (id)=>{

        const formattedId = formatPostData({id: id});
        await axios.post('/server/deletestudent.php', formattedId);
        // const indexToDelete = this.state.students.findIndex((student)=>{
        //     return student.id === id;
        // });
        // if (indexToDelete >= 0){
        //     const tempStudents = this.state.students.slice();
        //     tempStudents.splice(indexToDelete,1);
        //     this.setState({
        //         students: tempStudents
        //     });


        // }
        this.getStudentData();

        
    }
    render() {
        const {students} = this.state;
        let studentRows = [];
        if (Array.isArray(students) && students.length) {
            studentRows = students.map((student) => {
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student} />
            });
        }
        else {
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }

        return (
            <div>
                <h1 className="center">Student Grade Table</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to ="/add-student">Add Student</Link>
                    </div>
                </div>
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

            </div>

            
        );

    }


}


export default Table;