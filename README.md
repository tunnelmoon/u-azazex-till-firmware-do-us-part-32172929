[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/tunnelmoon/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/tunnelmoon/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

# Till Firmware Do Us Part

make.fun bounty entry: one wedding vow a robot speaks at its own wedding, a single sentence under 200 characters.

The entry: "I promise to choose you again every morning, right after my reboot, for as long as my firmware holds."

`main.ts` (Node 22, stdlib only) validates the gate (1 to 200 characters, one line, not only white space), writes the line to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, and checks it back with a round-trip read.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
