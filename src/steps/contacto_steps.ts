import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Given('I navigate to main page of the BootcampQA', async function () {
    await this.page.goto(this.URL);
  });



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

Then('I should see the button Ver perfil LinkedIn', async function() {
    await expect(this.page.getByRole('link', { name: 'Ver perfil en Linkedin' })).toBeVisible();

})

Then('I should see the message questions FAQ Preguntas Frecuentes', async function() {
    await expect(this.page.locator('#faq')).toContainText('FAQ Preguntas Frecuentes');

})

Then('I should see the message what a QA is', async function() {
    await expect(this.page.locator('#faq')).toContainText('¿Qué es ser un QA?');

})







