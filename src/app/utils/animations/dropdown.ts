import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const dropdown = trigger('dropdown', [
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  state('void, hidden', style({ opacity: 0, transform: 'translateY(-25px)' })),
  transition('* => visible', animate('0.75s  ease-in-out')),
  transition('* => void, * => hidden', animate('0.75s ease-in-out')),
]);
