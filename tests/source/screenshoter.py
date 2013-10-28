import os

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


def try_to_delete_file(filename):
    try:
        os.remove(filename)
    except OSError:
        pass

def compare(file1, file2, screenName):
    """
    Compare two of the graphic files
    """
    result_file = "./screens/" + screenName + ".png"
    diff = dali.compare_images(file1, file2, result_file)
    # delete screenshots if difference equals 0
    if diff == 0:
        try_to_delete_file(file1)
        try_to_delete_file(file2)
        try_to_delete_file(result_file)

    return diff