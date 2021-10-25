import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  private _name: string = 'John';
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  private _twoWayDatabindTest: string = 'Zeca';
  public get twoWayDatabindtest(): string {
    return this._twoWayDatabindTest;
  }
  public set twoWayDatabindtest(value: string) {
    this._twoWayDatabindTest = value;
  }
}
