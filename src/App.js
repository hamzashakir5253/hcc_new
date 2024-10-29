// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import WorksOrderForm from './pages/works_order_management/works_order_management_form';
import { Box } from '@mui/material';


export default function App() {
  return (
    <div className="App">
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Sidebar/>
      <Box
        component="main"
        sx={{
          flex: 1, // This pushes the footer down when content is short
        }}
      >
        <WorksOrderForm /> {/* Replace with your main content */}
      </Box>
      <Footer />
    </Box>
    </div>
  );
}


