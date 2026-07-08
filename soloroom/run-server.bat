@echo off
cd /d "D:\BlogSite\soloroom"
hugo server --buildFuture --bind 0.0.0.0 --port 1313 --destination .devbuild
