Screentest
=====

##Установка

Для работы необходимо устанвоить [nodejs](http://nodejs.org/) так же нам нужен [npm](https://www.npmjs.org/)

- клоним приложение

```bash
$ git clone https://github.com/onikiienko/funcTest.git
```

- заходим в папку приложения и ставим все зависимости

```bash
$ npm install
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

- Ставим stand-alone сервер с веб-драйверами. Есть уже собранный, внизу покаызваю как поставить его себе

```bash
$ git clone https://github.com/bayandin/selenium-launchers.git
```

- Если использовали предложеныый пакет, то для его запуска нужно перейти в папку и выполнить 

```bash
$ sh start-linux.sh
```
либо просто дважды кликнуть по start.win (для винды).

- устаноавливаем http://www.imagemagick.org/script/install-source.php


## Запуск приложения
Запускается командой node.js
При запуске приложения аргументами нужно передавать:
1. название браузера (firefox, chrome...)
2. цвет контров(light, dark)
3. (опуионально) передать название модуля(geoclicker, controls...) если его не передавать, то прогоняться будут ВСЕ тесты.
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