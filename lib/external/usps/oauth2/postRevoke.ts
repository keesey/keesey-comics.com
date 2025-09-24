import axios from "axios"
export const postRevoke = async (
  token: string,
  token_type_hint: "access_token" | "refresh_token",
) => {
  await axios.post<void>(
    "https://apis.usps.com/oauth2/v3/revoke",
    `token=${encodeURIComponent(token)}&token_type_hint=${encodeURIComponent(token_type_hint)}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  )
}
