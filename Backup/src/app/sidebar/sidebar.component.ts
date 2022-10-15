import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {Inject} from '@angular/core';
import SmoothScrollbar from 'smooth-scrollbar';
import  Scrollbar  from 'smooth-scrollbar';
import {MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpWorkspaceComponent } from '../pop-up-workspace/pop-up-workspace.component';
import { HomeboardcreateComponent } from '../homeboardcreate/homeboardcreate.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild("myDiv") myDiv:any
  items : Array<string>=[]
  url = "./assets/Trello-meeting.png"
  selectedMenu : any = 'Home'
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
   
  }

  goTo(paramText:string){
    this.selectedMenu = paramText
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "40%"
    dialogConfig.height = "80%"
    this.dialog.open(PopUpWorkspaceComponent , dialogConfig)
  }

  createBoardFromHome(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "30%"
    dialogConfig.height = "40%"
    this.dialog.open(HomeboardcreateComponent , dialogConfig)
  }

}
