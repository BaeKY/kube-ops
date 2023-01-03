#!/bin/bash

NWK_INF=$(ip route get 1.1.1.1 | awk 'NR==1 { print $5 }')
IP=$($(cat chart-config.yaml | yq '.env.LB_IP_ADDRESS_POOL' | sed "s/\/*//g))

sudo ifconfig $NWK_INF -alias $IP