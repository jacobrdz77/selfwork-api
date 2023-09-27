import request from "supertest";

import app from "../app";

describe("GET /api", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "Main API Route!",
        },
        done
      );
  });
});
