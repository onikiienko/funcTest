from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote

from dali import Dali, Options
from selenium import webdriver

def getOrCreateWebdriver():
    DRIVER = Remote(
            desired_capabilities=DesiredCapabilities.CHROME,
            command_executor="http://localhost:4455/wd/hub"
        )
    return DRIVER

global dali
global driver
global driver1

driver = getOrCreateWebdriver()
driver1 = getOrCreateWebdriver()
dali = Dali(driver)
