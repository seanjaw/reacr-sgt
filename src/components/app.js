import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import AddStudent from './add_student';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Table from './table';
import ViewStudent from './view_student';

// import studentData from '../data/get_all_students';


class App extends Component {
    

  

    
    
    render() {
        return (
            <div className="container">
                <Route exact path="/" component={Table}/>
                <Route path="/add-student" component ={AddStudent}/> 
                <Route path ="/student/:id" component ={ViewStudent}/>
                {/* <h1 className='center'>SGT</h1>
                <Table/> */}
                {/* <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent = {this.deleteStudent} studentList= {this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default App;
