import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated, //Emulated is default. none, shadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // @Input() element: { type: string; name: string; content: string };
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('changes', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('header textContent', this.header.nativeElement.textContent);
    console.log(
      'text content of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'text content of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(
      'header textContent ngAfterViewInit',
      this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}

// @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.

//// Lifecycle
// ngOnChanges - Called after a bound input property changes
// ngOnInit - Called once the component is initialized
// ngDoCheck - Called during every change detection run
// ngAfterContentInit - Called after content (ng-content) has been projected into view
// ngAfterContentChecked - Called every time the projected content has been checked
// ngAfterViewInit - Called after the component's view (and child views) has been initialized
// ngAfterViewChecked - Called every time the view (and child views) have been checked
// ngOnDestroy - Called once the component is about to be destroyed
