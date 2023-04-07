Feature: This feature file contains Student Admission Test Scearios

  #StudentAdmission
  # Scenario: Student Admission
  #   Given a CTSMS user is on the home page "https://mexil.it/chroma_tech_academy/test/site/login"
  #   When the user logs in with valid crendentials username "general@teacher.com" and password "123456"
  #   And navigates to Student Information module
  #   And navigates to Student Admission submodule
  #   And enters student admission number "7778787"
  #   And selects Class "SDET" and Section "Java 11 for Cool People"
  #   And enters first name "Billy" and last name "Bob"
  #   And selects Gender "Male"
  #   And enters Date of Birth "09/25/2001"
  #   And enters email address "boogy@boogy.com"
  #   And enters mobile number "1234563789"
  #   And enters father name "Billy Senior"
  #   And enters father phone number "9876543321"
  #   And enters father occupation "N/A" 
  #   And enters mother name "Milly Mom"
  #   And enters mother phone number "1236562789"
  #   And enters mother occupation "N/A" 
  #   And if father radio button is selected for guardian 
  #   Then father information should be displayed
  #   Then student record is succesfully deleted with class "SDET" and section "Java 11 for Cool People" and admission number "7778787"

@StudentAdmission
  Scenario Outline: Student Admission
    Given a CTSMS user is on the home page "<URL>"
    When the user logs in with valid credentials username "<USERNAME>" and password "<PASSWORD>"
    And navigates to Student Information module
    And navigates to Student Admission submodule
    And enters student admission number "<STUDENT ADMISSION NUMBER>"
    And selects Class "<CLASS>" and Section "<SECTION>"
    And enters first name "<FIRST NAME>" and last name "<LAST NAME>"
    And selects gender "<GENDER>"
    And enters Date of Birth "<DOB>"
    And enters email address "<EMAIL ADDRESS>"
    And enters mobile number "<MOBILE NUMBER>"
    And enters father name "<FATHER NAME>"
    And enters father phone number "<FATHER PHONE NUMBER>"
    And enters father occupation "<FATHER OCCUPATION>"
    And enters mother name "<MOTHER NAME>"
    And enters mother phone number "<MOTHER PHONE NUMBER>"
    And enters mother occupation "<MOTHER OCCUPATION>"
    And clicks on Father radio button
    Then student is succesfully admitted
    Then student record is succesfully deleted with class "<CLASS>" and section "<SECTION>" and admission number "<STUDENT ADMISSION NUMBER>"

    Examples: 
      | URL                                                  | USERNAME            | PASSWORD | STUDENT ADMISSION NUMBER | CLASS          | SECTION                 | FIRST NAME | LAST NAME | GENDER | DOB        | EMAIL ADDRESS                       | MOBILE NUMBER | FATHER NAME   | FATHER PHONE NUMBER | FATHER OCCUPATION | MOTHER NAME   | MOTHER PHONE NUMBER | MOTHER OCCUPATION |
      | https://mexil.it/chroma_tech_academy/test/site/login | general@teacher.com |   123456 |                  5614654 | SDET           | Java 11 for Cool People | Chroma     | Tech      | Male   | 04/01/1990 | chroma@test.com                     |    7036875816 | CHROMA FATHER |        703-687-5816 | Software Engineer | CHROMA MOTHER |        703-687-5816 | Project Manager   |
      | https://mexil.it/chroma_tech_academy/test/site/login | general@teacher.com |   123456 |                  5614654 | SDET           | Java 11 for Cool People | Alex       | Ott       | Male   | 01/01/1989 | alex@test.com                       |    7036875816 | CHROMA FATHER |        703-687-5816 | Software Engineer | CHROMA MOTHER |        703-687-5816 | Project Manager   |
      | https://mexil.it/chroma_tech_academy/dev/site/login  | general@teacher.com |   123456 |                  8989898 | Cyber Security | Networking Fundamentals | Aanos      | Mahmood   | Male   | 09/25/2001 | aanos.mahmood@chromatechacademy.com |    123456789  | CHROME FATHER |        703-687-5816 | Software Engineer | CHROMA MOTHER |        703-687-5816 | Project Manager   |
