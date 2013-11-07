import os

from mypkg import *
from screenhelper import *


def takeScreenAndCompare(callback, _dali1, _dali2, _driver1, _driver2, screenName):
    """
    Takes parameters from tests and launching takeScreenshot, and then compare
    """
    file1 = takeScreenshot(_dali1, callback, _driver1)
    file2 = takeScreenshot(_dali2, callback, _driver2)
    return compare(_dali1, file1, file2, screenName)


def takeScreenshot(_dali, callback, _driver):
    """
    Making a screenshot with user's parameters.
    """
    return _dali.take_screenshot(
        resolution="1024x768",
        scenario=callback,
        scenario_args=_driver,
        path_to_save="public/screens"
    )


def try_to_delete_file(filename):
    try:
        os.remove(filename)
    except OSError:
        pass

def compare(dali, file1, file2, screenName):
    """
    Compare two of the graphic files
    """
    screenName = screenName + '_'+ randstring(5)
    result_file = "./public/screens/" + screenName + ".png"
    diff = dali.compare_images(file1, file2, result_file)
    # delete screenshots if difference equals 0
    if diff == 0:
        try_to_delete_file(file1)
        try_to_delete_file(file2)
        try_to_delete_file(result_file)
    else:
        print "http://" + get_ip('eth1') + '/screens/' + screenName + '.png';
        try_to_delete_file(file1)
        try_to_delete_file(file2)

    return diff