Feature: Register in the Bootcamp QA

Background:
 Given I navigate to the page
 When the user click in Quiero instribirme in Bootcamp QA button

  Scenario: Register in the Bootcamp QA without mail
  And the user fill the name "Sara"
  And the user fill the phone "1234"
  And the user press Enviar button
  Then the user should see Campo es obligatorio

  Scenario: Register in the Bootcamp QA without name
  And the user fill the mail "sara@gmail.com"
  And the user fill the phone "11234"
  And the user press Enviar button
  Then the user should see Campo name es obligatorio