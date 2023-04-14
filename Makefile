set-yarn2:
	rm -rf package-lock.json node_modules yarn.lock
	yarn set version berry
	yarn add -D typescript
	yarn add -D @yarnpkg/pnpify
	yarn dlx @yarnpkg/sdks vscode
	yarn

up-packages:
	yarn dlx npm-check-updates