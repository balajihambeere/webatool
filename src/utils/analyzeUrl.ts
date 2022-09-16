import puppeteer from 'puppeteer';
import Axe from '@axe-core/puppeteer';

const analyzeUrl = async (url: any) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.goto(url);
  const axe = new Axe(page);
  const results = await axe.analyze();
  await page.close();
  await browser.close();
  return results;
};

export default analyzeUrl;
