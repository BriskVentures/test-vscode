import { TestElementFactory } from './testModule';
import TestPalette from './testPalleteProvider';
import TestRenderer from './testRenderer';

export default {
  __init__: ['customRenderer', 'customPaletteProvider'],
  customElements: ['type', TestElementFactory],
  customPaletteProvider: ['type', TestPalette],
  customRenderer: ['type', TestRenderer]
};
