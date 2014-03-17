Screentest
=====

##Установка

Для работы необходимо устаноивть [nodejs](http://nodejs.org/) так же нам нужен [npm](https://www.npmjs.org/)

- устаноавливаем http://www.imagemagick.org/script/install-source.php

- клоним приложение

```bash
$ git clone https://github.com/onikiienko/funcTest.git
```

- заходим в папку приложения и ставим все зависимости

```bash
$ npm install
```

- создаем папку public и даем права на создание и редактирование файлов по всему проекту

```bash
$ mkdir public && chmod -R 777 .
```

- делаем сборку

```bash
$ grunt
```

- запускаем сервер для раздачи файлов из public

```bash
$ node app.js
```

- устанавливаем selenium-webdriver

```bash
$ sudo npm install selenium-webdriver -g
```

- Ставим standalone-server с веб-драйверами. Есть уже собранный, внизу покаызваю как поставить его себе

```bash
$ git clone https://github.com/bayandin/selenium-launchers.git
```

- Если использовали наш пакет, то для его запуска нужно перейти в папку и выполнить 

```bash
$ sh start-linux.sh
```
либо просто дважды кликнуть по start.win (для винды).


## Запуск приложения
Запускается командой node.js
При запуске приложения аргументами нужно передавать:
- название браузера (firefox, chrome...)
- цвет контров(light, dark)
- (опуионально) передать название модуля(geoclicker, controls...) если его не передавать, то прогоняться будут ВСЕ тесты.
Примеры запуска тестов.
```bash
node test.js firefox light geoclicker
node test.js chrome dark
gurnt && node test.js android light controls
```

## Результаты тестов
Результаты имеют такой вид:
```bash
clickInHouse  :  fail
http://10.110.40.37:3001/screens/diff1394725895368.png
http://10.110.40.37:3001/screens/1394725895357.png
http://10.110.40.37:3001/screens/1394725891314.png
clickInStreet  : pass
```
Если тест не прошел, то в консоли отображаются ссылки на скриншоты.
Если тест прошел, то пишет pass.
## Написание тестов
Дока на webdriver [тут](http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebElement.html) и [тут](http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_ActionSequence.html)
