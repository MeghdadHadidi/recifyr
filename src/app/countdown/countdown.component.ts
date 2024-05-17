import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'event-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {
  // hardcoding the current date for now
  // TODO: create a form in parent component
  // and pass as input
  targetDate: Date = new Date('2024-06-21T00:00:00')

  // let's keep the countdown as a formatted string 
  countdown: string = '' // '00 days, 00 h, 00 m, 00 s'

  ngOnInit(): void {
    // TODO: cleanup before unmount
    setInterval(() => this.updateCountdown(), 1000)
  }

  private updateCountdown(): void {
    const currentTime = new Date();
    const diff = this.targetDate.getTime() - currentTime.getTime()

    const dayInMillis = 1000 * 60 * 60 * 24
    const hourInMillis = 1000 * 60 * 60
    const minuteInMillis = 1000 * 60

    if(diff > 0) {
      const days = Math.floor(diff / dayInMillis)
      const hours = Math.floor((diff % dayInMillis) / hourInMillis)
      const minutes = Math.floor((diff % hourInMillis) / minuteInMillis)
      const seconds = Math.floor((diff % minuteInMillis) / 1000)
      this.countdown = `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
    } else {
      this.countdown = "It's time!"
    }
  }
}
