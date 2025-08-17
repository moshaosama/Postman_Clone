import puppeteer, { Browser, Page } from "puppeteer";
import { beforeAll, describe, it } from "@jest/globals";

let browser: Browser;
let page: Page;

const Delay = async (ms: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
  });

  page = await browser.newPage();

  await page.setViewport({
    width: 5000,
    height: 1000,
  });
  await page.goto("http://localhost:5173/");
});

describe("Testing a Web Pages", () => {
  const TestIcon = "#TestIcon";
  it("should be open slider", async () => {
    await page.waitForSelector(TestIcon);
    await Delay(500);
    await page.click(TestIcon, { clickCount: 1 });
    await Delay(500);
    await page.click(TestIcon, { clickCount: 1 });
  });

  const selectInput = "#selectInput";
  // const getMethod = "#getMethod";
  const searchInput = "#searchInput";
  const sendBtn = "#sendBtn";
  it("should be get data from url", async () => {
    await page.waitForSelector(selectInput);
    await Delay(500);
    await page.click(selectInput, { clickCount: 1 });
    await Delay(500);
    await page.click(selectInput, { clickCount: 1 });
    await page.waitForSelector(searchInput);
    await page.type(searchInput, "https://jsonplaceholder.typicode.com/posts", {
      delay: 50,
    });
    await page.waitForSelector(sendBtn);
    await Delay(500);
    await page.click(sendBtn, { clickCount: 1 });
  }, 20000);

  const saveBtn = "#saveBtn";
  it("should be save url in history", async () => {
    await page.waitForSelector(saveBtn);
    await Delay(500);
    await page.click(saveBtn, { clickCount: 1 });
    await page.click(TestIcon, { clickCount: 1 });
    await Delay(500);
  });
});
