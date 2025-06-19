#!/bin/bash
cd /home/kavia/workspace/code-generation/webtictactoe-112628-a370cef0/webtictac_toe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

