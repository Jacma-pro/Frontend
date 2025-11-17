---
marp: true
theme: gaia
markdown.marp.enableHtml: true
paginate: true
_paginate: false
style: @import url('https://unpkg.com/tailwindcss@^2/dist/utilities.min.css');
---
<style>
  section {
    background-color: #fefefe;
    color: #333;
  }
</style>

<!-- _class: lead -->
<!-- _color: #555 -->
# Intro Javascript

![bg right](https://k49.fr.nf/content/images/size/w1000/2020/02/Microsoft-is-in-talks-to-buy-GitHub.jpeg)

---

# Pourquoi utiliser Javascript ?

* Javascript est le **langage** des navigateurs
* Javascript est **facile** à apprendre
* Javascript possède **NodeJS** pour faire du **backend**
* C'est donc un langage utilisable pour des applications **fullstack**

---

# Comment utiliser Javascript ?

* Javascript est **interprété** par le navigateur
* Il est utilisable sur notre machine grâce à NodeJS

Pour l'utilisation classique, il nous faut un fichier JS + environnement de dev

Pour cela nous allons utiliser un gestionnaire de version de node : **NVM**
On oublie, nous ne sommes pas des devs.

---

# NVM

NVM permet de gérer les versions de NodeJS

* Installation :

``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

* Utilisation :

```bash
nvm install 20
nvm use 20
nvm ls-remote
nvm ls
```

---

# NodeJS

npm est le gestionnaire de paquets de NodeJS
Dans un projet javascript, on retrouve un fichier `package.json`
Il contient les informations du projet (meta données), les dépendances et les scripts

Pour installer les dépendances d'un projet :

```bash
npm install
```

Pour lancer un script :

```bash
npm run start
```

---

# Vite

Vite est un outil de création et de développement de projet en Javascript

Nous allons l'utiliser pour nos projets front avancés.

![bg right w:80%](../images/vite.png)

---

# Fetch

Fetch est une API Javascript pour effectuer des requêtes HTTP

```js
fetch('https://api.github.com/users/kevinbalicot')
  .then(response => response.json())
  .then(data => console.log(data))
```

Nous l'utiliserons sous une autre forme avec async await

```js
const response = await fetch('https://api.github.com/users/kevinbalicot')
const data = await response.json()
console.log(data)
```

---

# Fetch POST / PUT / DELETE

```js
const response = await fetch('https://api.github.com/users/kevinbalicot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'kevin' })
})
const data = await response.json()
```

json est un format de données très utilisé pour les API

--- 

# TP 1 - Trading basse fréquence

Un formulaire de prix en euros
Un bouton pour enlever 1 euro, un autre pour ajouter un euro
une balise p pour afficher la conversion du prix en dollars.
Quand le prix dépasse 100 dollars, afficher le prix en rouge.
Si le prix en euros à une valeur de 42€, supprimer toute le contenu de la page.
Créer un bouton cacher qui apparait quand on clique trois fois en moins de deux secondes sur le bouton "-1€".

---

# TP 2 - créer un formulaire de saisie d'adresse

Utilisation de l'API du gouvernement.

https://adresse.data.gouv.fr/api-doc/adresse/

Concaténation et parcourir la donnée

affichage absolute relative

event listener + bonus debounce / throttle