from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

def click_to_center(driver, center, zoom):
    """(object, object, int) -> none
    Making a click in the center of the browsers screen
    """
    set_center(driver, center, zoom)

    element = driver.find_element_by_id("map")

    height = element.size['height'] / 2
    width = element.size['width'] / 2
    
    ActionChains(driver).move_to_element_with_offset(element, width, height).click().perform()
    wait_for_page_load(driver)

def set_center(driver, center, zoom):
    """(object, object, int) -> none
    Making a click in the center of the browsers screen
    """
    driver.execute_script("center = " + center + "; map.setView( center, " + zoom + ");")
    wait_for_page_load(driver);


def wait_for_page_load(driver):
    """ (object) -> none
    checking every second is the page was downloaded
    """
    WebDriverWait(driver, 20).until(checking_for_flag_enable)

def checking_for_flag_enable(driver):
    """(object) -> boolean
    checking is the class of body depends to "loaded", writing "waiting... if it isn't"
    """
    try:
        if driver.find_element_by_class_name("loaded").is_enabled():
            return True
    except:
        print "waiting..."
        return False