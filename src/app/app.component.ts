import {Component} from '@angular/core';
import {fade, removeMe} from './animations/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fade, removeMe]
})
export class AppComponent {
    title = 'angular-animations';
    public state;
    public loremArray: string[] = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    ];
    public btnState: string = 'in';

    public animStart(event: any) {
        // console.log(event);
    }

    public animDone(event: any) {
        // console.log('done', event);
    }

    public addLoremIpsum() {
        this.loremArray.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2');
        this.btnState = 'out';
    }

    public deleteLoremIpsum(id: number) {
        console.log(id)
        this.loremArray.splice(id, 1);
    }
}
