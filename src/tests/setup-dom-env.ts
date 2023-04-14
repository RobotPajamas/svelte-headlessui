// TODO: Import this only in dom tests, so we can avoid the dependency hit

// This file is loaded automatically by Vitest before running tests.
// It gives us access to some handy assertions (e.g. toBeInTheDocument())
// https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { beforeEach, afterAll } from "vitest";
import { vi } from "vitest";

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

// Extracted this common ID mocking from each file, into here
let mockId = 0;
vi.mock("$lib/hooks/use-id", () => {
  return {
    useId: vi.fn(() => ++mockId),
  };
});

beforeEach(() => {
  mockId = 0;
});
afterAll(() => {
  vi.restoreAllMocks();
});
