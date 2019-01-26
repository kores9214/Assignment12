import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment12';

  public goldTypesAndRateOfInterests: Observable<any[]>;
  public silverTypesAndRateOfInterests: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.goldTypesAndRateOfInterests = db.collection('/Gold').valueChanges();
        this.silverTypesAndRateOfInterests = db.collection('/Silver').valueChanges();
    }

    
}
