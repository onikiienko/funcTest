Screentest
=====

##Установка
```bash
Для работы необходимо устанвоить [nodejs](http://nodejs.org/) так же нам нужен [npm](https://www.npmjs.org/)
1. клоним приложение
$ git clone https://github.com/onikiienko/funcTest.git
2.заходим в папку приложения и ставим все зависимости
$ npm install
3. делаем сборку
grunt
4. запускаем сервер для раздачи файлов из public
node app.js
5. устанавливаем selenium-webdriver
$ sudo npm install selenium-webdriver -g
6. Ставим stand-alone сервер с веб-драйверами. Есть уже собранный, внизу покаызваю как поставить его себе
$ git clone https://github.com/bayandin/selenium-launchers.git
7. Если использовали предложеныый пакет, то для его запуска нужно перейти в папку и выполнить 
$ sh start-linux.sh(для linux)
$ sh strart-mac.sh(для macOS)
либо просто дважды кликнуть по start.win (для винды).
8. устаноавливаем http://www.imagemagick.org/script/install-source.php
```

## Запуск приложения
node test

