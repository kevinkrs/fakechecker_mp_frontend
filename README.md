# FactChecker Frontend

Welcome to our FakeChecker frontend repository.
It is a simple user interface with some neat features to give you a nice fact checking experience.
Simply follow the steps underneath and don't forgot to check in with our backend repository
[backend repo](https://github.com/kevinkrs/masterproject_backend)

## Project setup

It is pretty straight forward

1. First run ``` npm install ``` to install all required packages

2. Start server with ```npm run serve```

Now follow the README.md of the checker backend linked above. When the server is up and running, fact checking can
start!

## Features

Besides the checker utility we have some more features for you:

- _NewsTicker_: News API that gives you the freshest news from a country of your choice
- _News Copy_: Just on the article of interest and all required data for a fact check is being filled directly into the
  checker tab.
- _History_: To allow tracking of your facts, we added a neat little history button on the corner right of the checker
  site. It saves all you results, allowing you to open them again once clicked.

## Frontend API documentation

- [FactChecker](website/components/FactChecker.md)
- [InferenceDashboard](website/components/InferenceDashboard.md)
- [NewsTicker](website/components/NewsTicker.md)
- [MenuHeader](website/components/MenuHeader.md)
- [PlotlyChart](website/components/PlotlyChart.md)

## UI example

![Checker](public/checker.png)
![News Ticker](public/news.png)
