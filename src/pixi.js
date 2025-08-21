export let app;

export async function initPixi() {
  app = new PIXI.Application();
  await app.init({
    width: 800,
    height: 600,
    backgroundColor: 0xAAAAAA
  });
  document.body.appendChild(app.canvas); // v8 uses .canvas
}
