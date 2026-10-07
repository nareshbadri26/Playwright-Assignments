///<reference types = "node"/>

import { test, expect } from '@playwright/test'
import path from 'path'
import fs from 'fs'

test("File Download Assignment", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/download") //Load the URL

    const fileDownloadPromise = page.waitForEvent("download") // Event listener

    await page.getByRole('link', { name: "TESTUpload.json", exact: true }).click() // Click the download button of the file

    const fileDownload = await fileDownloadPromise // Event listener to activate after download

    const filePath = path.join(process.cwd(), "Data", fileDownload.suggestedFilename()) // Save the file in required path

    await fileDownload.saveAs(filePath)

    expect(fs.existsSync(filePath)).toBe(true) // Assert whether the file is saved in correct location



})