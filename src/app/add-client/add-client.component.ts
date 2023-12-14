import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'add-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  clientForm!: FormGroup;
  clientService!: ClientService;
  router!: Router;

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('clientPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };

  };
  constructor(private fb: FormBuilder, clientService: ClientService, router: Router) {
    this.clientService = clientService;
    this.clientForm = this.fb.group(
      {
        clientName: ['', [Validators.required, Validators.minLength(3)]],
        clientEmail: ['', [Validators.required, Validators.email]],
        clientAddress: [''],
        clientPassword: ['', [Validators.required]],
        confirmPassword: ['']
      }, { validators: this.confirmPasswordValidator }
    );
    this.router = router;
  }

  addClient(): void {
    this.clientService.addClient(this.clientForm.value.clientName, this.clientForm.value.clientEmail, this.clientForm.value.clientAddress, this.clientForm.value.clientPassword);
    console.log("add client completed");
    this.router.navigate(['']);
  }


}
