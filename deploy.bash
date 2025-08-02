#!/bin/bash

set -a
source .env
set +a

bash build.bash

/mnt/c/Windows/System32/OpenSSH/scp.exe -r dist "$DEST"