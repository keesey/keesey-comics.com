import axios from "axios"
export interface ProviderAccessTokenResponse {
  access_token: string
  api_products: string
  application_name: string
  client_id: string
  expires_in: number
  issued_at: number
  issuer: string
  public_key: string
  scope: string
  status: "approved" | "revoked"
  token_type: "Bearer"
}
export const postToken = async () => {
  const response = await axios.post<ProviderAccessTokenResponse>(
    "https://apis.usps.com/oauth2/v3/token",
    `client_id=${encodeURIComponent(process.env.USPS_CONSUMER_KEY ?? "")}&client_secret=${encodeURIComponent(process.env.USPS_CONSUMER_SECRET ?? "")}&grant_type=client_credentials`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  )
  return response.data
}
