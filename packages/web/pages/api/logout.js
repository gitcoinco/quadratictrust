import { Router } from "next/router";

export default async function logout(req, res) {
  try {
    res.status(200).json({ success: true });
    Router.push("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
