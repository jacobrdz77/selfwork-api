import request from "supertest";
import app from "../../app";

const PROJECT_ID = "cldclt74u9600gpecetnyigta";

describe("POST /api/projects/:id/sections", () => {
  it("Creates a section for a project", async () => {
    const response = await request(app)
      .post(`/api/projects/${PROJECT_ID}/sections`)
      .set("Accept", "application/json")
      .send({
        name: "High Priority Todos",
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
  });
});
