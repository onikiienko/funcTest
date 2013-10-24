import unittest

import sys
sys.path.insert(0, 'tests/source')
from .source.helper import *
from source.screenshoter import *


class suite(unittest.TestCase):
    def setUp(self):
        return

    def tearDown(self):
        return

    # Open map leveled on 13 (RR: the expected terrain tiles)
    def test1_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts1_test.html"
        file1 = takeScreenshot(dali, callback, driver)
        url = "http://functest.maps2.test/demo_ts1_pub.html"
        file2 = takeScreenshot(dali1, callback, driver1)
        diff = compare(file1, file2, "test1_1")
        self.assertEqual(diff, 0)

    # Open map leveled on 13 (RR: the expected terrain tiles)
    def test1_2(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.980206086231, 82.898068362003)"
            set_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_2")
        self.assertEqual(diff, 0)

    # Click on the region (OR: light district, balun with the name of locality)
    def test1_3(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.9788, 82.86816)"
            click_to_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_3")
        self.assertEqual(diff, 0)

    # Prizumitsya 17 shifted to the Left (RR: lights in place, zoom level 17)
    def test1_4(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.9788, 82.86816)"
            set_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_4")
        self.assertEqual(diff, 0)

    # Click on the street (OR: street lights, balun)
    def test1_5(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.99771, 82.8687)"
            click_to_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_5")
        self.assertEqual(diff, 0)

    # Click on the building (RR: Balun with information about the building in which was a click)
    def test1_6(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.98348, 82.89103)"
            click_to_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_6")
        self.assertEqual(diff, 0)

    # Show a list of organizations in the building (RR: a list of organizations in the building)
    def test1_7(self):
        def callback(driver):
            driver.find_element_by_id("dg-showmorehouse").click()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_7")
        self.assertEqual(diff, 0)

    # Proskrolit list of organizations (RR: proskrolen list)
    def test1_8(self):
        def callback(driver):
            ActionChains(driver).click_and_hold(driver.find_element_by_class_name("scroller__bar")).perform()
            ActionChains(driver).release(driver.find_element_by_class_name("popup_footer_title")).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_8")
        self.assertEqual(diff, 0)

    # Klinut on the next building (RR: previous balun imploded, opened a new one)
    def test1_9(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.98035, 82.89835)"
            click_to_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_9")
        self.assertEqual(diff, 0)
    # Expand the list of organizations

    def test1_z10(self):
        def callback(driver):
            driver.find_element_by_id("dg-showmorehouse").click()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_10")
        self.assertEqual(diff, 0)

    # Close balun clicking on the X (RR: balun imploded on the map tiles only)
    def test1_z11(self):
        def callback(driver):
            driver.find_element_by_class_name("leaflet-popup-close-button").click()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, driver, driver1, "test1_11")
        self.assertEqual(diff, 0)