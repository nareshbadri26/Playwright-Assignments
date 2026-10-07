import { faker } from '@faker-js/faker'
import testdata from '../Salesforce API Data/testdata.json'

export async function generateTestData() {

    return {
        Status: testdata.case.Status,
        Origin: testdata.case.Origin,
        Subject: faker.commerce.productDescription()
    }
}

export async function contactData(){

    return {

        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email()
    }
}