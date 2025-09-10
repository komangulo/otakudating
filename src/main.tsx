import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'

createRoot(document.getElementById("root")!).render(<App />);
