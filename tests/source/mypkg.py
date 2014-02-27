from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote


def getOrCreateWebdriver():
    """
    Create a browser in wich we would make a tests.
    """
    desired_capabilities = DesiredCapabilities.FIREFOX
    #desired_capabilities['platform'] = "windows-7-x64"
    _driver = Remote(
        desired_capabilities=desired_capabilities,
        command_executor="http://127.0.0.1:4455/wd/hub"
    )
    return _driver
