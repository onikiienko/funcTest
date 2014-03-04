import unittest
import sys
sys.path.insert(0, './tests/source')
import helper
import screenshoter
import dali


class BaseSuite(unittest.TestCase):
    def setUp(self):
        return

    def tearDown(self):
        return

    @classmethod
    def setUpClass(cls):
        print "setUpClass"
        cls.driver1 = getOrCreateWebdriver()
        cls.driver2 = getOrCreateWebdriver()
        cls.dali1 = Dali(cls.driver1)
        cls.dali2 = Dali(cls.driver2)

    @classmethod
    def tearDownClass(cls):
        print "tearDownClass"
        cls.driver1.quit()
        cls.driver2.quit()