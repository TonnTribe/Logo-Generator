const {Circle, Square, Triangle} = require('./shapes');

// Circle test
describe('Circle', () => {
    it('renders a plum circle', () => {
        const shape = new Circle();
        shape.setColor('plum');
        expect(shape.render()).toEqual('<circle cx="125" cy="80" r="75" fill="plum"/><text x="85" y="100" font-size="50" fill=');
    });
});

// Square test
describe('Square', () => {
    it('renders a light green(using hexidecimal) square', () => {
        const shape = new Square();
        shape.setColor('#aaffaa');
        expect(shape.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="#aaffaa"/><text x="110" y="140" font-size="50" fill=')
    });
});

// Triangle test
describe('Triangle', () => {
    it('renders a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="110" y="140" font-size="50" fill=');
    });
});
