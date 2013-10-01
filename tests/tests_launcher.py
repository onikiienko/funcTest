import time, re, cgi
import os, sys, inspect
from unittest import TestLoader, TextTestRunner, TestSuite
# Import test cases
import test_suite_1

if __name__ == "__main__":
	loader = TestLoader() # setup new test suite
	suite = TestSuite((
			loader.loadTestsFromTestCase(test_suite_1.suite)
	        ))

	runner = TextTestRunner(verbosity = 5)
	runner.run(suite)
