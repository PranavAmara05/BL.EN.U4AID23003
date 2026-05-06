# BL.EN.U4AID23003





for each question submit comprehensive solutions including architectural diagram, complete code and clear output screenshots



commit code regularly for each question or so



no external libraries for backend problem capturing screenshots from postman for requests


frontend compulsory to use react or next

javascript allowed, typescript preferred

for styling only material UI or vanilla CSS

usage of LLMs will lead to immediate rejection



1.Registration

your toll number must and email must align with uni/college emai or roll

bl.en.u4aid23003@bl.students.amrita.edu








registration API (POST)


http://20.207.122.201/evaluation-service/register


request body 

{"email":"bl.en.u4aid23003@bl.students.amrita.edu",
"name":"Amara Pranav",
"mobileNo":"8317493825",
"githubUsername":"PranavAmara05",
"rollNo":"BL.EN.U4AID23003",
"accessCode":"PTBMmQ"
}



[Running] node "c:\Users\prana\OneDrive\Documents\GitHub\BL.EN.U4AID23003\notification_app_be\register.js"
Registration successful:
{
  email: 'bl.en.u4aid23003@bl.students.amrita.edu',
  name: 'amara pranav',
  rollNo: 'bl.en.u4aid23003',
  accessCode: 'PTBMmQ',
  clientID: 'e8c99f7a-1892-41fe-a826-5ee59f7beff3',
  clientSecret: 'EBFbhhQKEfCkUUns'
}





next part:



authorization token API(POST)


http://20.207.122.201/evaluation-service/auth


request body

{
  'email': 'bl.en.u4aid23003@bl.students.amrita.edu',
  'name': 'amara pranav',
  'rollNo': 'bl.en.u4aid23003',
  'accessCode': 'PTBMmQ',
  'clientID': 'e8c99f7a-1892-41fe-a826-5ee59f7beff3',
  'clientSecret': 'EBFbhhQKEfCkUUns'
}





output for authentication:



[Running] node "c:\Users\prana\OneDrive\Documents\GitHub\BL.EN.U4AID23003\notification_app_be\authentication.js"
Authentication successfully done:
{
  token_type: 'Bearer',
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJibC5lbi51NGFpZDIzMDAzQGJsLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNTczNDYsImlhdCI6MTc3ODA1NjQ0NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImM3ZTRhMGJiLTY5N2YtNDJjOC05NGQ0LWI1N2UxOTE5MzQ0ZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFtYXJhIHByYW5hdiIsInN1YiI6ImU4Yzk5ZjdhLTE4OTItNDFmZS1hODI2LTVlZTU5ZjdiZWZmMyJ9LCJlbWFpbCI6ImJsLmVuLnU0YWlkMjMwMDNAYmwuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJhbWFyYSBwcmFuYXYiLCJyb2xsTm8iOiJibC5lbi51NGFpZDIzMDAzIiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiZThjOTlmN2EtMTg5Mi00MWZlLWE4MjYtNWVlNTlmN2JlZmYzIiwiY2xpZW50U2VjcmV0IjoiRUJGYmhoUUtFZkNrVVVucyJ9.8rbfB_Tlpl1fLNd-wnZ0OnKNKhlj33ur9NV0uGq5jdk',
  expires_in: 1778057346
}

[Done] exited with code=0 in 0.41 seconds

