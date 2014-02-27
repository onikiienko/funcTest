from BaseSuite import BaseSuite

from source.helper import *
from source.screenshoter import *

class Suite(BaseSuite):

# Open the map with a marker dragabl
    def test3_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest" + "/darkDemos/publicApplications/demo3.html"
        file1 = takeScreenshot(self.dali1, callback, self.driver1)
        url = "http://functest" + "/darkDemos/publicApplications/demo3.html"
        file2 = takeScreenshot(self.dali2, callback, self.driver2)
        diff = compare(self.dali1, file1, file2, "test3_1")
        self.assertEqual(diff, 0)
    
# Hover your mouse over the marker (RR: Change marker icons, hint)
    def test3_2(self):
        def callback(driver):
            marker = driver.find_element_by_class_name('leaflet-marker-icon')
            ActionChains(driver).move_to_element(marker).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test3_2")
        self.assertEqual(diff, 0)

# Grab a marker and drag it to another street (RR: marker moved to the expected street hint (provided that the tests will be mouse over the marker)
    def test3_3(self):
        def callback(driver):
            marker = driver.find_element_by_class_name('leaflet-marker-icon')
            ActionChains(driver).drag_and_drop_by_offset(marker, 100, 100).perform()
            wait_for_page_load(driver)


        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test3_3")
        self.assertEqual(diff, 0)

# Click on the marker (RR: smenka marker icons, there is no hint)
    def test3_4(self):
        def callback(driver):
            click_object(driver, 'class', 'leaflet-marker-icon')
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test3_4")
        self.assertEqual(diff, 0)
