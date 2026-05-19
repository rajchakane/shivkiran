// index.cjs
const { spawn } = require('child_process');

console.log("Starting server via child process...");

const child = spawn('npx', ['tsx', 'server.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production' }
});

child.on('error', (err) => {
  console.error('Failed to start server process:', err);
});