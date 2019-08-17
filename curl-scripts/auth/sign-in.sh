curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
