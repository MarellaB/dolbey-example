import { customElement, bindable } from 'aurelia';
import * as icons from 'lucide';

type IconNode = [string, Record<string, string | number>][];

@customElement({ name: 'au-icon', template: '<span ref="host"></span>' })
export class Icon {
  @bindable name: string = '';
  @bindable size: number = 24;
  @bindable color: string = 'currentColor';

  host!: HTMLElement;

  attached() {
    this.render();
  }

  nameChanged() { this.render(); }
  sizeChanged() { this.render(); }
  colorChanged() { this.render(); }

  private render() {
    if (!this.host) return;
    this.host.innerHTML = '';

    const iconData = (icons as Record<string, unknown>)[this.name];
    if (!Array.isArray(iconData)) return;

    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('xmlns', ns);
    svg.setAttribute('width', String(this.size));
    svg.setAttribute('height', String(this.size));
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', this.color);
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    for (const [tag, attrs] of iconData as IconNode) {
      const el = document.createElementNS(ns, tag);
      for (const [key, val] of Object.entries(attrs)) {
        el.setAttribute(key, String(val));
      }
      svg.appendChild(el);
    }

    this.host.appendChild(svg);
  }
}
