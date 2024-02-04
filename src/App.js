import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>Hello</div>
      <Button colorScheme="whatsapp">Click</Button>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
