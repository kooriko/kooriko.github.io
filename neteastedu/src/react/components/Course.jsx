import React, { Component } from 'react';

import CourseList from './course/CourseList.jsx';
import CourseRanking from './course/CourseRanking.jsx';

import '../../styles/course.scss';

export default class Course extends Component {
    render () {
        return (
            <main className="m-course">
                <CourseList />
                <CourseRanking />
            </main>
        )
    }
}