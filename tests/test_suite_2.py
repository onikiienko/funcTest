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
#Open the map with a static marker and Hinte (RR: have a marker on the map)
    def test2_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts2_test.html"
        file1 = takeScreenshot(dali, callback, driver)
        url = "http://functest.maps2.test/demo_ts2_pub.html"
        file2 = takeScreenshot(dali1, callback, driver1)
        compare(file1, file2, "test2_1")

#Switch to fullskrina (RR: fulskrina mode, the icon of the control has changed)
    def test2_2(self):
        def callback(driver):      
            ActionChains(driver).click(driver.find_element_by_class_name("dg-fullscreen-icon")).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test2_2")

#Move your mouse over the first marker (RR: Change marker icons, hint)
    def test2_3(self):
        def callback(driver):
            ActionChains(driver).move_to_element(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[1]')).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test2_3")

#Click on the marker (RR: Change marker icons, hint disappears)
    def test2_4(self):
        def callback(driver):
            ActionChains(driver).click(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[1]')).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test2_4")

#Move your mouse over the second marker (RR: Change marker icons, hint)
    def test2_5(self):
        def callback(driver):
            ActionChains(driver).move_to_element(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[2]')).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test2_5")

#Exit fullskrina (RR: exited fulskrina, the icon of the control has changed)
    def test2_6(self):
        def callback(driver):
            ActionChains(driver).click(driver.find_element_by_class_name("dg-fullscreen-icon")).perform()
            wait_for_page_load(driver)

        takeScreenAndCompare(callback, driver, driver1, "test2_6")