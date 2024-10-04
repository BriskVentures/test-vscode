import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import { is } from 'bpmn-js/lib/util/ModelUtil';
import {
  append as svgAppend,
  attr as svgAttr,
  classes as svgClasses,
  create as svgCreate
} from 'tiny-svg';

export default class TestRenderer extends BaseRenderer {
  constructor(eventBus, styles) {
    super(eventBus, 2000);
    this.styles = styles;
  }

  canRender(element) {
    return is(element, 'star:Star');
  }

  drawShape(parentNode, element) {
    const shape = this._drawStar(parentNode, element.width, element.height);
    return shape;
  }

  _drawStar(parentNode, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = width / 2;
    const innerRadius = width / 4;

    const points = this._calculateStarPoints(
      5,
      outerRadius,
      innerRadius,
      centerX,
      centerY
    );

    const attrs = this.styles.computeStyle(
      {},
      {
        stroke: '#000',
        strokeWidth: 2,
        fill: '#FFD700'
      }
    );

    // Convert points array to a string format acceptable by SVG 'points' attribute
    const pointsString = points.map((point) => point.join(',')).join(' ');

    // Create an SVG 'polygon' element
    const polygon = svgCreate('polygon');

    // Set attributes
    svgAttr(polygon, {
      points: pointsString,
      ...attrs
    });

    // Append the polygon to the parent node
    svgAppend(parentNode, polygon);

    return polygon;
  }

  _calculateStarPoints(numPoints, outerRadius, innerRadius, centerX, centerY) {
    const results = [];
    const angle = Math.PI / numPoints;

    for (let i = 0; i < 2 * numPoints; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const currX = centerX + Math.cos(i * angle - Math.PI / 2) * radius;
      const currY = centerY + Math.sin(i * angle - Math.PI / 2) * radius;
      results.push([currX, currY]);
    }

    return results;
  }
}

TestRenderer.$inject = ['eventBus', 'styles'];
