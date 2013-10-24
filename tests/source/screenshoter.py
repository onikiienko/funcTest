from mypkg import *


def takeScreenAndCompare(callback, _driver, _driver1, screenName):
    """
    Takes parameters from tests and launching takeScreenshot, and then compare
    """
    file1 = takeScreenshot(dali, callback, _driver)
    file2 = takeScreenshot(dali1, callback, _driver1)
    return compare(file1, file2, screenName)


def takeScreenshot(_dali, callback, _driver):
    """
    Making a screenshot with user's parameters.
    """
    return _dali.take_screenshot(
        resolution="1024x768",
        scenario=callback,
        scenario_args=_driver,
        path_to_save="screens"
    )


def compare(file1, file2, screenName):
    """
    Compare two of the grafic files
    """
    return dali.compare_images(file1, file2, "./screens/" + screenName + ".png")