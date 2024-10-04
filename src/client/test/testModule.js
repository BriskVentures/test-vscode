export function TestElementFactory(bpmnFactory, elementFactory) {
  this.bpmnFactory = bpmnFactory;
  this.elementFactory = elementFactory;
}

TestElementFactory.$inject = ['bpmnFactory', 'elementFactory'];

TestElementFactory.prototype.createCustomShape = function () {
  return this.elementFactory.createShape({
    type: 'bpmn:Task',
    businessObject: this.bpmnFactory.create('bpmn:Task', {
      custom: true,
      name: 'Custom Task1111111'
    })
  });
};
