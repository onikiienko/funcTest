from BaseSuite import BaseSuite

from source.helper import *
from source.screenshoter import *

class Suite(BaseSuite):

# Open the map
    def test4_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)

        url = "@@functest" + "/geoclicker_dark_test.html"
        file1 = takeScreenshot(self.dali1, callback, self.driver1)
        url = "@@functest" + "/geoclicker_dark_pub.html"
        file2 = takeScreenshot(self.dali2, callback, self.driver2)
        diff = compare(self.dali1, file1, file2, "test4_1")
        self.assertEqual(diff, 0)

# Click on the unknow place (RR: default pop-up)
    def test4_2(self):
        def callback(driver):
            zoom = "10"
            center = "new L.LatLng(59.95019685841227, 30.53237915039062)"
            click_to_center(driver, center, zoom)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test4_2")
        self.assertEqual(diff, 0)

# Switch lang to it (RR: Content in pop-up translated to italian)
    def test4_3(self):
        def callback(driver):
            script = "map.setLang('it')"
            command_line(driver, script)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test4_3")
        self.assertEqual(diff, 0)

# Switch lang to en (RR: Content in pop-up translated to english)
    def test4_4(self):
        def callback(driver):
            script = "map.setLang('en')"
            command_line(driver, script)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test4_4")
        self.assertEqual(diff, 0)

# Switch lang to cs (RR: Content in pop-up translated to cs)
    def test4_5(self):
        def callback(driver):
            script = "map.setLang('cs')"
            command_line(driver, script)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test4_5")
        self.assertEqual(diff, 0)
