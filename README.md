# Mince 'n' Patties


Mince 'n' Patties is my fifth and final portfolio project and is a content sharing platform focusing on users culinary interests. Primarily it is for subscribers to post pictures of any recent (burger related) meals, creations or experiences, post opinions and generate discussion points as well as sharing recipe ideas. Eventually there will be access to exclusive content for VIP members, for example, as the site develops.

This project closely followed the Moments walkthrough to allow me to further develop my skills and knowledge using a reliable, trustworthy source material. Any duplication or use of specific code is completely unintentional.

The main goal of this project is to build a community where ideas, thoughts and opinions can be shared to generate interesting discussions with others, and to provide culinary inspiration.

The full platform is available to view [here](https://django-rest-ap-9a62d525c1f0.herokuapp.com/).

![Am I Responsive](frontend/src/assets/am_i_responsive.jpg)

The initial concept was for the website to be easy to navigate and simple to understand. The planning of the site was via user stories and the project can be found [here](https://github.com/users/alanpaterson82/projects/10), The basic premise is outlined below for the landing page.

## Wireframe


### Landing Page:

![wireframe](frontend/src/assets/wireframe_landing_page.jpg)

## Data

### Entity Relationship Diagram

![ERD](frontend/src/assets/database_schema.png)

<br>

## Front-end Design and Documentation

The React front-end of this application has full CRUD functionality so that users can register, log-in, like and comment on other posts and also upload their own content.

The landing page is bright, informative and eye-catching and allows you to view the existing feed via the homepage, sign in or sign up for your own account.

<br>

![Landing Page](frontend/src/assets/landing_page.jpg)

<br>

The sign in page allows you to access further content by inputting your username and password as standard.

<br>

![Sign In Page](frontend/src/assets/sign_in.png)

<br>

If you navigate to this page but don't already have an account you are prompted to click on 'Sign up now!' And with such mouth watering photography already on display, why wouldn't you?!

The sign up page has further enticing photography and is of a similarly standard format.

<br>

![Sign Up Page](frontend/src/assets/sign_up.png)

<br>

Once logged in there are various options as detailed below:

<br>

![Navbar](frontend/src/assets/navbar2.jpg)

<br>

- Post - upload your own content to share with the world!
- Contact - get in touch with your views and feedback
- Recipes - upload recipes for others to enjoy
- Home - return to the homepage to review the initial content
- Feed - look for likes, comments and inspiration
- Hot stuff - your own personal file of everything that you have liked so far
- Exit - leave the platform, until next time!
- Profile - review your details and edit them as you wish eg profile picture, password or username.


<br>

## Custom Model - Contact Page

<br>

![Contact Page](frontend/src/assets/contact_page.jpg)


## Custom Model - Recipe Page

<br>

![Recipe Page](frontend/src/assets/successful_recipe_posts.jpg)

I have left the User Stories: Add a Recipe and Contact The Administrators as 'in progress' as further development is needed to improve functionality and styling, but this is a significant improvement on the original code. The contact form, when completed, currently redirects back to the home page. An alert to confirm that the details have been sent is required, as well as additional code for the details to be received.

<br>

You can also choose to follow and unfollow other users to build your network, as well as liking and commenting on other posts.

<br>

![Follow](frontend/src/assets/most_followed_profiles.jpg)

<br>

![Likes and comments](frontend/src/assets/likes_and_comments_2.jpg)

<br>

The front end of this application allows for full CRUD functionality and subscribers can...

- Create their own content
- Read others content
- Update their personal details and edit their posts
- Delete their posts and comments 

## Error Messages

There are a number of error messages included to alert users and provide further instruction, which will increase UX. Examples are below;

### Unable To Log In / No Existing Account

![Unable to log in](frontend/src/assets/unable_to_log_in.jpg)

### You Can't Like Your Own Posts

![You Can't Like Your Oen Posts](frontend/src/assets/you_cant_like_your_own_posts.png)

### Login To Like Posts

![Login To Like Posts](frontend/src/assets/login_to_like_posts.png)

### Search Unsuccessful

![Search Unsuccessful](frontend/src/assets/search_unsuccessful.png)

<br>

## Colours, Fonts and Images

### Colours

The colours used are subtle with contrasting tones for the icons to ensure ease of visibility and navigation. They were also chosen to represent various components of a burger.

![Colours](frontend/src/assets/colours.jpg)

![#f7e8d1](https://placehold.co/15x15/f7e8d1/f7e8d1.png) The bun
![#e96f1e](https://placehold.co/15x15/e96f1e/e96f1e.png) The cheese
![#c50e0e](https://placehold.co/15x15/c50e0e/c50e0e.png) The tomato sauce

### Fonts

The font used is Comic Neue which is quirky and playful as the site doesn't take itself too seriously and this choice reflects that.

### Images

The images are attractive and welcoming to encourage interaction with the posts and to delve deeper into what the site can do. The majority are from Pexels, and all images used are for educational purposes only.

<br>

## Use of Reusable React Components (Examples)

<br>

* Form and Button, imported to ContactCreateForm.js and RecipesCreateForm.js 
* Asset.js (const Asset)
    - For when a page is loading and a spinner is to be displayed
* Avatar.js (const Avatar)
    - For handling default Avatar images
* MoreDropdown.js (const MoreDropDown)
    - For users to edit a comment, for example. Used in Post.js, ProfilePage.js and Comment.js and MoreDropdown.js
* Navbar.js (const NavBar)
* SignUp.js (const SignUpForm)
    - Allows users to register their details
* Comment.js (const Comment)
    - Allows a comment to be posted, edited or deleted


<br>

## Back-end Documentation

The back-end Django Rest aspect of this application is there to allow full management of the accounts and for Superusers to carry out administrative tasks as needed.

To allow for easier debugging and a more simplistic view of all of the code, I chose to merge the front and back end aspects prior to submission. 

<br>

Deployment involves the following steps via Heroku;

<br>

- Logging in to the Heroku dashboard
- Clicking on 'New' then 'Create new app'
- Choosing a unique name for the app and clicking 'create app'
- Clicking on the 'Resources' tab and deleting any existing add-ons
- Navigating to the Settings tab and clicking on 'Reveal Config Vars' and updating as required with all of the below fields


<br> 


![Config Vars](frontend/src/assets/config_vars.png)

If the front and back end are unified you are required to copy the build folder over to the staticfiles folder.

This is done by running the following commands;

 - python3 manage.py collectstatic
 - In the frontend run npm run build && mv build ../staticfiles/. followed by npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.
 - Commit your changes and login to Heroku
 - Access the dashboard and choose your DRF application
 - From the Deploy tab click 'Deploy Branch'


<br>

## Technologies Used

- HTML, CSS, Javascript
- React.js
- Django Rest
- Bootstrap.js

<br>

Other

- ElephantSQL
- GitHub
- Heroku for deployment
- Cloudinary
- Chrome Developer Tools to test responsiveness, inspect all pages and generate a Lighthouse report
- Font Awesome for all icons and fonts
- Pexels for images
- 'Am I Responsive' to demonstrate suitability on all devices
- CI's Python Linter for automated testing of the Python code
- W3C Markup Validator to test the HTML code
- W3C CSS Validator to test the CSS code

<br>

## Browser Compatibility

- Tested in Google Chrome and on an iphone 13 Pro Max

<br> 

## Automated Testing

Due to time constraints and a significant number of issues encountered during the design of this project, there was limited testing undertaken, but this is to be factored into any future projects to further enhance my knowledge of this area, it is fully understood how important this is. 

### Frontend

Testing attempts resulted in the following errors, stil to be resolved;

![Testing](frontend/src/assets/testing.jpg)

![Testing2](frontend/src/assets/testing2.jpg)

### Backend

![Backend Testing](frontend/src/assets/backend_testing.png)

I followed the tutorials as closely as possible to ensure that I was carrying out the tests successfully, but continued to receive the same errors. I also reviewed the links provided under the lesson videos as well as the recommended YouTube video on "What is React Testing library" but was unable to find a solution.

<br>

## Manual Testing - Frontend

<br>

## Sign In

| Test | Expected Outcome | Result |
| ---- | ---- | --- |
| Enter username and password | Directed to the homepage | ✅ PASS |
| Incorrect username or password entered | Error message received | ✅ PASS |

<br>

## Navigation

| Test | Expected Outcome | Result |
| --- | --- | --- |
| Links in Navbar| When clicked, they connect to the correct pages | ✅ PASS |
| Click 'Add Post' | Option to upload content is available | ✅ PASS |
| Click 'Contact' | Option to provide feedback is available | ✅ PASS |
| Click 'Recipes' | Fields can be completed to upload content | ✅ PASS |
| Click 'Home' | Returns the user to the homepage | ✅ PASS |
| Click 'Exit' | To successfully log out | ✅ PASS |

<br> 

## Add a Post

| Test | Expected Outcome | Result |
| --- | --- | --- |
| Click 'Post' | Option given to upload an image | ✅ PASS |
| Add title and content | Click create to add post | ✅ PASS |

<br>

## Comment on/ Like a Post

| Test | Expected Outcome | Result |
| --- | --- | --- |
| Writing a comment | Request is successful, comment is shown on post, comment count increases | ✅ PASS |
| Editing a comment | Request is successful, changes take effect and text updated | ✅ PASS |
| Deleting a comment | Request is successful, comment is removed | ✅ PASS |
| Liking a post | Request is successful, like count increases | ✅ PASS |

<br>

## Recipes

| Test | Expected Outcome | Result |
| --- | --- | --- |
| Uploading a recipe | Click 'Recipes', complete all fields and click post, the details are shown, all text visible | ✅ PASS |
| Editing and deleting recipes | Click the relevant button, the recipe can be edited or is deleted completely | ✅ PASS |

<br>

## Contact Form

| Test | Expected Outcome | Result |
| --- | --- | --- | 
| Sending feedback | Click 'Contact', complete all fields and receive notification that it has been sent | ❌ FAIL - currently redirected to homepage with no alert |

<br>

## Sign Out

| Test | Expected Outcome | Result
| --- | --- | --- |
| Click Sign Out | Navbar defaults to Home/ Sign In/ Sign Up options | ✅ PASS |

<br>

## Manual Testing - Backend

<br>

It is understood that manual testing for the backend requires the following steps;

 - Analysing the requirements for the backend system
 - Identifying the backend components to be tested i.e database, server, API and security

Running the test cases on the test environment is crucial to identify defects that successful automated testing may miss. As previously stated, the importance of this is not underestimated.

<br>

The W3C Markup Validator and W3C CSS produced the following results;

<br>

![W3C Validator](frontend/src/assets/w3_validator.jpg)

<br>

![W3C CSS](frontend/src/assets/W3C_CSS.jpg)

<br>

![Lighthouse](frontend/src/assets/lighthouse_report.jpg)


<br>

The performance is disappointing and will be reviewed and improved wherever possible. Identified bugs and 'messy' code will contribute to this score, but as my skills increase this will be resolved.

<br>

## Bugs Resolved & Unresolved


An initial bug that has since been fixed is the broken avatar and CRUD functionality when editing and deleting posts - the options to edit and delete are now showing as seen in the 'after' image.

Before:

![Broken Links](frontend/src/assets/broken_avatar.jpg)

After:

![Fixed ink](frontend/src/assets/fixed_avatar.jpg)

- There were issues with code not 'auto-importing' so this was completed manually with extra diligence needed to ensure that this was being completed accurately
- Due to confusion with working in the development environment, there was significant time spent on attempting to resolve the following issues

<br>


1. The sign in page was not saving user details and in order to continue any user would have to sign up repeatedly
2. The API was not 'styled' when logging in as a superuser
3. Posts were not uploading when clicking 'create' and cancelling out of that screen did not return to the 'page not found' page as expected
4. When creating a new user it repeatedly defaulted to the superuser details with broken avatar and image links

<br>

All of the above issues were initially resolved by removing DEV - 1 from the config vars in Heroku.

- My Cloudinary structure was incorrect but has now been resolved - this was also contributing to broken image links

<br>

![error](frontend/src/assets/error.jpg)

There had also been a further error, but during a Tutor session this appeared to have resolved itself and is no longer showing;

<br>

![error2](frontend/src/assets/error2.jpg)

<br>

- The Python code style generally conforms and any obvious deviations were amended
- The infinite scroll function was working successfully initially but has since become an issue, resulting in poor UX, but will be fixed in future

<br>

The following resources were utilised when trying to resolve all of the above;

- Tutor Assistance
- Stack Overflow
- The Slack Community including Workflow requests
- Mentor/ Tutor one-to-one Sessions
- Google
- Diffchecker
- Full reviews of the walkthrough projects

<br>

Although this is far from a polished, interactive and user friendly platform, all of the above issues are an opportunity to further develop my knowledge. Attempts were made to fix every issue and extensive research was undertaken using a variety of resources but ultimately some remain unresolved, resulting in affected UX. I will continue to work on this to improve the quality of my work going forward.

## Future Actions 

- Significantly more testing to ensure that everything is in working order
- The addition of more detailed labels and milestones added to the Project Board
- Debugging
- Improved styling
- More independent code writing, and not relying so heavily on the walkthrough projects
- Increased functionality and an improved user experience
- Additional features such as restaurant reviews and VIP access to the site


















