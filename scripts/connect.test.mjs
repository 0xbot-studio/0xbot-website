import test from 'node:test';
import assert from 'node:assert/strict';
import { clients, endpoint, agentPrompt } from '../src/connect/catalog.ts';

test('client configs and commands use one MCP endpoint without embedded credentials', () => {
  assert.equal(endpoint, 'https://api.0xbot.org/mcp');
  assert.equal(new Set(clients.map(c => c.id)).size, clients.length);
  for (const client of clients) {
    assert.ok(client.config.includes(endpoint));
    assert.ok(!client.config.includes('client_secret'));
    if(client.commands) assert.ok(client.commands.includes(endpoint));
    for(const lang of ['en','zh']) {
      const prompt = agentPrompt(client, lang);
      assert.ok(prompt.includes(client.commands || client.config));
      assert.ok(prompt.includes('get_supported_tokens'));
    }
  }
  for(const id of ['claude','cursor']) {
    const client = clients.find(c => c.id === id);
    assert.equal(JSON.parse(client.config).mcpServers['0xbot'].url, endpoint);
  }
});

test('OAuth instructions wait for human consent and never ask the agent to supply a secret', () => {
  for(const client of clients.filter(c => c.id !== 'http')) {
    const prompt = agentPrompt(client,'en');
    assert.ok(prompt.includes('stop and let me sign in'));
    assert.ok(prompt.includes('Never ask for API keys'));
    assert.ok(!prompt.includes('<YOUR_API_KEY>'));
  }
});
