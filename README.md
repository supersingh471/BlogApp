# This is BlogApp where user will have a SignUp and Signin page after creating their account users can write blogs on this website and data get saved in database.
# It'll have two router user and post
# The post file have basic CRUD function for posts
# This application has a authMiddleware which authorize token for users signin and also for posts
# In authMiddleware, it'll fetch request from Authorization header to authorize tokens and checks if token exist and start with Bearer, if exist it extract JWT token from the header and decode the token with secret key, if token is invalid or expired the try & catch block will throw an error or if token is decoded, it'll be store in userId
# In user.ts file, we have signup route for users to register themselves