import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonItem, IonLabel, IonTextarea, IonButton, IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-query-detail',
  standalone: true,
  templateUrl: './query-detail.page.html',
  styleUrls: ['./query-detail.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonItem, IonLabel, IonTextarea, IonButton, IonNote
  ]
})
export class QueryDetailPage implements OnInit {
  queryId = '';
  respuesta = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  enviarRespuesta() {
    // Placeholder: aqui se conectaria con el backend real
    this.respuesta = '';
  }
}
