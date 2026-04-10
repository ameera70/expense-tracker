import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, ExpenseItemComponent],
  templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent {
  constructor(public expenseService: ExpenseService) {}

  deleteExpense(id: string) {
    this.expenseService.deleteExpense(id);
  }
}