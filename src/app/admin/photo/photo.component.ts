import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhotoService } from '../../services/photo.service';
import { AlertService } from '../../services/alert.service';
import { LeoRes } from '../models/leo-res';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  formGroup: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private photoService: PhotoService, private alertService: AlertService, private messageService: MessageService) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      category : 'ROOM',
      photo: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.formGroup.get('photo').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('title', this.formGroup.get('name').value);
    input.append('image', this.formGroup.get('photo').value);
    input.append('category', this.formGroup.get('category').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.photoService.upload(formModel).subscribe(
      (res: LeoRes) => {
        if (res.success) {
          this.messageService.sendMessage("UPLOAD_SUCCESS",res.data);
        }
      });
  }

  clearFile() {
    this.formGroup.get('photo').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}