import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent {
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth!: boolean;
  authSubscription!: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => (this.isAuth = authStatus)
    );
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  onCloseSideNav() {
    this.closeSideNav.emit();
  }
}
