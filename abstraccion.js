//codigo de abstraccion en javascript

const AbstractClass = require('./abstract-class');

class ConcreteClass1 extends AbstractClass {
    constructor() {
        super('ConcreteClass1');
    }

    method1() {
        console.log('ConcreteClass1: Method 1');
    }
}

