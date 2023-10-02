import request from "supertest";
import app from "../../app";

const PROJECT_ID = "cldclt74u9600gpecetnyigta";

describe("Testing for Creating and Updating a Section", () => {
  let sectionId = "";
  test("Creates a section for a project", async () => {
    const response = await request(app)
      .post(`/api/projects/${PROJECT_ID}/sections`)
      .set("Accept", "application/json")
      .send({
        name: "High Priority Todos",
      })
      .expect("Content-Type", /json/)
      .expect(200);
    sectionId = response.body.id;
    expect(response.body).toHaveProperty("id");
  }, 2000);

  test("Updates the created section", async () => {
    await request(app)
      .put(`/api/sections/${sectionId}`)
      .set("Accept", "application/json")
      .send({
        name: "New Section name",
      })
      .expect(204);
  });

  test("Deletes the created section", async () => {
    await request(app).delete(`/api/sections/${sectionId}`).expect(204);
  });
});

describe("Updates order of sections using PUT /sections", () => {
  test("Changes the order of 2 sections", async () => {
    await request(app)
      .put("/api/sections")
      .set("Accept", "application/json")
      .send({
        firstSection: {
          id: "cldcljamz0001gpsobc3inw3n",
          order: 0,
        },
        secondSection: {
          id: "gpsobc3inw3ncldcljamz4944",
          order: 1,
        },
      })
      .expect(204);
  });
});
