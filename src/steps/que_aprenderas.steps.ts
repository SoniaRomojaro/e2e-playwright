import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';



When('I click in Ver contenidos button', async function () {
    await this.page.getByRole('link', { name: 'Ver Contenidos' }).nth(1).click();

  })



Then('I should see the infomation related to this', async function () {
    await expect(this.page.locator('#collapseQACompletoHibrido')).toContainText('TODOS LOS CONTENIDOS DEL BOOTCAMP QA MANUAL Y AUTOMATION');

})

When('I click in Ver contenidos for manual button', async function() {
    await this.page.getByRole('link', { name: 'Ver Contenidos' }).first().click();

})

Then('I should see the infomation related to the manual course', async function()  {
    await expect(this.page.locator('#collapseQAManualHibrido')).toContainText('Introducción a QA');

})



  