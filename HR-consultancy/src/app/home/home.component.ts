import { Component ,OnInit} from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router) { }
  ngOnInit(){


  }

  about(){
this.router.navigate(["/about"])
  }




  services(){
    this.router.navigate(["/services"])
      }
}
