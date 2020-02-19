/*makeFetchAndSet
Should return a function that is a getter setter. When the getter/setter is invoked with a single argument, it should set the value. When the getter/setter is invoked without any arguments, it should return the previously set value. If no value has been set then return 'Value not set'*/

var makeFetchAndSet = function() {
  //debugger;
  let defaultValue;
  return function(value) {
    //debugger;
    if(value) {
      defaultValue = value;
    } else {
      if(!defaultValue) {
        defaultValue = 'Value not set';
      }
      return defaultValue;
    }
    return;
  }
}

var fetcherSetter = makeFetchAndSet();
  console.log(fetcherSetter()); // returns 'Value not set'
  fetcherSetter('New value'); //setting it
  console.log(fetcherSetter()); // returns the previously set value 'New value'
  fetcherSetter(100); // setting it
  console.log(fetcherSetter());// returns previously set value 100


