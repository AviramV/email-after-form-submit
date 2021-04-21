# Email After Form Submit
A google AppScript that sends an email to a form submitter, according to their form answer.

Submitting a form, saves the data in a spreadsheet and triggers a reply email.

The reply's body is taken form an HTML template made for every possible status.

The reply also covers a fallback for cases in which the recepients' email client doesn't supprt HTML.


## Technologies Used
- JavaScript (AppScript)
- HTML

## How it Works
There are a few things necessary for this to work:

### A Google Sheet
1. create a google sheet that will save all data.
2. Add a google form that will pass data into the spreadsheet. **Tools > Create a from**

### A Google Form
Format and design the form you created to get all the necessary data from the submitter.

### HTML Templates: Email Body 
Add an HTML file with the email body for each status you wish to target in the submitted form.

### A Trigger
Add a trigger event for the function:

1. Event Source > From spreadshhet
2. Event Type > On form submit
