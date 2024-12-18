import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserQRCodeReader } from '@zxing/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit, OnDestroy {
  scannedResult: string | null = null;
  errorMessage: string | null = null;
  information: string[] = [];
  qrCodeReader: BrowserQRCodeReader | null = null;
  video: HTMLVideoElement | null = null;
  isScanning: boolean = true;
  isBrowser: boolean; // Tracks if code is running in the browser

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject platform ID
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if in browser
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startVideoStream();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.stopVideoStream();
    }
  }

  startVideoStream(): void {
    if (!this.isBrowser) {
      return; // Avoid running browser-specific code in SSR
    }

    const video = document.getElementById('video') as HTMLVideoElement;
    this.video = video;

    this.qrCodeReader = new BrowserQRCodeReader();

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        this.startScanning();
      })
      .catch((err) => {
        this.errorMessage = 'Unable to access the camera';
        console.error(err);
      });
  }

  startScanning(): void {
    if (this.qrCodeReader && this.video) {
      this.qrCodeReader.decodeFromVideoDevice(
        undefined,
        this.video,
        (result, error) => {
          if (result) {
            this.handleScan(result.getText());
          } else if (error) {
            return;
          }
        }
      );
    }
  }

  handleScan(result: string): void {
    this.scannedResult = result;
    this.errorMessage = null;
    this.information = this.getInformation(result);
    this.stopVideoStream();
  }

  stopVideoStream(): void {
    if (this.video && this.video.srcObject) {
      const stream = this.video.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    this.isScanning = false;
  }

  getInformation(result: string): string[] {
    return ['Detail 1: ' + result, 'Detail 2: Example detail'];
  }

  reloadAndNavigateToScanner(): void {
    if (this.isBrowser) {
      this.router.navigate(['/scanner']).then(() => {
        window.location.reload();
      });
    }
  }
}
