import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseCategory } from '../../models/expense.model';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.component.html'
})
export class AddExpenseComponent {

  title: string = '';
  amount: number = 0;

  // IMPORTANT: force correct type
  category: ExpenseCategory = 'Work';

  constructor(public expenseService: ExpenseService) {}

  addExpense() {
    if (!this.title || this.amount <= 0) return;

    this.expenseService.addExpense({
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category
    });

    this.title = '';
    this.amount = 0;
    this.category = 'Work';
  }
}