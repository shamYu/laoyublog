#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'vue、vuex原理提交'

# 如果发布到 https://<USERNAME>.github.io
# git remote add origin https://github.com/shamYu/shamYu.github.io.git
# git push -u origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/shamYu/shamYu.github.io.git master

cd -