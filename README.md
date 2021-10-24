# macq_ex

#Installation

Pour installer l'application, il faut disposer de java, avoir installé sbt et disposer d'une base de donnée sur le port 27017 nommée macq. 
Pour lancer l'app : sbt run


#Architecture

L'application peut être vue comme étant une entité composée de 3 blocs :
La partie back-end, la bdd et le front-end

##Back-end
Le back-end est réalisé avec le framework play en scala. Je me suis inspiré de ces  deux tutoriels étant donné que je n'avais jamais réalisé de back-end en utilisant ces technologies : https://medium.com/geekculture/rest-api-with-scala-play-framework-and-reactive-mongo-5016e57846a9 & https://medium.com/@yohan.gz/https-medium-com-yohan-gz-angular-with-play-framework-a6c3f8b339f3
La connection avec la BDD se fait à l'aide du back-end.

##Base de données
La bdd est composée de deux tables, une user qui contient le nom, l'email et le mot de passe des utilisateurs. Une horse qui contient les différents champs nécessaires pour identifier un cheval. J'ai fait le choix pour l'image de devoir entrer l'url d'une image, elles ne sont donc pas stockées sur le serveur.

##Front-end
Le front-end est en Angular, il est composé de plusieurs components.
Home : Si pas loggé redirection vers la page login grâce à une Guard. C'est ici qu'on peut générer un nouveau cheval à écrire dans la bdd.
Signin: C'est ici qu'on se logge. La connection se fait au niveau du front-end, elle n'est donc absolument pas sécurisée (en plus du fait que les mots de passe sont stockés en clair dans la bdd et sont tous envoyés au front-end...)
Signup: Inscription des utilisateurs.

##Améliorations possibles
Je pense qu'il y a plusieurs choses que j'aurais pu faire mieux/en plus. En voici une liste non-exhaustive:
-Le login qui n'est absolument pas sécurisé
-Je n'ai pas eu le temps de réaliser des tests
-Les images qui auraient pu être stockées sur le serveur
-Aucun moyen de supprimer/modifier un cheval ou un utilisateur
-Aucun message d'erreur en cas d'échec pour une requête

