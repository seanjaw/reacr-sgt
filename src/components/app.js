import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import AddStudent from './add_student';
import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';
// import studentData from '../data/get_all_students';
import {formatPostData} from '../helpers';


class App extends Component {
    state = {
        students: []
    }
    componentDidMount() {
        this.getStudentData();
    }

    addStudent = async (student) => {
        const formattedStudent = formatPostData(student);
        // console.log('Add Student:', formattedStudent);
  
      await axios.post('/server/createstudent.php', formattedStudent);

      this.getStudentData();
    //   console.log ('addstudent with response', response)
        
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
    render() {
        return (
            <div>
                <h1 className='center'>SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent = {this.deleteStudent} studentList= {this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
