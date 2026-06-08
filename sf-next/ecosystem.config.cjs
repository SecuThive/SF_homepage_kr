module.exports = {
  apps: [
    {
      name: "sf-next-dev",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "dev -p 4040",
      env: {
        NODE_ENV: "development",
        PORT: "4040",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      watch: false,
      autorestart: true,
      max_memory_restart: "1G",
      out_file: "./.pm2/out.log",
      error_file: "./.pm2/err.log",
      merge_logs: true,
      time: true,
    },
  ],
};
