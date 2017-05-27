import { Component , OnInit} from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl:'app.html'
})
export class AppComponent implements OnInit {

    appName = "Seed Angular and Asp.net Core MVC Updated"

    ngOnInit()
    {
        console.log(" This is on init")
    }
}