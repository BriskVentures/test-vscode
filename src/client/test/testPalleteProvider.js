export default class TestPalette {
  constructor(create, elementFactory, palette, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const { create, elementFactory, translate } = this;

    function createStar(event) {
      const shape = elementFactory.createShape({ type: 'star:Star' });
      create.start(event, shape);
    }

    return {
      'create.star': {
        group: 'activity',
        className: 'bpmn-icon-star', // Use a custom icon class
        title: translate('Create Star'),
        action: {
          dragstart: createStar,
          click: createStar
        }
      }
    };
  }
}

TestPalette.$inject = ['create', 'elementFactory', 'palette', 'translate'];
