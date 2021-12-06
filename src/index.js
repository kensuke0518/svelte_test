import App from './App.svelte';
import { hello } from "./sub";

const app = new App({
    target: document.getElementById('test'),
});

hello();

export default app;