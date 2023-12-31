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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
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
  onToggleSideNav() {
    this.sideNavToggle.emit();
  }
}
