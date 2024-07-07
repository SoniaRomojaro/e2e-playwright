Feature: Access qué aprenderás Contenidos

Background:
Given I navigate to main page of the BootcampQA

@contenidos1
 Scenario: Access qué aprenderas information
 When I click in Ver contenidos button
 Then I should see the infomation related to this


 @contenidos2
 Scenario: Access qué aprenderas information manual course
  When I click in Ver contenidos for manual button
  Then I should see the infomation related to the manual course