import './styles/App.css';
import Header from './sections/header';
import MainContent from './sections/MainContent/MainContent';
import Footer from './sections/Footer';

function App() {
    return (
    <>
        <Header />
        <main><MainContent /></main>
        <Footer />
    </>
    );
}

export default App;
