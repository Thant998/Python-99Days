import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  url3 = "./assets/download.png"

  menuToggle(){
    const toggleMenu=document.querySelector('.menu');
    if (toggleMenu != null)
    toggleMenu.classList.toggle('active');
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "20%"
    dialogConfig.height = "40%"
    dialogConfig.position = { right: '20px' , top:'20px' };
    this.dialog.open(ProfileComponent,dialogConfig)
  }

}
