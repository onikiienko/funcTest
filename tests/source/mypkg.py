from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote

from dali import Dali, Options


def getOrCreateWebdriver():
    """
    Create a browser in wich we would make a tests.
    """
    _driver = Remote(
        desired_capabilities=DesiredCapabilities.FIREFOX,
        #command_executor="http://localhost:4455/wd/hub"
        command_executor="http://10.110.40.74:4455/wd/hub"
    )
    return _driver

global dali
global driver
global driver1

driver = getOrCreateWebdriver()
driver1 = getOrCreateWebdriver()
dali = Dali(driver)
dali1 = Dali(driver1)
