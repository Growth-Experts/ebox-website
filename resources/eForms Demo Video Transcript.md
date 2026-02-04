# eForms Demo Video Transcript

**Video:** [Overview of eForms: Bulk MRI Data imports and validations](https://www.loom.com/share/db4e1181fd014b3fb1d56513166ffa2d)

00:00 Welcome to this video which is an overview of the eForms product and also an example. eForms is a form building tool which allows you to build forms for MRI data imports.

00:13 This allows for data capture with advanced workflows and validation processes. And so that data can be either uploaded by a user through front-end capture in the eForms product or via file upload this data is any data that can be put into the MRI system, transactional master data, property data, and 

00:38 this allows for a multi-step workflow. So if users need to fill in information at different parts of, at least capture, different parts of any business process which requires data capture.

00:51 Multiple users filling out information also allowing for multiple user approvals as required. In addition, the approvals can be conditional so you can come up with some quite advanced approval flows.

01:06 The example seen here, there are two conditions based on a field of some information that is provided. An example would be different types of vendors that need to be approved by different individuals in a business context or invoices of different sizes and they could be more than two conditions and more

01:25 than two routes that would be quite advanced. And so these forms are perfect for importing Journal CM Vectures, AP- suppliers, invoices, property, data.

01:35 We do have common real estate processes in ready to go templates, but also the ability to both custom forms. So just diving straight into some demos.

01:47 Logging in users are able to log in via SSO, a single sign-on. If you do have single sign-on in other applications in your business context, we keep that.

01:57 that smooth the experience for your users, otherwise they standard username and password, You can see here a number of different forms that are available.

02:07 Some of these are templated to some of these are demo forms. And it allows you to categorize your forms. We've got accounting accounts payable, receivable, and property management, which can be collapsed.

02:18 But the users then will only have access to the forms that they have been given access to. so any forms that exist as templated forms can be further customized, otherwise we do both form fully customizable forms from scratch.

02:34 jumping into an example, if you're familiar with the journal capture form in MRI, this will look familiar to you, where the user will be able to come in and capture journals as per usual.

02:50 and you will see here some validations that come out based on the underlying data requirements but also the business logic, the form is identified with an error, a simple error for the user, please enter an entity, please enter a GL account, please enter a description, you know, see if I enter it, if

03:09 I do pull up an entity, it will automatically load the ledger code, The data being pulled through is being pulled through from the MRI system.

03:18 system. We do use the data hierarchy and user permission, so the data hierarchy coming in ensuring that here only for instance the GL accounts that are available only those that are applicable to the ledger code and the entity in question.

03:57 across them. and so ensuring that users only have access to the data that they should have access to. Forms don't need to stick to the standard MRI layout and for instance this is a multi-batch form which is still the journal form but in a flat file format allowing for multiple lines to be captured here

04:05 and what then happens is the system does the logic of splitting the files. and that will show you an example of that as an import.

04:15 So again going over to the import you'll see that there's new import, there's always a template every form that is created in eForms automatically has a template created that the users can then download and upload once populated into the system uploading it here you'll see the that automatically what

04:39 happens is the file format is validated and it has picked up that there is a missing or unmatched column. Here are all the column matches and so if I tick that it'll bring up that the date field in a grid hasn't been established and so I can go here and say oh for this example it was day.

05:00 So day is matched to date because there was something wrong with the form or because the form comes from another system where different column headers are used.

05:12 If that is the case you're able to save column matches as a particular profile make those public so that the same profile can be used again and again if it wasn't just a one-time mistake.

05:27 So now that that import has been corrected you can see that the file structure has been validated and we can import it and it has been imported successfully.

05:39 You can see here that this accrual for demo purposes is importing the approval status is that it's in draft and was last updated today.

05:49 So we go take a look at that, may need to refresh, and we can take a look at this. Again the user has the ability to come in here and confirm that this information is correct.

06:02 And if anything in this information needs to change, the user can come in and change it. And so if, for instance, a user did change this, you'll see that it'll no longer allow you to save because of that validation error.

06:15 And because this form is not a standard form, it's a multi-batch form that is splitting by entity period, date, et cetera.

06:23 It then ensures that not only must the whole batch balance, but the individual batches, which it is looking at the logic between the different records, must also balance.

06:35 And so once I've corrected that, then it is correct, and we can update, and submit the form. and that then goes into a pending state.

06:49 That then will be sent to whoever the individual is, or group, or conditional flow that requires approvals. and those approvers will get an email with a link, letting them know that there is a form for approval, and they'd be able to come through for the perfor demo purposes.

07:05 I have been set as a, a prover, but I'd be able to come through here, view the detail, but not edit.

07:15 and then either approve or reject, and the other individual will be told the outcome back. That is then set to upload in progress, and if we just wait a few seconds, you will see that the information is fed back on the different rows, and what the GL reference is based on the different logic that was

07:41 required for the auto split. it. Again, if you are in the import screen and you go to import history, you can actually see all the files that have been imported.

07:51 You'll be able to go back and download them. Here I can only see my files, but you'll be able to see other files.

07:58 Okay. Good. Okay. Imported by other users if you had the permissions to do so. If there was an issue in the import process, an import status would appear here in addition to when you get a Turing import, and you'd be able to click on this and have user-friendly directed errors saying, please enter a 

08:20 period on row five in your form. Please enter a status on row nine. So, direct the users to the exactly to where the issue is.

08:38 If there are forms that you regularly submit with slight changes, you're able to come to a previous form, again, if the user has the permission, and you'll be able to duplicate that form.

08:48 But now, new form, new form ID, but editable, and you'll be able to come and change the individual form line items, again, copy individual line items, change the description and post through the same flow you in.

09:02 through the first time. you'd also be able to export previous forms. If forms were imported, or if they were manually captured, we'd be able to export them in an Excel form.

09:13 format for future import or changes. A number of other ready-to-go templates exist. Very common use cases are building creations, sweet creation, occurring charges, leases, etc.

09:29 and you'd be also be able to give access to users that are outside of the MRI system. And so if you had users that were doing, lease capture, when you master data capture, even capturing journals that don't- aren't users in MRI, or that you don't want to be users in MRI, You'd be able to have them access

09:45 to this system go through an approval also allow for approvals by users that are not MRI users- users outside of the system.

10:13 Another example of a custom form is the- this new lease creation form.

10:12 And I will do an import as I did previously. Again, the structure is validated. And I can import the form.

10:21 That one was imported successfully. And the user can go in and edit the details. As with the previous example, all this information is coming through from MRI.

10:35 So these are suites that are available based on the property ID. They have to be compatible. And again, the ability to customize what is slightly different from the MRI screen.

10:46 So hide fields that you don't use, make mandatory fields that you do require for business processes. is even if they aren't required by MRI as a system.

10:56 Move fields onto different pages in different flows. Of course, for this example, you can see that we have lease details, recurring charges, options, late fees and lease notes.

11:07 And you can have different tabs or different fields on the tabs filled up by different individuals as part of a workflow.

11:41 Another benefit is the ability to add fields that are not posted into MRI. And so for instance, here we see at the bottom that there is a file upload required.

11:24 It is a mandatory field for this form, which was custom built for a particular use case. And there would need to be a file attached for the submission to go through.

11:36 There is no place for that file to go in MRI, for instance. And so it'll be saved here as part of the order history, but also as part of, the form that is now viewed.

11:44 viewable in future and the file can be retrieved from here once saved and submitted. All the standard functionality exists from MRI.

11:59 And so if you were wanting tax codes to automatically calculate values for you, you could do that, uh, be able to set up income categories again copying income categories to easily update.

12:12 And so if I was wanting to make this storage for the next two years, just speeds up that process in addition to the ability to import.

12:24 option to renew. Going into the lease option, you can see that the file that was uploaded. of the uploaded didn't have the option type selected, which is going to be required.

12:34 So we can come in here and correct that, say this is an option to renew. The option date is the first of the ninth.

12:41 And the notice date is a month before that. And a requirement for this form was that the notification date can't be after the option date.

12:53 And so that's obviously our requirements that was then brought in and you wouldn't be able to submit Be able to only select the fields that you require your users to have, again, making some of their mandatory as required by the business.

13:07 Or just options to default entire pages or areas based on other fields. And then again, the same approval flow will be followed when if you submit the form and save to the front end.