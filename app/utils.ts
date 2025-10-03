// In a server component, API route, or data fetching function
import { promises as fs } from "fs";
import path from "path";

export async function getLocalJsonData() {
  // Get the path to your JSON file
  const filePath = path.join(process.cwd(), "path/to/your/data.json");

  // Read the file content
  const jsonData = await fs.readFile(filePath, "utf8");

  // Parse the JSON string into a JavaScript object
  const objectData = JSON.parse(jsonData);

  return objectData;
}
