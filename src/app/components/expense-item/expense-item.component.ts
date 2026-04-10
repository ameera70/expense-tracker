import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-item.component.html'
})
export class ExpenseItemComponent {
  @Input() expense!: Expense;
  @Output() remove = new EventEmitter<string>();

  deleteExpense() {
    this.remove.emit(this.expense.id);
  }

  isHighExpense(): boolean {
    return this.expense.amount > 100;
  }
}
