import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h3>{{childProp}} in child component template</h3>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
 
}
