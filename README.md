# Premier pas avec React

React est une bibliothèque JavaScript pour la création d'interfaces utilisateur. Afin de mettre place un projet basé sur la bibliothèque React, il est nécessaire de suivre quelques étapes.


## Créer un projet React

Afin de créer un projet nous avons besoin d'un outil qui fera gagner du temps sur ce qu'on le "Scaffolding". `ViteJS`est parfait pour cela.

Il suffit de lancer la commande dans un terminal pour créer un projet :

```bash

npm create vite@latest

```

Cette commande va lancer un assistant qui va vous poser quelques questions pour la configuration du projet.

Questions posées :

- **Project name**: Le nom du projet
- **Select a framework**: Le framework à utiliser (**React**, Vue, Vanilla, etc.)
- **Language**: Le langage à utiliser (**JavaScript**, **TypeScript**)

Une fois les questions répondues, le projet sera créé dans un dossier portant le nom du projet.

N'oubliez pas de lire attentive les informations affichées à la fin de la création du projet. Elles contiennent des commandes utiles pour lancer le projet.

```bash

cd nom-du-projet # Se déplacer dans le dossier du projet
npm install # Installer les dépendances
npm run dev # Lancer le serveur de développement

```

Le serveur de développement est accessible à l'adresse `http://localhost:5173`. Mais cette adresse peut varier en fonction de la configuration du projet.

## Structure du projet

Lancez la commande `code .` pour ouvrir le projet dans Visual Studio Code afin de voir la structure du projet. Dans le cas où on se trouve en dehors du projet (avec le terminal), il suffit de faire la même commande `code nom_du_dossier`.

La structure du projet est la suivante :

```bash

nom-du-projet
├── node_modules
├── public
│   ├── vite.svg
├── src
│   ├── assets
│   │   ├── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├──  eslintrc.cjs
├──  index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js

```

