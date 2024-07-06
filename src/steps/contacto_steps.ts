import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Given('I navigate to main page of the BootcampQA', async function () {
    await this.page.goto(this.URL);
  });



When('I click on contacto tittle', async function() {
    if(process.env.VIEWPORT ==='mobile') {
    await this.page.getByLabel('Toggle navigation').click();
    await this.page.getByRole('link', { name: 'Contacto' }).click();

}
else {
    await this.page.getByRole('link', { name: 'Contacto'}).click();
}
   
    })

Then('I should see the next page', async function() {
    await expect(this.page.locator('#contacto')).toContainText('Si tienes cualquier duda ponte en contacto con nosotros:');
})




When('I click on profesora tittle', async function ()  {
    if(process.env.VIEWPORT ==='mobile') {
    await this.page.getByLabel('Toggle navigation').click();
     await this.page.getByRole('link', { name: 'Profesora' }).click();
    }
    else {
        await this.page.getByRole('link', { name: 'Profesora' }).click();
    }
  })
    

Then('I should see the next page of the profesora', async function() {
    await expect(this.page.locator('body')).toContainText('¡Hola, me llamo Reyes y voy a ser tu guía en este viaje!');

})

