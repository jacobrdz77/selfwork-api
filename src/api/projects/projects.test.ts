import request from "supertest";
import app from "../../app";

const PROJECT_ID = "cldclt74u9600gpecetnyigta";

describe("POST /api/projects", () => {
  it("Creates a project and checks if it creates it by finding the id", async () => {
    const response = await request(app)
      .post("/api/projects")
      .set("Accept", "application/json")
      .send({
        name: "New Project",
        priority: "Low",
        ownerId: "al814zcy86074hloymogrg1mv",
        workspaceId: "opdclt74u9913gpecetnyigta",
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
  });
});

describe("Checks error response for POST /api/projects", () => {
  it("THROWS a Zod error", async () => {
    const response = await request(app)
      .post("/api/projects")
      .set("Accept", "application/json")
      .send({
        name: "New Project",
      })
      .expect("Content-Type", /json/)
      .expect(422);

    expect(response.body).toEqual({
      message: "Zod Error",
      issues: [
        {
          code: "invalid_type",
          expected: "string",
          received: "undefined",
          path: ["workspaceId"],
          message: "Required",
        },
        {
          code: "invalid_type",
          expected: "string",
          received: "undefined",
          path: ["ownerId"],
          message: "Required",
        },
      ],
    });
  });
});

describe("Checking query validation error for GET /api/projects", () => {
  it("THROWS a Zod error", async () => {
    const response = await request(app)
      .get("/api/projects")
      // .query({ workspaceId: "opdclt74u9913gpecetnyigta" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(422);

    expect(response.body).toEqual({
      message: "Zod Error",
      issues: [
        {
          code: "invalid_type",
          expected: "string",
          received: "undefined",
          path: ["workspaceId"],
          message: "Required",
        },
      ],
    });
  });
});

describe("Get one project using GET /api/projects/:id ", () => {
  it("Returns a Project with sections and members", async () => {
    const response = await request(app)
      .get(`/api/projects/${PROJECT_ID}`)
      // .query({ workspaceId: "opdclt74u9913gpecetnyigta" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("sections");
    expect(response.body).toHaveProperty("members");
  });
});

describe("Testing for GET /api/projects/:id to find one project", () => {
  it("Returns a Project with sections and members", async () => {
    const response = await request(app)
      .get(`/api/projects/${PROJECT_ID}`)
      // .query({ workspaceId: "opdclt74u9913gpecetnyigta" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("sections");
    expect(response.body).toHaveProperty("members");
  });
});