- **node_modules**: Contient les dépendances du projet
- **public**: Contient les fichiers statiques du projet
- **src**: Contient les fichiers sources du projet
- **assets**: Contient les fichiers multimédias (images, vidéos, etc.)
- **.gitignore**: Fichier pour ignorer les fichiers et dossiers dans le dépôt Git
- **eslintrc.cjs**: Fichier de configuration pour ESLint
- **index.html**: Fichier HTML principal du projet (point d'entrée) à partir duquel l'application est chargée
- **package.json**: Fichier de configuration du projet
- **package-lock.json**: Fichier de verrouillage des dépendances
- **README.md**: Fichier de documentation du projet
- **vite.config.js**: Fichier de configuration de Vite

**Note importante** : Les fichiers tels que les images, les vidéos, les fichiers CSS, etc. doivent être placés dans le dossier `public` en priorité, sinon il est possible de les mettre dans le dossier `src/assets/`. Cela dépends de la manière dont vous souhaitez y accéder :

- lien direct (public) : `src="vite.svg"`
- import en js (assets) : `import logo from './assets/react.svg';`

## Composants React

Pour créer un composant React, il suffit de créer un fichier avec l'extension `.jsx` dans le dossier `src`.

`jsx` est une syntaxe qui permet d'écrire du HTML dans du JavaScript. Cela permet de créer des composants React de manière plus simple.

Voici un exemple de composant React :

```jsx

import React from 'react';

export default function Nav() {
  return (
    <>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  );
}

```

ou

```jsx
import React from 'react';

function Nav() {
  return (
    <>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  );
}

export default Nav;
```

Pour utiliser ce composant dans un autre composant, il suffit de l'importer et de l'utiliser comme une balise HTML.

```jsx

import React from 'react';
import Nav from './Nav';

function App() {
  return (
    <div>
        <Nav />
        <h1>Mon application React</h1>
    </div>
  );
}

```

## Design avec Tailwind CSS

Tailwind CSS est une bibliothèque CSS qui permet de créer des designs modernes et personnalisés. Pour l'ajouter à un projet, il suffit d'installer la bibliothèque via npm.

```bash

npm install -D tailwindcss

```

Suite à cela il suffit de suivre les instructions sur le site de Tailwind CSS pour configurer le projet :

[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

TailwindCSS est basé sur des classes CSS. Il suffit d'ajouter les classes dans les balises HTML pour styliser les éléments.

```jsx

import React from 'react';

export default function Nav() {
  return (
    <div>
        <nav className="bg-gray-800 text-white">
            <ul className="flex justify-between gap-3">
                <li><a href="#" className="p-4">Home</a></li>
                <li><a href="#" className="p-4">About</a></li>
                <li><a href="#" className="p-4">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

```

On peut remarquer que les classes Tailwind CSS sont ajoutées directement dans les balises HTML. Cependant la classe dans jsx doivent être écrites en camelCase et avec le terme "Name" à la fin.

Ce qui donne : `className="bg-gray-800"` au lieu de `class="bg-gray-800"`.

Cela compte également pour d'autre attributs HTML comme `htmlFor` au lieu de `for` ou encore `tabIndex` au lieu de `tabindex`.

---

## Gestion des états dans React

Les `states` sont des variables qui permettent de stocker des données dans un composant React. Ils sont utilisés pour gérer les données dynamiques et les interactions utilisateur. La syntaxe pour déclarer un état est la suivante :

```jsx

import React, { useState } from 'react';

const [movies, setMovies] = useState([]);

```

Pour mettre à jour un état, il suffit d'utiliser la fonction `setMovies` avec la nouvelle valeur.

```jsx

setMovies([
  { title: 'Matrix', year: 1999 },
  { title: 'Inception', year: 2010 },
  { title: 'Interstellar', year: 2014 },
]);

```

Pour accéder à un état, il suffit d'utiliser la variable `movies`.

```jsx

console.log(movies);

```

Il est possible de passer des états en tant que `props` à d'autres composants.

```jsx

<Card movies={movies} />

```

Penser à configurer les `props` dans le composant enfant.

```jsx

import React from 'react';

function Card({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;

```
---

## Gestion des rendus dans React

Pour la gestion des rendus dans React, il est possible d'utiliser `useEffect` pour effectuer des actions après le rendu du composant.

Le principe est de réaliser des actions après le rendu du composant, par exemple, réaliser un appel à une API, mettre à jour un état, ou encore ajouter des écouteurs d'événements.

```jsx

import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=matrix&key=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []); // Les crochets vides permettent de réaliser l'action une seule fois

```

## Gestion des événements dans React

Dans React les eventListners sont ajoutés directement dans les balises HTML. Il est possible d'ajouter des événements comme `onClick`, `onMouseOver`, `onSubmit`, etc.

```jsx

return (
  <button onClick={() => alert('Je suis là')}>Où es-tu ?</button>
);

```

Il est possible de passer des paramètres à une fonction lors de l'appel de l'événement.

---

## Appel d'une API dans React

Afin de réaliser un appel à une API dans un projet React, il est possible d'utiliser la fonction `fetch`. Cette fonction permet de réaliser des requêtes HTTP pour récupérer des données, il est important de prévoir les cas d'erreur et de les gérer.

Idéalement, nous souhaitons ne pas afficher de code dans le rendu sans les données qui sont censées être affichées. Pour cela, nous pouvons utiliser `try catch` et `await` pour attendre la réponse de l'API.

```jsx

try {
  // Réaliser la requête HTTP avec fetch
  const res = await fetch(url);
  // Convertir la réponse en JSON
  const data = await res.json();
  // Vérifier si la réponse est 'True'
  if (data.Response === "True") {
    setMovies(data.Search); // Mettre à jour l'état 'movies' avec les données
    console.log(data.Search);
    setError(""); // Réinitialiser le message d'erreur
  } else {
    setError(data.Error); // Afficher le message d'erreur de l'API
    setMovies([]); // Réinitialiser la liste des films
  }
} catch (error) {
  console.error(error); // Afficher l'erreur dans la console
  setError("An error occurred while fetching data."); // Afficher un message d'erreur générique
  setMovies([]); // Réinitialiser la liste des films
}

```

Dans cet exemple, les cartes censées représenter les films ne seront pas affichées si une erreur survient lors de l'appel à l'API. Cela permet d'éviter d'afficher des données incorrectes ou incomplètes.

---

## Déploiement d'une application React

Pour déployer une application React, il est possible d'utiliser des services tels que Vercel, Netlify, GitHub Pages, etc. Ces services permettent de déployer des applications statiques de manière simple et rapide.

Nous utilisons Vercel, qui permet de mettre en place un pipeline de déploiement continu pour les applications React. Il suffit de connecter le dépôt Git à Vercel et de configurer les paramètres de déploiement.
