ReadMe
========

Разворачивание и запуск тестов на серверах.

Для этого нам нужно будет:
- поработать над виртуалкой, где будут храниться тесты, скриншоты, проводиться запуск.
- поработать над настройкой виндовой виртуалки, где и будут проходить тесты  в браузерах

Для запуска тестов нам понадобпиться виртуалка с ubuntu, на ней будет необходимо поствить окружение, это:
- python-opencv to compare screenshots,
- selenium-server-standalone to run under,
- pip, setuptools to install.
- dali (https://github.com/2gis/dali) для него нужно попросить чтоб тебя добавили к проекту в github
- скачать проект с тестами(https://github.com/onikiienko/funcTest), настроить выполнить команду
- демки

Делается всё это командами(в папке /var/www/applications/):

#Окружение

```bash
$ sudo apt-get install python-opencv python-numpy
$ sudo apt-get install python-pip
$ sudo pip install thrift==0.9.0 selenium==2.33.0
$ sudo apt-get install python-pip python-dev build-essential
$ sudo pip install --upgrade pip
$ sudo apt-get install python-opencv
Запросили пароль на https://github.com/2gis/dali у Игоря Павлова или Саши Баяндина
$ git clone https://github.com/2gis/dali.git
$ cd dali
$ sudo python setup.py sdist
$ sudo sudo pip install dist/dali-0.1.tar.gz
```
#Тесты

Далее нужно скачать сами тесты и настроить сервер под правильную раздачу файлов.

```bash
в папке /var/www/applications/ выполняем
$ git clone git@github.com:onikiienko/funcTest.git
```
#Демки
В этом проекте кроме тестов содержатся так же демки. И они должны отдаваться во вне. Для этого нужно настроить nginx.
В создаем файл /etc/nginx/sites-enabled/funcTest.maps2.test.conf содержимое

```bash 
server {
    listen 80;
    server_name functest.maps2.test;
    access_log /var/log/nginx/functest.maps2.test.log;
    error_log  /var/log/nginx/functest.maps2.test.log;
    charset utf-8;
    root /var/www/applications/funcTest/public/;
    index index.html;
}
```

#Выполнение тестов

```bash 
В папке /var/www/applications/funcTest необходимо выполнить 
$ python tests_launcher.py
```

С серваером всё!

#Клиент

Где будем тесты прогонять(Виндовая виртаулку)

Скачиваем на виртаулочку вот этот 
Requires [архив](https://github.com/bayandin/selenium-launchers/archive/master.zip).

Это selenium-standalone библиотека, она даст нам возможность запускать браузер. Далее нужно всё вытащить из архива и через консоль(cmd) запустиьть файлик "start-win.bat". Проследили, что в том, что вываливается в консоль етсь порт 4455.

С виндой всё
 
я развернул на 10.110.40.43
log: vagrant
pass: vagrant
В папке /var/www/applications/funcTest необходимо выполнить 
```bash 
$ python tests_launcher.py
```
