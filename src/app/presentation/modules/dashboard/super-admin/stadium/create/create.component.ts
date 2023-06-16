import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Stadium } from 'src/app/core/models/stadium.model';
import { StadiaService } from 'src/app/persistence/functionalities/stadia/stadia.service';

@Component({
  selector: 'app-stadium-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StadiumCreateComponent implements OnInit {

  message: any = null
  stadium: Stadium = new Stadium();
  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    private stadiumService : StadiaService,
  ) { }

  toggleModal: Subject<boolean> = new Subject();
  selectedFile :File | undefined;
  ngOnInit(): void {
  }

  add() {
    const formData :any= new FormData();

    //let model: any = {};
    formData.append('region',this.stadium.region);
    formData.append('location',this.stadium.location);
      formData.append('capacity',this.stadium.capacity);
      formData.append('stadium_owner',this.stadium.stadium_owner) ;
      formData.append('inauguration_date',this.stadium.inauguration_date);
      formData.append('name',this.stadium.name);
      formData.append('_method',"PUT");
     // console.log(model);
      formData.append('stadium_picture', this.selectedFile);
 // formData.append('data', JSON.stringify(model));

    this.stadiumService.store(formData).subscribe((res: any) => {
      
         this.message = {
      type: "success",
      title: "Success",
      message: res.message
    };
    
    
     
    this.resetMessage()
  }  );
}
onFileChange(event: any) {
  const file = event.target.files[0];
  this.selectedFile = file;
  // Perform further operations with the file
}
  closeModal() {
    this.toggleModal.next(true)
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }
}
