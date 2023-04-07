$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/StudentAdmission.feature");
formatter.feature({
  "name": "This feature file contains Student Admission Test Scearios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.step({
  "name": "a CTSMS user is on the home page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logs in with valid credentials username \"\u003cUSERNAME\u003e\" and password \"\u003cPASSWORD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.step({
  "name": "enters student admission number \"\u003cSTUDENT ADMISSION NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects Class \"\u003cCLASS\u003e\" and Section \"\u003cSECTION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters first name \"\u003cFIRST NAME\u003e\" and last name \"\u003cLAST NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects gender \"\u003cGENDER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters email address \"\u003cEMAIL ADDRESS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mobile number \"\u003cMOBILE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father name \"\u003cFATHER NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father phone number \"\u003cFATHER PHONE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father occupation \"\u003cFATHER OCCUPATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother name \"\u003cMOTHER NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother phone number \"\u003cMOTHER PHONE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother occupation \"\u003cMOTHER OCCUPATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Father radio button",
  "keyword": "And "
});
formatter.step({
  "name": "student is succesfully admitted",
  "keyword": "Then "
});
formatter.step({
  "name": "student record is succesfully deleted with class \"\u003cCLASS\u003e\" and section \"\u003cSECTION\u003e\" and admission number \"\u003cSTUDENT ADMISSION NUMBER\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "USERNAME",
        "PASSWORD",
        "STUDENT ADMISSION NUMBER",
        "CLASS",
        "SECTION",
        "FIRST NAME",
        "LAST NAME",
        "GENDER",
        "DOB",
        "EMAIL ADDRESS",
        "MOBILE NUMBER",
        "FATHER NAME",
        "FATHER PHONE NUMBER",
        "FATHER OCCUPATION",
        "MOTHER NAME",
        "MOTHER PHONE NUMBER",
        "MOTHER OCCUPATION"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/test/site/login",
        "general@teacher.com",
        "123456",
        "5614654",
        "SDET",
        "Java 11 for Cool People",
        "Chroma",
        "Tech",
        "Male",
        "04/01/1990",
        "chroma@test.com",
        "7036875816",
        "CHROMA FATHER",
        "703-687-5816",
        "Software Engineer",
        "CHROMA MOTHER",
        "703-687-5816",
        "Project Manager"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/test/site/login",
        "general@teacher.com",
        "123456",
        "5614654",
        "SDET",
        "Java 11 for Cool People",
        "Alex",
        "Ott",
        "Male",
        "01/01/1989",
        "alex@test.com",
        "7036875816",
        "CHROMA FATHER",
        "703-687-5816",
        "Software Engineer",
        "CHROMA MOTHER",
        "703-687-5816",
        "Project Manager"
      ]
    },
    {
      "cells": [
        "https://mexil.it/chroma_tech_academy/dev/site/login",
        "general@teacher.com",
        "123456",
        "8989898",
        "Cyber Security",
        "Networking Fundamentals",
        "Aanos",
        "Mahmood",
        "Male",
        "09/25/2001",
        "aanos.mahmood@chromatechacademy.com",
        "123456789",
        "CHROME FATHER",
        "703-687-5816",
        "Software Engineer",
        "CHROMA MOTHER",
        "703-687-5816",
        "Project Manager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a CTSMS user is on the home page \"https://mexil.it/chroma_tech_academy/test/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.a_CTSMS_user_is_on_the_home_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.the_user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters student admission number \"5614654\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_student_admission_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"SDET\" and Section \"Java 11 for Cool People\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters first name \"Chroma\" and last name \"Tech\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"04/01/1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters email address \"chroma@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mobile number \"7036875816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father name \"CHROMA FATHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father occupation \"Software Engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother name \"CHROMA MOTHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother occupation \"Project Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Father radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_on_Father_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully admitted",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_admitted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student record is succesfully deleted with class \"SDET\" and section \"Java 11 for Cool People\" and admission number \"5614654\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BulkDeleteStepDef.student_record_is_succesfully_deleted_with_class_and_section_and_admission_number(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a CTSMS user is on the home page \"https://mexil.it/chroma_tech_academy/test/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.a_CTSMS_user_is_on_the_home_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.the_user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters student admission number \"5614654\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_student_admission_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"SDET\" and Section \"Java 11 for Cool People\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters first name \"Alex\" and last name \"Ott\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"01/01/1989\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters email address \"alex@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mobile number \"7036875816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father name \"CHROMA FATHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father occupation \"Software Engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother name \"CHROMA MOTHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother occupation \"Project Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Father radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_on_Father_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully admitted",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_admitted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student record is succesfully deleted with class \"SDET\" and section \"Java 11 for Cool People\" and admission number \"5614654\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BulkDeleteStepDef.student_record_is_succesfully_deleted_with_class_and_section_and_admission_number(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a CTSMS user is on the home page \"https://mexil.it/chroma_tech_academy/dev/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.a_CTSMS_user_is_on_the_home_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with valid credentials username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.the_user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters student admission number \"8989898\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_student_admission_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects Class \"Cyber Security\" and Section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_Class_and_Section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters first name \"Aanos\" and last name \"Mahmood\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Date of Birth \"09/25/2001\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Date_of_Birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters email address \"aanos.mahmood@chromatechacademy.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mobile number \"123456789\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father name \"CHROME FATHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father occupation \"Software Engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother name \"CHROMA MOTHER\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother phone number \"703-687-5816\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother occupation \"Project Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Father radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_on_Father_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is succesfully admitted",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.student_is_succesfully_admitted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student record is succesfully deleted with class \"Cyber Security\" and section \"Networking Fundamentals\" and admission number \"8989898\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BulkDeleteStepDef.student_record_is_succesfully_deleted_with_class_and_section_and_admission_number(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});