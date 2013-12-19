from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote


def getOrCreateWebdriver():
    """
    Create a browser in wich we would make a tests.
    """
    desired_capabilities = DesiredCapabilities.CHROME
    #desired_capabilities['platform'] = "windows-7-x64"
    _driver = Remote(
        desired_capabilities=desired_capabilities,
        #command_executor="http://localhost:4455/wd/hub"
        command_executor="http://10.110.40.74:4455/wd/hub"
        #command_executor="http://10.110.40.83:4455/wd/hub"
        #command_executor="http://saray.dev:9000/wd/hub"
    )
    return _driver