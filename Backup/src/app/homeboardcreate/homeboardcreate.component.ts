import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeboardcreate',
  templateUrl: './homeboardcreate.component.html',
  styleUrls: ['./homeboardcreate.component.css']
})
export class HomeboardcreateComponent implements OnInit {

  constructor(private dialog:MatDialog,  private router:Router) { }

  ngOnInit(): void {
  }

  
  backHome() {
    this.dialog.closeAll();
  }

}
