import { SD_SHEET_REGISTER } from '../../../models/Sheets';
import { ApiService } from '../../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-project-sheets',
  templateUrl: './project-sheets.component.html',
  styleUrls: ['./project-sheets.component.css']
})
export class ProjectSheetsComponent implements OnInit {

  Projects: any = [];
  projectId:string;
  services:any=[];
  components:any=[];
  dataSource: MatTableDataSource<SD_SHEET_REGISTER>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['ITEM_NAME','DESCRIPTION_A','DESCRIPTION_B','DESCRIPTION_C','SECTION','ITEM_NO','DATE_ISSUED','REV_ISSUED','action'];

  constructor(private commonSevice: ApiService, private actRoute: ActivatedRoute, private loader: Ng4LoadingSpinnerService, private ms: MessageService) {
    this.projectId=this.actRoute.snapshot.paramMap.get('id');
    this.loader.show();
    var URL="project_sheet/getAll/"+this.projectId;
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      console.log(this.Projects);
      this.dataSource = new MatTableDataSource<SD_SHEET_REGISTER>(this.Projects);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
      this.loader.hide();
    },error=>{
      this.loader.hide();
    })    
  }
  
  ngOnInit() { 
   
  }

 
  
  deleteProjectSheet(index: number, e){
    if(window.confirm('Are you sure')) {
      this.loader.show();
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      var url='project_sheet/delete-project_sheet/'+this.projectId;
      this.commonSevice.Delete(e._id,url).subscribe(data=>{
        this.ms.openSnackBar("The register sheet is deleted");
        this.loader.hide();
      })
    }
  }

}
