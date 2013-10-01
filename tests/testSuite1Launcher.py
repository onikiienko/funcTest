import time, re, cgi
import os, sys, inspect
from unittest import TestLoader, TextTestRunner, TestSuite
# Import test cases
import testSuite1

if __name__ == "__main__":
	loader = TestLoader() # setup new test suite
	suite = TestSuite((
			loader.loadTestsFromTestCase(testSuite1.testSuite1)
	        ))

	runner = TextTestRunner(verbosity = 5)
	runner.run(suite)
