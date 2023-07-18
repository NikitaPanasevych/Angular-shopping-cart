import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('visible', style({ opacity: 1 })),
  state('void', style({ opacity: 0 })),
  transition('void => *', animate('0.2s 350ms ease-in-out')),
  transition('* => void', animate('0.2s ease-in-out')),
]);
