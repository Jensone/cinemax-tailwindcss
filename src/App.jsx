/**
 * Ce fichier contient le composant App
 * Ici, on décide d'en faire un composant
 * principal qui va contenir les autres.
 * 
 * On importe les composants Navbar, Search,
 * Card et Footer pour les afficher dans App.
 */

// Importation des composants
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <hr className="my-5 opacity-10" />
            <section className="flex flex-col items-center justify-center gap-10 mt-10 mb-10">
                <Search />
            </section>
            <Card />
            <Footer className="mt-10" />
        </>
    );
}

export default App;
