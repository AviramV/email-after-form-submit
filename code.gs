function sendMeAnEmail(e) {
  var fName = e.values[1];
  var email = e.values[3];
  var status = e.values[4];
  var emailBody_STATUS1 = HtmlService.createHtmlOutputFromFile('STATUS1 HTML FILENAME').getContent();
  var emailBody_STATUS2 = HtmlService.createHtmlOutputFromFile('STATUS2 HTML FILENAME').getContent(); 
  // Add variables as needed for each additional status option
  
  var bodyFallback = 'A FALLBACK MESSAGE IN CASE HTML IS NOT SUPPORTED'
  
//  Send an email to the form submitter according to status
  if (status === 'STATUS 1') {
    GmailApp.sendEmail(email, 'STATUS 1 EMAIL SUBJECT', bodyFallback, {htmlBody: emailBody_STATUS1, name: 'SENDER NAME'});
  } else {
    GmailApp.sendEmail(email, 'STATUS 2 EMAIL SUBJECT', bodyFallback, {htmlBody: emailBody_STATUS2, name: 'SENDER NAME'});
  }
  // Add "else if" statements as needed for each additional status option
}
