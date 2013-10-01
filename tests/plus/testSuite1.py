import unittest
import time

from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote
from core import *

from dali import Dali, Options

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains



class ExampleTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = Remote(
            desired_capabilities=DesiredCapabilities.CHROME,
            command_executor="http://localhost:4455/wd/hub"
        )

    def tearDown(self):
        self.driver.quit()

    def test_example(self):
        def callback(driver):
            #0
            driver.maximize_window()
            driver.get(map_url)
            time.sleep(2)
            #1
            zoom = "13"
            center = "new L.LatLng(54.980206086231, 82.898068362003)"
            set_center(driver, center, zoom)
            #2
            center = "new L.LatLng(54.9788, 82.86816)"
            click_to_center(driver, center, zoom)
            #3
            zoom = "17"
            set_center(driver, center, zoom)
            #4
            center = "new L.LatLng(54.99771, 82.8687)"
            click_to_center(driver, center, zoom)
            #5
            center = "new L.LatLng(54.98348, 82.89103)"
            zoom = "18"
            click_to_center(driver, center, zoom)
            #6
            driver.find_element_by_id("dg-showmorehouse").click()
            time.sleep(2)
            #7
            ActionChains(driver).click_and_hold(driver.find_element_by_id("scroller__bar-wrapper")).perform()
            ActionChains(driver).release(driver.find_element_by_class_name("popup_footer_title")).perform()
            time.sleep(2)
            #8
            center = "new L.LatLng(54.98035, 82.89835)"
            click_to_center(driver, center, zoom)
            #9
            driver.find_element_by_id("dg-showmorehouse").click()
            time.sleep(2)
            #10
            driver.find_element_by_class_name("leaflet-popup-close-button").click()
            time.sleep(2)

        dali = Dali(self.driver)


        map_url = "http://maps.api.2gis.ru/2.0/";
        file1 = dali.take_screenshot(
            resolution="1024x768",
            scenario=callback,
            scenario_args=self.driver,
            path_to_save="./screens"
        )


        map_url = "http://maps2.bogdan.test/2.0/";
        file2 = dali.take_screenshot(
            resolution="1024x768",
            scenario=callback,
            scenario_args=self.driver,
            path_to_save="./screens"
        )

        diff = dali.compare_images(file1, file2, "./screens/result.png")
        self.assertEquals(diff, 0.0, "The difference is %f" % diff)


if __name__ == "__main__":
    unittest.main()
