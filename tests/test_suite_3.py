import unittest
from selenium import webdriver
import sys
sys.path.insert(0, 'tests/source')
from mypkg import *
from helper import *
from screenshoter import *

class suite(unittest.TestCase):

    def setUp(self):
        return

    def tearDown(self):
        return
# Open the map with a marker dragabl
    def test3_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts3_test.html"
        file1 = takeScreenshot(callback, driver)
        url = "http://functest.maps2.test/demo_ts3_pub.html"
        file2 = takeScreenshot(callback, driver1)
        compare(file1, file2, "test3_1")
    
# Hover your mouse over the marker (RR: Change marker icons, hint)
    def test3_2(self):
        def callback(driver):
            marker = driver.find_element_by_class_name('dg-marker')
            ActionChains(driver).move_to_element(marker).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test3_2")
# Grab a marker and drag it to another street (RR: marker moved to the expected street hint (provided that the tests will be mouse over the marker)
    def test3_3(self):
        def callback(driver):
            marker = driver.find_element_by_class_name('dg-marker')
            ActionChains(driver).drag_and_drop_by_offset(marker, 100, 100).perform()
            wait_for_page_load(driver)


        takeScreenAndCompare(callback, driver, driver1, "test3_3")

# Click on the marker (RR: smenka marker icons, there is no hint)
    def test3_4(self):
        def callback(driver):
            marker = driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div/div')
            ActionChains(driver).click(marker).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test3_4")
