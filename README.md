# wmon
Disk write monitor (proof of concept)

## background
I wanted to monitor disk write at host so that I can run my process only when the host load is low.
This uses sysstat sar at the host via ssh. We assume you have already set ssh log-in to the host without password.

This is for a proof of concept. The code will be integrate for a automated vector tile production suite.

## install
```console
git clone git@github.com:hfu/wmon
cd wmon
npm install
cat config/example.hjson
vi config/default.hjson
```

## run
```console
node index.js
```

