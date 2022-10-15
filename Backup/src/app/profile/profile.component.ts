import { Component, OnInit } from '@angular/core';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  url= "./assets/download.png"

  backWorkspace() {
    this.dialog.closeAll();
}

onSelectFile(e: {
  target: any; file: any; 
}){
  if (e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result
    }
  }
}
}
