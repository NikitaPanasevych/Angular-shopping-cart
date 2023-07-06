import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export class FilterBlockComponent {
  @Output() valueChanged = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<string>();

  inputValue!: string;
  selectedOption!: string;

  emitValue() {
    this.valueChanged.emit(this.inputValue);
  }

  emitOption() {
    this.optionChanged.emit(this.selectedOption);
  }

  options = [
    {
      name: 'Most expensive',
    },
    {
      name: 'Least expensive',
    },
  ];
}
