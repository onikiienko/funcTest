import sys
from unittest import TestLoader, TextTestRunner, TestSuite, TestResult

from tests import test_suite_1
from tests import test_suite_2
from tests import test_suite_3

from tests.source.mypkg import *

'''
Launching a tests, testsuite by testsuite. And closeing the browsers after all keyses are complited.
'''

print __name__

if __name__ == "__main__":
    # setup new test suite
    loader = TestLoader()
    suite = TestSuite((
        #loader.loadTestsFromTestCase(test_suite_1.Suite),
        loader.loadTestsFromTestCase(test_suite_2.Suite),
        #loader.loadTestsFromTestCase(test_suite_3.Suite)
    ))

    runner = TextTestRunner(verbosity=5)
    #testResult = runner.run(suite)
    runner.run(suite)