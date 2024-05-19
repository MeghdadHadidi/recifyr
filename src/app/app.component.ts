import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { CountdownComponent } from "./countdown/countdown.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FrontendChallenge'

  eventDate: string = new Date('2024-06-21').toString()
  eventTitle: string = "Midsummer Eve"

  get eventDateAsMillis(): number {
    return new Date(this.eventDate).getTime()
  }
}
