
# Comment lancer le projet

npm install dans le front et le back

Back : npm run start
Front : npm run start (lancer le front en deuxieme pour laisser la place au port 3000 du back j'ai pas changé les valeurs encore)
BDD : postgress via le container docker
Migrations : npm run migration:run

# Back

[x] Init du server avec node

[x] Init d'une DB en postgres via docker

[x] Init des schemas de DB avec typeorm (user)

[x] Premieres migration avec typeorm

[x] Gestion des routes avec express

[x] Gestion du cors et init du serveur pour recevoir les données correctement (bodyparser etc..)

[x] Encryption des password avec bcrypt

[x] reload auto du server back avec nodemon

[ ] Ajouter un syteme de log correcte dans le back (winston encapsulé)

[ ] Systeme de token pour authentification correcte des users

[ ] implémentation de test auto

[ ] Gestion des variables d'env via .env


# Front 

[x] Init du front avec react

[x] Init du framework front antd

[x] Création de la base du store avec redux

[x] Gestion custom du cache

[x] Gestion custom des status de requetes dans le redux

[x] Routing custom (react-router-dom + map de routes)

[ ] implémentation de test auto

[ ] Gestion des variables d'env via .env


# Features


[x] Création de la base du site (navigation, page avec placeholder etc)

[x] Création d'une page simple de register

[x] Création d'une page simple de login

[ ] Gestion des kompanions (à détailler)

[ ] Gestion des RDV de kompanions (à détailler)

[ ] Gestion des stocks du user (à détailler)

[ ] Dashboard récap des infos importantes (à détailler)

[ ] Mot de passe oublier (a faire bien apres avec gestion de mail etc.. )
