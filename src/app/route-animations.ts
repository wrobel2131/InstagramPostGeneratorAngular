import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => left', slideHorizontal('left')),
  transition('* => right', slideHorizontal('right')),
  transition('* => down', slideVertical()),
]);

function slideHorizontal(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}

function slideVertical() {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ transform: 'translateY(-100%)' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ transform: 'translateY(100%)' }))],
        optional
      ),
      query(':enter', [
        animate('600ms ease', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ];
}
