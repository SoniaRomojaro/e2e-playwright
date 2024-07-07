Feature: Access to Aula virtual functionality

  Background:
    Given I navigate to main page of the BootcampQA
    When I click on Aula virtual button
    
@login
  Scenario Outline: Login with invalid data
    When I fill an user "<username>"
    When I fill a password "<password>"
    And the user press in  Acceder button
    Then I should see the message "<errorMessage>"

    Examples:
      | username | password   | errorMessage                                    |
      | pepe     | contraseña | Acceso inválido. Por favor, inténtelo otra vez. |
      |          |            | Acceso inválido. Por favor, inténtelo otra vez. |
