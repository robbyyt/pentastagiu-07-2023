const createEmitter = () => {
  const callbacks = [];
  // TODO: Implement this function body
  return {
    emit: (value) => {
      callbacks.forEach((cb) => cb(value));
    },
    subscribe: (callback) => {
      callbacks.push(callback);

      return {
        cancel: () => {
          const callbackIndex = callbacks.findIndex((cb) => cb === callback);
          callbacks.splice(callbackIndex, 1);
        },
      };
    },
  };
};

// Create an event emitter
const emitter = createEmitter();

const subscription1 = emitter.subscribe((value) => console.log(value));
const subscription2 = emitter.subscribe((value) => console.log(value * 2));

emitter.emit(7);
// -> 7, -> 14
subscription1.cancel();
emitter.emit(7);
// -> 14
