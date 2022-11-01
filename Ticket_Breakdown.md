# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Assumption: Facility is responsible for verifying the new agents. At this point, while verifying the agent, we are showing the complete agent details alongwith verify button. 

New addition in the current system: Alongwith the agent details, now we will show text field for custom id.

Whole flow will be like:
- Agent signup.
- Facility will get the notification in app.
- From there, facility will have the complete information about the agent alongwith the text field
  for inputting custom agent id. They can verify agent details and give any custom id to agent.
- Agent can only access the system after the verification.

Task-1:
Assumption: We have agent verification flow.
Description: Add separate input field while displaying agent details and it will be required field.
Please use following:
- Field type: Text
- Field name: Custom Id
- Placeholder: Enter agent custom id
- Validation: Required field
Label: Frontend
Estimation: 2 hours

Task-2: 
Description: Update Agent model. Add new field "custom_id". After adding the field, create migration.
Field schema:
- null: allowed
- unique: true
- type: string
Label: Backend
Estimation: 30 minutes

Task-3:
Description: Create Get API for validating the uniqueness of custom id of agent. 
API structure:
- Method type: GET
- Payload: input field data (string)
- Return type: Boolean
Label: Backend
Estimaion: 2 hours

Task-4: 
Assumption: We already have PUT API for updating the agent details.
Description: Modify PUT API by adding a new field "custom_id".
Label: Backend
Estimaion: 1 hours

Task-5: 
Description: Integrate get API to check the uniqueness of custom_id of agent.
Expected criteria:
- Add debounce on onChange event of input field to reduce multiple API calls.
- Show appropriate message if 'custom_id' is not available. 
- Change border color of input field on the basis of custom_id availability.
Label: Frontend
Estimation: 2.5 hours

Task-6:
Description: Pass new field custom_id in the PUT API for agent.
Label: Frontend
Estimation: 30 minutes



























