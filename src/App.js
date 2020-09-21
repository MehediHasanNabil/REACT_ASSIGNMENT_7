import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import data from './Components/Data/Data.json';
import Price from './Components/Price/Price';
    
function App() {
    const [course, setcourse] = useState([]);
    const [subject, Setsubject] = useState([]);
    const totalCourses = (courseItem) => {
        const total = [...subject, courseItem];
        Setsubject(total);
    }
    let totalPrice = 0;
    for (let i = 0; i < subject.length; i++) {
        const item = subject[i];
        totalPrice = totalPrice + item.price;
    }
    useEffect(() => {
      setcourse(data);
    }, []);
    return (
        <div className="App">
            <h1 className="pt-4 text-primary">Web Development Course</h1>
            <h2><b>Total Courses: {subject.length}</b></h2>
            <Price totalPrice={totalPrice}></Price>
            <div className="container">
                {
                    data.map(courseItem => <Courses courseItem={courseItem} totalCourses={totalCourses} key={courseItem.id}></Courses>)
                }
            </div>
        </div>
    );
}

export default App;
