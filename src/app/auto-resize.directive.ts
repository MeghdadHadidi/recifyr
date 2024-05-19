import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from "rxjs"

@Directive({
  selector: '[appAutoResize]',
  standalone: true
})
export class AutoResizeDirective implements AfterViewInit, OnDestroy {
  private element: HTMLElement
  private resizeSubscription!: Subscription;
  private observer!: ResizeObserver;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement
  }

  ngAfterViewInit(): void {
    this.fitText()
    this.resizeSubscription = fromEvent(window,'resize').subscribe(() => this.fitText());
    this.registerListenerForDomChanges()
  }

  ngOnDestroy(): void {
    // Ensure proper cleanup by unsubscribing from the resizeSubscription to prevent memory leaks.
    if(this.resizeSubscription) {
      this.resizeSubscription.unsubscribe()
    }
    
    // Also, disconnect the MutationObserver to stop observing changes in the element's content.
    this.observer.disconnect();
  }

  private registerListenerForDomChanges() {
    this.observer = new ResizeObserver(() => this.fitText());
    this.observer.observe(this.element);
  }

  /**
   * This method is called when the element itself and the window are resized.
   * It will re-calculate the font size of the element based on the available space.
   */
  private fitText() {
    var max = window.innerWidth - 32; // considering a little padding (hardcoded to equivalent of 1rem from each side)
    this.element.style.fontSize = `${max / 4}px`; // make a guess, considering this as a starting point
    let fontSize = (max / (this.element.scrollWidth / parseFloat(this.element.style.fontSize))) // enhance the guess with the actual width of the text
    this.element.style.fontSize = `${fontSize}px`;
  }
}
