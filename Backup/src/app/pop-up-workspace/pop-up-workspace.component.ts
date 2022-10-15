import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-up-workspace',
  templateUrl: './pop-up-workspace.component.html',
  styleUrls: ['./pop-up-workspace.component.css']
})
export class PopUpWorkspaceComponent implements OnInit {

  constructor(private dialog:MatDialog,  private router:Router) { }

  ngOnInit(): void {
  }

  backWorkspace() {
    this.dialog.closeAll();
  }


}
