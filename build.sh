#!/usr/bin/env bash

export PYTHON=python2.7
export DISABLE_NOTIFIER=true
npm install && gulp release --production
