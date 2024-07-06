import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';



Given('I navigate to the page', async function () {
    await this.page.goto(this.URL);
  })


When('the user click in Quiero instribirme in Bootcamp QA button', async function ()  {
    await this.page.getByRole('heading', { name: 'Quiero Inscribirme en Bootcamp QA', exact: true }).getByRole('button').click();
})

When('the user fill the name {string}', async function (name: string) {
    await this.page.locator('#i-text-1').fill(name);
})


When('the user fill the phone {string}', async function (phone: string) {
    await this.page.locator('#i-text-3').fill(phone);
})



When('the user press Enviar button', async function () {
    await this.page.getByText('Enviar', { exact: true }).click();
})

Then('the user should see Campo es obligatorio', async function () {
    await expect(this.page.getByText('Campo es obligatorio').nth(1)).toContainText('Campo es obligatorio');
})

When('the user fill the mail {string}', async function (mail: string) {
    await this.page.locator('#i-text-2').fill(mail);
})

Then('the user should see Campo name es obligatorio', async function() {
    await expect(this.page.getByText('Campo es obligatorio').first()).toContainText('Campo es obligatorio');
})



  