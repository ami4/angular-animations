import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
    // state('fadeIn', style({opacity: '1'})),
    // transition('void => *', [ // void <=> * || void => *, * => void
    //     style({opacity: '0', transform: 'translateY(20px)'}),
    //     animate('500ms')
    // ]),

    state('fadeIn', style({opacity: 1})),
    transition(':enter', [ // void <=> * || void => *, * => void
        animate(500, keyframes([
            style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(5px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
    ]),

    state('fadeOut', style({opacity: 0})),
    transition(':leave', [ // void <=> * || void => *, * => void
        animate(500, keyframes([
            style({opacity: 1, transform: 'translateY(0px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(5px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-30px)', offset: 1}),
        ]))
    ]),
]);

export let removeMe = trigger('removeMe', [
    state('out', style({transform: 'scale(0)', opacity: 0})),
    transition('* => out', [
        animate('500ms 0s ease-in', keyframes([
            style({opacity: 1, transform: 'translateX(-8px)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 0.3}),
            style({opacity: 0, transform: 'translateX(50px)', offset: 1}),
        ]))
    ])
]);

export let grow = trigger('grow', [
    state('small', style({transform: 'scale(1)'})),
    state('large', style({transform: 'scale(1.4)'})),
    transition('small <=> large', animate('500ms'))
]);
