import test from 'node:test';
import assert from 'node:assert/strict';
import { supportedLocales, isLocale } from '../src/locales.ts';
import { copy } from '../src/content.ts';
import { connectCopy } from '../src/connect/copy.ts';
import { publicSections } from '../src/sections.ts';
test('public navigation excludes the provider directory in both languages',()=>{
  assert.ok(!publicSections.includes('providers'));
  for(const lang of ['en','zh'])assert.equal(copy[lang].nav.length,publicSections.length);
});
test('the public website supports English and Chinese, English first', () => {
  assert.deepEqual(supportedLocales,['en','zh']);
  assert.deepEqual(Object.keys(copy),['en','zh']);
  assert.deepEqual(Object.keys(connectCopy),['en','zh']);
  assert.equal(isLocale('en'),true);
  assert.equal(isLocale('zh'),true);
  for(const lang of ['zh-CN','ja','ko'])assert.equal(isLocale(lang),false);
});
