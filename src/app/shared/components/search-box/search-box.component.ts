import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input() public placeholder: string = '';
  @Output() public onValue = new EventEmitter<string>();
  @ViewChild('txtInput') public txtInput!: ElementRef<HTMLInputElement>;

  public emitValue(value: string): void {
    this.onValue.emit(value);
    this.resetInput();
  }
  private resetInput(): void {
    this.txtInput.nativeElement.value = '';
  }
}
