import { test, expect, APIRequestContext } from '@playwright/test'
import { generateTestData } from '../../Data/Salesforce API Data/fakerdata'

let url: any
let token: any
let caseID: any
let caseNumber: any

export async function generateToken(request: APIRequestContext) {

    const responseToken = await request.post("https://orgfarm-3df1426b47-dev-ed.develop.my.salesforce.com/services/oauth2/token",
        {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded"
            },

            form: {

                "client_id": "3MVG91oqviqJKoEH2WZY4ir0zX.8j7ylk5pUCMtx1mcHlc9WlpuVsQl6ccgd0U7ZU7cQRSmTaireiI1j9t.Cn",
                "client_secret": "422F81DDDDFCF79B7F41E3026E2C5C659A7A747A5B1403A9C2E99D8FA9E56265",
                "grant_type": "client_credentials"
            }
        }
    )

    // Deserialization => Convert json to object format

    const responseTokenBody = await responseToken.json()

    // Store URL and Access token to use in subsequent test

    url = responseTokenBody.instance_url
    token = responseTokenBody.access_token

    // Print and assert the status of the response

    const responeStatus = responseToken.status()
    const responseStatusText = responseToken.statusText()

    console.log(responeStatus);
    console.log(responseStatusText);

    expect(responeStatus).toBe(200)
    expect(responseStatusText).toBe("OK")
}

export async function createCase(request: APIRequestContext) {

    const caseData = await generateTestData()

    const caseCreateResponse = await request.post(`${url}/services/data/v67.0/sobjects/Case/`,
        {
            headers: {

                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            data: {

                "Status": caseData.Status,
                "Origin": caseData.Origin,
                "Subject": caseData.Subject

            }
        }
    )

    // Deserialization => Convert json to object format

    const caseCreateBody = await caseCreateResponse.json()

    // Store the Case ID to retrieve the case later

    caseID = caseCreateBody.id

    console.log(caseID);

    // Print and assert the status of the response

    const caseCreateResponeStatus = caseCreateResponse.status()
    const caseCreateResponseStatusText = caseCreateResponse.statusText()

    console.log(caseCreateResponeStatus);
    console.log(caseCreateResponseStatusText);

    expect(caseCreateResponeStatus).toBe(201)
    expect(caseCreateResponseStatusText).toBe("Created")
}

export async function retrieveCase(request: APIRequestContext): Promise<string> {

    const caseRetrieveResponse = await request.get(`${url}/services/data/v67.0/sobjects/Case/${caseID}`,
        {
            headers: {

                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )

    // Deserialization => Convert json to object format

    const caseRetrieveBody = await caseRetrieveResponse.json()

    // Store Case Number

    caseNumber = caseRetrieveBody.CaseNumber

    // Print and assert the status of the response

    const caseRetrieveResponeStatus = caseRetrieveResponse.status()

    console.log(caseRetrieveResponeStatus);

    expect(caseRetrieveResponeStatus).toBe(200)

    console.log(caseNumber);
    
    return caseNumber
}

export async function deleteCase(request: APIRequestContext) {

    const deleteCaseResponse = await request.delete(`${url}/services/data/v67.0/sobjects/Case/${caseID}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    console.log(deleteCaseResponse.status());
    console.log(deleteCaseResponse.statusText());

    expect(deleteCaseResponse.status()).toBe(204);
}