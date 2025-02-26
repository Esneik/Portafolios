import { Component } from '@angular/core';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent {
  pdfUrl: string = '/assets/Docs/CV  Frandy Rafael Morel Almonte.pdf'; // Ruta del PDF en la carpeta 'assets'

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'CV  Frandy Rafael Morel Almonte.pdf';
    link.click();
  }

  printPdf() {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = this.pdfUrl;
    document.body.appendChild(iframe);
    iframe.contentWindow?.print();
  }
}


