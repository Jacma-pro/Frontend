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
# Les frameworks Javascript

![bg right](https://k49.fr.nf/content/images/size/w1000/2020/02/Microsoft-is-in-talks-to-buy-GitHub.jpeg)

---

## Pourquoi utiliser des frameworks ?

Qu'est ce qu'un framework ?

Historique des frameworks :

- EmberJS
- angularJS
- BackboneJS
- KnockoutJS
- hammerJS

et avant ça : Jquery

---

## Les frameworks actuels

Les frameworks à connaitre :

- Angular
- React
- Vue
- Svelte

Mais il en existe plein d'autres :
https://dayssincelastjavascriptframework.com

---

## Les frameworks actuels : une base commune

- Un **état** 
- des **propriétés** 
- des méthodes de **cycle de vie** 
- des **données calculées**
- des **evenements**
- un **affichage**

Une technique commune : Le **DOM virtuel** ( -> Signals plus tard ^^)

---

## La technique

### Le DOM virtuel

Le DOM virtuel est une copie du DOM réel, il est stocké en mémoire.
Il est plus rapide à modifier que le DOM réel.
Il est utilisé par les frameworks JS pour modifier le DOM réel.

### Les composants

Les composants sont des éléments qui permettent de découper l'interface en plusieurs parties.
Ils sont réutilisables et peuvent être imbriqués les uns dans les autres.

---

## Les données

### L'état

L'état est un objet qui contient les données de l'application.
Il est modifié par les composants.
Il peut être partagé entre plusieurs composants.

### Les propriétés

Les propriétés sont des données qui sont passées d'un **parent** à un **enfant**.

---

## Les méthodes de cycle de vie

- création
    - initialisation d'un état à partir de données externes
    - appel à une API
    - intialisation d'un timer / communication avec un serveur ws

- mise à jour
    - dépendances à un autre état
    - enregistrement de l'état dans le localStorage

- destruction
    - déconnexion / enregistrement de l'état dans le localStorage
---

## Les données calculées

Les données calculées sont des données qui sont calculées à partir d'autres données.

Elles sont mises à jour automatiquement lorsque les données dont elles dépendent sont modifiées.

Elles doivent toujours être priorisées !!!

---

## Les événements

Les événements sont des actions qui sont déclenchées par l'utilisateur :

- clic
- survol
- scroll
- drag and drop
- changement de valeur dans un formulaire
- raccoourci clavier

---

## L'affichage

L'affichage est la partie visible de l'application.
Il est mis à jour automatiquement lorsque l'état est modifié.
Il permet de lier des événements à des méthodes.
Il gère le style de l'application.

Il est généralement écrit en HTML et CSS ou dans un langage de template (JSX, Pug, Handlebars, ...)

---

