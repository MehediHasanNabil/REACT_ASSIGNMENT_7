import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';

const Courses = (props) => {
    const {name, image, price, title} = props.courseItem;
    const totalCourses = props.totalCourses;
    return (
        <div className="card my-4 mx-3 shadow rounded">
            <img src={image} alt="" />
            <div className="card-body">
                <p className="card-text"><b>{name}</b></p>
                <p className="card-text">Name: {title}</p>
                <p className="card-text">Price: ${price}</p>
                <button className="btn btn-primary w-100" onClick={() => totalCourses(props.courseItem)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;