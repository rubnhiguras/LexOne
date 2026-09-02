import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonItem, IonLabel, IonTextarea, IonButton, IonNote
} from '@ionic/angular/standalone';

interface QueryMsg {
  autor: 'cliente' | 'despacho';
  texto: string;
}

@Component({
  selector: 'app-chat-query',
  standalone: true,
  templateUrl: './chat-query.page.html',
  styleUrls: ['./chat-query.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonItem, IonLabel, IonTextarea, IonButton, IonNote
  ]
})
export class ChatQueryPage {
  mensajes: QueryMsg[] = [
    { autor: 'despacho', texto: 'Hola, ¿en qué podemos ayudarte hoy?' }
  ];
  nuevoMensaje = '';

  enviar() {
    const texto = this.nuevoMensaje.trim();
    if (!texto) { return; }
    this.mensajes.push({ autor: 'cliente', texto });
    this.nuevoMensaje = '';
  }
}
