import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollListener]',
})
export class ScrollListenerDirective {
  @Output() scrolledToBottom = new EventEmitter<void>();

  emitted = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      !this.emitted
    ) {
      this.emitted = true;
      this.scrolledToBottom.emit();
    } else if (
      window.innerHeight + window.scrollY <
      document.body.scrollHeight
    ) {
      this.emitted = false;
    }
  }
}
