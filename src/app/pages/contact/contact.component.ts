import { Component, OnInit, NgModule } from '@angular/core';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  template: `
    <div class="container mt-5">
      <h1>Contact Me!</h1>
      <form class="row g-3" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
        <div class="col-md-6">
          <label for="firstName" class="form-label">Nome</label>
          <input type="text" class="form-control" name="firstName" required [(ngModel)]="firstName" #firstNameInput="ngModel"
          [ngClass]="{'is-invalid': firstNameInput.invalid && contactForm.submitted}">
          <div class="invalid-feedback">
          Por favor insira um nome valido.
          </div>
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Sobre Nome</label>
          <input type="text" class="form-control" name="lastName" required [(ngModel)]="lastName" #lastNameInput="ngModel"
          [ngClass]="{'is-invalid': lastNameInput.invalid && contactForm.submitted}">
          <div class="invalid-feedback">
          Por favor insira um sobrenome valido.
          </div>
        </div>
        <div class="col-md-8">
          <label for="emailInfo" class="form-label">E-mail</label>
          <input type="email" class="form-control" name="emailInfo" required [(ngModel)]="emailInfo" #emailInput="ngModel"
          [ngClass]="{'is-invalid': emailInput.invalid && contactForm.submitted}">
          <div class="invalid-feedback">
            Por favor insira um email valido.
          </div>
        </div>
        <div class="col-md-4">
          <label for="phoneNumber" class="form-label">Telefone</label>
          <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" placeholder="(19) 99999-9999" [(ngModel)]="phoneNumber">
        </div>
        <div class="col-md-12">
          <label for="mensagem" class="form-label">Mensagem</label>
          <textarea class="form-control" placeholder="Gostaria de planejar uma viagem para..." name="mensagem" rows="3" required [(ngModel)]="mensagem" #mensagemInput="ngModel"
          [ngClass]="{'is-invalid': mensagemInput.invalid && contactForm.submitted}"></textarea>
          <div class="invalid-feedback">
            Por favor insira uma mensagem valido
          </div>
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  emailInfo: string = '';
  phoneNumber: string = '';
  mensagem: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    alert('Obrigado '+this.firstName+'!\nEntraremos em contato');
  }
}
