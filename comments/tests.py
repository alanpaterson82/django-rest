from django.test import TestCase
from .forms import CommentCreateForm


class TestCommentCreateForm(TestCase):

    def test_form_is_valid(self):
        comment_create_form = CommentCreateForm({'body': 'This is a great post'})
        self.assertTrue(comment_create_form.is_valid(), msg="Form is invalid")
    
    def test_form_is_invalid(self):
        comment_create_form = CommentCreateForm({'body': ''})
        self.assertFalse(comment_create_form.is_valid(), msg="Form is valid")

# Create your tests here.