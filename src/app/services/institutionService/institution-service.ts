// ...existing code...
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  private readonly DEFAULT_INST = 1;
  private _selected = new BehaviorSubject<number>(this.getInitialInstitution());
  selectedInstitution$ = this._selected.asObservable();

  private getInitialInstitution(): number {
    const stored = localStorage.getItem('selectedInstitution');
    return stored ? Number(stored) || this.DEFAULT_INST : this.DEFAULT_INST;
  }

  setSelectedInstitution(inst: number) {
    const val = inst || this.DEFAULT_INST;
    localStorage.setItem('selectedInstitution', String(val));
    this._selected.next(val);
  }

  getSelectedInstitution(): number {
    return this._selected.value;
  }
}