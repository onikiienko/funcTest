import unittest
from selenium import webdriver
import sys
from mypkg import *
from helper import *

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
        diff = dali.compare_images(file1, file2, "../screens/" + screenName + ".png")
        self.assertEquals(diff, 0.0, "The difference is %f" % diff)

    def test_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts3_test.html"
        file1 = self.takeScreenshot(callback, driver)
        url = "http://functest.maps2.test/demo_ts3_pub.html"
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


'''1. (demo: a simple map)
+ Open map leveled on 13 (RR: the expected terrain tiles)
+ Click on the region (OR: light district, balun with the name of locality)
+ Prizumitsya 17 shifted to the Left (RR: lights in place, zoom level 17)
+ Click on the street (OR: street lights, balun)
+ Click on the building (RR: Balun with information about the building in which was a click)
+ Show a list of organizations in the building (RR: a list of organizations in the building)
+ Proskrolit list of organizations (RR: proskrolen list)
+ Klinut on the next building (RR: previous balun imploded, opened a new one)
+ Expand the list of organizations
+ Close balun clicking on the X (RR: balun imploded on the map tiles only)'''