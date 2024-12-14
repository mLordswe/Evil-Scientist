import { ScientistData, DomElements } from "./types.ts";

export function createDomELement({
  parent,
  id,
  tag,
}: DomElements): HTMLElement {
  const newElement = document.createElement(tag);
  newElement.setAttribute("id", id);
  parent.appendChild(newElement);
  return newElement;
}
