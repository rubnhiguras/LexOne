import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonAccordionGroup, IonAccordion, IonItem, IonLabel
} from '@ionic/angular/standalone';

interface FaqItem {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel
  ]
})
export class FaqPage {
  faqs: FaqItem[] = [
    { pregunta: '¿Cuánto tarda una respuesta?', respuesta: 'Normalmente en menos de 24 horas laborables.' },
    { pregunta: '¿La primera consulta tiene coste?', respuesta: 'La valoración inicial de tu caso es gratuita.' },
    { pregunta: '¿Puedo adjuntar documentos?', respuesta: 'Sí, próximamente desde la pantalla de Query.' }
  ];
}
