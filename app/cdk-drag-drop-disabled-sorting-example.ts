import {Component, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {debounceTime, map} from "rxjs/operators";
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'cdk-drag-drop-disabled-sorting-example',
  templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
  styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
})
export class CdkDragDropDisabledSortingExample {
@ViewChild('dtable', {static: false}) dtable: any;
basket = [];
constructor(){  
}

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Banana',
    'Apples',
    'Avocados'
  ];

 drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      // copyArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.dtable.renderRows();  
  }
}