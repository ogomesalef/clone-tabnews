test("GET to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const data = await response.json();
  const date = new Date(data.updated_at);

  expect(response.status).toBe(200);

  expect(date.toISOString()).toBe(data.updated_at);

  expect(data).toHaveProperty("updated_at");
  expect(data.dependencies.database).toHaveProperty("max_connections");
  expect(data.dependencies.database).toHaveProperty("opened_connections");
  expect(data.dependencies.database).toHaveProperty("version");

  expect(data.dependencies.database.version).toBe("16.0");
  expect(data.dependencies.database.max_connections).toBe(100);
  expect(data.dependencies.database.opened_connections).toBe(1);

  expect(typeof data.dependencies.database.max_connections).toBe("number");
  expect(typeof data.dependencies.database.opened_connections).toBe("number");

  // console.log(typeof data.dependencies.database.max_connections)
});
