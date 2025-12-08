# Présentation Vue.js – Notes orales

## Intro : c’est quoi Vue.js ?

- Framework JavaScript pour construire des interfaces web réactives.
- Créé en 2014 par Evan You, ancien ingénieur chez Google.
- Idée de base : garder le meilleur d’Angular, mais en plus simple, plus léger et plus flexible.
- Aujourd’hui, fait partie des 3 gros du front avec React et Angular.

---

## Pourquoi Vue est simple à apprendre ?

- Fichiers `.vue` découpés en 3 blocs :  
  - `<template>` → structure HTML.  
  - `<script>` → logique JS et état.  
  - `<style>` → CSS du composant.
- Réactivité automatique : on modifie une variable, l’UI se met à jour sans `useState`/`setState`.
- Approche “progressive” : on peut l’utiliser pour un petit bout d’interface ou une SPA complète.
- Courbe d’apprentissage douce, proche de HTML/CSS/JS classiques.

---

## Écosystème et communauté

- Framework “complet” : routeur officiel (Vue Router), gestion d’état (Pinia).
- Nuxt pour faire des applis plus avancées (SSR, SEO, etc.).
- Grande communauté, surtout en Europe et en Asie, beaucoup de ressources mais moins que React.

---

## Inconvénients de Vue.js

- Moins présent dans les très grosses entreprises par rapport à React.
- Écosystème plus petit : moins de plugins/bibliothèques que React.
- Très flexible → sur les gros projets, peut créer des différences de pratiques dans l’équipe.
- Moins d’experts très seniors disponibles sur le marché que pour React/Angular.

---

## Vue vs React : principales différences

### Syntaxe et structure

- Vue : séparation claire template / script / style, très lisible pour débuter.
- React : JSX (HTML dans le JS), plus puissant mais moins naturel au début.

### Réactivité / état

- React : état géré avec les hooks (`useState`, `useEffect`, etc.).
- Vue : système réactif intégré (`ref`, `reactive`, `computed`), moins de boilerplate.

### Courbe d’apprentissage

- Vue : plus simple pour démarrer, logique progressive.
- React : plus de concepts à intégrer (JSX, hooks, écosystème), mais standard de facto sur le marché.

### Popularité et marché

- React : ultra répandu dans les grandes entreprises, énorme écosystème.
- Vue : très utilisé dans des PME, startups et projets produits, mais moins demandé que React dans les grosses structures.

---

## Message à faire passer

- Vue = excellent framework pour apprendre les concepts modernes (composants, réactivité) sans se noyer dans la complexité.
- React reste incontournable pour le marché de l’emploi, mais apprendre Vue aide à comprendre plus facilement React ensuite.
- Vue trouve un bon équilibre entre simplicité, performance et flexibilité, surtout pour des projets petits à moyens.
