import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    // Pass the API data as props to the App component
    items: [] // Initialize with an empty array as default value
  }
});

export default app;
