import request from "supertest";
import app from "../../app";

const USER_ID = "al814zcy86074hloymogrg1mv";

describe("Testing for Creating, Reading, Updating, and Deleting", () => {
  let clientId = "";

  test("Creates a client", async () => {
    const response = await request(app)
      .post(`/api/clients`)
      .set("Accept", "application/json")
      .send({
        name: "David",
        userId: USER_ID,
        phone: "1234565555",
        email: "david@gmail.com",
      })
      .expect("Content-Type", /json/)
      .expect(200);
    clientId = response.body.id;
    expect(response.body).toHaveProperty("id");
  }, 2000);

  test("Gets the created client", async () => {
    const response = await request(app)
      .get(`/api/clients/${clientId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("id");
  });

  test("Updates the created client", async () => {
    await request(app)
      .put(`/api/clients/${clientId}`)
      .set("Accept", "application/json")
      .send({
        name: "New client name",
      })
      .expect(204);

    const response = await request(app)
      .get(`/api/clients/${clientId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body.name).toBe("New client name");
  });

  test("Deletes the created client", async () => {
    await request(app).delete(`/api/clients/${clientId}`).expect(204);
  });
});
