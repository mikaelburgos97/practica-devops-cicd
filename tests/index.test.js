const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Cargar el HTML
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(html);
global.document = dom.window.document;

describe('Página HTML Hola Mundo', () => {
  test('El título de la página debe ser "Hola Mundo"', () => {
    expect(document.title).toBe('Hola Mundo');
  });

  test('Debe contener un encabezado H1 con el texto "¡Hola Mundo!"', () => {
    const h1Element = document.querySelector('h1');
    expect(h1Element).not.toBeNull();
    expect(h1Element.textContent).toBe('¡Hola Mundo!');
  });

  test('Debe contener un párrafo con texto sobre la práctica', () => {
    const pElement = document.querySelector('p');
    expect(pElement).not.toBeNull();
    expect(pElement.textContent).toContain('DevOps CI/CD con GitHub');
  });
});