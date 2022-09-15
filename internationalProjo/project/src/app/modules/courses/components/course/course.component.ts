import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/modules/commun/services/categorie.service';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/cours.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import {mergeMap,map} from 'rxjs/operators';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  regiForm:FormGroup;
  categories:any[];
  course:Course;
  constructor(private fb:FormBuilder,private serviceCategorie:CategorieService,
    private serviceCourse:CourseService,
    public dialogRef: MatDialogRef<CourseComponent>,
    @Inject(MAT_DIALOG_DATA) public idCourse
    ) { 
   
 
  }

  ngOnInit() {
    if(!this.idCourse)
    {
    this.serviceCategorie.getAllCategories()
                         .subscribe(categories=>{
                           this.categories=categories;
                           this.initalizeCourse(null);
                          });
    }
    else
    {
      this.serviceCategorie.getAllCategories()
                           .pipe(
                             mergeMap(categories=>this.serviceCourse.getCoursebyId(this.idCourse.id).pipe(
                              map(course=>{
                                return ([categories,course])
                              })
                             ))).subscribe(([categories,course])=>{
                                 this.categories=categories as any[];
                                 this.course=course as Course;
                                 this.initalizeCourse(course);
                             })
                        
                           
     
    }
  }
  initalizeCourse(course)
  {
    this.regiForm = this.fb.group({  
      'Title' : [ course?course.title:null,Validators.required],  
      'Description' : [course?course.description:null, Validators.required],  
      'Price' : [ course?course.price:null,Validators.required],  
      'UrlImage' : [ course?course.urlImage:null,Validators.required],  
      'Categorie':[ course?course.categorie:null,Validators.required]
    });

  }

  onSubmit(form)
  {
    console.log(form);
    if(this.regiForm.valid)
    {
      let course:Course={
        id:this.idCourse?this.idCourse.id:'',
        title:form.Title,
        description:form.Description,
        categorie:form.Categorie,
        price:form.Price,
        urlImage:form.UrlImage
      }
       if(!this.idCourse)
       {
      this.serviceCourse.AddCourse(course).then(()=>{
        this.dialogRef.close();
      });
      }
      else
      {
        this.serviceCourse.updateCourse(course).then(()=>{
          this.dialogRef.close();
        });
      }
     
     }

    

  }
}
