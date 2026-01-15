import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const result = insertSubscriberSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      const existing = await storage.getSubscriberByEmail(result.data.email);
      if (existing) {
        return res.status(200).json({ message: "You're already on the list!" });
      }

      await storage.addSubscriber(result.data.email);
      return res.status(201).json({ message: "Thanks! We'll be in touch." });
    } catch (error) {
      console.error("Subscribe error:", error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  });

  return httpServer;
}
