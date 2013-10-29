from BaseSuite import BaseSuite

from source.helper import *
from source.screenshoter import *

class Suite(BaseSuite):

#Open the map with a static marker and Hinte (RR: have a marker on the map)
    def test2_1(self):
        def callback(driver):
            driver.get(url)
            wait_for_page_load(driver)
        
        url = "http://functest.maps2.test/demo_ts2_test.html"
        file1 = takeScreenshot(self.dali1, callback, self.driver1)
        url = "http://functest.maps2.test/demo_ts2_pub.html"
        file2 = takeScreenshot(self.dali2, callback, self.driver2)
        diff = compare(self.dali1, file1, file2, "test1_1")
        self.assertEqual(diff, 0)

#Switch to fullskrina (RR: fulskrina mode, the icon of the control has changed)
    def test2_2(self):
        def callback(driver):      
            ActionChains(driver).click(driver.find_element_by_class_name("dg-fullscreen-icon")).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test2_2")
        self.assertEqual(diff, 0)

#Move your mouse over the first marker (RR: Change marker icons, hint)
    def test2_3(self):
        def callback(driver):
            ActionChains(driver).move_to_element(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[1]')).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test2_3")
        self.assertEqual(diff, 0)

#Click on the marker (RR: Change marker icons, hint disappears)
    def test2_4(self):
        def callback(driver):
            ActionChains(driver).click(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[1]')).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test2_4")
        self.assertEqual(diff, 0)

#Move your mouse over the second marker (RR: Change marker icons, hint)
    def test2_5(self):
        def callback(driver):
            ActionChains(driver).move_to_element(driver.find_element_by_xpath('//*[@id="map"]/div[1]/div[2]/div[3]/div[2]')).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test2_5")
        self.assertEqual(diff, 0)

#Exit fullskrina (RR: exited fulskrina, the icon of the control has changed)
    def test2_6(self):
        def callback(driver):
            ActionChains(driver).click(driver.find_element_by_class_name("dg-fullscreen-icon")).perform()
            wait_for_page_load(driver)

        diff = takeScreenAndCompare(callback, self.dali1, self.dali2, self.driver1, self.driver2, "test2_6")
        self.assertEqual(diff, 0)

if __name__ == '__main__':
    unittest.main()