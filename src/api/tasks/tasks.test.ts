import request from "supertest";
import app from "../../app";

const SECTION_ID = "cldcljamz0001gpsobc3inw3n";

describe("Testing for Creating, Reading, Updating, and Deleting", () => {
  let taskId = "";
  test("Creates a task for a section", async () => {
    const response = await request(app)
      .post(`/api/sections/${SECTION_ID}/tasks`)
      .set("Accept", "application/json")
      .send({
        name: "Create logo for client",
      })
      .expect("Content-Type", /json/)
      .expect(200);
    taskId = response.body.id;
    expect(response.body).toHaveProperty("id");
  }, 2000);

  test("Gets the created task", async () => {
    const response = await request(app)
      .get(`/api/tasks/${taskId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
  });

  test("Updates the created task", async () => {
    await request(app)
      .put(`/api/tasks/${taskId}`)
      .set("Accept", "application/json")
      .send({
        name: "Updated Task",
      })
      .expect(204);
  });

  test("Deletes the created task", async () => {
    await request(app).delete(`/api/tasks/${taskId}`).expect(204);
  });
});

describe("Updates order of tasks using PUT /tasks", () => {
  test("Changes the order of 2 tasks", async () => {
    await request(app)
      .put("/api/tasks")
      .set("Accept", "application/json")
      .send({
        firstTask: {
          id: "clnb6r4hc0000gpz8di290rkd",
          order: 0,
        },
        secondTask: {
          id: "clnb6r4hc0001gpz8deahrfzd",
          order: 1,
        },
      })
      .expect(204);
  });
});
