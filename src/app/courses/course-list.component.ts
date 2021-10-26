import { Component, OnInit } from "@angular/core";

import { Course } from './course';
import { CourseService } from './course.service';


// Selector não mais necessário porque
// aqui temos uma rota definida
// selector: 'app-course-list',
@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) {}
    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;

                // Posto aqui em razão da assincronia
                // da operação
                this.filteredCourses = this._courses;
            }
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    } 
    get filter() {
        return this._filterBy;
    }
}