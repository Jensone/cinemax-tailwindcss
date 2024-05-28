/**
 * Ce fichier contient le composant App
 * Ici, on décide d'en faire un composant
 * principal qui va contenir les autres.
 * 
 * On importe les composants Navbar, Search,
 * Card et Footer pour les afficher dans App.
 */
import React from 'react'; // Importation de la librairie React

// Importation des composants
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Search />
            <Card />
            <Footer />
        </>
    );
}

export default App;
