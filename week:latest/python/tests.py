import unittest
from iqtest import is_even

class TestFunctiona(unittest.TestCase):

    def test_evens(self):
        self.assertTrue(is_even([2, 2, 3, 4, 8]))

    def test_unevens(self):
        self.assertFalse(is_even([2, 1, 3, 7, 3]))

if __name__ == '__main__':
    # begin the unittest.main()
    unittest.main()