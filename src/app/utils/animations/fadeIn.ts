import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('visible', style({ opacity: 1, transform: 'translatex(0)' })),
  state('void', style({ opacity: 0, transform: 'translatex(25%)' })),
  transition('void => *', animate('0.5s ease-out')),
  transition('* => void', animate('0.5s ease-out ')),
]);
