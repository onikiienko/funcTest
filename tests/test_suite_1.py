import unittest
from selenium import webdriver
import sys
import mypkg
from core import *

global dali
global driver
global driver1
dali = mypkg.dali
driver = mypkg.driver
driver1 = mypkg.driver1

#
class suite(unittest.TestCase):

    def setUp(self):
        return

    def tearDown(self):
        return

    def takeScreenAndCompare(self, callback, driver, driver1, screenName):
        file1 = self.takeScreenshot(callback, driver)
        file2 = self.takeScreenshot(callback, driver1)
        self.compare(file1, file2, screenName)

    def takeScreenshot(self, callback, driver):
        return dali.take_screenshot(
            resolution="1024x768",
            scenario=callback,
            scenario_args=driver,
            path_to_save="../screens"
        )

    def compare(self, file1, file2, screenName):
        diff = dali.compare_images(file1, file2, "./screens/" + screenName + ".png")
        self.assertEquals(diff, 0.0, "The difference is %f" % diff)

    def test_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts1_test.html"
        file1 = self.takeScreenshot(callback, driver)
        url = "http://functest.maps2.test/demo_ts1_pub.html"
        file2 = self.takeScreenshot(callback, driver1)
        self.compare(file1, file2, "test_1")
    
    def test_2(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.980206086231, 82.898068362003)"
            set_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_2")

    def test_3(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.9788, 82.86816)"
            click_to_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_3")

    def test_4(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.9788, 82.86816)"
            set_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_4")

    def test_5(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.99771, 82.8687)"
            click_to_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_5")

    def test_6(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.98348, 82.89103)"
            click_to_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_6")

    def test_7(self):
        def callback(driver):
            driver.find_element_by_id("dg-showmorehouse").click()
            wait_for_page_load(driver)

        self.takeScreenAndCompare(callback, driver, driver1, "test_7")

    def test_8(self):
        def callback(driver):
            ActionChains(driver).click_and_hold(driver.find_element_by_class_name("scroller__bar")).perform()
            ActionChains(driver).release(driver.find_element_by_class_name("popup_footer_title")).perform()
            wait_for_page_load(driver)

        self.takeScreenAndCompare(callback, driver, driver1, "test_8")

    def test_9(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.98035, 82.89835)"
            click_to_center(driver, center, zoom)

        self.takeScreenAndCompare(callback, driver, driver1, "test_9")

    def test_z10(self):
        def callback(driver):
            driver.find_element_by_id("dg-showmorehouse").click()
            wait_for_page_load(driver)

        self.takeScreenAndCompare(callback, driver, driver1, "test_10")

    def test_z11(self):
        def callback(driver):
            driver.find_element_by_class_name("leaflet-popup-close-button").click()
            wait_for_page_load(driver)

        self.takeScreenAndCompare(callback, driver, driver1, "test_11")


        driver.quit()
        driver1.quit()
