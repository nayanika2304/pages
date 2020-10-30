import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
  }
  // re-implementing ng-class directive
  @Input('appClass') set className(classObj: any){
    for (const key in classObj){
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
