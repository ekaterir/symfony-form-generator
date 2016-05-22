function Form(name) {

    this.name = name;
    this.elements = [];

}


Form.prototype.addElement = function(element) {

    this.elements.push(element);

}


Form.prototype.removeElement = function(index) {

    this.elements.splice(index, 1);

}

Form.prototype.updateElement = function(element) {

    return 'Not yet implemented';

}
