import request from "supertest";
import app from "../../app";

const OWNER_ID = "al814zcy86074hloymogrg1mv";

describe("Testing for Creating, Reading, Updating, and Deleting", () => {
  let workspaceId = "";

  test("Creates a workspace", async () => {
    const response = await request(app)
      .post(`/api/workspaces`)
      .set("Accept", "application/json")
      .send({
        name: "Jacob's Workspace",
        ownerId: OWNER_ID,
      })
      .expect("Content-Type", /json/)
      .expect(200);
    workspaceId = response.body.id;
    expect(response.body).toHaveProperty("id");
  }, 2000);

  test("Gets the created workspace", async () => {
    const response = await request(app)
      .get(`/api/workspaces/${workspaceId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
  });

  test("Updates the created workspace", async () => {
    await request(app)
      .put(`/api/workspaces/${workspaceId}`)
      .set("Accept", "application/json")
      .send({
        name: "New workspace name",
      })
      .expect(204);
  });

  test("Deletes the created workspace", async () => {
    await request(app).delete(`/api/workspaces/${workspaceId}`).expect(204);
  });
});
