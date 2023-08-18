#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'blog.itzhang520.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 gh-pages 分支
git push -f git@github.com:zhang-bcxb/zhang-blog.git master:gh-pages

# 回到项目根路径
cd ../../../
git add .
git commit -m 'update docs'
# 发布到 master 分支
git push -f git@github.com:zhang-bcxb/zhang-blog.git master

cd -
