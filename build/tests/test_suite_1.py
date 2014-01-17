from BaseSuite import BaseSuite

from source.helper import *
from source.screenshoter import *

class Suite(BaseSuite):
    # Open map leveled on 13 (RR: the expected terrain tiles)
    def test1_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "@@testApplication" + "/demo_ts1_test.html"
        file1 = takeScreenshot(self.dali1, callback, self.driver1)
        url = "@@testApplication" + "/demo_ts1_pub.html"
        file2 = takeScreenshot(self.dali2, callback, self.driver2)
        diff = compare(self.dali1, file1, file2, "test1_1")
        self.assertEqual(diff, 0)

    # Open map leveled on 13 (RR: the expected terrain tiles)
    def test1_2(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.9802, 82.8980)"
            set_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_2")
        self.assertEqual(diff, 0)

    # Click on the region (OR: light district, balun with the name of locality)
    def test1_3(self):
        def callback(driver):
            zoom = "13"
            center = "new L.LatLng(54.9788, 82.8681)"
            click_to_center(driver, center, zoom)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_3")
        self.assertEqual(diff, 0)

    # Prizumitsya 17 shifted to the Left (RR: lights in place, zoom level 17)
    def test1_4(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.9788, 82.86816)"
            set_center(driver, center, zoom)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_4")
        self.assertEqual(diff, 0)

    # Click on the street (OR: street lights, balun)
    def test1_5(self):
        def callback(driver):
            zoom = "17"
            center = "new L.LatLng(54.9977, 82.8687)"
            click_to_center(driver, center, zoom)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_5")
        self.assertEqual(diff, 0)

    # Click on the building (RR: Balun with information about the building in which was a click)
    def test1_6(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.9834, 82.8910)"
            click_to_center(driver, center, zoom)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_6")
        self.assertEqual(diff, 0)

    # Show a list of organizations in the building (RR: a list of organizations in the building)
    def test1_7(self):
        def callback(driver):
            click_object(driver, 'id', 'popup-btn-all')
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_7")
        self.assertEqual(diff, 0)

    # Proskrolit list of organizations (RR: proskrolen list)
    def test1_8(self):
        def callback(driver):
            ActionChains(driver).click_and_hold(driver.find_element_by_class_name("scroller__bar")).perform()
            ActionChains(driver).release(driver.find_element_by_class_name("leaflet-popup-tip-container")).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_8")
        self.assertEqual(diff, 0)

    # Klinut on the next building (RR: previous balun imploded, opened a new one)
    def test1_9(self):
        def callback(driver):
            zoom = "18"
            center = "new L.LatLng(54.9803, 82.8983)"
            click_to_center(driver, center, zoom)
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_9")
        self.assertEqual(diff, 0)

    # Expand the list of organizations
    def test1_z10(self):
        def callback(driver):
            click_object(driver, 'id', 'popup-btn-all')
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_10")
        self.assertEqual(diff, 0)

    # Close balun clicking on the X (RR: balun imploded on the map tiles only)
    def test1_z11(self):
        def callback(driver):
            click_object(driver, 'class', 'leaflet-popup-close-button')
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test1_11")
        self.assertEqual(diff, 0)


if __name__ == '__main__':
    unittest.main()
