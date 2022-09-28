# FactChecker

## Methods

<!-- @vuese:FactChecker:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|predict|Main function calling the transformer inference for a given input as well as the semantic search model.Calls two api endpoints. One for inference and the other for semantic search.| statement, statementdate, statementurl, author|
|fetchStatement|Saves current user input to state. Persists state after reloading.|-|
|clearInputs|Cleans user inputs and sets them to empty strings| None|
|saveToHistory|Pushes current user fact check to history object in state.| None|
|formatDate|Helper function to utilize datepicker.| date|
|parseDate|Helper function to utilize datepicker.| date|

<!-- @vuese:FactChecker:methods:end -->


