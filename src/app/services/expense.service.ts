import { Injectable, signal, computed } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);
  
  categories = signal<string[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food'
  ]);


  totalExpense = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
  );

  transactionCount = computed(() =>
    this.expenses().length
  );

  highestExpense = computed(() =>
    this.expenses().length
      ? Math.max(...this.expenses().map(e => e.amount))
      : 0
  );

  averageExpense = computed(() =>
    this.expenses().length
      ? this.totalExpense() / this.expenses().length
      : 0
  );

  
  addExpense(expense: Expense) {
    this.expenses.update(exp => [...exp, expense]);
  }

  deleteExpense(id: string) {
    this.expenses.update(exp => exp.filter(e => e.id !== id));
  }
}