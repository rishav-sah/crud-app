import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm !: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: [null, [Validators.required]],
      date: [null, [Validators.required]],
      category: [null, [Validators.required]],
      warranty: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.maxLength(90)]]
    })
  }

  onClose() {
    console.log('closed');
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.detailsForm.value);
  }

}
