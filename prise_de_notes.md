# Cours Frontend - Prise de notes

## Pourquoi ce cours

On crée des appli web riche avec de plus en plus de fonctionnalité côté client (navigateur).

Dynamiser un site c'est vite compliqué et long à faire en JS "vanilla".
D'où l'apparition de nombreux **frameworks** pour faciliter le développement.

React vs Svelte vs Vue vs Angular...
Aller un peu plus loin avec le dev mobile (React Native) + Electron pour le desktop + IOT.

## Comment utilisé JavaScript

- Javascript est **interprété** par le navigateur
- Il est utilisable notre machine grâce à Node JS

Pour l'utilisation classique, il nous faut un fichier JS + environnement de dev

Pour cela nous allons utiliser un gestionnaire de paquet : **NVM** (Node Versionnvmcurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash)

```bash
nvm install node # Installe la dernière version de NodeJS
nvm use node     # Utilise la dernière version de NodeJS
node -v          # Vérifie la version de NodeJS
npm -v           # Vérifie la version de NPM (Node Package Manager)
```
pour installer la dernière version LTS de NodeJS, la 24.11.1
```bash
nvm install 24.11.1
nvm use 24.11.1
```
