module.exports = {
    apps: [
      {
        name: 'remix-dev',
        script: 'npx remix vite:dev --port 3000 --host 0.0.0.0',
      },
      {
        name: 'ws-server',
        script: 'server.js',
      },
    ],
  };
  