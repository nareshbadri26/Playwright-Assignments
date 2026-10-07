import { APIRequestContext, expect } from "@playwright/test";

let url: any
let token: any

export async function generateTokenForContact(request: APIRequestContext) {

    const tokenResponse = await request.post("https://orgfarm-3df1426b47-dev-ed.develop.my.salesforce.com/services/oauth2/token",

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

    const tokenResponseBody = await tokenResponse.json()

    url = tokenResponseBody.instance_url
    token = tokenResponseBody.access_token

    console.log(`URL is ${url}`);
    console.log(`Token is ${token}`);

    const tokenResponseStatus = tokenResponse.status()

    console.log(tokenResponseStatus);
    expect(tokenResponseStatus).toBe(200)
}

export async function retrieveContactByName(request: APIRequestContext, fullName: string){

    const retrieveContactresponse = await request.get(`${url}/services/data/v67.0/query/`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
            params: {
                q: `SELECT Id, Name FROM Contact WHERE Name = '${fullName}'`
            }
        }
    );

    expect(retrieveContactresponse.status()).toBe(200);

    const responseBody = await retrieveContactresponse.json();

    expect(responseBody.records.length).toBe(1);

    const contact = responseBody.records[0];

    console.log("Contact ID:", contact.Id);
    console.log("Contact Name:", contact.Name);

    return contact;
}

export async function updateContact(request: APIRequestContext, contactId: string) {

    const updateContactResponse = await request.patch(`${url}/services/data/v67.0/sobjects/Contact/${contactId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },

            data: {
                Phone: "9876543210",
                Email: "updated@test.com",
                Title: "Automation Tester",
                Department: "QA"
            }
        }
    );

    console.log("Update Status:", updateContactResponse.status());
    console.log("Update Status Text:", updateContactResponse.statusText());

    expect(updateContactResponse.status()).toBe(204);
}

export async function deleteContact(request: APIRequestContext, contactId: string){

    const deleteContactResponse = await request.delete(`${url}/services/data/v67.0/sobjects/Contact/${contactId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    console.log("Delete Status:", deleteContactResponse.status());
    console.log("Delete Status Text:", deleteContactResponse.statusText());

    expect(deleteContactResponse.status()).toBe(204);
}