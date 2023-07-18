import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { dropdown } from 'src/app/utils/animations/dropdown';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
  animations: [dropdown],
})
export class FilterBlockComponent {
  @Output() valueChanged = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<string>();

  screenWidth: any = window.innerWidth;
  inputValue!: string;
  selectedOption!: string;
  showSearch = false;
  showOptions = false;

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
