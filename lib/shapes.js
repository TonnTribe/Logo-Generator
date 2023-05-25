class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shapes {
    render() {
        return`<circle cx="125" cy="80" r="75" fill="${this.color}"/><text x="85" y="100" font-size="50" fill=`
    }
}

class Square extends Shapes {
    render() {
        return`<rect x="75" y="50" width="150" height="150" fill="${this.color}"/><text x="110" y="140" font-size="50" fill=`
    }
}

class Triangle extends Shapes {
    render() {
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="110" y="140" font-size="50" fill=`
    }
}

module.exports = {Circle, Square, Triangle};