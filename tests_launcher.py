import os, sys, inspect
from unittest import TestLoader, TextTestRunner, TestSuite
sys.path.insert(0, 'tests')

import test_suite_1
import test_suite_2
import test_suite_3

sys.path.insert(0, 'source')
from helper import *
from mypkg import *

if __name__ == "__main__":
	loader = TestLoader() # setup new test suite
	suite = TestSuite((
			loader.loadTestsFromTestCase(test_suite_1.suite),
			loader.loadTestsFromTestCase(test_suite_2.suite),
			loader.loadTestsFromTestCase(test_suite_3.suite)
	        ))

	runner = TextTestRunner(verbosity = 5)
	runner.run(suite)

driver.quit()
driver1.quit()
