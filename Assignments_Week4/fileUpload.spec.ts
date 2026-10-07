///<reference types = "node"/>

import { test, expect } from '@playwright/test'
import path from 'path'

test("File Upload Assignment", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload") //Load the URL

    const fileUploadPromise = page.waitForEvent("filechooser") // Event Listener before the action performed

    await page.locator('//div[@id="drag-drop-upload"]').click() // Click the red square box which doesn't have input tag

    const fileUpload = await fileUploadPromise // Event Listener to perform the file upload after the click action completed

    await fileUpload.setFiles(path.join(process.cwd(), "Data", "testFileUpload.jpg")) // Upload the file

    await expect(page.locator('(//div[@class="dz-filename"])[1]/span')).toHaveText("testFileUpload.jpg") // Assert whether the correct file uploaded



})