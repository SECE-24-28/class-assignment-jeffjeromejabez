import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { DataProvider } from './components/UserContext';
import CompA from './components/CompA';
import ContextDemo from './components/ContextDemo';

function App() {
  const [data, setData] = useState("versace bag");
  
  return (
    <DataProvider>
      <CssBaseline />
      <Container sx={{ py: 4 }}>
        <CompA data={data} />
        <ContextDemo />
      </Container>
    </DataProvider>
  )
}

export default App