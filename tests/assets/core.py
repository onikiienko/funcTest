from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

def click_to_center(driver, center, zoom):
    """(driver) -> none
    Making a click in the center of the browsers screen
    """
    # putting map in the right direction
    set_center(driver, center, zoom)
    
    # take left top corner of the map's div
    element = driver.find_element_by_id("map")
    
    # finding the center of map's div
    height = element.size['height'] / 2
    width = element.size['width'] / 2
    
    # clicking in point
    ActionChains(driver).move_to_element_with_offset(element, width, height).click().perform()

    # before making smthg else we need to be sure that page was downloaded
    wait_for_page_load(driver)

def set_center(driver, center, zoom):
    """(driver) -> none
    Making a click in the center of the browsers screen
    """
    # putting view in the map's center
    driver.execute_script("center = " + center + "; map.setView( center, " + zoom + ");")
    
    # before making smthg else we need to be sure that page was downloaded
    wait_for_page_load(driver);


def wait_for_page_load(driver):
    """
    method, which shows page loaded status
    """
    # checking every second is the page was downloaded
    WebDriverWait(driver, 20).until(checking_for_flag_enable)

def checking_for_flag_enable(driver):
    """
    checking is the added element is present in a window object
    """
    try:
        if driver.find_element_by_class_name("loaded").is_enabled():
            return True
    except:
        print "waiting..."
        return False