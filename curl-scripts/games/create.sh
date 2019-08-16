curl "https://tic-tac-toe-wdi.herokuapp.com/games"\
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "game":  {
      "id": id,
      "cells": [],
      "over": false
      "player_x": {
        "id": id,
        "email": email
      },
      "player_o": null
    }'

echo
