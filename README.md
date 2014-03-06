ReadMe
========

Разворачивание и запуск тестов на сервере.

http://habrahabr.ru/company/yandex/blog/173769/
http://selenium.googlecode.com/git/docs/api/javascript/module_selenium-webdriver.html
sudo npm install selenium-webdriver -g
sudo npm install imagediff -S (https://github.com/uber/image-diff)
http://www.imagemagick.org/script/install-source.php#unix


# Changing the path to the Chrome binary
$ export CHROME_BIN=/usr/local/bin/my-chrome-build

# Changing the path to the Chrome Canary binary
$ export CHROME_CANARY_BIN=/usr/local/bin/my-chrome-build

# Changing the path to the PhantomJs binary
$ export PHANTOMJS_BIN=$HOME/local/bin/phantomjs


Для запуска тестов нам понадобпиться машина с windows, на ней будет необходимо поствить окружение, это:
- [mapsapi2.0](https://github.com/2gis/maps-api-2.0/blob/master/CONTRIBUTING.md#windows)
- python-opencv
- [selenium-server-standalone и webdrivers](https://github.com/bayandin/selenium-launchers/archive/master.zip).
- pip
- [dali](https://github.com/2gis/dali)
- [скачать проект с тестами](https://github.com/onikiienko/funcTest)

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
$ sudo sudo pip install dist/dali-0.2.0-dev.tar.gz
```
#Тесты

Далее нужно скачать сами тесты и настроить сервер под правильную раздачу файлов.

```bash
$ cd /var/www/applications/
$ git clone git@github.com:onikiienko/funcTest.git
```
Делаем сборку
```bash
$ grunt build
```

#Демки
В этом проекте кроме тестов содержатся так же демки. И они должны отдаваться во вне. Для этого нужно настроить nginx.
В создаем файл /etc/nginx/sites-enabled/funcTest.conf содержимое

```bash
server {
    listen 80;
    server_name functest;
    access_log /var/log/nginx/functest.log;
    error_log  /var/log/nginx/functest.log;
    charset utf-8;
    root /var/www/applications/funcTest/public/;
    index index.html;
}
```

#Выполнение тестов

```bash
В папке /var/www/applications/funcTest необходимо выполнить
$ python tests_launcher_dark.py
$ python tests_launcher_light.py
```

selenium-standalone библиотека, она даст нам возможность запускать браузер. Далее нужно всё вытащить из архива и через консоль(cmd) запустиьть файлик "start-win.bat". Проследили, что в том, что вываливается в консоль етсь порт 4455.
