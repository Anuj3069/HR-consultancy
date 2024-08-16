import { Component ,OnInit} from '@angular/core';
import { UserServiceService } from '../../user-service.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private userService:UserServiceService) { }
  ngOnInit(){
  //   this.userService.getUsers().subscribe(arg =>
  //     console.log(arg));

  }
}
