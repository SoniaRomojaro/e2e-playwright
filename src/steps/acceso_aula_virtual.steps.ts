import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';



When('I click on Aula virtual button', async function() {
    if(process.env.VIEWPORT ==='mobile') {
        await this.page.getByLabel('Toggle navigation').click();
        await this.page.getByRole('link', { name: 'Aula Virtual', exact: true }).click();

}
else {
    await this.page.getByRole('button', { name: 'Aula Virtual' }).click();
}  
   
    })

  
When('I fill an user {string}', async function (username: string) {
    await this.page.getByPlaceholder('Nombre de usuario').fill(username);
      })

     

When('I fill a password {string}', async function(password: string) {
    await this.page.getByPlaceholder('Contraseña').fill(password);
})



When('the user press in  Acceder button', async function() {
    await this.page.getByRole('button', { name: 'Acceder' }).click();
})

Then('I should see the message {string}', async function(errorMessage: string) {
    await expect(this.page.getByRole('alert')).toContainText(errorMessage);
})


 


   

    
  