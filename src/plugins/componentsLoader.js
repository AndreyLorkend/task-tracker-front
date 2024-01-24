
const modules = import.meta.glob("/src/zoo/*.vue", { eager: true });

export default function loadComponents(app) {
  for (const path in modules) {
    const componentName = path.split("/").at(-1).split(".")[0];
    app.component(`${componentName}`, modules[path].default);
  }
}
