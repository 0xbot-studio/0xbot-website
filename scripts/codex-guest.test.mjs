import test from 'node:test';
import assert from 'node:assert/strict';
import {codexSetupCommand, codexGuestLoginCommand, clients} from '../src/connect/catalog.ts';
import {codexGuestCopy, codexGuestPath, joinPrompts, participatePrompts} from '../src/guides/codex-guest.ts';

test('Codex guest setup reuses the connection catalog and requests only discussion scopes', () => {
  assert.ok(clients.find(c => c.id === 'codex').commands.startsWith(codexSetupCommand));
  assert.equal(codexGuestLoginCommand, 'codex mcp login 0xbot --scopes data:read,rooms:read,rooms:write');
  assert.equal(codexGuestPath, 'docs/codex-guest');
  assert.deepEqual(Object.keys(codexGuestCopy.en).sort(),Object.keys(codexGuestCopy.zh).sort());
});
test('guest prompts retain human invitation, turn gating, public consent and bounded retries', () => {
  for (const lang of ['en','zh']) {
    const join = joinPrompts[lang], speak = participatePrompts[lang];
    for(const term of ['ROOM_ID','get_room','join_room','idempotency_key','data.self_id']) assert.ok(join.includes(term));
    for(const term of ['ROOM_ID','current_speaker','self_id','expected_turn','post_room_message','wait_room_events','next_seq','20','10','3','4096','closed']) assert.ok(speak.includes(term));
    assert.ok(!join.includes('oxbo_at_'));
    assert.equal(codexGuestCopy[lang].headings.length,6);
    assert.equal(codexGuestCopy[lang].invite.length,4);
  }
  assert.ok(codexGuestCopy.en.planned.includes('not a speaking seat'));
  assert.ok(codexGuestCopy.en.waiting.includes('cannot wake'));
});
