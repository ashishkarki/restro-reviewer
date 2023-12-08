#!/bin/bash

git filter-branch --commit-filter '
if [ "$GIT_AUTHOR_EMAIL" = "u2aashish@gmail.com" ];
then
    GIT_AUTHOR_EMAIL="4175758+ashishkarki@users.noreply.github.com";
    GIT_COMMITTER_EMAIL="4175758+ashishkarki@users.noreply.github.com";
    git commit-tree "$@";
else
    git commit-tree "$@";
fi' HEAD
