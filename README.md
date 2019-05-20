# Application-Manager
Local Storage Exercise

A client needs a system for managing students applications. There is only one entity called Application.

The Application entity consists of:

Name - text, required
Email - text, required
Age - number, required
Phone Number - text, required
Preferred Way of Communication - radio buttons for Email and Phone, required
English Level - select with options, required
Available to Start - date, required
Technical Skills and Courses - text
Short Personal Presentation (e.g. reason for joining the program) - text
"Study from home" - checkbox
The application should allow you to read all applications, create a new application, update an existing application and delete it.

Technologies
Any Frontend library or framework can be used. You should use the right HTML5 and CSS3 elements and syntax and validate all data. 

For data storage use localstorage, store the data in an array or use either mBaaS (e.g. Kinvey) or API (e.g. Mockaroo).

Grading
HTML5 correct use - 10%
CSS3 correct use - 10%
Read feature - 10%
Create feature - 10%
Update feature - 10%
Delete feature - 10%
Data Validation - 15%
User Interface/User Experience - 10%
Code formatting - 5%
Naming Conventions - 5%
Code Reuse - 5%
Deliverables
1. Application source code 
2. Detailed Setup Guide: a document that describes how the application is supposed to be started, e.g. installing packages, configuration files, etc.

Submissions without Detailed Setup Guide would NOT be reviewed.


You can paste a link to the source code and setup guide in a source control system (GitHub, Bitbucket, GitLab, etc.)

OR

submit a ZIP file containing the source code and setup guide. The size limit is 50MB. The ZIP file must be named ApplicationManager_FirstName_LastName.zip, e.g. ApplicationManager_John_Smith.zip



===================

In it's current state this application does not require any setup.
Functionality is limited to:

 1. Saving the form when submited to the localStorage.
 2. On refresh the data is retrieved from the locaStorage and populates the form inputs. Data is not saved from:
    - radio buttons
    - <select> -> <options>
    - checkbox
 3. "Delete" button clears the localStorage.
 4. "Edit" currently not functioning.

