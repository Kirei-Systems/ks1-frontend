import { defineConfig } from "@hey-api/openapi-ts";
import "dotenv/config";

const api_url = process.env.API_URL;
console.log(api_url)
if (api_url === undefined) {
    throw "Must define API_URL. Example: 'https://localhost:8000'";
}

export default defineConfig({
    input: `${api_url}/api/schema/`,
    output: "app/api",
    plugins: ["@hey-api/client-fetch"],
});