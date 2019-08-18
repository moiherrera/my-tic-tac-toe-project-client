curl "https://tic-tac-toe-wdi.herokuapp.com/games/" \
   --include \
   --request 'GET' \
   --header "Content-Type: application/json" \
   --header "Authorization: Token token=${TOKEN}" \

echo
