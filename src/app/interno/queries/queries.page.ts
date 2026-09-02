import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonItem, IonLabel, IonBadge
} from '@ionic/angular/standalone';

interface QueryResumen {
  id: string;
  cliente: string;
  asunto: string;
  estado: 'pendiente' | 'respondida';
}

@Component({
  selector: 'app-queries',
  standalone: true,
  templateUrl: './queries.page.html',
  styleUrls: ['./queries.page.scss'],
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonItem, IonLabel, IonBadge
  ]
})
export class QueriesPage {
  queries: QueryResumen[] = [
    { id: '1', cliente: 'María López', asunto: 'Contrato de alquiler', estado: 'pendiente' },
    { id: '2', cliente: 'Juan Pérez', asunto: 'Despido improcedente', estado: 'pendiente' },
    { id: '3', cliente: 'Ana Ruiz', asunto: 'Herencia', estado: 'respondida' }
  ];

  constructor(private router: Router) {}

  abrir(q: QueryResumen) {
    this.router.navigateByUrl('/interno/queries/' + q.id);
  }
}
