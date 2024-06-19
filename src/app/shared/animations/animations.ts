import { trigger, transition, style, animate } from "@angular/animations";

const popup = trigger("popup", [
    transition(":enter", [
        style({ transform: "translateY(30%)", opacity: 0 }),
        animate("300ms ease", style({ transform: "translateY(0%)", opacity: 1 })),
    ]),
    transition(":leave", [
        style({ transform: "translateY(0%)", opacity: 1 }),
        animate("300ms ease", style({ transform: "translateY(30%)", opacity: 0 })),
    ]),
]);

export { popup };
