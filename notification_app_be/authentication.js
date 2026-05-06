const AUTHENTICATION_URL = "http://20.207.122.201/evaluation-service/auth";
const payload = {
  email: 'bl.en.u4aid23003@bl.students.amrita.edu',
  name: 'amara pranav',
  rollNo: 'bl.en.u4aid23003',
  accessCode: 'PTBMmQ',
  clientID: 'e8c99f7a-1892-41fe-a826-5ee59f7beff3',
  clientSecret: 'EBFbhhQKEfCkUUns'
};

async function authenticate() {
  try {
    const response = await fetch(AUTHENTICATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();
    let data;

    try {
      data = JSON.parse(raw);
    } catch {
      data = raw;
    }

    if (!response.ok) {
      console.error("Authentication not successful:", response.status, data);
      process.exitCode = 1;
      return;
    }

    console.log("Authentication successfully done:");
    console.log(data);
  } catch (error) {
    console.error("Request error:", error.message);
    process.exitCode = 1;
  }
}

authenticate();
