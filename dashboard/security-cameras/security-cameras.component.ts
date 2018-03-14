import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Ilala - Kariakoo',
    source: 'assets/images/camera1.jpg',
  }, {
    title: 'Kinondoni - Msasani',
    source: 'assets/images/camera2.jpg',
  }, {
    title: 'Ubungo - Stendi',
    source: 'assets/images/camera3.jpg',
  }, {
    title: 'Temeke - Mbagala',
    source: 'assets/images/camera4.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
