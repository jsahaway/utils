///////////////////////////////////////////
// event emmitter with array //////////////

let _arrHandlers = [];

let on = function(eventName, handler) {
  switch (eventName) {
    case "updateModel":
      return _arrHandlers.push(handler);
    case "updateView":
      return _arrHandlers.push(handler);
  }
};

let dispatch = function() {
  for (let i = 0; i < _arrHandlers.length; i++) {
    _arrHandlers[i](); //.handler(_arrHandlers[i].eventName);
  }
};

// listen
on("updateModel", a => {
  console.log("whit arr");
});

// trig
dispatch();

////////////////////////////////////////////
// event emmitter with object //////////////

let _objHandlers = {};

let on2 = function(eventName, handler) {
  return (_objHandlers[eventName] = handler);
};

let dispatch2 = function(eventName) {
  if (_objHandlers.hasOwnProperty(eventName)) _objHandlers[eventName](eventName);
  else return undefined;
};

// listen
on2("updateModel2", a => {
  console.log("with obj >>", a);
});

// trig
dispatch2("updateModel2");
