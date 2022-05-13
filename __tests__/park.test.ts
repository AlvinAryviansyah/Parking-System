import app from "../src/index";
import request from "supertest";

describe("Parking System Test", () => {
  test("Test Park", async () => {
    const result = await request(app).post("/park/B1234ABC");
    expect(result.statusCode).toEqual(200);
    expect(result.body.level).toEqual('B2');
    expect(result.body.slot).toEqual(4);
  });

  test("Test Park While Full", async () => {
    const result = await request(app).post("/park/B1234ABD");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("parking lot is full");
  });

  test("Test Leave With Wrong plate Number", async () => {
    const result = await request(app).delete("/leave/B1234ABD");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual(`Car with plate number B1234ABD is not found`);
  });

  test("Test Leave With Correct plate Number", async () => {
    const result = await request(app).delete("/leave/B1234ABC");
    expect(result.statusCode).toEqual(200);
    expect(result.body.message).toEqual(`Car with plate number B1234ABC is accepted to leave`);
  });


});
