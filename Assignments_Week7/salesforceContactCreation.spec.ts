import { test, expect } from '@playwright/test'
import { contactData } from '../../Data/Salesforce API Data/fakerdata'
import { deleteContact, generateTokenForContact, retrieveContactByName, updateContact } from '../../utils/API/salesforceContactAPI';

test("Create Contact through Salesforce UI and update details through API", async ({ page, request }) => {

    // API - Generate Token

    await generateTokenForContact(request);

    const contact = await contactData();

    // UI - Open Salesforce and create contact

    await page.goto("https://orgfarm-3df1426b47-dev-ed.develop.lightning.force.com/lightning/page/home");

    await page.getByRole('link', { name: "Contacts", exact: true }).click();

    expect(page).toHaveTitle(/Contacts/);

    await page.getByRole('button', { name: "New", exact: true }).click();

    await page.getByRole('combobox', { name: "Salutation", exact: true }).click();

    await page.getByRole('option', { name: "Mr.", exact: true }).click();

    await page.getByRole('textbox', { name: "First Name", exact: true }).fill(contact.firstName)

    await page.getByRole('textbox', { name: "Last Name", exact: true }).fill(contact.lastName)

    await page.getByRole('textbox', { name: "Email", exact: true }).fill(contact.email)

    await page.getByRole('combobox', { name: "Account Name", exact: true }).click();

    await page.getByRole('dialog', { name: "New Account", exact: true }).click();

    expect(page.getByRole('heading', { name: "New Account", exact: true })).toBeVisible;

    await page.getByRole('textbox', { name: "Account Name", exact: true }).fill("Credits");

    await page.getByRole('button', { name: "Save", exact: true }).click();

    expect(page.getByRole('heading', { name: "New Contact", exact: true })).toBeVisible;

    await page.getByRole('button', { name: "Save", exact: true }).click();

    const fullName = `${contact.firstName} ${contact.lastName}`;

    const displayName = `Mr. ${fullName}`;

    const nameFromSalesforce = page.getByRole('heading', { name: displayName, exact: true })

    await expect(nameFromSalesforce).toBeVisible();

    console.log((`Name is ${displayName}`));

    // API - Retrieve Contact

    const retrievedContact = await retrieveContactByName(request, fullName);

    console.log("Retrieved ID:", retrievedContact.Id);
    console.log("Retrieved Name:", retrievedContact.Name);

    // API - Update Contact

    await updateContact(request, retrievedContact.Id);

    // API - Delete Contact

    await deleteContact(request, retrievedContact.Id);

})