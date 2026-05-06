const REGISTRATION_URL = "http://20.207.122.201/evaluation-service/register";

const payload = {
  email: "bl.en.u4aid23003@bl.students.amrita.edu",
  name: "Amara Pranav",
  mobileNo: "8317493825",
  githubUsername: "PranavAmara05",
  rollNo: "BL.EN.U4AID23003",
  accessCode: "PTBMmQ",
};

async function register() {
  try {
    const response = await fetch(REGISTRATION_URL, {
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
      console.error("Registration not successful:", response.status, data);
      process.exitCode = 1;
      return;
    }

    console.log("Registration successfully done:");
    console.log(data);
  } catch (error) {
    console.error("Request error:", error.message);
    process.exitCode = 1;
  }
}

register();
