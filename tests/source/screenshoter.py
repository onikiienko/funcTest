from mypkg import *

def takeScreenAndCompare(callback, driver, driver1, screenName):
    '''
    Takes parameters from tests and launching takeScreenshot, and then compare
    '''
    file1 = takeScreenshot(callback, driver)
    file2 = takeScreenshot(callback, driver1)
    compare(file1, file2, screenName)

def takeScreenshot(callback, driver):
    '''
    Making a screenshot with user's parameters.
    '''
    return dali.take_screenshot(
        resolution="1024x768",
        scenario=callback,
        scenario_args=driver,
        path_to_save="screens"
    )

def compare(file1, file2, screenName):
    '''
    Compare two of the grafic files
    '''
    diff = dali.compare_images(file1, file2, "./screens/" + screenName + ".png")
