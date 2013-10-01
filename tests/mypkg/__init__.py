import unittest
import time

from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote
from core import *


from dali import Dali, Options

from selenium import webdriver

def getOrCreateWebdriver():
    DRIVER = Remote(
            desired_capabilities=DesiredCapabilities.CHROME,
            command_executor="http://10.110.40.74:4455/wd/hub"
        )
    return DRIVER

driver = getOrCreateWebdriver()
driver1 = getOrCreateWebdriver()
dali = Dali(driver)
