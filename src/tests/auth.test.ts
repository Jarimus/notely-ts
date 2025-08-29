import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const goodHeader: IncomingHttpHeaders = {
  authorization: "ApiKey 12345",
};

const noHeader: IncomingHttpHeaders = {};

const noKeyWordHeader: IncomingHttpHeaders = {
  authorization: "ThisShouldReadApiKey 12345",
};

describe("getApiKey function tests", () => {
  test("Valid header", () => {
    const output = getAPIKey(goodHeader);
    expect(output).toEqual("12345");
  });

  test("No header", () => {
    const output = getAPIKey(noHeader);
    expect(output).toBeNull();
  });

  test("No 'ApiKey' keyword", () => {
    const output = getAPIKey(noKeyWordHeader);
    expect(output).toBeNull();
  });
});
