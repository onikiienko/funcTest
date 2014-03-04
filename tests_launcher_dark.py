import sys
sys.path.insert(0, './tests/darkTests')
import test_suite_1

from tests.source.mypkg import *

from unittest import TestLoader, TextTestRunner, TestSuite, TestResult

'''
Launching a tests, testsuite by testsuite. And closeing the browsers after all keyses are complited.
'''

print __name__

if __name__ == "__main__":
    # setup new test suite
    loader = TestLoader()
    suite = TestSuite((
        loader.loadTestsFromTestCase(test_suite_1.Suite),
        loader.loadTestsFromTestCase(test_suite_2.Suite),
        loader.loadTestsFromTestCase(test_suite_3.Suite),
        loader.loadTestsFromTestCase(geoclicker.Suite)
    ))

    runner = TextTestRunner(verbosity=5)
    runner.run(suite)
