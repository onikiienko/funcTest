import sys
from unittest import TestLoader, TextTestRunner, TestSuite, TestResult

sys.path.insert(0, 'tests')

from tests import test_suite_1
from tests import test_suite_2
from tests import test_suite_3

sys.path.insert(0, 'source')

from tests.source.mypkg import *

testResult = None
'''
Launching a tests, testsuite by testsuite. And closeing the browsers after all keyses are complited.
'''
if __name__ == "__main__":
    # setup new test suite
    loader = TestLoader()
    suite = TestSuite((
        loader.loadTestsFromTestCase(test_suite_1.suite),
        # loader.loadTestsFromTestCase(test_suite_2.suite),
        # loader.loadTestsFromTestCase(test_suite_3.suite)
    ))

    runner = TextTestRunner(verbosity=5)
    testResult = runner.run(suite)

print testResult.__dict__
driver.quit()
driver1.quit()
exit(not testResult.wasSuccessful())