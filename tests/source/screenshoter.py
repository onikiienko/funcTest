from mypkg import *

def takeScreenAndCompare(callback, driver, driver1, screenName):
        file1 = takeScreenshot(callback, driver)
        file2 = takeScreenshot(callback, driver1)
        compare(file1, file2, screenName)

def takeScreenshot(callback, driver):
    return dali.take_screenshot(
        resolution="1024x768",
        scenario=callback,
        scenario_args=driver,
        path_to_save="screens"
    )

def compare(file1, file2, screenName):
    diff = dali.compare_images(file1, file2, screenName + ".png")