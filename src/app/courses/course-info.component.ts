import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './course';
import { CourseService } from "./course.service";


@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}
    
    ngOnInit(): void {
        //this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');

        /*
        this.activatedRoute.params.subscribe(params => {
            this.courseId = +params['id'];
            console.log('Url courseId: ', this.courseId);
        });*/

        //this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));

        this.courseService.retrieveById(this.activatedRoute.snapshot.params.id);
    }
}




