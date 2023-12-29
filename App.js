

import { TailwindProvider } from 'tailwindcss-react-native';
import Navigation from './navigation';

export default function App() {
  return (
    <TailwindProvider>
        <Navigation />
    </TailwindProvider>
  );
}

