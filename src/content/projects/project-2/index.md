---
title: "API Rest"
description: "API Rest créée au cours de ma formation en BTS SIO."
date: "Mar 31 2025"
repoURL: "https://github.com/faufbr/API_v2"
---

<!-- ![API Rest](/astro-nano.png) -->

Cette API a été réalisée lors de ma deuxième année de formation au lycée Carcouët, créée à l'aide du framework Slim en mode full REST. 
Un cahier des charges ainsi qu'un script de base de données ont été fournis au préalable.

## > Cas d'usage

Cette API est destinée à un cabinet d'infirmières ainsi que leurs patients.
Chaque infirmière peut consulter ses visites et ses patients. Chaque patient peut consulter ses visites et l'infirmière souhaitée pour ses soins. Seule l'infirmière en cheffe peut consulter et modifier toutes les visites de chacun, toutes les infirmières et tous les patients.


## 📄 Configuration

Le Readme contenant toutes les consignes d'utilisation est disponible dans les fichiers du projet ou sur sa page Github.

## 💻 Commandes

Commandes que vous pouvez taper dans le terminal, une fois placé dans le dossier du projet :

| Commande                        | Action                                           |
| :------------------------------ | :----------------------------------------------- |
| `composer install`              | Installe composer                                |
| `composer require php-di/php-di`| Installe PHP DI                                  |
| `php -S localhost:8080 [path]`  | Démarre le serveur d'API                         |