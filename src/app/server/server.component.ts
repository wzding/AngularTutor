import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    isCheck = false;
    dishName: string;
//     students: Student[] = [new Student('Bill Gates', 'Computer Science'),
//                            new Student('Steve Jobs', 'Computer Science'),
//                            new Student('Elon Musk', 'Computer Science')]
    check() {
      this.isCheck = true;
    }

//     signOut() {
//       this.isCheck = false;
//     }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.dishName = (<HTMLInputElement>event.target).value;
    }
}
