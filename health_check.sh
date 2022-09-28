#!/bin/bash

RESULT=$(curl localhost:5000/health)

echo "RESULT: $RESULT"

if [[ $RESULT == *"ok"* ]]; then
  echo "Health Check Passed"
  exit 0
fi

echo "Health Check Failed"
exit 1