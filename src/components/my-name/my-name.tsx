import {Component, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css'
})
export class MyName {
  private value = 5;

  @Prop() first: string;
  @Prop() last: string;

  @Event() valueChanged: EventEmitter;

  valueChangedHandler(event: any) {
    this.valueChanged.emit(event.target.value);
    console.log(event.target.value, 'stencil')
  }

  render() {
    return (
      <div class='slider-container'>
        <p>
          Hello, my name is {this.first} {this.last}
        </p>
        <input type='range' value={this.value} class='slider'
               onChange={(event) => this.valueChangedHandler(event)}>
        </input>
      </div>
    );
  }
}


