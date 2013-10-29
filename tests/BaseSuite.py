import unittest

from source.helper import *
from source.screenshoter import *
from dali import Dali


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