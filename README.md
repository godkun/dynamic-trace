# dynamic-trace

dynamic-trace example

## 运行

1. cd dynamic-trace
2. pnpm i
3. 参考 packages 目录下的 config.local.js ， 设置好数据库和 redis
4. npm run turbo 一键启动 easy-monitor 本地监控环境
5. 新建新应用，拿到 appId 和 appSecret
6. 在 egg-app 中的 config.default.js 设置 appId 和 appSecret
7. pnpm --filter @monitor/egg-app dev-egg 启动 egg-app 应用
