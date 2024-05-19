import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AutoResizeDirective } from '../auto-resize.directive'
import { Subscription, interval } from "rxjs"
import { CommonModule } from "@angular/common"

// Time constants
const DAY_IN_MILLIS = 1000 * 60 * 60 * 24
const HOUR_IN_MILLIS = 1000 * 60 * 60
const MINUTE_IN_MILLIS = 1000 * 60

@Component({
  selector: 'event-countdown',
  standalone: true,
  imports: [AutoResizeDirective, CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  /**
   * This property is required. We will check for this before
   * caculating and rendering the timer
   */
  @Input({ required: true }) targetDateMillis!: number;
  @Input() eventTitle!: string;

  /**
   * Keeping the countdown in a more complex structure
   * it makes it easy to have more granular control
   * over different parts of the the countdown
   */
  countdown!: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }

  // reference to the interval to clear it later
  subscription!: Subscription

  ngOnInit(): void {
    this.updateCountdown()
    this.subscription = interval(1000).subscribe(x => { this.updateCountdown(); });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  // a getter that returns a calculated event title based on the countdown object
  get eventTitleCalculated(): string {
    // if the countdown is all 0 then we are done and the event is over
    const { days, hours, minutes, seconds } = this.countdown || {}
    if(days + hours + minutes + seconds === 0) {
      return `Event is over! 🎉`
    }

    // if event title exists, add `Tile left to...`, otherwise return a default title
    return this.eventTitle ? `Time left to ${this.eventTitle}` : `Time left to go`
  }

  private updateCountdown(): void {
    const currentTime = new Date();
    const diff = this.targetDateMillis - currentTime.getTime()

    if(diff <= 0) { 
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 } 
      return;
    }

    const days = Math.floor(diff / DAY_IN_MILLIS)
    const hours = Math.floor((diff % DAY_IN_MILLIS) / HOUR_IN_MILLIS)
    const minutes = Math.floor((diff % HOUR_IN_MILLIS) / MINUTE_IN_MILLIS)
    const seconds = Math.floor((diff % MINUTE_IN_MILLIS) / 1000)
    
    this.countdown = {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
