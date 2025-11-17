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
# Qui suis-je ?

![bg right](https://k49.fr.nf/content/images/size/w1000/2020/02/Microsoft-is-in-talks-to-buy-GitHub.jpeg)

---

# Plan du cours

0) Intro javascript (optionnelle)
1) Découverte du Javascript avancé
2) Présentation générique des frameworks JS
3) Mise en pratique avec React
4) Exploration de différents frameworks (note 1)
5) Communication entre composants et état global
6) TP Fil rouge

---

# Pourquoi ce cours ?

Nous créons des applications web riches avec de plus en plus de fonctionnalités côté client.

C'est ce que l'on appelle des **Single Page Application** (SPA).

```js
document.body.innerHTML = `<h1>Hello World</h1>`
document.querySelector('h1').style.color = 'red'
h1.addEventListener('click', () => alert('Hello World'))
```

---

# Besoin de ne pas refaire et refaire

**Framework** = boite à outils pour ne pas réinventer la roue

Dynamiser un site c'est pas rigolo avec du Vanilla JS
Il faut tout micro gérer.

React vs Svelte vs Vue vs Angular vs Alpine vs Solid vs ...

Aller un peu plus loin dans le développement
mobile (React Native) + Desktop (Electron) + IOT

**Le language unique**

---

# Les frameworks JS

Des principes communs = c'est ça qu'on veut !

- **Composants** : découpage de l'interface en morceaux
- **État** : gestion des données
- **Rendu** : affichage des données
- **Réactivité** : mise à jour de l'interface en fonction des données
- **méthodes de cycle de vie** : actions à réaliser à des moments clés

---

# Aller plus loin avec JS

- **Typescript** : Javascript typé (pour les futurs devs)
- **NodeJS** : Javascript côté serveur
- **Les API REST**: pour communiquer avec des serveurs
- **API Web**: pour communiquer avec le navigateur

Tout ça sans compétences de dev (peu d'algorithmie, 
d'architecture, de structure de code)

---

# Méthodologie

- **Mini-cours** : obligé
- **Live coding** : pour voir en direct avant de refaire
- **TP** : réalisation par vous même

Notation : TP Noté + QCM à pénalités