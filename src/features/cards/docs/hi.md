- client or server-side? cards are served, sorted, and filtered from the client-side
  - Not enough cards/data to care about optimizing stuff for the client. 
  - Expected cards per-page: hardly more than 100
- Filter behaviour
  - Generally, we get cards from both tagFilterCards & searchFilterCards, then we see which ones are in common and show only them 
  - tag categories
    - a card will show if it has any of the filters in any category (this should change to get more precise filtering)
  - if statements used for stuff like not filtering immediately if the search box is empty
- Cards metadata
  - to avoid problems, don't give the same title to multiple cards
