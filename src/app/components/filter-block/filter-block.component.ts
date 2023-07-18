import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export class FilterBlockComponent {
  @Output() valueChanged = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<string>();

  screenWidth: any = window.innerWidth;
  inputValue!: string;
  selectedOption!: string;

  emitValue() {
    this.valueChanged.emit(this.inputValue);
  }

  emitOption() {
    this.optionChanged.emit(this.selectedOption);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
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
