import { ScientistData, DomElements } from "./types.ts";

export function createDomELement(
  parent: any,
  id: string,
  tag: string
): HTMLElement {
  const newElement = document.createElement(tag);
  newElement.setAttribute("id", id);
  parent.appendChild(newElement);
  return newElement;
}
