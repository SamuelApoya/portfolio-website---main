import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GCP_CLIENT_EMAIL,
        private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append to your sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:D", // assumes first sheet, 4 columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [new Date().toISOString(), name, email, message],
        ],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
