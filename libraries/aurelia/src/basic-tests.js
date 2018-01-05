//import 'aurelia-loader-webpack';
import expect from "expect";
import { bootstrap } from 'aurelia-bootstrapper';
import { StageComponent } from 'aurelia-testing';

describe('MyComponent', function() {
  this.timeout(15000);

  it('should render first name', function(done) {
    let component = StageComponent
      .withResources('src/my-component')
      .inView('<my-component first-name.bind="firstName"></my-component>')
      .boundTo({ firstName: 'Bob' });

    component.create(bootstrap)
      .then(() => {
        const nameElement = document.querySelector('.firstName');
        expect(nameElement.innerHTML).toBe('Bob');
        done();
      })
      .catch(e => { console.log(e.toString()) });
  });
});
