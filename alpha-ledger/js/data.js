// Core project ledger — 421 entries across DS / ML / DL / Quant Finance / Industry Projects
const PROJECTS = [
  {
    "id": "DS-001",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Titanic Survival EDA & Feature Engineering",
    "blurb": "Classic first dataset for practicing missing-value handling, encoding, and survival-driver analysis.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Survival Analysis",
      "Data Wrangling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Titanic: Machine Learning from Disaster",
      "url": "https://www.kaggle.com/c/titanic"
    }
  },
  {
    "id": "DS-002",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Netflix Content Trends Dashboard",
    "blurb": "Explore genre, country, and release-year trends in the Netflix catalog with interactive charts.",
    "difficulty": "Beginner",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Netflix Movies and TV Shows",
      "url": "https://www.kaggle.com/datasets/shivamb/netflix-shows"
    }
  },
  {
    "id": "DS-003",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "COVID-19 Global Case Tracker",
    "blurb": "Visualize case and vaccination trends across countries using public health datasets.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Novel Corona Virus 2019 Dataset",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/novel-corona-virus-2019-dataset"
    }
  },
  {
    "id": "DS-004",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "World Happiness Index Explorer",
    "blurb": "Compare happiness scores against GDP, health, and freedom indicators across 150+ countries.",
    "difficulty": "Beginner",
    "topics": [
      "Data Visualization",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "World Happiness Report",
      "url": "https://www.kaggle.com/datasets/unsdsn/world-happiness"
    }
  },
  {
    "id": "DS-005",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "IPL / Cricket Player Performance Analysis",
    "blurb": "Break down batting and bowling stats to find form trends and head-to-head matchups.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-006",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Spotify Listening Trends Visualizer",
    "blurb": "Analyze audio features like tempo and danceability across genres and decades.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-007",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Airbnb Price Explorer by City",
    "blurb": "Map how price varies with location, room type, and reviews across a city's listings.",
    "difficulty": "Beginner",
    "topics": [
      "Data Visualization",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "New York City Airbnb Open Data",
      "url": "https://www.kaggle.com/datasets/dgomonov/new-york-city-airbnb-open-data"
    }
  },
  {
    "id": "DS-008",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Video Game Sales Analysis (1980-2020)",
    "blurb": "Explore regional sales patterns by platform, genre, and publisher over four decades.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Video Game Sales",
      "url": "https://www.kaggle.com/datasets/gregorut/videogamesales"
    }
  },
  {
    "id": "DS-009",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Population Growth Storyboard",
    "blurb": "Build a narrative visualization of population shifts and aging trends by region.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-010",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "US Census Income Bracket Explorer",
    "blurb": "Segment income levels by education, occupation, and demographics from census data.",
    "difficulty": "Beginner",
    "topics": [
      "Data Visualization",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Adult Census Income",
      "url": "https://www.kaggle.com/datasets/uciml/adult-census-income"
    }
  },
  {
    "id": "DS-011",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Retail Superstore Sales EDA",
    "blurb": "Uncover profit and discount patterns across categories, regions, and shipping modes.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-012",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Olympic Medal Trends Since 1896",
    "blurb": "Track medal counts by country, sport, and gender across Olympic history.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-013",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "YouTube Trending Video Analysis",
    "blurb": "Study what drives trending videos: category, publish time, tags, and engagement.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Trending YouTube Video Statistics",
      "url": "https://www.kaggle.com/datasets/datasnaek/youtube-new"
    }
  },
  {
    "id": "DS-014",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Instacart Market Basket EDA",
    "blurb": "Explore reorder behavior and product association patterns in grocery basket data.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Instacart Market Basket Analysis",
      "url": "https://www.kaggle.com/c/instacart-market-basket-analysis"
    }
  },
  {
    "id": "DS-015",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Air Quality Index City Comparison",
    "blurb": "Compare pollutant levels and seasonal AQI trends across major cities.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-016",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Interactive Retail Sales Dashboard",
    "blurb": "Build a live-filterable Streamlit dashboard for regional sales and inventory KPIs.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-017",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Customer Churn EDA & Cohort Analysis",
    "blurb": "Segment customers into cohorts to see how churn risk evolves over their lifecycle.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Telco Customer Churn",
      "url": "https://www.kaggle.com/datasets/blastchar/telco-customer-churn"
    }
  },
  {
    "id": "DS-018",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Real-Time COVID Dashboard with Live API",
    "blurb": "Pull live case data from a public API and auto-refresh a monitoring dashboard.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-019",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "E-commerce Funnel & A/B Test Analysis",
    "blurb": "Analyze a checkout funnel and run significance tests on a pricing experiment.",
    "difficulty": "Intermediate",
    "topics": [
      "Experimentation",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-020",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Uber Ride Demand Heatmap",
    "blurb": "Build a geo-spatial heatmap of ride demand by hour, weekday, and borough.",
    "difficulty": "Intermediate",
    "topics": [
      "Forecasting",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-021",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "HR Attrition & Workforce Analytics Dashboard",
    "blurb": "Surface attrition drivers by department, tenure, and satisfaction score.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "IBM HR Analytics Employee Attrition",
      "url": "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset"
    }
  },
  {
    "id": "DS-022",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Stack Overflow Developer Survey Insights",
    "blurb": "Mine salary, tech-stack, and satisfaction trends from the annual developer survey.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-023",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "NBA Player Stats Interactive Dashboard",
    "blurb": "Compare player efficiency metrics season-over-season with filterable visual panels.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-024",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Airline Delay Pattern Analysis",
    "blurb": "Identify which routes, carriers, and seasons drive the most flight delays.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-025",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Terrorism Database Exploration",
    "blurb": "Map incident frequency, targets, and tactics trends across regions and decades.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-026",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Credit Card Fraud Pattern Analysis",
    "blurb": "Explore transaction-level anomalies and class imbalance in a fraud dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Anomaly Detection",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Credit Card Fraud Detection",
      "url": "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"
    }
  },
  {
    "id": "DS-027",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Restaurant Review Sentiment & Ratings EDA",
    "blurb": "Combine rating trends with review-text sentiment to explain rating drift.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "NLP",
      "Data Wrangling"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-028",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Bike-Sharing Demand Trend Analysis",
    "blurb": "Model how weather, season, and time-of-day drive bike rental demand.",
    "difficulty": "Intermediate",
    "topics": [
      "Forecasting",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Bike Sharing Demand",
      "url": "https://www.kaggle.com/c/bike-sharing-demand"
    }
  },
  {
    "id": "DS-029",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "World Bank Development Indicators Dashboard",
    "blurb": "Build a comparative dashboard for GDP, education, and health indicators by country.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-030",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Startup Funding Landscape Analysis",
    "blurb": "Track funding rounds, sectors, and investor activity from a startup funding dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-031",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Google Play Store App Trends Dashboard",
    "blurb": "Explore install counts, ratings, and pricing patterns across app categories.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Google Play Store Apps",
      "url": "https://www.kaggle.com/datasets/lava18/google-play-store-apps"
    }
  },
  {
    "id": "DS-032",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Energy Consumption Forecasting Explorer",
    "blurb": "Visualize household or grid energy usage trends and seasonal peaks.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Visualization",
      "Forecasting",
      "Data Wrangling"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-033",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Crime Rate Geo-Spatial Analysis",
    "blurb": "Map crime density and category trends across neighborhoods over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-034",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Marketing Campaign ROI Dashboard",
    "blurb": "Compare spend, conversion, and ROI across channels and campaigns.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-035",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Employee Attrition Cohort & Survival View",
    "blurb": "Apply survival-analysis style curves to visualize employee tenure risk.",
    "difficulty": "Intermediate",
    "topics": [
      "Survival Analysis",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "IBM HR Analytics Employee Attrition",
      "url": "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset"
    }
  },
  {
    "id": "DS-036",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Automated PDF/Excel Reporting Pipeline",
    "blurb": "Script a pipeline that turns raw data into a formatted weekly report automatically.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-037",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Hospital Readmission Risk EDA",
    "blurb": "Explore which patient and admission factors correlate with 30-day readmission.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Risk Management",
      "Data Wrangling"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-038",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Social Media Engagement Analytics Dashboard",
    "blurb": "Track likes, shares, and reach trends across posts and platforms.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-039",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Housing Price Trends Across Cities",
    "blurb": "Build a geo-dashboard comparing price-per-sqft trends across metro areas.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "House Prices: Advanced Regression Techniques",
      "url": "https://www.kaggle.com/c/house-prices-advanced-regression-techniques"
    }
  },
  {
    "id": "DS-040",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Supply Chain Delay Root-Cause Dashboard",
    "blurb": "Trace shipment delays back to supplier, route, and warehouse-level causes.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-041",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "End-to-End ETL Pipeline with Airflow",
    "blurb": "Orchestrate a scheduled extract-transform-load pipeline from raw files to a clean warehouse.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-042",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Real-Time Streaming Analytics with Kafka + Spark",
    "blurb": "Process a simulated event stream and compute rolling metrics in near real time.",
    "difficulty": "Advanced",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-043",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Multi-Source Data Warehouse & BI Layer",
    "blurb": "Merge multiple messy sources into a modeled warehouse with a BI dashboard on top.",
    "difficulty": "Advanced",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-044",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Statistical A/B Testing Framework from Scratch",
    "blurb": "Build a reusable library for power analysis, significance testing, and sequential testing.",
    "difficulty": "Advanced",
    "topics": [
      "Experimentation",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-045",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Web Traffic Anomaly Detection Dashboard",
    "blurb": "Flag unusual spikes or drops in site traffic using statistical control limits.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Anomaly Detection",
      "Data Wrangling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-046",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Geo-Spatial Delivery Route Optimization Dashboard",
    "blurb": "Visualize and optimize last-mile delivery routes against time and distance constraints.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-047",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Insurance Claims Fraud Pattern Mining",
    "blurb": "Combine rule-based flags and clustering to surface suspicious claim clusters.",
    "difficulty": "Advanced",
    "topics": [
      "Anomaly Detection",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-048",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Full-Stack Data Storytelling Notebook Series",
    "blurb": "Produce a polished, narrative-driven notebook series that turns raw data into a case study.",
    "difficulty": "Advanced",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-049",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Automated Data Quality Monitoring System",
    "blurb": "Build automated checks that catch schema drift, nulls, and outliers before they hit prod.",
    "difficulty": "Advanced",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-050",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Interactive Census Migration Flow Visualization",
    "blurb": "Visualize inter-state or inter-country migration flows with an interactive flow-map.",
    "difficulty": "Advanced",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-051",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Zomato Restaurant Rating & Cost Analysis",
    "blurb": "Explore what drives restaurant ratings: cuisine, cost-for-two, location, and votes.",
    "difficulty": "Beginner",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-052",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global CO2 Emissions Trend Dashboard",
    "blurb": "Track per-capita and total emissions by country and sector over decades.",
    "difficulty": "Beginner",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-053",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Wine Review Score Explorer",
    "blurb": "Explore how price, region, and variety relate to critic scores across 100k+ reviews.",
    "difficulty": "Beginner",
    "topics": [
      "Data Visualization",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ],
    "kaggle": {
      "name": "Wine Reviews",
      "url": "https://www.kaggle.com/datasets/zynicide/wine-reviews"
    }
  },
  {
    "id": "DS-054",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Airline Passenger Satisfaction Survey EDA",
    "blurb": "Break down what drives satisfaction: delay, service class, and in-flight factors.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-055",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Retail Foot Traffic Seasonality Dashboard",
    "blurb": "Visualize weekly and holiday seasonality patterns in store visit data.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-056",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Internet Usage & Digital Divide Explorer",
    "blurb": "Compare broadband access and usage growth across income groups and regions.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Visualization",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-057",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Customer Support Ticket Trends Dashboard",
    "blurb": "Track ticket volume, resolution time, and category mix over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-058",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Personal Finance Spending Tracker & Insights",
    "blurb": "Categorize transactions and surface monthly spending patterns and anomalies.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Wrangling",
      "pandas",
      "Storytelling"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-059",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "City-Level Public Transit Ridership Dashboard",
    "blurb": "Analyze ridership trends across routes, times of day, and seasons.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "jakevdp/PythonDataScienceHandbook",
      "url": "https://github.com/jakevdp/PythonDataScienceHandbook"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-060",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Multi-Year Climate Change Indicator Dashboard",
    "blurb": "Combine temperature, sea-level, and emissions series into one comparative view.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Data Wrangling",
      "pandas"
    ],
    "github": {
      "name": "CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers",
      "url": "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "ML-001",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Iris Flower Classification (Classic)",
    "blurb": "The canonical first classifier project: compare a few algorithms on the Iris dataset.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Iris Species",
      "url": "https://www.kaggle.com/datasets/uciml/iris"
    }
  },
  {
    "id": "ML-002",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Titanic Survival Prediction Model",
    "blurb": "Turn the classic EDA dataset into an end-to-end classification pipeline.",
    "difficulty": "Beginner",
    "topics": [
      "Survival Analysis",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Titanic: Machine Learning from Disaster",
      "url": "https://www.kaggle.com/c/titanic"
    }
  },
  {
    "id": "ML-003",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "House Price Prediction (Regression)",
    "blurb": "Predict housing prices using linear and tree-based regression models.",
    "difficulty": "Beginner",
    "topics": [
      "Regression",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "House Prices: Advanced Regression Techniques",
      "url": "https://www.kaggle.com/c/house-prices-advanced-regression-techniques"
    }
  },
  {
    "id": "ML-004",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Handwritten Digit Recognition (Classic ML)",
    "blurb": "Classify MNIST digits using classical ML models before moving to deep learning.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Digit Recognizer (MNIST)",
      "url": "https://www.kaggle.com/c/digit-recognizer"
    }
  },
  {
    "id": "ML-005",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Spam Email Classifier",
    "blurb": "Build a Naive Bayes or logistic regression spam filter with TF-IDF features.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "SMS Spam Collection Dataset",
      "url": "https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset"
    }
  },
  {
    "id": "ML-006",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Wine Quality Prediction",
    "blurb": "Predict wine quality scores from physicochemical properties using regression/classification.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Red Wine Quality",
      "url": "https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009"
    }
  },
  {
    "id": "ML-007",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Breast Cancer Diagnosis Classifier",
    "blurb": "Classify tumors as benign or malignant from the Wisconsin diagnostic dataset.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Breast Cancer Wisconsin (Diagnostic)",
      "url": "https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data"
    }
  },
  {
    "id": "ML-008",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Loan Approval Prediction Model",
    "blurb": "Predict loan approval outcomes from applicant financial and demographic features.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-009",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Segmentation with K-Means",
    "blurb": "Cluster customers into segments using RFM or behavioral features.",
    "difficulty": "Beginner",
    "topics": [
      "Customer Segmentation",
      "Clustering",
      "Model Evaluation"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-010",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Movie Recommendation System",
    "blurb": "Build a collaborative-filtering recommender using the MovieLens dataset.",
    "difficulty": "Beginner",
    "topics": [
      "Recommender Systems",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-011",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Diabetes Risk Prediction Model",
    "blurb": "Predict diabetes risk from the Pima Indians diabetes dataset.",
    "difficulty": "Beginner",
    "topics": [
      "Risk Management",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Pima Indians Diabetes Database",
      "url": "https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database"
    }
  },
  {
    "id": "ML-012",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Used Car Price Predictor",
    "blurb": "Predict resale price from mileage, age, brand, and condition features.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-013",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Employee Attrition Prediction",
    "blurb": "Predict which employees are likely to leave using HR analytics data.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "IBM HR Analytics Employee Attrition",
      "url": "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset"
    }
  },
  {
    "id": "ML-014",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Student Performance Predictor",
    "blurb": "Predict exam outcomes from study habits, attendance, and demographic features.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-015",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Sentiment Classifier with TF-IDF + Logistic Regression",
    "blurb": "Build a bag-of-words sentiment classifier as a baseline before trying deep learning.",
    "difficulty": "Beginner",
    "topics": [
      "Regression",
      "Classification",
      "NLP"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-016",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Credit Card Fraud Detection (Imbalanced Classification)",
    "blurb": "Handle severe class imbalance with SMOTE and cost-sensitive metrics on a fraud dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Imbalanced Learning",
      "Anomaly Detection"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Credit Card Fraud Detection",
      "url": "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"
    }
  },
  {
    "id": "ML-017",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Churn Prediction with Ensemble Models",
    "blurb": "Compare random forest, XGBoost, and LightGBM on a telecom churn dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Ensemble Methods",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Telco Customer Churn",
      "url": "https://www.kaggle.com/datasets/blastchar/telco-customer-churn"
    }
  },
  {
    "id": "ML-018",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Insurance Premium Prediction",
    "blurb": "Predict premium amounts using regularized regression and feature interactions.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Medical Cost Personal Insurance",
      "url": "https://www.kaggle.com/datasets/mirichoi0218/insurance"
    }
  },
  {
    "id": "ML-019",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Click-Through Rate Prediction",
    "blurb": "Predict ad CTR from sparse categorical features using gradient boosting.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-020",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Retail Demand Forecasting (Time-Series ML)",
    "blurb": "Frame demand forecasting as a supervised ML problem with lag and rolling features.",
    "difficulty": "Intermediate",
    "topics": [
      "Time Series",
      "Forecasting",
      "Model Evaluation"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-021",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Credit Scoring Model with Explainability",
    "blurb": "Build a credit-scoring model and explain individual predictions with SHAP.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Explainability",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-022",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Multi-Class Product Category Classifier",
    "blurb": "Classify e-commerce products into categories from text and metadata features.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-023",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Anomaly Detection in Network Traffic",
    "blurb": "Use isolation forests or one-class SVM to flag anomalous network activity.",
    "difficulty": "Intermediate",
    "topics": [
      "Anomaly Detection",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-024",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Market Basket Analysis with Association Rules",
    "blurb": "Mine frequent itemsets and association rules from retail transaction data.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-025",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Lifetime Value Prediction",
    "blurb": "Predict long-term customer value from early transaction and engagement signals.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-026",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "House Price Prediction with Feature Engineering Pipeline",
    "blurb": "Build a full sklearn pipeline with custom transformers for a Kaggle housing competition.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "House Prices: Advanced Regression Techniques",
      "url": "https://www.kaggle.com/c/house-prices-advanced-regression-techniques"
    }
  },
  {
    "id": "ML-027",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Hyperparameter-Tuned Gradient Boosting Pipeline",
    "blurb": "Tune XGBoost/LightGBM with cross-validation and Optuna for a tabular competition dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Ensemble Methods",
      "Data Engineering",
      "Model Evaluation"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-028",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Loan Default Risk Model with SMOTE Balancing",
    "blurb": "Predict loan default on an imbalanced dataset using resampling and threshold tuning.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Imbalanced Learning",
      "Model Evaluation"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-029",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "News Article Topic Classifier",
    "blurb": "Classify news articles into topics using TF-IDF and classical classifiers.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-030",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Airbnb Price Prediction with Feature Engineering",
    "blurb": "Engineer location, amenity, and review features to predict nightly price.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "New York City Airbnb Open Data",
      "url": "https://www.kaggle.com/datasets/dgomonov/new-york-city-airbnb-open-data"
    }
  },
  {
    "id": "ML-031",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Medical Cost Prediction Model",
    "blurb": "Predict insurance charges from age, BMI, smoking status, and region.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Medical Cost Personal Insurance",
      "url": "https://www.kaggle.com/datasets/mirichoi0218/insurance"
    }
  },
  {
    "id": "ML-032",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Employee Salary Prediction with Regression Diagnostics",
    "blurb": "Fit and diagnose a regression model, checking residuals and multicollinearity.",
    "difficulty": "Intermediate",
    "topics": [
      "Regression",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-033",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Dimensionality Reduction Visualizer",
    "blurb": "Compare PCA and t-SNE for visualizing high-dimensional data in 2D.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-034",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Fake News Detection Classifier",
    "blurb": "Classify news articles as real or fake using text-based ML features.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-035",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Segmentation with Hierarchical Clustering",
    "blurb": "Build a dendrogram-driven segmentation and compare it against K-Means.",
    "difficulty": "Intermediate",
    "topics": [
      "Clustering",
      "Customer Segmentation",
      "Model Evaluation"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-036",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Ad Conversion Prediction Pipeline",
    "blurb": "Predict ad conversion probability with a full preprocessing and modeling pipeline.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-037",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Survival Analysis for Customer Retention",
    "blurb": "Apply Kaplan-Meier and Cox regression to model customer retention over time.",
    "difficulty": "Advanced",
    "topics": [
      "Survival Analysis",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-038",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "AutoML Pipeline for Tabular Data",
    "blurb": "Build an automated pipeline that searches models and hyperparameters for a new dataset.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-039",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Ranking Model for Search Results",
    "blurb": "Build a learning-to-rank model to order search results by relevance.",
    "difficulty": "Advanced",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-040",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Model Explainability Dashboard",
    "blurb": "Combine SHAP and LIME into an interactive dashboard for model interpretation.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Model Explainability",
      "Model Evaluation"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-041",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Imbalanced Fraud Detection with Cost-Sensitive Learning",
    "blurb": "Design a cost-sensitive classifier that weighs false negatives against false positives.",
    "difficulty": "Advanced",
    "topics": [
      "Imbalanced Learning",
      "Anomaly Detection",
      "Model Evaluation"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-042",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Stacked Ensemble Model for Kaggle Competition",
    "blurb": "Build a stacked ensemble of diverse base models for a competition leaderboard.",
    "difficulty": "Advanced",
    "topics": [
      "Ensemble Methods",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-043",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Feature Store & Model Pipeline with MLflow",
    "blurb": "Track experiments and version features/models using MLflow end to end.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-044",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Credit Risk Scorecard with Reject Inference",
    "blurb": "Build a traditional scorecard model and handle reject-inference bias.",
    "difficulty": "Advanced",
    "topics": [
      "Risk Management",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-045",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Multi-Label Genre Classification for Movies",
    "blurb": "Predict multiple genre labels per movie from plot summaries and metadata.",
    "difficulty": "Advanced",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-046",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Bayesian A/B Testing for Conversion Optimization",
    "blurb": "Use Bayesian methods to estimate uplift and decide when to stop a test.",
    "difficulty": "Advanced",
    "topics": [
      "Experimentation",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-047",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Propensity Model with Uplift Modeling",
    "blurb": "Model incremental impact of a marketing action using uplift modeling.",
    "difficulty": "Advanced",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-048",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "End-to-End ML Pipeline Deployment",
    "blurb": "Package a trained model behind a Flask API and containerize it with Docker.",
    "difficulty": "Advanced",
    "topics": [
      "Model Deployment",
      "Data Engineering",
      "Model Evaluation"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-049",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Real-Time Fraud Scoring API",
    "blurb": "Serve a fraud model as a low-latency scoring API with monitoring.",
    "difficulty": "Advanced",
    "topics": [
      "Anomaly Detection",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-050",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Model Monitoring & Drift Detection System",
    "blurb": "Track feature and prediction drift over time and trigger retraining alerts.",
    "difficulty": "Advanced",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-051",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Titanic Ensemble Model Shootout",
    "blurb": "Compare six classifiers on the same dataset and explain why the winner wins.",
    "difficulty": "Beginner",
    "topics": [
      "Ensemble Methods",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Titanic: Machine Learning from Disaster",
      "url": "https://www.kaggle.com/c/titanic"
    }
  },
  {
    "id": "ML-052",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Red Wine Quality Multi-Class Classifier",
    "blurb": "Predict wine quality scores as a multi-class problem from chemical properties.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "Red Wine Quality",
      "url": "https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009"
    }
  },
  {
    "id": "ML-053",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "SMS Spam Detection with Naive Bayes",
    "blurb": "Build a lightweight, fast spam classifier and compare it against TF-IDF baselines.",
    "difficulty": "Beginner",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ],
    "kaggle": {
      "name": "SMS Spam Collection Dataset",
      "url": "https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset"
    }
  },
  {
    "id": "ML-054",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Adult Census Income Classifier",
    "blurb": "Predict whether income exceeds $50K from census demographic features.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-055",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Cross-Validation & Model Selection Playground",
    "blurb": "Build a reusable harness comparing CV strategies and their effect on model choice.",
    "difficulty": "Intermediate",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-056",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Feature Selection Pipeline Comparison",
    "blurb": "Compare filter, wrapper, and embedded feature-selection methods on the same dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Model Evaluation",
      "scikit-learn"
    ],
    "github": {
      "name": "ageron/handson-ml3",
      "url": "https://github.com/ageron/handson-ml3"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "LightGBM: A Highly Efficient Gradient Boosting Decision Tree",
      "authors": "Ke et al., 2017",
      "url": "https://scholar.google.com/scholar?q=Ke+2017+LightGBM+Highly+Efficient+Gradient+Boosting+Decision+Tree"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-057",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Customer Segmentation + Churn Combined Pipeline",
    "blurb": "Chain clustering and classification into one end-to-end customer-insight pipeline.",
    "difficulty": "Intermediate",
    "topics": [
      "Customer Segmentation",
      "Data Engineering",
      "Model Evaluation"
    ],
    "github": {
      "name": "eriklindernoren/ML-From-Scratch",
      "url": "https://github.com/eriklindernoren/ML-From-Scratch"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "An Introduction to Statistical Learning",
      "author": "James, Witten, Hastie & Tibshirani"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-058",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Calibrated Probability Classifier for Risk Scoring",
    "blurb": "Calibrate model probabilities so risk scores are actually trustworthy.",
    "difficulty": "Advanced",
    "topics": [
      "Classification",
      "Risk Management",
      "Model Evaluation"
    ],
    "github": {
      "name": "trekhleb/homemade-machine-learning",
      "url": "https://github.com/trekhleb/homemade-machine-learning"
    },
    "youtube": {
      "name": "3Blue1Brown",
      "url": "https://www.youtube.com/@3blue1brown"
    },
    "book": {
      "title": "The Elements of Statistical Learning",
      "author": "Hastie, Tibshirani & Friedman"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-059",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Concept Drift Simulation & Retraining Pipeline",
    "blurb": "Simulate drifting data and build logic that triggers automatic retraining.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Simulation",
      "Model Evaluation"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions (SHAP)",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-060",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Interpretable Scorecard vs Black-Box Model Comparison",
    "blurb": "Compare a transparent scorecard model against a black-box model on accuracy and trust.",
    "difficulty": "Advanced",
    "topics": [
      "Model Evaluation",
      "scikit-learn",
      "Feature Engineering"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "Corey Schafer",
      "url": "https://www.youtube.com/@coreyms"
    },
    "book": {
      "title": "Building Machine Learning Powered Applications",
      "author": "Emmanuel Ameisen"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "DL-001",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Handwritten Digit Recognition with CNN",
    "blurb": "Classify MNIST digits with a convolutional neural network from scratch.",
    "difficulty": "Beginner",
    "topics": [
      "Convolutional Networks",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Attention Is All You Need",
      "authors": "Vaswani et al., 2017",
      "url": "https://arxiv.org/abs/1706.03762"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ],
    "kaggle": {
      "name": "Digit Recognizer (MNIST)",
      "url": "https://www.kaggle.com/c/digit-recognizer"
    }
  },
  {
    "id": "DL-002",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Fashion Image Classifier",
    "blurb": "Train a CNN on Fashion-MNIST to classify clothing categories.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Generative Adversarial Networks",
      "authors": "Goodfellow et al., 2014",
      "url": "https://arxiv.org/abs/1406.2661"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ],
    "kaggle": {
      "name": "Fashion MNIST",
      "url": "https://www.kaggle.com/datasets/zalando-research/fashionmnist"
    }
  },
  {
    "id": "DL-003",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Cats vs Dogs Image Classifier",
    "blurb": "Build a binary CNN image classifier and visualize learned filters.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Deep Residual Learning for Image Recognition",
      "authors": "He et al., 2015",
      "url": "https://arxiv.org/abs/1512.03385"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-004",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "CIFAR-10 Image Classification with CNN",
    "blurb": "Train a deeper CNN on the 10-class CIFAR-10 benchmark.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Convolutional Networks",
      "Computer Vision"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "BERT: Pre-training of Deep Bidirectional Transformers",
      "authors": "Devlin et al., 2018",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-005",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Sentiment Analysis with LSTM",
    "blurb": "Classify review sentiment using an LSTM over word embeddings.",
    "difficulty": "Beginner",
    "topics": [
      "Recurrent Networks",
      "NLP",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Auto-Encoding Variational Bayes",
      "authors": "Kingma & Welling, 2013",
      "url": "https://arxiv.org/abs/1312.6114"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-006",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Simple Chatbot with Seq2Seq",
    "blurb": "Build a basic sequence-to-sequence chatbot on a small dialogue dataset.",
    "difficulty": "Beginner",
    "topics": [
      "NLP",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Denoising Diffusion Probabilistic Models",
      "authors": "Ho et al., 2020",
      "url": "https://arxiv.org/abs/2006.11239"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-007",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Neural Style Transfer",
    "blurb": "Blend the content of one image with the style of another using a CNN.",
    "difficulty": "Beginner",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Playing Atari with Deep Reinforcement Learning",
      "authors": "Mnih et al., 2013",
      "url": "https://arxiv.org/abs/1312.5602"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-008",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Handwriting Digit Generator (Simple GAN)",
    "blurb": "Train a basic GAN to generate MNIST-style handwritten digits.",
    "difficulty": "Beginner",
    "topics": [
      "Generative Models",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Proximal Policy Optimization Algorithms",
      "authors": "Schulman et al., 2017",
      "url": "https://arxiv.org/abs/1707.06347"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-009",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Face Detection with OpenCV + CNN",
    "blurb": "Combine classical face detection with a CNN classifier for a full pipeline.",
    "difficulty": "Beginner",
    "topics": [
      "Convolutional Networks",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "U-Net: Convolutional Networks for Biomedical Image Segmentation",
      "authors": "Ronneberger et al., 2015",
      "url": "https://arxiv.org/abs/1505.04597"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-010",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Basic Autoencoder for Image Denoising",
    "blurb": "Train an autoencoder to remove noise from corrupted images.",
    "difficulty": "Beginner",
    "topics": [
      "Computer Vision",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "You Only Look Once: Unified, Real-Time Object Detection",
      "authors": "Redmon et al., 2015",
      "url": "https://arxiv.org/abs/1506.02640"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-011",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Text Generation with Character-Level RNN",
    "blurb": "Generate text character-by-character with a simple RNN trained on a corpus.",
    "difficulty": "Beginner",
    "topics": [
      "Recurrent Networks",
      "NLP",
      "Neural Networks"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Unpaired Image-to-Image Translation (CycleGAN)",
      "authors": "Zhu et al., 2017",
      "url": "https://arxiv.org/abs/1703.10593"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-012",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Flower Species Classifier (Transfer Learning)",
    "blurb": "Fine-tune a pretrained CNN to classify flower species with limited data.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Photo-Realistic Single Image Super-Resolution (SRGAN)",
      "authors": "Ledig et al., 2016",
      "url": "https://arxiv.org/abs/1609.04802"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-013",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Speech Command Recognition",
    "blurb": "Classify short spoken commands from audio spectrograms using a CNN.",
    "difficulty": "Beginner",
    "topics": [
      "Audio ML",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "An Image is Worth 16x16 Words (Vision Transformer)",
      "authors": "Dosovitskiy et al., 2020",
      "url": "https://arxiv.org/abs/2010.11929"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-014",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Emotion Detection from Facial Images",
    "blurb": "Classify facial expressions into emotion categories with a CNN.",
    "difficulty": "Beginner",
    "topics": [
      "Computer Vision",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "A Simple Framework for Contrastive Learning (SimCLR)",
      "authors": "Chen et al., 2020",
      "url": "https://arxiv.org/abs/2002.05709"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-015",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Simple Image Captioning Model",
    "blurb": "Pair a CNN encoder with an RNN decoder to caption images.",
    "difficulty": "Beginner",
    "topics": [
      "Computer Vision",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Semi-Supervised Classification with Graph Convolutional Networks",
      "authors": "Kipf & Welling, 2016",
      "url": "https://arxiv.org/abs/1609.02907"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-016",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Object Detection with YOLO (Custom Dataset)",
    "blurb": "Fine-tune a YOLO model to detect objects in your own labeled dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Object Detection",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Sequence to Sequence Learning with Neural Networks",
      "authors": "Sutskever et al., 2014",
      "url": "https://arxiv.org/abs/1409.3215"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-017",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Image Segmentation with U-Net",
    "blurb": "Segment medical or satellite images pixel-by-pixel using a U-Net architecture.",
    "difficulty": "Intermediate",
    "topics": [
      "Customer Segmentation",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Neural Machine Translation by Jointly Learning to Align and Translate",
      "authors": "Bahdanau et al., 2014",
      "url": "https://arxiv.org/abs/1409.0473"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-018",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Named Entity Recognition with BiLSTM-CRF",
    "blurb": "Tag entities in text using a BiLSTM-CRF sequence labeling model.",
    "difficulty": "Intermediate",
    "topics": [
      "Recurrent Networks",
      "NLP",
      "Neural Networks"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-019",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Machine Translation with Transformer",
    "blurb": "Train a Transformer seq2seq model for sentence-level translation.",
    "difficulty": "Intermediate",
    "topics": [
      "Transformers",
      "NLP",
      "Neural Networks"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Communication-Efficient Learning of Deep Networks from Decentralized Data",
      "authors": "McMahan et al., 2016",
      "url": "https://arxiv.org/abs/1602.05629"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-020",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Fine-Tuning BERT for Text Classification",
    "blurb": "Fine-tune a pretrained BERT model on a custom text classification task.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Transformers",
      "NLP"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Long Short-Term Memory",
      "authors": "Hochreiter & Schmidhuber, 1997",
      "url": "https://scholar.google.com/scholar?q=Hochreiter+Schmidhuber+1997+Long+Short-Term+Memory"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-021",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Question Answering System with Transformers",
    "blurb": "Build an extractive QA system fine-tuned on a SQuAD-style dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Transformers",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Attention Is All You Need",
      "authors": "Vaswani et al., 2017",
      "url": "https://arxiv.org/abs/1706.03762"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-022",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Text Summarization with Transformers",
    "blurb": "Fine-tune a seq2seq Transformer to generate abstractive summaries.",
    "difficulty": "Intermediate",
    "topics": [
      "Transformers",
      "NLP",
      "Neural Networks"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Generative Adversarial Networks",
      "authors": "Goodfellow et al., 2014",
      "url": "https://arxiv.org/abs/1406.2661"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-023",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "DCGAN for Synthetic Face Generation",
    "blurb": "Train a deep convolutional GAN to generate synthetic face images.",
    "difficulty": "Intermediate",
    "topics": [
      "Generative Models",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Deep Residual Learning for Image Recognition",
      "authors": "He et al., 2015",
      "url": "https://arxiv.org/abs/1512.03385"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-024",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "CycleGAN for Image-to-Image Translation",
    "blurb": "Translate images between two unpaired domains, like photos and paintings.",
    "difficulty": "Intermediate",
    "topics": [
      "Generative Models",
      "NLP",
      "Computer Vision"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "BERT: Pre-training of Deep Bidirectional Transformers",
      "authors": "Devlin et al., 2018",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-025",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Super-Resolution Image Upscaler",
    "blurb": "Train an SRGAN-style model to upscale low-resolution images.",
    "difficulty": "Intermediate",
    "topics": [
      "Computer Vision",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Auto-Encoding Variational Bayes",
      "authors": "Kingma & Welling, 2013",
      "url": "https://arxiv.org/abs/1312.6114"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-026",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Optical Character Recognition Pipeline",
    "blurb": "Build an OCR pipeline that detects and reads text from images.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Denoising Diffusion Probabilistic Models",
      "authors": "Ho et al., 2020",
      "url": "https://arxiv.org/abs/2006.11239"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-027",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Human Pose Estimation Model",
    "blurb": "Estimate human joint keypoints from images using a CNN-based pose model.",
    "difficulty": "Intermediate",
    "topics": [
      "Computer Vision",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Playing Atari with Deep Reinforcement Learning",
      "authors": "Mnih et al., 2013",
      "url": "https://arxiv.org/abs/1312.5602"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-028",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Music Genre Classification from Audio Spectrograms",
    "blurb": "Classify music genre using CNNs over mel-spectrogram representations.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Audio ML",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Proximal Policy Optimization Algorithms",
      "authors": "Schulman et al., 2017",
      "url": "https://arxiv.org/abs/1707.06347"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-029",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Stock/Energy Demand Forecasting with LSTM",
    "blurb": "Forecast a time series using stacked LSTM layers with windowed inputs.",
    "difficulty": "Intermediate",
    "topics": [
      "Recurrent Networks",
      "Forecasting",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "U-Net: Convolutional Networks for Biomedical Image Segmentation",
      "authors": "Ronneberger et al., 2015",
      "url": "https://arxiv.org/abs/1505.04597"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-030",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Variational Autoencoder for Image Generation",
    "blurb": "Train a VAE to learn a latent space and generate new images.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "You Only Look Once: Unified, Real-Time Object Detection",
      "authors": "Redmon et al., 2015",
      "url": "https://arxiv.org/abs/1506.02640"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-031",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Multi-Class Skin Lesion Classifier",
    "blurb": "Classify dermoscopic images into lesion types using a fine-tuned CNN.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Unpaired Image-to-Image Translation (CycleGAN)",
      "authors": "Zhu et al., 2017",
      "url": "https://arxiv.org/abs/1703.10593"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-032",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Recommendation System with Neural Collaborative Filtering",
    "blurb": "Replace matrix factorization with a neural network for collaborative filtering.",
    "difficulty": "Intermediate",
    "topics": [
      "Recommender Systems",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Photo-Realistic Single Image Super-Resolution (SRGAN)",
      "authors": "Ledig et al., 2016",
      "url": "https://arxiv.org/abs/1609.04802"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-033",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Deepfake Detection Classifier",
    "blurb": "Train a CNN to distinguish real from manipulated video frames.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "An Image is Worth 16x16 Words (Vision Transformer)",
      "authors": "Dosovitskiy et al., 2020",
      "url": "https://arxiv.org/abs/2010.11929"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-034",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Real-Time Object Tracking with Deep SORT",
    "blurb": "Combine a detector with Deep SORT to track objects across video frames.",
    "difficulty": "Intermediate",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "A Simple Framework for Contrastive Learning (SimCLR)",
      "authors": "Chen et al., 2020",
      "url": "https://arxiv.org/abs/2002.05709"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-035",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Text-to-Speech Model (Tacotron-style)",
    "blurb": "Train a sequence model that converts text into a mel-spectrogram for speech synthesis.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Audio ML",
      "Neural Networks"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Semi-Supervised Classification with Graph Convolutional Networks",
      "authors": "Kipf & Welling, 2016",
      "url": "https://arxiv.org/abs/1609.02907"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-036",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "GPT-Style Language Model from Scratch",
    "blurb": "Implement a small GPT-style Transformer and train it on a toy text corpus.",
    "difficulty": "Advanced",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Sequence to Sequence Learning with Neural Networks",
      "authors": "Sutskever et al., 2014",
      "url": "https://arxiv.org/abs/1409.3215"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-037",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Vision Transformer (ViT) for Image Classification",
    "blurb": "Implement and train a Vision Transformer, comparing it against a CNN baseline.",
    "difficulty": "Advanced",
    "topics": [
      "Classification",
      "Transformers",
      "Computer Vision"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Neural Machine Translation by Jointly Learning to Align and Translate",
      "authors": "Bahdanau et al., 2014",
      "url": "https://arxiv.org/abs/1409.0473"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-038",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Diffusion Model for Image Generation",
    "blurb": "Implement a denoising diffusion model and sample new images from noise.",
    "difficulty": "Advanced",
    "topics": [
      "Generative Models",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-039",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Graph Neural Network for Molecule Property Prediction",
    "blurb": "Train a GNN to predict chemical properties from molecular graph structure.",
    "difficulty": "Advanced",
    "topics": [
      "Graph Neural Networks",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Communication-Efficient Learning of Deep Networks from Decentralized Data",
      "authors": "McMahan et al., 2016",
      "url": "https://arxiv.org/abs/1602.05629"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-040",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Self-Supervised Pretraining Pipeline",
    "blurb": "Pretrain an image encoder with a contrastive self-supervised objective, then fine-tune it.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Long Short-Term Memory",
      "authors": "Hochreiter & Schmidhuber, 1997",
      "url": "https://scholar.google.com/scholar?q=Hochreiter+Schmidhuber+1997+Long+Short-Term+Memory"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-041",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Multi-Modal Image Captioning with Attention",
    "blurb": "Add visual attention to an image captioning model and visualize attention maps.",
    "difficulty": "Advanced",
    "topics": [
      "Attention Mechanisms",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Attention Is All You Need",
      "authors": "Vaswani et al., 2017",
      "url": "https://arxiv.org/abs/1706.03762"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-042",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Reinforcement Learning Game Agent (DQN)",
    "blurb": "Train a Deep Q-Network agent to play a classic Atari-style game.",
    "difficulty": "Advanced",
    "topics": [
      "Reinforcement Learning",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Generative Adversarial Networks",
      "authors": "Goodfellow et al., 2014",
      "url": "https://arxiv.org/abs/1406.2661"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-043",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Policy Gradient Agent for Continuous Control",
    "blurb": "Train a policy-gradient agent on a continuous-control environment.",
    "difficulty": "Advanced",
    "topics": [
      "Reinforcement Learning",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Deep Residual Learning for Image Recognition",
      "authors": "He et al., 2015",
      "url": "https://arxiv.org/abs/1512.03385"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-044",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "StyleGAN-Inspired Face Generator",
    "blurb": "Implement a simplified style-based GAN architecture for high-quality face synthesis.",
    "difficulty": "Advanced",
    "topics": [
      "Generative Models",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "BERT: Pre-training of Deep Bidirectional Transformers",
      "authors": "Devlin et al., 2018",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-045",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Grad-CAM Explainability for CNN Predictions",
    "blurb": "Visualize which image regions drive a CNN's predictions using Grad-CAM.",
    "difficulty": "Advanced",
    "topics": [
      "Convolutional Networks",
      "Model Explainability",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Auto-Encoding Variational Bayes",
      "authors": "Kingma & Welling, 2013",
      "url": "https://arxiv.org/abs/1312.6114"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-046",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Model Compression & Quantization Pipeline",
    "blurb": "Prune and quantize a trained network to shrink it for edge deployment.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Denoising Diffusion Probabilistic Models",
      "authors": "Ho et al., 2020",
      "url": "https://arxiv.org/abs/2006.11239"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-047",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Transformer-Based Time Series Forecaster",
    "blurb": "Adapt a Transformer architecture for multi-horizon time-series forecasting.",
    "difficulty": "Advanced",
    "topics": [
      "Transformers",
      "Time Series",
      "Forecasting"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Playing Atari with Deep Reinforcement Learning",
      "authors": "Mnih et al., 2013",
      "url": "https://arxiv.org/abs/1312.5602"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-048",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Multi-Task Learning Model (Detection + Segmentation)",
    "blurb": "Train a shared backbone to jointly perform detection and segmentation.",
    "difficulty": "Advanced",
    "topics": [
      "Customer Segmentation",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Proximal Policy Optimization Algorithms",
      "authors": "Schulman et al., 2017",
      "url": "https://arxiv.org/abs/1707.06347"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-049",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Federated Learning Image Classifier",
    "blurb": "Simulate federated training of an image classifier across distributed clients.",
    "difficulty": "Advanced",
    "topics": [
      "Classification",
      "Computer Vision",
      "Federated Learning"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "U-Net: Convolutional Networks for Biomedical Image Segmentation",
      "authors": "Ronneberger et al., 2015",
      "url": "https://arxiv.org/abs/1505.04597"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-050",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Deploying a Deep Learning Model with FastAPI",
    "blurb": "Serve a trained model behind a FastAPI endpoint, containerized with Docker.",
    "difficulty": "Advanced",
    "topics": [
      "Model Deployment",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "You Only Look Once: Unified, Real-Time Object Detection",
      "authors": "Redmon et al., 2015",
      "url": "https://arxiv.org/abs/1506.02640"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-051",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Fashion-MNIST Model Zoo",
    "blurb": "Compare several small CNN architectures on the same benchmark and chart trade-offs.",
    "difficulty": "Beginner",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Unpaired Image-to-Image Translation (CycleGAN)",
      "authors": "Zhu et al., 2017",
      "url": "https://arxiv.org/abs/1703.10593"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ],
    "kaggle": {
      "name": "Digit Recognizer (MNIST)",
      "url": "https://www.kaggle.com/c/digit-recognizer"
    }
  },
  {
    "id": "DL-052",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Image Colorization with CNN",
    "blurb": "Train a CNN to predict color channels for grayscale photos.",
    "difficulty": "Beginner",
    "topics": [
      "Convolutional Networks",
      "Computer Vision",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Photo-Realistic Single Image Super-Resolution (SRGAN)",
      "authors": "Ledig et al., 2016",
      "url": "https://arxiv.org/abs/1609.04802"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-053",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Simple Word2Vec Embedding Trainer",
    "blurb": "Train word embeddings from scratch and visualize the resulting vector space.",
    "difficulty": "Beginner",
    "topics": [
      "NLP",
      "Embeddings",
      "Neural Networks"
    ],
    "github": {
      "name": "karpathy/micrograd",
      "url": "https://github.com/karpathy/micrograd"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "An Image is Worth 16x16 Words (Vision Transformer)",
      "authors": "Dosovitskiy et al., 2020",
      "url": "https://arxiv.org/abs/2010.11929"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-054",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Attention Visualization for a Trained Transformer",
    "blurb": "Extract and visualize attention weights from a fine-tuned Transformer model.",
    "difficulty": "Intermediate",
    "topics": [
      "Transformers",
      "Attention Mechanisms",
      "Neural Networks"
    ],
    "github": {
      "name": "fastai/fastbook",
      "url": "https://github.com/fastai/fastbook"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "A Simple Framework for Contrastive Learning (SimCLR)",
      "authors": "Chen et al., 2020",
      "url": "https://arxiv.org/abs/2002.05709"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-055",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Siamese Network for Face Verification",
    "blurb": "Train a Siamese network to decide whether two face images match.",
    "difficulty": "Intermediate",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "eriklindernoren/PyTorch-GAN",
      "url": "https://github.com/eriklindernoren/PyTorch-GAN"
    },
    "youtube": {
      "name": "Andrej Karpathy",
      "url": "https://www.youtube.com/@AndrejKarpathy"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Semi-Supervised Classification with Graph Convolutional Networks",
      "authors": "Kipf & Welling, 2016",
      "url": "https://arxiv.org/abs/1609.02907"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)"
    ]
  },
  {
    "id": "DL-056",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Neural Architecture Search on a Small CNN",
    "blurb": "Run a lightweight NAS to discover a competitive CNN architecture automatically.",
    "difficulty": "Advanced",
    "topics": [
      "Convolutional Networks",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "aladdinpersson/Machine-Learning-Collection",
      "url": "https://github.com/aladdinpersson/Machine-Learning-Collection"
    },
    "youtube": {
      "name": "Two Minute Papers",
      "url": "https://www.youtube.com/@TwoMinutePapers"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Sequence to Sequence Learning with Neural Networks",
      "authors": "Sutskever et al., 2014",
      "url": "https://arxiv.org/abs/1409.3215"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-057",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Knowledge Distillation: Compress a Big Model",
    "blurb": "Train a small student network to mimic a larger teacher model's outputs.",
    "difficulty": "Advanced",
    "topics": [
      "Neural Networks",
      "PyTorch/TensorFlow",
      "Model Training"
    ],
    "github": {
      "name": "pytorch/examples",
      "url": "https://github.com/pytorch/examples"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Neural Machine Translation by Jointly Learning to Align and Translate",
      "authors": "Bahdanau et al., 2014",
      "url": "https://arxiv.org/abs/1409.0473"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-058",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Contrastive Sentence Embedding Model",
    "blurb": "Train sentence embeddings with a contrastive objective for semantic search.",
    "difficulty": "Advanced",
    "topics": [
      "Embeddings",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "tensorflow/models",
      "url": "https://github.com/tensorflow/models"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Dive into Deep Learning",
      "author": "Zhang, Lipton, Li & Smola"
    },
    "paper": {
      "title": "Distilling the Knowledge in a Neural Network",
      "authors": "Hinton et al., 2015",
      "url": "https://arxiv.org/abs/1503.02531"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-059",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Video Action Recognition with 3D-CNN",
    "blurb": "Classify short video clips into action categories using spatiotemporal convolutions.",
    "difficulty": "Advanced",
    "topics": [
      "Convolutional Networks",
      "Neural Networks",
      "PyTorch/TensorFlow"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Communication-Efficient Learning of Deep Networks from Decentralized Data",
      "authors": "McMahan et al., 2016",
      "url": "https://arxiv.org/abs/1602.05629"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "DL-060",
    "category": "deep-learning",
    "categoryLabel": "Deep Learning",
    "title": "Text-to-Image Generation with a Small Diffusion Model",
    "blurb": "Train a compact diffusion model conditioned on text to generate small images.",
    "difficulty": "Advanced",
    "topics": [
      "Generative Models",
      "NLP",
      "Computer Vision"
    ],
    "github": {
      "name": "karpathy/nanoGPT",
      "url": "https://github.com/karpathy/nanoGPT"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Pattern Recognition and Machine Learning",
      "author": "Christopher Bishop"
    },
    "paper": {
      "title": "Long Short-Term Memory",
      "authors": "Hochreiter & Schmidhuber, 1997",
      "url": "https://scholar.google.com/scholar?q=Hochreiter+Schmidhuber+1997+Long+Short-Term+Memory"
    },
    "checklist": [
      "Set up the dataset & data loaders (augmentation if it's vision)",
      "Build a small baseline network before scaling up",
      "Train with a proper train/val split and track loss curves",
      "Tune architecture, learning rate, and regularization",
      "Evaluate qualitatively (sample outputs) and quantitatively (metrics)",
      "Package the trained model for inference (export/serve it)"
    ]
  },
  {
    "id": "QF-001",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Moving Average Crossover Trading Strategy",
    "blurb": "Implement and backtest the classic short/long moving-average crossover signal.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-002",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Stock Price Visualizer with yfinance",
    "blurb": "Pull historical price data and build interactive candlestick and volume charts.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-003",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple Backtesting Engine",
    "blurb": "Build a minimal backtester comparing a rule-based strategy against buy-and-hold.",
    "difficulty": "Beginner",
    "topics": [
      "Backtesting",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "kernc/backtesting.py",
      "url": "https://github.com/kernc/backtesting.py"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Trading Systems and Methods",
      "author": "Perry J. Kaufman"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-004",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Black-Scholes Option Pricing Calculator",
    "blurb": "Implement the Black-Scholes formula and visualize price sensitivity to inputs.",
    "difficulty": "Beginner",
    "topics": [
      "Options Pricing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-005",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Return & Risk Calculator",
    "blurb": "Compute annualized return, volatility, and correlation for a multi-asset portfolio.",
    "difficulty": "Beginner",
    "topics": [
      "Portfolio Theory",
      "Risk Management",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-006",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Sharpe Ratio & Drawdown Analyzer",
    "blurb": "Build a tool that computes Sharpe ratio, max drawdown, and rolling volatility.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-007",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "RSI & Bollinger Bands Strategy Backtest",
    "blurb": "Backtest a mean-reversion strategy using RSI and Bollinger Band signals.",
    "difficulty": "Beginner",
    "topics": [
      "Backtesting",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-008",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Efficient Frontier & Markowitz Optimization",
    "blurb": "Plot the efficient frontier and find the minimum-variance portfolio for a set of assets.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "S&P 500 Stock Data",
      "url": "https://www.kaggle.com/datasets/camnugent/sandp500"
    }
  },
  {
    "id": "QF-009",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Monte Carlo Stock Price Simulator",
    "blurb": "Simulate future price paths using geometric Brownian motion.",
    "difficulty": "Beginner",
    "topics": [
      "Simulation",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-010",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Candlestick Pattern Recognition Scanner",
    "blurb": "Scan historical price data for classic candlestick reversal patterns.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-011",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple Moving-Average Trend Dashboard",
    "blurb": "Build a dashboard that flags trend direction across a watchlist using moving averages.",
    "difficulty": "Beginner",
    "topics": [
      "Dashboarding",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-012",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Fixed Income Yield Calculator",
    "blurb": "Compute bond price, yield-to-maturity, and duration for fixed-income instruments.",
    "difficulty": "Beginner",
    "topics": [
      "Fixed Income",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-013",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Currency Pair Correlation Explorer",
    "blurb": "Visualize rolling correlations between major currency pairs.",
    "difficulty": "Beginner",
    "topics": [
      "Data Visualization",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-014",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Dividend Growth Portfolio Tracker",
    "blurb": "Track dividend yield, growth, and payout trends across a stock watchlist.",
    "difficulty": "Beginner",
    "topics": [
      "Portfolio Theory",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-015",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Crypto Price Tracker & Alert Bot",
    "blurb": "Track crypto prices and trigger alerts when thresholds are crossed.",
    "difficulty": "Beginner",
    "topics": [
      "Cryptocurrency Markets",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-016",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Mean-Reversion Pairs Trading Strategy",
    "blurb": "Find cointegrated stock pairs and backtest a mean-reversion spread strategy.",
    "difficulty": "Intermediate",
    "topics": [
      "Statistical Arbitrage",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "muMAJJI/Trading---Pair-Trading",
      "url": "https://github.com/muMAJJI/Trading---Pair-Trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Pairs Trading: Performance of a Relative-Value Arbitrage Rule",
      "authors": "Gatev, Goetzmann & Rouwenhorst, 2006",
      "url": "https://academic.oup.com/rfs/article/19/3/797/1646694"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-017",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Momentum Factor Strategy Backtest",
    "blurb": "Rank a universe of stocks by momentum and backtest a rotation strategy.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Factor Investing",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-018",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Statistical Arbitrage Strategy with Backtrader",
    "blurb": "Build and backtest a stat-arb strategy using an event-driven backtesting framework.",
    "difficulty": "Intermediate",
    "topics": [
      "Statistical Arbitrage",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-019",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Greeks Calculator & Visualizer",
    "blurb": "Compute and visualize delta, gamma, theta, and vega across strikes and maturities.",
    "difficulty": "Intermediate",
    "topics": [
      "Options Pricing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-020",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Implied Volatility Surface Builder",
    "blurb": "Construct and visualize an implied volatility surface from option chain data.",
    "difficulty": "Intermediate",
    "topics": [
      "Volatility Modeling",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-021",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "GARCH Volatility Forecasting Model",
    "blurb": "Fit a GARCH model to forecast conditional volatility of an asset return series.",
    "difficulty": "Intermediate",
    "topics": [
      "Volatility Modeling",
      "Forecasting",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Analysis of Financial Time Series",
      "author": "Ruey S. Tsay"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-022",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Risk Parity Portfolio Allocator",
    "blurb": "Build a portfolio allocator that equalizes risk contribution across assets.",
    "difficulty": "Intermediate",
    "topics": [
      "Portfolio Theory",
      "Risk Management",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-023",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Value-at-Risk (VaR) & CVaR Calculator",
    "blurb": "Compute historical, parametric, and Monte Carlo VaR/CVaR for a portfolio.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-024",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Fama-French Factor Model Analysis",
    "blurb": "Regress portfolio returns on Fama-French factors to decompose performance.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-025",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Yield Curve Modeling & Visualization",
    "blurb": "Fit and visualize the term structure of interest rates over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Fixed Income",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-026",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Order Book Visualization & Microstructure Analysis",
    "blurb": "Visualize limit order book depth and study basic microstructure signals.",
    "difficulty": "Intermediate",
    "topics": [
      "Market Microstructure",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "hummingbot/hummingbot",
      "url": "https://github.com/hummingbot/hummingbot"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Trading and Exchanges",
      "author": "Larry Harris"
    },
    "paper": {
      "title": "High-Frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-027",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Sentiment-Driven Trading Signal from News Headlines",
    "blurb": "Score news headline sentiment and test it as a trading signal.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-028",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "LSTM-Based Stock Price Predictor",
    "blurb": "Forecast short-term price direction using an LSTM over technical indicators.",
    "difficulty": "Intermediate",
    "topics": [
      "Recurrent Networks",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "jinglescode/time-series-forecasting-pytorch",
      "url": "https://github.com/jinglescode/time-series-forecasting-pytorch"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Deep Learning",
      "author": "Goodfellow, Bengio & Courville"
    },
    "paper": {
      "title": "Long Short-Term Memory",
      "authors": "Hochreiter & Schmidhuber, 1997",
      "url": "https://www.bioinf.jku.at/publications/older/2604.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Huge Stock Market Dataset",
      "url": "https://www.kaggle.com/datasets/borismarjanovic/price-volume-data-for-all-us-stocks-etfs"
    }
  },
  {
    "id": "QF-029",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Robo-Advisor Asset Allocation Dashboard",
    "blurb": "Build a goal-based asset allocation dashboard with risk-profile questionnaires.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "S&P 500 Stock Data",
      "url": "https://www.kaggle.com/datasets/camnugent/sandp500"
    }
  },
  {
    "id": "QF-030",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Credit Default Risk Scoring Model",
    "blurb": "Predict borrower default probability from financial and credit history features.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-031",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Alpha Factor Research Notebook",
    "blurb": "Design, test, and evaluate a custom alpha factor on a stock universe.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-032",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Event-Driven Backtesting Engine from Scratch",
    "blurb": "Build your own event-driven backtester handling orders, fills, and slippage.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "QuantConnect/Lean",
      "url": "https://github.com/QuantConnect/Lean"
    },
    "youtube": {
      "name": "QuantConnect",
      "url": "https://www.youtube.com/@quantconnect"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-033",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Cryptocurrency Trading Bot with Technical Indicators",
    "blurb": "Build a rule-based crypto trading bot combining several technical indicators.",
    "difficulty": "Intermediate",
    "topics": [
      "Cryptocurrency Markets",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-034",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Earnings Call Sentiment Analyzer",
    "blurb": "Extract sentiment and tone shifts from earnings call transcripts.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-035",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Stress Testing Simulator",
    "blurb": "Simulate portfolio performance under historical crisis scenarios and shocks.",
    "difficulty": "Intermediate",
    "topics": [
      "Portfolio Theory",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-036",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Factor Equity Screener",
    "blurb": "Screen and rank stocks on value, quality, and momentum factors.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-037",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Reinforcement Learning Trading Agent",
    "blurb": "Train an RL agent to learn a trading policy on historical market data.",
    "difficulty": "Advanced",
    "topics": [
      "Reinforcement Learning",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "AI4Finance-Foundation/FinRL",
      "url": "https://github.com/AI4Finance-Foundation/FinRL"
    },
    "youtube": {
      "name": "AI4Finance Foundation",
      "url": "https://www.youtube.com/@AI4Finance-Foundation"
    },
    "book": {
      "title": "Reinforcement Learning: An Introduction",
      "author": "Sutton & Barto"
    },
    "paper": {
      "title": "FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading",
      "authors": "Liu et al., 2020",
      "url": "https://arxiv.org/abs/2011.09607"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-038",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "High-Frequency Order Book Simulation",
    "blurb": "Simulate limit order book dynamics for high-frequency strategy research.",
    "difficulty": "Advanced",
    "topics": [
      "Simulation",
      "Market Microstructure",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "hummingbot/hummingbot",
      "url": "https://github.com/hummingbot/hummingbot"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Trading and Exchanges",
      "author": "Larry Harris"
    },
    "paper": {
      "title": "High-Frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-039",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Limit Order Book Market-Making Strategy",
    "blurb": "Design and backtest a simple market-making strategy quoting bid/ask spreads.",
    "difficulty": "Advanced",
    "topics": [
      "Market Microstructure",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "hummingbot/hummingbot",
      "url": "https://github.com/hummingbot/hummingbot"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Trading and Exchanges",
      "author": "Larry Harris"
    },
    "paper": {
      "title": "High-Frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-040",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Vectorized Backtesting Framework",
    "blurb": "Build a fast, fully vectorized backtester for parameter sweeps across strategies.",
    "difficulty": "Advanced",
    "topics": [
      "Backtesting",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "kernc/backtesting.py",
      "url": "https://github.com/kernc/backtesting.py"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Trading Systems and Methods",
      "author": "Perry J. Kaufman"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-041",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Black-Litterman Portfolio Optimization Model",
    "blurb": "Combine market equilibrium with investor views using the Black-Litterman model.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Theory",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "The Black-Litterman Model in Detail",
      "author": "Jay Walters"
    },
    "paper": {
      "title": "Global Portfolio Optimization",
      "authors": "Black & Litterman, 1992",
      "url": "https://www.tandfonline.com/doi/abs/10.2469/faj.v48.n5.28"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-042",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Hierarchical Risk Parity Portfolio Builder",
    "blurb": "Implement HRP portfolio construction using hierarchical clustering of assets.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Theory",
      "Risk Management",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-043",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Financial ML Feature Pipeline (Triple-Barrier Labeling)",
    "blurb": "Build a labeling and feature pipeline following financial ML best practices.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "hudson-and-thames/mlfinlab",
      "url": "https://github.com/hudson-and-thames/mlfinlab"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "The Triple Barrier Method and Meta-Labeling",
      "authors": "López de Prado, 2018",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3257419"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-044",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Cross-Asset Statistical Arbitrage System",
    "blurb": "Extend stat-arb signals across multiple asset classes with risk controls.",
    "difficulty": "Advanced",
    "topics": [
      "Statistical Arbitrage",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "rzhadev1/statarb",
      "url": "https://github.com/rzhadev1/statarb"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Statistical Arbitrage in the U.S. Equities Market",
      "authors": "Avellaneda & Lee, 2010",
      "url": "https://www.tandfonline.com/doi/abs/10.1080/14697680903124632"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-045",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Transformer-Based Market Regime Classifier",
    "blurb": "Classify market regimes (trending, mean-reverting, volatile) using a Transformer model.",
    "difficulty": "Advanced",
    "topics": [
      "Classification",
      "Transformers",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-046",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Market-Making Simulator with Greeks Hedging",
    "blurb": "Simulate an options market-maker that dynamically hedges delta and gamma exposure.",
    "difficulty": "Advanced",
    "topics": [
      "Options Pricing",
      "Market Microstructure",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-047",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Strategy Portfolio Backtesting Platform",
    "blurb": "Combine several strategies into one portfolio-level backtesting platform with allocation logic.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Theory",
      "Backtesting",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-048",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Live Paper-Trading Bot via Broker API",
    "blurb": "Connect a strategy to a broker's paper-trading API for live signal testing.",
    "difficulty": "Advanced",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "QuantConnect/Lean",
      "url": "https://github.com/QuantConnect/Lean"
    },
    "youtube": {
      "name": "QuantConnect",
      "url": "https://www.youtube.com/@quantconnect"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-049",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Factor Investing Research Platform",
    "blurb": "Build a research platform combining alpha factors with a risk model.",
    "difficulty": "Advanced",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-050",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Systematic Crypto Arbitrage Engine",
    "blurb": "Detect and backtest cross-exchange price discrepancies for a crypto arbitrage strategy.",
    "difficulty": "Advanced",
    "topics": [
      "Statistical Arbitrage",
      "Cryptocurrency Markets",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-051",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Kelly Criterion Position Sizing Simulator",
    "blurb": "Simulate bankroll growth under different position-sizing rules versus the Kelly criterion.",
    "difficulty": "Beginner",
    "topics": [
      "Quantitative Modeling",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "pmorissette/bt",
      "url": "https://github.com/pmorissette/bt"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-052",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Covered Call Options Strategy Backtest",
    "blurb": "Backtest a covered-call income strategy against a plain buy-and-hold benchmark.",
    "difficulty": "Beginner",
    "topics": [
      "Backtesting",
      "Options Pricing",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-053",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Correlation-Based Portfolio Diversifier",
    "blurb": "Build a tool that suggests diversifying assets based on rolling correlation.",
    "difficulty": "Beginner",
    "topics": [
      "Portfolio Theory",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "S&P 500 Stock Data",
      "url": "https://www.kaggle.com/datasets/camnugent/sandp500"
    }
  },
  {
    "id": "QF-054",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Turtle Trading Strategy Backtest",
    "blurb": "Implement and backtest the classic breakout-based Turtle trading rules.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-055",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Volatility Breakout Strategy Backtest",
    "blurb": "Backtest a strategy that enters on volatility expansion breakouts.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Volatility Modeling",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-056",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Factor Timing Model Across Market Regimes",
    "blurb": "Test whether factor performance is predictable across different market regimes.",
    "difficulty": "Advanced",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-057",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Volatility Arbitrage Backtester",
    "blurb": "Backtest a strategy that trades gaps between implied and realized volatility.",
    "difficulty": "Advanced",
    "topics": [
      "Backtesting",
      "Options Pricing",
      "Volatility Modeling",
      "Statistical Arbitrage"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-058",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Cross-Sectional Momentum Strategy at Scale",
    "blurb": "Run a cross-sectional momentum strategy across a broad equity universe.",
    "difficulty": "Advanced",
    "topics": [
      "Factor Investing",
      "Quantitative Modeling",
      "Python for Finance"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-059",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Tail-Risk Hedging Simulator",
    "blurb": "Simulate how tail-risk hedges affect portfolio drawdowns during crashes.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Theory",
      "Risk Management",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-060",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Machine-Learning-Driven Factor Selection Pipeline",
    "blurb": "Use ML feature-importance methods to select and weight alpha factors.",
    "difficulty": "Advanced",
    "topics": [
      "Factor Investing",
      "Data Engineering",
      "Quantitative Modeling"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-061",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Historical Volatility Calculator",
    "blurb": "Compute rolling annualized volatility from OHLCV data and compare across tickers.",
    "difficulty": "Beginner",
    "topics": [
      "Volatility",
      "Python for Finance",
      "Market Data"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-062",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Compound Interest & SIP Growth Simulator",
    "blurb": "Model lump-sum vs SIP growth under different return and inflation assumptions.",
    "difficulty": "Beginner",
    "topics": [
      "Time Value of Money",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-063",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "CAPM Beta Estimator",
    "blurb": "Regress a stock's returns against a benchmark index to estimate CAPM beta.",
    "difficulty": "Beginner",
    "topics": [
      "CAPM",
      "Regression",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-064",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Bond Price & Yield-to-Maturity Calculator",
    "blurb": "Price a coupon bond and solve for YTM given market price.",
    "difficulty": "Beginner",
    "topics": [
      "Fixed Income",
      "Python for Finance"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-065",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Payoff Diagram Plotter",
    "blurb": "Plot payoff/profit diagrams for calls, puts, and simple spreads.",
    "difficulty": "Beginner",
    "topics": [
      "Options Pricing",
      "Visualization"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-066",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "VWAP Tracker & Intraday Price Chart",
    "blurb": "Compute and plot volume-weighted average price against intraday candles.",
    "difficulty": "Beginner",
    "topics": [
      "Market Data",
      "Python for Finance"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-067",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Support & Resistance Level Detector",
    "blurb": "Auto-detect swing highs/lows to flag support and resistance zones.",
    "difficulty": "Beginner",
    "topics": [
      "Technical Analysis",
      "Python for Finance"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-068",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Dollar-Cost Averaging vs Lump-Sum Backtester",
    "blurb": "Compare DCA and lump-sum investing outcomes across historical periods.",
    "difficulty": "Beginner",
    "topics": [
      "Backtesting",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-069",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Sector Rotation Tracker",
    "blurb": "Track relative sector ETF performance to visualize rotation cycles.",
    "difficulty": "Beginner",
    "topics": [
      "Market Data",
      "Visualization"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-070",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Gold-Silver Ratio Trend Dashboard",
    "blurb": "Track the gold/silver price ratio and flag historical extremes.",
    "difficulty": "Beginner",
    "topics": [
      "Commodities",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-071",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Currency Pair Volatility Heatmap",
    "blurb": "Build a rolling volatility heatmap across major FX pairs.",
    "difficulty": "Beginner",
    "topics": [
      "FX",
      "Volatility"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-072",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple RSI Overbought/Oversold Screener",
    "blurb": "Screen a stock universe for RSI extremes on a daily schedule.",
    "difficulty": "Beginner",
    "topics": [
      "Technical Analysis",
      "Screening"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-073",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Seasonality Calendar Effects Explorer",
    "blurb": "Test for January effect / day-of-week effects in historical returns.",
    "difficulty": "Beginner",
    "topics": [
      "Market Anomalies",
      "Statistics"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-074",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Index Fund Tracking-Error Analyzer",
    "blurb": "Measure how closely an ETF tracks its benchmark index.",
    "difficulty": "Beginner",
    "topics": [
      "Passive Investing",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-075",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Dividend Discount Model Calculator",
    "blurb": "Value a stock using the Gordon growth dividend discount model.",
    "difficulty": "Beginner",
    "topics": [
      "Valuation",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-076",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "P/E & Valuation Ratio Screener",
    "blurb": "Screen stocks by P/E, P/B and EV/EBITDA against sector medians.",
    "difficulty": "Beginner",
    "topics": [
      "Valuation",
      "Screening"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-077",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Correlation Matrix Across Asset Classes",
    "blurb": "Build a rolling correlation matrix across equities, bonds, gold, and crypto.",
    "difficulty": "Beginner",
    "topics": [
      "Diversification",
      "Statistics"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-078",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Historical Market Crash Event Study",
    "blurb": "Study drawdown and recovery patterns around 2008 and 2020 crashes.",
    "difficulty": "Beginner",
    "topics": [
      "Risk Management",
      "Python for Finance"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-079",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Beta-Weighted Portfolio Risk Snapshot",
    "blurb": "Aggregate position betas into a single portfolio market-risk snapshot.",
    "difficulty": "Beginner",
    "topics": [
      "CAPM",
      "Portfolio Management"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-080",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple Momentum Stock Screener",
    "blurb": "Rank a stock universe by 3/6/12-month price momentum.",
    "difficulty": "Beginner",
    "topics": [
      "Momentum",
      "Screening"
    ],
    "github": {
      "name": "je-suis-tm/quant-trading",
      "url": "https://github.com/je-suis-tm/quant-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-081",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Buy-the-Dip Strategy Backtest",
    "blurb": "Backtest a rule that buys after N% single-day drops.",
    "difficulty": "Beginner",
    "topics": [
      "Backtesting",
      "Python for Finance"
    ],
    "github": {
      "name": "kernc/backtesting.py",
      "url": "https://github.com/kernc/backtesting.py"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Trading Systems and Methods",
      "author": "Perry J. Kaufman"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-082",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Implied Move Calculator",
    "blurb": "Estimate a stock's expected earnings-day move from straddle prices.",
    "difficulty": "Beginner",
    "topics": [
      "Options Pricing",
      "Python for Finance"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-083",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Currency Carry Signal Explorer",
    "blurb": "Rank currency pairs by interest-rate differential as a simple carry signal.",
    "difficulty": "Beginner",
    "topics": [
      "FX",
      "Carry Trade"
    ],
    "github": {
      "name": "ranaroussi/yfinance",
      "url": "https://github.com/ranaroussi/yfinance"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Python for Finance",
      "author": "Yves Hilpisch"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-084",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple Trend-Following Dashboard (200-DMA)",
    "blurb": "Flag assets trading above/below their 200-day moving average.",
    "difficulty": "Beginner",
    "topics": [
      "Trend Following",
      "Technical Analysis"
    ],
    "github": {
      "name": "bukosabino/ta",
      "url": "https://github.com/bukosabino/ta"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Technical Analysis of the Financial Markets",
      "author": "John J. Murphy"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-085",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Rebalancing Simulator",
    "blurb": "Simulate calendar vs threshold rebalancing and compare drift/costs.",
    "difficulty": "Beginner",
    "topics": [
      "Portfolio Management",
      "Python for Finance"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "S&P 500 Stock Data",
      "url": "https://www.kaggle.com/datasets/camnugent/sandp500"
    }
  },
  {
    "id": "QF-086",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "NIFTY 50 Sector Weight Explorer",
    "blurb": "Break down NIFTY 50 index composition and sector weights over time.",
    "difficulty": "Beginner",
    "topics": [
      "Indian Markets",
      "Market Data"
    ],
    "github": {
      "name": "je-suis-tm/quant-trading",
      "url": "https://github.com/je-suis-tm/quant-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "NIFTY-50 Stock Market Data (2000-2021)",
      "url": "https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data"
    }
  },
  {
    "id": "QF-087",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Crypto Volatility vs Equity Volatility Comparator",
    "blurb": "Compare realized volatility of major cryptocurrencies against equity indices.",
    "difficulty": "Beginner",
    "topics": [
      "Crypto",
      "Volatility"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-088",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Options Open Interest & Max Pain Visualizer",
    "blurb": "Plot open interest by strike and estimate the max-pain price.",
    "difficulty": "Beginner",
    "topics": [
      "Options Pricing",
      "Market Data"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-089",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Simple Covered-Call Income Estimator",
    "blurb": "Estimate premium income from monthly covered calls on a holding.",
    "difficulty": "Beginner",
    "topics": [
      "Options Strategies",
      "Income Generation"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-090",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Duration & Convexity Calculator",
    "blurb": "Compute a bond's modified duration and convexity for rate-risk sizing.",
    "difficulty": "Beginner",
    "topics": [
      "Fixed Income",
      "Risk Management"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-091",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Binomial Tree American Option Pricer",
    "blurb": "Price American-style options via a recombining binomial tree.",
    "difficulty": "Intermediate",
    "topics": [
      "Options Pricing",
      "Numerical Methods"
    ],
    "github": {
      "name": "joseprupi/pyOptionPricing",
      "url": "https://github.com/joseprupi/pyOptionPricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "Option Pricing: A Simplified Approach",
      "authors": "Cox, Ross & Rubinstein, 1979",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X79900151"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-092",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Monte Carlo Option Pricing Engine",
    "blurb": "Price European and path-dependent options via Monte Carlo simulation.",
    "difficulty": "Intermediate",
    "topics": [
      "Options Pricing",
      "Monte Carlo"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-093",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Implied Volatility Surface Builder (Live Data)",
    "blurb": "Pull a live options chain and interpolate a full IV surface.",
    "difficulty": "Intermediate",
    "topics": [
      "Volatility Surface",
      "Options Pricing"
    ],
    "github": {
      "name": "saeedbidi/option_pricing",
      "url": "https://github.com/saeedbidi/option_pricing"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Options, Futures, and Other Derivatives",
      "author": "John C. Hull"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Historical Options Data (Vol Surface)",
      "url": "https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020"
    }
  },
  {
    "id": "QF-094",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Delta-Hedging Simulator",
    "blurb": "Simulate rebalancing a delta-hedged option position over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Options Pricing",
      "Risk Management"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-095",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Straddle/Strangle Strategy Backtest",
    "blurb": "Backtest volatility strategies around earnings announcements.",
    "difficulty": "Intermediate",
    "topics": [
      "Options Strategies",
      "Backtesting"
    ],
    "github": {
      "name": "CarloLepelaars/blackscholes",
      "url": "https://github.com/CarloLepelaars/blackscholes"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.jstor.org/stable/1831029"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-096",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Kalman Filter Dynamic Hedge Ratio",
    "blurb": "Use a Kalman filter to continuously re-estimate a pairs hedge ratio.",
    "difficulty": "Intermediate",
    "topics": [
      "Statistical Arbitrage",
      "Time Series"
    ],
    "github": {
      "name": "hudson-and-thames/arbitrage_research",
      "url": "https://github.com/hudson-and-thames/arbitrage_research"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "A New Approach to Linear Filtering and Prediction Problems",
      "authors": "Kalman, 1960",
      "url": "https://asmedigitalcollection.asme.org/fluidsengineering/article/82/1/35/397706"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-097",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Ornstein-Uhlenbeck Mean-Reversion Model",
    "blurb": "Fit an OU process to a spread and derive optimal entry/exit bands.",
    "difficulty": "Intermediate",
    "topics": [
      "Mean Reversion",
      "Stochastic Processes"
    ],
    "github": {
      "name": "muMAJJI/Trading---Pair-Trading",
      "url": "https://github.com/muMAJJI/Trading---Pair-Trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Pairs Trading: Performance of a Relative-Value Arbitrage Rule",
      "authors": "Gatev, Goetzmann & Rouwenhorst, 2006",
      "url": "https://academic.oup.com/rfs/article/19/3/797/1646694"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-098",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Pair Cointegration Scanner",
    "blurb": "Scan a stock universe for cointegrated pairs using the Johansen test.",
    "difficulty": "Intermediate",
    "topics": [
      "Statistical Arbitrage",
      "Time Series"
    ],
    "github": {
      "name": "muMAJJI/Trading---Pair-Trading",
      "url": "https://github.com/muMAJJI/Trading---Pair-Trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Pairs Trading: Performance of a Relative-Value Arbitrage Rule",
      "authors": "Gatev, Goetzmann & Rouwenhorst, 2006",
      "url": "https://academic.oup.com/rfs/article/19/3/797/1646694"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-099",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Cross-Sectional Momentum Factor Backtest",
    "blurb": "Rank and long/short a stock universe by trailing momentum.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Backtesting"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-100",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Fama-French 5-Factor Attribution",
    "blurb": "Decompose a portfolio's returns into Fama-French 5-factor exposures.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Regression"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-101",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Factor Equity Screener (Value+Quality+Momentum)",
    "blurb": "Build a composite factor score screener across three style factors.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Screening"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-102",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "GARCH(1,1) Volatility Forecast Dashboard",
    "blurb": "Fit GARCH models and forecast next-period volatility with confidence bands.",
    "difficulty": "Intermediate",
    "topics": [
      "Volatility Forecasting",
      "Time Series"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Analysis of Financial Time Series",
      "author": "Ruey S. Tsay"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-103",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "ARIMA Return Forecasting Model",
    "blurb": "Fit ARIMA models to returns and evaluate forecast accuracy out-of-sample.",
    "difficulty": "Intermediate",
    "topics": [
      "Time Series",
      "Forecasting"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Analysis of Financial Time Series",
      "author": "Ruey S. Tsay"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-104",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Regime Detection with Hidden Markov Models",
    "blurb": "Classify bull/bear/choppy regimes from returns using an HMM.",
    "difficulty": "Intermediate",
    "topics": [
      "Regime Detection",
      "Statistical Modeling"
    ],
    "github": {
      "name": "hmmlearn/hmmlearn",
      "url": "https://github.com/hmmlearn/hmmlearn"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Analysis of Financial Time Series",
      "author": "Ruey S. Tsay"
    },
    "paper": {
      "title": "A Tutorial on Hidden Markov Models",
      "authors": "Rabiner, 1989",
      "url": "https://ieeexplore.ieee.org/document/18626"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-105",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "PCA on the Yield Curve",
    "blurb": "Extract level/slope/curvature factors from Treasury yields via PCA.",
    "difficulty": "Intermediate",
    "topics": [
      "Fixed Income",
      "Dimensionality Reduction"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-106",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Clustering Stocks by Return Profile",
    "blurb": "Use k-means/hierarchical clustering to group stocks by risk-return behavior.",
    "difficulty": "Intermediate",
    "topics": [
      "Clustering",
      "Portfolio Management"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-107",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Machine-Learning Direction Classifier (XGBoost)",
    "blurb": "Predict next-day up/down direction from technical features with XGBoost.",
    "difficulty": "Intermediate",
    "topics": [
      "Machine Learning",
      "Feature Engineering"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-108",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Feature-Importance Factor Selection",
    "blurb": "Use a random forest's feature importances to shortlist candidate alpha factors.",
    "difficulty": "Intermediate",
    "topics": [
      "Machine Learning",
      "Factor Investing"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-109",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "News Headline Sentiment Trading Signal",
    "blurb": "Score financial news headlines with FinBERT and test the signal's predictive power.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Sentiment Analysis"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-110",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Earnings Call Transcript Tone Analyzer",
    "blurb": "Extract sentiment/tone shifts from earnings call transcripts.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Sentiment Analysis"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-111",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Reddit/Twitter Sentiment vs Next-Day Return",
    "blurb": "Test whether social sentiment scores predict next-day stock returns.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Alternative Data"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-112",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Vectorized Backtesting Engine (NumPy/Pandas)",
    "blurb": "Build a fast vectorized backtester and benchmark it against an event-driven one.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Performance Engineering"
    ],
    "github": {
      "name": "kernc/backtesting.py",
      "url": "https://github.com/kernc/backtesting.py"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Trading Systems and Methods",
      "author": "Perry J. Kaufman"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-113",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Walk-Forward Optimization Framework",
    "blurb": "Implement rolling walk-forward parameter re-optimization for a strategy.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Overfitting Control"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-114",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Transaction-Cost-Aware Backtest",
    "blurb": "Add realistic slippage, spread, and commission models to a backtest.",
    "difficulty": "Intermediate",
    "topics": [
      "Backtesting",
      "Market Microstructure"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-115",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Turtle Trading Strategy Backtest (Donchian Breakout)",
    "blurb": "Recreate the classic Turtle trend-following breakout system.",
    "difficulty": "Intermediate",
    "topics": [
      "Trend Following",
      "Backtesting"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-116",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Volatility Breakout Strategy Backtest",
    "blurb": "Backtest a strategy that enters on volatility expansion breakouts.",
    "difficulty": "Intermediate",
    "topics": [
      "Volatility",
      "Backtesting"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-117",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Timeframe Strategy Combiner",
    "blurb": "Combine daily-trend and intraday-entry signals into one strategy.",
    "difficulty": "Intermediate",
    "topics": [
      "Strategy Design",
      "Backtesting"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-118",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Vol-Targeting Position Sizing Engine",
    "blurb": "Size positions to target constant portfolio volatility over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Portfolio Management"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-119",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Robo-Advisor Rebalancing Engine",
    "blurb": "Build a goal-based portfolio allocator with automatic rebalancing rules.",
    "difficulty": "Intermediate",
    "topics": [
      "Portfolio Management",
      "Robo-Advisory"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "QuantPy (Chad Gray)",
      "url": "https://www.youtube.com/@quantpy"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.jstor.org/stable/2975974"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "S&P 500 Stock Data",
      "url": "https://www.kaggle.com/datasets/camnugent/sandp500"
    }
  },
  {
    "id": "QF-120",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Credit Scoring Model with Explainability",
    "blurb": "Train a credit-default classifier and explain predictions with SHAP.",
    "difficulty": "Intermediate",
    "topics": [
      "Credit Risk",
      "Explainable AI"
    ],
    "github": {
      "name": "shap/shap",
      "url": "https://github.com/shap/shap"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Interpretable Machine Learning",
      "author": "Christoph Molnar"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-121",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Crypto Trend-Following Bot (Freqtrade)",
    "blurb": "Build and backtest a crypto trend-following strategy on Freqtrade.",
    "difficulty": "Intermediate",
    "topics": [
      "Crypto",
      "Algorithmic Trading"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-122",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Cross-Exchange Crypto Arbitrage Scanner",
    "blurb": "Scan multiple exchanges for exploitable price gaps in the same asset.",
    "difficulty": "Intermediate",
    "topics": [
      "Crypto",
      "Arbitrage"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "Cryptocurrency Historical Prices",
      "url": "https://www.kaggle.com/datasets/sudalairajkumar/cryptocurrencypricehistory"
    }
  },
  {
    "id": "QF-123",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "NSE Pairs Trading Strategy (Indian Equities)",
    "blurb": "Apply cointegration-based pairs trading to NSE-listed stocks.",
    "difficulty": "Intermediate",
    "topics": [
      "Indian Markets",
      "Statistical Arbitrage"
    ],
    "github": {
      "name": "je-suis-tm/quant-trading",
      "url": "https://github.com/je-suis-tm/quant-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "NIFTY-50 Stock Market Data (2000-2021)",
      "url": "https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data"
    }
  },
  {
    "id": "QF-124",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "NIFTY Futures Basis Arbitrage Explorer",
    "blurb": "Study the cash-futures basis on NIFTY and flag arbitrage windows.",
    "difficulty": "Intermediate",
    "topics": [
      "Indian Markets",
      "Arbitrage"
    ],
    "github": {
      "name": "je-suis-tm/quant-trading",
      "url": "https://github.com/je-suis-tm/quant-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ],
    "kaggle": {
      "name": "NIFTY-50 Stock Market Data (2000-2021)",
      "url": "https://www.kaggle.com/datasets/rohanrao/nifty50-stock-market-data"
    }
  },
  {
    "id": "QF-125",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Stress-Testing Simulator (Scenario Shocks)",
    "blurb": "Apply historical and hypothetical shocks to a portfolio and measure impact.",
    "difficulty": "Intermediate",
    "topics": [
      "Risk Management",
      "Scenario Analysis"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results"
    ]
  },
  {
    "id": "QF-126",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Heston Stochastic Volatility Calibration",
    "blurb": "Calibrate the Heston model to a live options surface via optimization.",
    "difficulty": "Advanced",
    "topics": [
      "Stochastic Volatility",
      "Calibration"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "A Closed-Form Solution for Options with Stochastic Volatility",
      "authors": "Heston, 1993",
      "url": "https://www.jstor.org/stable/2962057"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Paper-trade it before ever considering real capital"
    ]
  },
  {
    "id": "QF-127",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "SABR Volatility Model Calibration",
    "blurb": "Fit the SABR model to an implied-vol smile for a given tenor.",
    "difficulty": "Advanced",
    "topics": [
      "Volatility Surface",
      "Calibration"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "A Closed-Form Solution for Options with Stochastic Volatility",
      "authors": "Heston, 1993",
      "url": "https://www.jstor.org/stable/2962057"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-128",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Dupire Local Volatility Surface Construction",
    "blurb": "Derive a local volatility surface from market option prices.",
    "difficulty": "Advanced",
    "topics": [
      "Volatility Surface",
      "PDE Methods"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "Pricing of Options on Assets with Stochastic Volatility",
      "authors": "Hull & White, 1987",
      "url": "https://www.jstor.org/stable/2328253"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-129",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Exotic Option Pricer (Asian, Barrier, Lookback)",
    "blurb": "Price path-dependent exotic options via Monte Carlo.",
    "difficulty": "Advanced",
    "topics": [
      "Exotic Options",
      "Monte Carlo"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "Pricing of Options on Assets with Stochastic Volatility",
      "authors": "Hull & White, 1987",
      "url": "https://www.jstor.org/stable/2328253"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-130",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "American Option Pricing via Longstaff-Schwartz",
    "blurb": "Implement the LSM regression-based method for early-exercise options.",
    "difficulty": "Advanced",
    "topics": [
      "Options Pricing",
      "Numerical Methods"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "Pricing of Options on Assets with Stochastic Volatility",
      "authors": "Hull & White, 1987",
      "url": "https://www.jstor.org/stable/2328253"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-131",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Finite-Difference PDE Option Pricing Solver",
    "blurb": "Solve the Black-Scholes PDE via an explicit/implicit finite-difference scheme.",
    "difficulty": "Advanced",
    "topics": [
      "PDE Methods",
      "Options Pricing"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "Pricing of Options on Assets with Stochastic Volatility",
      "authors": "Hull & White, 1987",
      "url": "https://www.jstor.org/stable/2328253"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-132",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Interest Rate Model Calibration (Vasicek/CIR/Hull-White)",
    "blurb": "Calibrate short-rate models to a market yield curve.",
    "difficulty": "Advanced",
    "topics": [
      "Fixed Income",
      "Calibration"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-133",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Credit Default Swap Pricing Model",
    "blurb": "Build a CDS pricer from a hazard-rate curve and discount curve.",
    "difficulty": "Advanced",
    "topics": [
      "Credit Derivatives",
      "Fixed Income"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Implementing QuantLib",
      "author": "Luigi Ballabio"
    },
    "paper": {
      "title": "A Theory of the Term Structure of Interest Rates",
      "authors": "Cox, Ingersoll & Ross, 1985",
      "url": "https://www.jstor.org/stable/1911242"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-134",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Jump-Diffusion (Merton) Model Calibration",
    "blurb": "Calibrate a jump-diffusion model to capture fat-tailed return behavior.",
    "difficulty": "Advanced",
    "topics": [
      "Stochastic Processes",
      "Calibration"
    ],
    "github": {
      "name": "domokane/FinancePy",
      "url": "https://github.com/domokane/FinancePy"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Paul Wilmott on Quantitative Finance",
      "author": "Paul Wilmott"
    },
    "paper": {
      "title": "A Closed-Form Solution for Options with Stochastic Volatility",
      "authors": "Heston, 1993",
      "url": "https://www.jstor.org/stable/2962057"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-135",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Deep Hedging Neural Network",
    "blurb": "Train a neural network to hedge an options book under transaction costs.",
    "difficulty": "Advanced",
    "topics": [
      "Deep Learning",
      "Options Hedging"
    ],
    "github": {
      "name": "hansbuehler/deephedging",
      "url": "https://github.com/hansbuehler/deephedging"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "Deep Hedging",
      "authors": "Buehler, Gonon, Teichmann & Wood, 2019",
      "url": "https://arxiv.org/abs/1802.03042"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-136",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Copula-Based Portfolio Dependency Model",
    "blurb": "Model joint tail dependence across assets with copulas for risk analysis.",
    "difficulty": "Advanced",
    "topics": [
      "Copulas",
      "Tail Risk"
    ],
    "github": {
      "name": "sdv-dev/Copulas",
      "url": "https://github.com/sdv-dev/Copulas"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Quantitative Risk Management",
      "author": "McNeil, Frey & Embrechts"
    },
    "paper": {
      "title": "An Introduction to Copulas for Risk Management",
      "authors": "Embrechts, Lindskog & McNeil, 2003",
      "url": "https://people.math.ethz.ch/~embrecht/ftp/copchapter.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-137",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Extreme Value Theory for Tail Risk",
    "blurb": "Fit a GPD to portfolio losses to estimate extreme VaR/CVaR.",
    "difficulty": "Advanced",
    "topics": [
      "Tail Risk",
      "Statistics"
    ],
    "github": {
      "name": "bashtage/arch",
      "url": "https://github.com/bashtage/arch"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "Generalized Autoregressive Conditional Heteroskedasticity",
      "authors": "Bollerslev, 1986",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304407686900631"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-138",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Barra-Style Multi-Factor Risk Model",
    "blurb": "Build a cross-sectional factor risk model to decompose portfolio variance.",
    "difficulty": "Advanced",
    "topics": [
      "Risk Modeling",
      "Factor Investing"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Empirical Asset Pricing: The Cross Section of Stock Returns",
      "author": "Bali, Engle & Murray"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0304405X93900235"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-139",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Reinforcement Learning Portfolio Allocator (FinRL)",
    "blurb": "Train an RL agent to dynamically allocate across a multi-asset portfolio.",
    "difficulty": "Advanced",
    "topics": [
      "Reinforcement Learning",
      "Portfolio Management"
    ],
    "github": {
      "name": "AI4Finance-Foundation/FinRL",
      "url": "https://github.com/AI4Finance-Foundation/FinRL"
    },
    "youtube": {
      "name": "AI4Finance Foundation",
      "url": "https://www.youtube.com/@AI4Finance-Foundation"
    },
    "book": {
      "title": "Reinforcement Learning: An Introduction",
      "author": "Sutton & Barto"
    },
    "paper": {
      "title": "FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading",
      "authors": "Liu et al., 2020",
      "url": "https://arxiv.org/abs/2011.09607"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-140",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Limit Order Book Market-Making Bot",
    "blurb": "Build an inventory-aware market-making strategy on a simulated order book.",
    "difficulty": "Advanced",
    "topics": [
      "Market Microstructure",
      "Market Making"
    ],
    "github": {
      "name": "hummingbot/hummingbot",
      "url": "https://github.com/hummingbot/hummingbot"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Trading and Exchanges",
      "author": "Larry Harris"
    },
    "paper": {
      "title": "High-Frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-141",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Optimal Execution (Almgren-Chriss)",
    "blurb": "Implement the Almgren-Chriss framework to minimize execution cost vs risk.",
    "difficulty": "Advanced",
    "topics": [
      "Execution Algorithms",
      "Market Microstructure"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading and DMA",
      "author": "Barry Johnson"
    },
    "paper": {
      "title": "Optimal Execution of Portfolio Transactions",
      "authors": "Almgren & Chriss, 2001",
      "url": "https://www.math.nyu.edu/~almgren/papers/optliq.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-142",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Order Flow Toxicity (VPIN) Estimator",
    "blurb": "Estimate the VPIN metric to flag toxic order flow periods.",
    "difficulty": "Advanced",
    "topics": [
      "Market Microstructure",
      "Risk Management"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Algorithmic Trading and DMA",
      "author": "Barry Johnson"
    },
    "paper": {
      "title": "Optimal Execution of Portfolio Transactions",
      "authors": "Almgren & Chriss, 2001",
      "url": "https://www.math.nyu.edu/~almgren/papers/optliq.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-143",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Genetic Algorithm Strategy Optimizer",
    "blurb": "Use a genetic algorithm to search a strategy's parameter space.",
    "difficulty": "Advanced",
    "topics": [
      "Optimization",
      "Strategy Design"
    ],
    "github": {
      "name": "mementum/backtrader",
      "url": "https://github.com/mementum/backtrader"
    },
    "youtube": {
      "name": "CodeTrading",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Algorithmic Trading: Winning Strategies and Their Rationale",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Empirical Analysis of Momentum Trading Strategies",
      "authors": "Jegadeesh & Titman, 1993",
      "url": "https://www.jstor.org/stable/2328882"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-144",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Bayesian Optimization for Strategy Hyperparameters",
    "blurb": "Tune strategy hyperparameters with Bayesian optimization instead of grid search.",
    "difficulty": "Advanced",
    "topics": [
      "Optimization",
      "Bayesian Methods"
    ],
    "github": {
      "name": "pymc-devs/pymc",
      "url": "https://github.com/pymc-devs/pymc"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Probabilistic Programming in Python using PyMC3",
      "authors": "Salvatier, Wiecki & Fonnesbeck, 2016",
      "url": "https://peerj.com/articles/cs-55/"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-145",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Graph Neural Network on Stock Correlation Network",
    "blurb": "Model a stock universe as a graph and predict returns with a GNN.",
    "difficulty": "Advanced",
    "topics": [
      "Graph Neural Networks",
      "Deep Learning"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-146",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "FOMC Statement Sentiment & Rate-Path Model",
    "blurb": "Extract policy-tone shifts from Fed statements with NLP and link to rate expectations.",
    "difficulty": "Advanced",
    "topics": [
      "NLP",
      "Macro Finance"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos López de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-147",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Systemic Risk / Interbank Contagion Network Model",
    "blurb": "Simulate loss contagion through a network of interlinked balance sheets.",
    "difficulty": "Advanced",
    "topics": [
      "Systemic Risk",
      "Network Models"
    ],
    "github": {
      "name": "sdv-dev/Copulas",
      "url": "https://github.com/sdv-dev/Copulas"
    },
    "youtube": {
      "name": "QuantInsti (Quantra)",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Quantitative Risk Management",
      "author": "McNeil, Frey & Embrechts"
    },
    "paper": {
      "title": "An Introduction to Copulas for Risk Management",
      "authors": "Embrechts, Lindskog & McNeil, 2003",
      "url": "https://people.math.ethz.ch/~embrecht/ftp/copchapter.pdf"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-148",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Multi-Strategy Capital Allocation Framework",
    "blurb": "Allocate capital across several uncorrelated strategies using risk budgeting.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Management",
      "Risk Budgeting"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-149",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "Portfolio Insurance (CPPI) Strategy Simulator",
    "blurb": "Simulate a constant-proportion portfolio insurance overlay through a drawdown.",
    "difficulty": "Advanced",
    "topics": [
      "Portfolio Management",
      "Risk Management"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Active Portfolio Management",
      "author": "Grinold & Kahn"
    },
    "paper": {
      "title": "Building Diversified Portfolios that Outperform Out-of-Sample",
      "authors": "López de Prado, 2016",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2708678"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "QF-150",
    "category": "quant-finance",
    "categoryLabel": "Quant Finance",
    "title": "WorldQuant BRAIN-Style Alpha Expression Backtester",
    "blurb": "Build a mini alpha-expression engine and backtester inspired by BRAIN's simulation environment.",
    "difficulty": "Advanced",
    "topics": [
      "Alpha Research",
      "Backtesting"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Machine Learning for Algorithmic Trading",
      "author": "Stefan Jansen"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Pull historical price/fundamental data",
      "Define the strategy's entry/exit rules precisely",
      "Backtest against a benchmark with realistic costs/slippage",
      "Check risk metrics — Sharpe, max drawdown, volatility",
      "Walk-forward or out-of-sample test before trusting results",
      "Compare fitted parameters against a second calibration method"
    ]
  },
  {
    "id": "DS-061",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "NIFTY 50 Historical Price EDA",
    "blurb": "Explore trends, volatility clusters, and drawdowns in NIFTY 50 index history.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Indian Markets"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-062",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Coffee Price Trend Explorer",
    "blurb": "Visualize historical coffee commodity price trends and seasonality.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-063",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "World University Rankings Explorer",
    "blurb": "Compare universities across ranking metrics and regions over time.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-064",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Smartphone Sales Trend Dashboard",
    "blurb": "Track smartphone vendor market share trends by quarter and region.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-065",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Netflix vs Disney+ Content Library Comparison",
    "blurb": "Compare genre, rating, and release-year mix across streaming libraries.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-066",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Coffee Consumption Explorer",
    "blurb": "Explore per-capita coffee consumption trends across countries.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-067",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Airline On-Time Performance Explorer",
    "blurb": "Explore delay causes and on-time rates across airlines and airports.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-068",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Renewable Energy Adoption Dashboard",
    "blurb": "Track renewable energy share by country over the past two decades.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-069",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Board Game Ratings Explorer (BoardGameGeek)",
    "blurb": "Analyze rating and complexity trends across board game categories.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-070",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Coffee Shop Chain Expansion Map",
    "blurb": "Map store-count growth of major coffee chains across countries.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Geo-Spatial"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-071",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Steam Game Reviews & Playtime Explorer",
    "blurb": "Explore review sentiment vs playtime across a catalog of Steam games.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Data Wrangling"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-072",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Literacy Rate Trend Dashboard",
    "blurb": "Visualize literacy-rate progress by country and gender over time.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-073",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Marathon World Record Progression Explorer",
    "blurb": "Chart the progression of marathon world records over the last century.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-074",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Startup Unicorn Tracker",
    "blurb": "Explore unicorn company counts, valuations, and sectors by country.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-075",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Fast Food Nutrition Facts Explorer",
    "blurb": "Compare calorie and nutrition profiles across fast-food menu items.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-076",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Indian Startup Funding Landscape (2015-2023)",
    "blurb": "Explore sector, city, and stage trends in Indian startup funding rounds.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Dashboarding",
      "Indian Markets"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-077",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "SQL Practice: Retail Sales Query Workbook",
    "blurb": "Practice window functions, joins, and CTEs on a retail sales schema.",
    "difficulty": "Intermediate",
    "topics": [
      "SQL",
      "Data Wrangling"
    ],
    "github": {
      "name": "gvwilson/sql-tutorial",
      "url": "https://github.com/gvwilson/sql-tutorial"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "SQL for Data Analysis",
      "author": "Cathy Tanimura"
    },
    "paper": {
      "title": "A Relational Model of Data for Large Shared Data Banks",
      "authors": "Codd, 1970",
      "url": "https://dl.acm.org/doi/10.1145/362384.362685"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-078",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "SQL Practice: HR Analytics Query Workbook",
    "blurb": "Write analytical SQL queries for headcount, attrition, and pay-band analysis.",
    "difficulty": "Intermediate",
    "topics": [
      "SQL",
      "Data Wrangling"
    ],
    "github": {
      "name": "gvwilson/sql-tutorial",
      "url": "https://github.com/gvwilson/sql-tutorial"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "SQL for Data Analysis",
      "author": "Cathy Tanimura"
    },
    "paper": {
      "title": "A Relational Model of Data for Large Shared Data Banks",
      "authors": "Codd, 1970",
      "url": "https://dl.acm.org/doi/10.1145/362384.362685"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-079",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Multi-City Weather Pattern Dashboard",
    "blurb": "Build an interactive dashboard comparing weather patterns across cities.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "APIs"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Visualization Analysis and Design",
      "authors": "Tamara Munzner, 2014",
      "url": "https://www.cs.ubc.ca/~tmm/vadbook/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-080",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Job Postings Skills-Demand Dashboard",
    "blurb": "Scrape/parse job postings to surface trending in-demand skills.",
    "difficulty": "Intermediate",
    "topics": [
      "Web Scraping",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-081",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "App Store Rating Trends A/B Comparison",
    "blurb": "Compare rating trends across app updates using an A/B-style framework.",
    "difficulty": "Intermediate",
    "topics": [
      "A/B Testing",
      "Statistics"
    ],
    "github": {
      "name": "microsoft/r-causal-inference",
      "url": "https://github.com/microsoft/EconML"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Trustworthy Online Controlled Experiments",
      "author": "Kohavi, Tang & Xu"
    },
    "paper": {
      "title": "Overlapping Experiment Infrastructure at Google",
      "authors": "Tang et al., 2010",
      "url": "https://research.google/pubs/pub36500/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-082",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "E-Commerce Checkout Funnel Anomaly Detector",
    "blurb": "Detect anomalous drop-off spikes in a checkout funnel over time.",
    "difficulty": "Intermediate",
    "topics": [
      "Anomaly Detection",
      "Funnel Analysis"
    ],
    "github": {
      "name": "yzhao062/pyod",
      "url": "https://github.com/yzhao062/pyod"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Outlier Analysis",
      "author": "Charu C. Aggarwal"
    },
    "paper": {
      "title": "Isolation Forest",
      "authors": "Liu, Ting & Zhou, 2008",
      "url": "https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/icdm08b.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-083",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Server Log Anomaly Detection Dashboard",
    "blurb": "Flag unusual request patterns in web server logs using statistical methods.",
    "difficulty": "Intermediate",
    "topics": [
      "Anomaly Detection",
      "Time Series"
    ],
    "github": {
      "name": "yzhao062/pyod",
      "url": "https://github.com/yzhao062/pyod"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Outlier Analysis",
      "author": "Charu C. Aggarwal"
    },
    "paper": {
      "title": "Isolation Forest",
      "authors": "Liu, Ting & Zhou, 2008",
      "url": "https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/icdm08b.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-084",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Restaurant Delivery Time Prediction EDA",
    "blurb": "Explore factors driving delivery-time variance ahead of a modeling stage.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Feature Engineering"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-085",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Public Transit On-Time Performance Dashboard",
    "blurb": "Build a dashboard tracking bus/train punctuality by route and time of day.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Geo-Spatial"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-086",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Customer Support Response-Time SLA Dashboard",
    "blurb": "Track SLA compliance and response-time trends across support tickets.",
    "difficulty": "Intermediate",
    "topics": [
      "Dashboarding",
      "Operations Analytics"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-087",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Real-Time Cryptocurrency Price Dashboard",
    "blurb": "Build a live-updating dashboard pulling prices from a crypto API.",
    "difficulty": "Intermediate",
    "topics": [
      "Real-Time Data",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-088",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Retail Store Location Site-Selection Analysis",
    "blurb": "Score candidate store locations using demographic and foot-traffic data.",
    "difficulty": "Intermediate",
    "topics": [
      "Geo-Spatial",
      "Decision Analytics"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-089",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Movie Box Office Revenue Forecasting EDA",
    "blurb": "Explore pre-release features that correlate with opening-weekend revenue.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Forecasting"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-090",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Shipping Container Rate Dashboard",
    "blurb": "Track freight-rate trends across major shipping routes.",
    "difficulty": "Intermediate",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-091",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "News Headline Topic Trend Tracker",
    "blurb": "Cluster and trend news headline topics over time from an RSS/API feed.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Dashboarding"
    ],
    "github": {
      "name": "plotly/dash",
      "url": "https://github.com/plotly/dash"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Visualization Analysis and Design",
      "authors": "Tamara Munzner, 2014",
      "url": "https://www.cs.ubc.ca/~tmm/vadbook/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-092",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Data Quality Monitoring Pipeline (Great Expectations)",
    "blurb": "Set up automated data-quality checks that alert on schema/statistics drift.",
    "difficulty": "Advanced",
    "topics": [
      "Data Quality",
      "Pipelines"
    ],
    "github": {
      "name": "great-expectations/great_expectations",
      "url": "https://github.com/great-expectations/great_expectations"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-093",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "End-to-End ELT Pipeline with dbt",
    "blurb": "Build a modular ELT pipeline with staging, intermediate, and mart layers.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "dbt"
    ],
    "github": {
      "name": "apache/airflow",
      "url": "https://github.com/apache/airflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-094",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Real-Time Clickstream Analytics Pipeline",
    "blurb": "Stream and aggregate clickstream events for near-real-time dashboards.",
    "difficulty": "Advanced",
    "topics": [
      "Streaming",
      "Data Engineering"
    ],
    "github": {
      "name": "apache/spark",
      "url": "https://github.com/apache/spark"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "Kafka: A Distributed Messaging System for Log Processing",
      "authors": "Kreps, Narkhede & Rao, 2011",
      "url": "https://notes.stephenholiday.com/Kafka.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-095",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Multi-Source Marketing Attribution Model",
    "blurb": "Build a data pipeline that unifies ad-spend and conversion data for attribution.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Marketing Analytics"
    ],
    "github": {
      "name": "apache/airflow",
      "url": "https://github.com/apache/airflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-096",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Data Warehouse Star-Schema Design Project",
    "blurb": "Design and populate a star-schema warehouse for a retail sales dataset.",
    "difficulty": "Advanced",
    "topics": [
      "Data Modeling",
      "Data Engineering"
    ],
    "github": {
      "name": "apache/airflow",
      "url": "https://github.com/apache/airflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-097",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Causal Inference: Uplift from a Marketing Campaign",
    "blurb": "Estimate the causal lift of a campaign using a quasi-experimental design.",
    "difficulty": "Advanced",
    "topics": [
      "Causal Inference",
      "A/B Testing"
    ],
    "github": {
      "name": "microsoft/r-causal-inference",
      "url": "https://github.com/microsoft/EconML"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Trustworthy Online Controlled Experiments",
      "author": "Kohavi, Tang & Xu"
    },
    "paper": {
      "title": "Overlapping Experiment Infrastructure at Google",
      "authors": "Tang et al., 2010",
      "url": "https://research.google/pubs/pub36500/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-098",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Geo-Spatial Delivery Route Optimization",
    "blurb": "Optimize multi-stop delivery routes using geo-spatial clustering and TSP heuristics.",
    "difficulty": "Advanced",
    "topics": [
      "Geo-Spatial",
      "Optimization"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-099",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Automated Anomaly-Alerting System for KPIs",
    "blurb": "Build a monitoring system that flags KPI deviations and pages an alert.",
    "difficulty": "Advanced",
    "topics": [
      "Anomaly Detection",
      "Monitoring"
    ],
    "github": {
      "name": "yzhao062/pyod",
      "url": "https://github.com/yzhao062/pyod"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Outlier Analysis",
      "author": "Charu C. Aggarwal"
    },
    "paper": {
      "title": "Isolation Forest",
      "authors": "Liu, Ting & Zhou, 2008",
      "url": "https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/icdm08b.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-100",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Synthetic Data Generation for Privacy-Safe Analytics",
    "blurb": "Generate statistically-representative synthetic data from a sensitive dataset.",
    "difficulty": "Advanced",
    "topics": [
      "Synthetic Data",
      "Privacy"
    ],
    "github": {
      "name": "great-expectations/great_expectations",
      "url": "https://github.com/great-expectations/great_expectations"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-101",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Full-Stack Analytics Case Study: Airbnb City Expansion",
    "blurb": "Combine EDA, geo-analysis, and pricing insight into one end-to-end case study.",
    "difficulty": "Advanced",
    "topics": [
      "Case Study",
      "Full-Stack Analytics"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-102",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Multi-Year Global Trade Flow Dashboard",
    "blurb": "Visualize bilateral trade flows and shifts across major economies.",
    "difficulty": "Advanced",
    "topics": [
      "Dashboarding",
      "Geo-Spatial"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-103",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Hospital Bed-Capacity Forecasting Dashboard",
    "blurb": "Forecast short-term hospital bed demand from admission trend data.",
    "difficulty": "Advanced",
    "topics": [
      "Forecasting",
      "Healthcare Analytics"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-104",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Retail Inventory Optimization Dashboard",
    "blurb": "Build a dashboard recommending reorder points from demand variability.",
    "difficulty": "Advanced",
    "topics": [
      "Operations Analytics",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-105",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Election Polling Aggregator & Trend Model",
    "blurb": "Aggregate multiple polls into a weighted trend estimate with uncertainty bands.",
    "difficulty": "Advanced",
    "topics": [
      "Statistics",
      "Forecasting"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-106",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Water Usage & Drought Risk Dashboard",
    "blurb": "Track regional water-usage trends against historical drought indicators.",
    "difficulty": "Advanced",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-107",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "A/B Test Sample-Size & Power Calculator Tool",
    "blurb": "Build a reusable tool for pre-registering experiment sample sizes.",
    "difficulty": "Advanced",
    "topics": [
      "A/B Testing",
      "Statistics"
    ],
    "github": {
      "name": "microsoft/r-causal-inference",
      "url": "https://github.com/microsoft/EconML"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Trustworthy Online Controlled Experiments",
      "author": "Kohavi, Tang & Xu"
    },
    "paper": {
      "title": "Overlapping Experiment Infrastructure at Google",
      "authors": "Tang et al., 2010",
      "url": "https://research.google/pubs/pub36500/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-108",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Customer Journey Funnel Attribution Dashboard",
    "blurb": "Attribute conversions across multi-touch customer journey paths.",
    "difficulty": "Advanced",
    "topics": [
      "Marketing Analytics",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-109",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Full Data Pipeline: Kaggle-to-Dashboard Automation",
    "blurb": "Automate ingestion, transformation, and dashboard refresh from a raw Kaggle source.",
    "difficulty": "Advanced",
    "topics": [
      "Data Engineering",
      "Automation"
    ],
    "github": {
      "name": "apache/airflow",
      "url": "https://github.com/apache/airflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Fundamentals of Data Engineering",
      "author": "Reis & Housley"
    },
    "paper": {
      "title": "MapReduce: Simplified Data Processing on Large Clusters",
      "authors": "Dean & Ghemawat, 2004",
      "url": "https://research.google/pubs/pub62/"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language",
      "Automate the pipeline so it re-runs on new data without manual edits"
    ]
  },
  {
    "id": "DS-110",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Global Chess Rating Trend Explorer",
    "blurb": "Explore rating progression and title distribution across chess federations.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Visualization"
    ],
    "github": {
      "name": "pandas-dev/pandas",
      "url": "https://github.com/pandas-dev/pandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Python for Data Analysis",
      "author": "Wes McKinney"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "DS-111",
    "category": "data-science",
    "categoryLabel": "Data Science",
    "title": "Public Library Usage Trend Dashboard",
    "blurb": "Track book checkout and digital-lending trends across library branches.",
    "difficulty": "Beginner",
    "topics": [
      "EDA",
      "Dashboarding"
    ],
    "github": {
      "name": "streamlit/streamlit",
      "url": "https://github.com/streamlit/streamlit"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "Random Forests",
      "authors": "Breiman, 2001",
      "url": "https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf"
    },
    "checklist": [
      "Source the dataset and load it into a notebook",
      "Clean & profile the data — nulls, dtypes, duplicates, outliers",
      "Explore with visualizations — distributions, correlations, trends",
      "Build the dashboard or report view",
      "Write up 3–5 key findings in plain language"
    ]
  },
  {
    "id": "ML-061",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "XGBoost vs LightGBM vs CatBoost Benchmark",
    "blurb": "Benchmark the three major boosting libraries on the same tabular dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Gradient Boosting",
      "Model Benchmarking"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-062",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "SHAP Explainability Dashboard for a Tabular Model",
    "blurb": "Build an interactive dashboard surfacing SHAP explanations per prediction.",
    "difficulty": "Intermediate",
    "topics": [
      "Explainable AI",
      "Dashboarding"
    ],
    "github": {
      "name": "shap/shap",
      "url": "https://github.com/shap/shap"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Interpretable Machine Learning",
      "author": "Christoph Molnar"
    },
    "paper": {
      "title": "A Unified Approach to Interpreting Model Predictions",
      "authors": "Lundberg & Lee, 2017",
      "url": "https://arxiv.org/abs/1705.07874"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-063",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Bayesian Hyperparameter Tuning with Optuna",
    "blurb": "Compare grid search, random search, and Bayesian tuning on a shared model.",
    "difficulty": "Intermediate",
    "topics": [
      "Hyperparameter Tuning",
      "Bayesian Methods"
    ],
    "github": {
      "name": "pymc-devs/pymc",
      "url": "https://github.com/pymc-devs/pymc"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Probabilistic Programming in Python using PyMC3",
      "authors": "Salvatier, Wiecki & Fonnesbeck, 2016",
      "url": "https://peerj.com/articles/cs-55/"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-064",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Imbalanced Classification Cookbook",
    "blurb": "Compare SMOTE, class weights, and threshold tuning on an imbalanced dataset.",
    "difficulty": "Intermediate",
    "topics": [
      "Imbalanced Learning",
      "Classification"
    ],
    "github": {
      "name": "scikit-learn-contrib/imbalanced-learn",
      "url": "https://github.com/scikit-learn-contrib/imbalanced-learn"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "SMOTE: Synthetic Minority Over-sampling Technique",
      "authors": "Chawla et al., 2002",
      "url": "https://arxiv.org/abs/1106.1813"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-065",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "AutoML Benchmark: TPOT vs Manual Pipeline",
    "blurb": "Compare an AutoML search against a hand-tuned baseline pipeline.",
    "difficulty": "Advanced",
    "topics": [
      "AutoML",
      "Model Benchmarking"
    ],
    "github": {
      "name": "EpistasisLab/tpot",
      "url": "https://github.com/EpistasisLab/tpot"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Automated Machine Learning",
      "author": "Hutter, Kotthoff & Vanschoren"
    },
    "paper": {
      "title": "Auto-WEKA: Combined Selection and Hyperparameter Optimization",
      "authors": "Thornton et al., 2013",
      "url": "https://arxiv.org/abs/1208.3719"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-066",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "MLflow Experiment Tracking Setup",
    "blurb": "Track experiments, parameters, and model artifacts across training runs.",
    "difficulty": "Intermediate",
    "topics": [
      "MLOps",
      "Experiment Tracking"
    ],
    "github": {
      "name": "mlflow/mlflow",
      "url": "https://github.com/mlflow/mlflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Designing Machine Learning Systems",
      "author": "Chip Huyen"
    },
    "paper": {
      "title": "Hidden Technical Debt in Machine Learning Systems",
      "authors": "Sculley et al., 2015",
      "url": "https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-067",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Model Serving API with FastAPI + Docker",
    "blurb": "Package a trained model behind a REST API and containerize it.",
    "difficulty": "Advanced",
    "topics": [
      "Model Deployment",
      "MLOps"
    ],
    "github": {
      "name": "tiangolo/fastapi",
      "url": "https://github.com/tiangolo/fastapi"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Designing Machine Learning Systems",
      "author": "Chip Huyen"
    },
    "paper": {
      "title": "Hidden Technical Debt in Machine Learning Systems",
      "authors": "Sculley et al., 2015",
      "url": "https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-068",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Bayesian A/B Test Analysis for Conversion Rate",
    "blurb": "Analyze an A/B test's conversion data using a Bayesian framework.",
    "difficulty": "Advanced",
    "topics": [
      "Bayesian Methods",
      "A/B Testing"
    ],
    "github": {
      "name": "pymc-devs/pymc",
      "url": "https://github.com/pymc-devs/pymc"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Bayesian Methods for Hackers",
      "author": "Cameron Davidson-Pilon"
    },
    "paper": {
      "title": "Probabilistic Programming in Python using PyMC3",
      "authors": "Salvatier, Wiecki & Fonnesbeck, 2016",
      "url": "https://peerj.com/articles/cs-55/"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem",
      "Explain the model's predictions (SHAP/LIME) and stress-test edge cases"
    ]
  },
  {
    "id": "ML-069",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "Text Classification with Classic NLP (TF-IDF + SVM)",
    "blurb": "Build a topic classifier using TF-IDF features and a linear SVM baseline.",
    "difficulty": "Beginner",
    "topics": [
      "NLP",
      "Classification"
    ],
    "github": {
      "name": "nltk/nltk",
      "url": "https://github.com/nltk/nltk"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "Distributed Representations of Words and Phrases",
      "authors": "Mikolov et al., 2013",
      "url": "https://arxiv.org/abs/1310.4546"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "ML-070",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "title": "K-Means vs DBSCAN Clustering Comparison",
    "blurb": "Compare partition-based and density-based clustering on the same dataset.",
    "difficulty": "Beginner",
    "topics": [
      "Clustering",
      "Unsupervised Learning"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      "author": "Aurélien Géron"
    },
    "paper": {
      "title": "A Tutorial on Principal Component Analysis",
      "authors": "Shlens, 2014",
      "url": "https://arxiv.org/abs/1404.1100"
    },
    "checklist": [
      "Load & split the data (train / validation / test)",
      "Handle missing values, encode categoricals, scale features",
      "Train a baseline model, then 2–3 stronger candidates",
      "Tune hyperparameters with cross-validation",
      "Evaluate with the right metric for the problem"
    ]
  },
  {
    "id": "IP-001",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Real-Time Credit Card Fraud Detection Pipeline",
    "blurb": "Build a streaming pipeline that scores card transactions for fraud in real time, the way a payments company would \u2014 ingestion, feature engineering, a trained classifier served behind an API, and a review dashboard for flagged transactions.",
    "difficulty": "Advanced",
    "topics": [
      "Fraud Detection",
      "Imbalanced Classification",
      "Streaming",
      "API Deployment"
    ],
    "github": {
      "name": "scikit-learn-contrib/imbalanced-learn",
      "url": "https://github.com/scikit-learn-contrib/imbalanced-learn"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Fraud Analytics Using Descriptive, Predictive, and Social Network Techniques",
      "author": "Bart Baesens"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Source a labeled transactions dataset and study the class imbalance",
      "Engineer time-window features (spend velocity, merchant history) per card",
      "Train a classifier and tune the decision threshold against a cost matrix, not just accuracy",
      "Wrap the model behind a scoring API with sub-second latency",
      "Build a review dashboard for flagged transactions and log outcomes for retraining"
    ],
    "kaggle": {
      "name": "Credit Card Fraud Detection",
      "url": "https://www.kaggle.com/mlg-ulb/creditcardfraud"
    }
  },
  {
    "id": "IP-002",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Bank Loan Default / Credit Risk Scorecard",
    "blurb": "Build a credit scorecard the way a bank's risk team would \u2014 a model that outputs an interpretable score for loan approvals, with reasoning traceable enough to survive a regulator's audit.",
    "difficulty": "Advanced",
    "topics": [
      "Credit Risk",
      "Logistic Regression",
      "Model Interpretability",
      "WOE/IV"
    ],
    "github": {
      "name": "shap/shap",
      "url": "https://github.com/shap/shap"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Credit Risk Scorecards",
      "author": "Naeem Siddiqi"
    },
    "paper": {
      "title": "A Few Useful Things to Know about Machine Learning",
      "authors": "Domingos, 2012",
      "url": "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
    },
    "checklist": [
      "Source loan-level data and bucket features with weight-of-evidence (WOE) binning",
      "Fit a logistic regression baseline and check information value (IV) per feature",
      "Convert model output into a points-based scorecard, not just a raw probability",
      "Set an approval threshold against a target bad-rate, not an arbitrary 0.5 cutoff",
      "Document every feature's business rationale for audit and regulatory review"
    ],
    "kaggle": {
      "name": "Give Me Some Credit",
      "url": "https://www.kaggle.com/c/GiveMeSomeCredit"
    }
  },
  {
    "id": "IP-003",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Anti-Money-Laundering (AML) Transaction Monitoring System",
    "blurb": "Simulate a bank's AML desk \u2014 flag suspicious transaction patterns (structuring, rapid fund movement) by layering rule-based checks with an anomaly model, and produce case files an analyst could actually review.",
    "difficulty": "Advanced",
    "topics": [
      "Anomaly Detection",
      "Graph Analysis",
      "Rule Engines",
      "Compliance"
    ],
    "github": {
      "name": "yzhao062/pyod",
      "url": "https://github.com/yzhao062/pyod"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Outlier Analysis",
      "author": "Charu C. Aggarwal"
    },
    "paper": {
      "title": "A Comprehensive Survey on Graph Neural Networks",
      "authors": "Wu et al., 2019",
      "url": "https://arxiv.org/abs/1901.00596"
    },
    "checklist": [
      "Simulate or source a transaction ledger with a mix of normal and suspicious activity",
      "Encode classic red-flag rules (structuring, rapid in-out transfers) as explicit checks",
      "Layer an unsupervised anomaly model on top to catch patterns the rules miss",
      "Build a customer transaction graph to spot circular or layered fund movement",
      "Generate a ranked case queue with the evidence an analyst would need to review it"
    ]
  },
  {
    "id": "IP-004",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Algorithmic Market-Making Bot with Inventory Risk Controls",
    "blurb": "Build a market-making strategy the way a prop desk would \u2014 quote both sides of the book, manage inventory risk, and see how spread capture holds up once latency and fees are added.",
    "difficulty": "Advanced",
    "topics": [
      "Market Making",
      "Order Book",
      "Inventory Risk",
      "Backtesting"
    ],
    "github": {
      "name": "hummingbot/hummingbot",
      "url": "https://github.com/hummingbot/hummingbot"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Algorithmic and High-Frequency Trading",
      "author": "Cartea, Jaimungal, Penalva"
    },
    "paper": {
      "title": "High-frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Source or simulate order-book-level data for a liquid instrument",
      "Implement a quoting rule that widens spread as inventory drifts from target",
      "Add a hard inventory limit that pulls quotes instead of letting risk run unbounded",
      "Backtest with realistic fees and partial fills, not idealized full fills",
      "Report spread capture net of inventory P&L, not gross of it"
    ]
  },
  {
    "id": "IP-005",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Robo-Advisor Portfolio Rebalancing Engine",
    "blurb": "Build the backend a robo-advisor runs on \u2014 assign clients to risk-based model portfolios, rebalance on drift, and account for taxes and transaction costs on every trade.",
    "difficulty": "Intermediate",
    "topics": [
      "Portfolio Optimization",
      "Rebalancing",
      "Risk Profiling"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "The Intelligent Asset Allocator",
      "author": "William Bernstein"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.math.hkust.edu.hk/~maykwok/courses/ma362/07F/markowitz_JF.pdf"
    },
    "checklist": [
      "Define 3-5 model portfolios spanning a conservative-to-aggressive risk spectrum",
      "Map a simple risk questionnaire to a model portfolio assignment",
      "Trigger rebalancing on drift bands rather than a fixed calendar schedule",
      "Account for transaction costs and tax-lot impact before generating trade orders",
      "Report post-rebalance drift and turnover so the logic is auditable"
    ]
  },
  {
    "id": "IP-006",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Real-Time Market Data Streaming Pipeline",
    "blurb": "Stand up the plumbing a trading desk depends on \u2014 ingest a live market data feed, normalize ticks, and publish clean bars for downstream strategies with minimal latency.",
    "difficulty": "Advanced",
    "topics": [
      "Streaming",
      "Kafka",
      "Market Data",
      "Latency"
    ],
    "github": {
      "name": "apache/kafka",
      "url": "https://github.com/apache/kafka"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Designing Data-Intensive Applications",
      "author": "Martin Kleppmann"
    },
    "paper": {
      "title": "Kafka: a Distributed Messaging System for Log Processing",
      "authors": "Kreps, Narkhede, Rao, 2011",
      "url": "https://notes.stephenholiday.com/Kafka.pdf"
    },
    "checklist": [
      "Pick a live or replayed tick feed and define the message schema",
      "Stand up a message broker and publish raw ticks onto a topic",
      "Write a consumer that aggregates ticks into clean OHLCV bars",
      "Measure end-to-end latency from tick arrival to bar publication",
      "Add basic fault tolerance \u2014 what happens if a consumer crashes mid-stream?"
    ]
  },
  {
    "id": "IP-007",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Customer Churn Prediction for a Subscription Business",
    "blurb": "Predict which subscribers are about to cancel and why, the way a SaaS growth team would \u2014 build the model, then turn it into a ranked list of accounts worth an intervention.",
    "difficulty": "Intermediate",
    "topics": [
      "Classification",
      "Feature Engineering",
      "Business Metrics"
    ],
    "github": {
      "name": "dmlc/xgboost",
      "url": "https://github.com/dmlc/xgboost"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Storytelling with Data",
      "author": "Cole Nussbaumer Knaflic"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Source usage and billing data, and define churn precisely (cancel vs. lapse)",
      "Engineer engagement-decay features \u2014 trend, not just a snapshot value",
      "Train a classifier and rank accounts by churn probability, not a binary flag",
      "Estimate the revenue at risk per account to prioritize the intervention list",
      "Write up the top churn drivers in language a growth team can act on"
    ],
    "kaggle": {
      "name": "Telco Customer Churn",
      "url": "https://www.kaggle.com/blastchar/telco-customer-churn"
    }
  },
  {
    "id": "IP-008",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Ad Click-Through-Rate (CTR) Prediction Engine",
    "blurb": "Build the model an ad-tech platform runs before every auction \u2014 predict the probability a user clicks an ad from sparse, high-cardinality features, at a scale where milliseconds matter.",
    "difficulty": "Advanced",
    "topics": [
      "CTR Prediction",
      "Feature Hashing",
      "Large-Scale ML"
    ],
    "github": {
      "name": "microsoft/LightGBM",
      "url": "https://github.com/microsoft/LightGBM"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Machine Learning Engineering",
      "author": "Andriy Burkov"
    },
    "paper": {
      "title": "Practical Lessons from Predicting Clicks on Ads at Facebook",
      "authors": "He et al., 2014",
      "url": "https://quinonero.net/Publications/predicting-clicks-facebook.pdf"
    },
    "checklist": [
      "Source a click-log dataset and profile feature cardinality",
      "Apply feature hashing/embedding for high-cardinality categorical fields",
      "Train a gradient-boosted model and evaluate with log-loss and AUC, not accuracy",
      "Benchmark inference latency per request against a real auction time budget",
      "Calibrate predicted probabilities \u2014 a well-ranked model can still be miscalibrated"
    ],
    "kaggle": {
      "name": "Avazu Click-Through Rate Prediction",
      "url": "https://www.kaggle.com/c/avazu-ctr-prediction"
    }
  },
  {
    "id": "IP-009",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Dynamic Pricing Engine (Surge Pricing Simulator)",
    "blurb": "Model demand elasticity and build a pricing engine that adjusts prices with supply/demand imbalance, the way ride-hailing and e-commerce platforms do \u2014 and check it doesn't tank conversion.",
    "difficulty": "Advanced",
    "topics": [
      "Price Optimization",
      "Elasticity",
      "Simulation"
    ],
    "github": {
      "name": "pymc-devs/pymc",
      "url": "https://github.com/pymc-devs/pymc"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "The Strategy and Tactics of Pricing",
      "author": "Thomas Nagle & Georg M\u00fcller"
    },
    "paper": {
      "title": "Dynamic Pricing and Learning: Historical Origins, Current Research, and New Directions",
      "authors": "den Boer, 2015",
      "url": "https://arxiv.org/abs/1310.2529"
    },
    "checklist": [
      "Estimate a demand curve from historical price/quantity data",
      "Build a rule that adjusts price with a supply/demand imbalance signal",
      "Cap price movement per interval so surges stay within a defensible bound",
      "Simulate conversion impact of the pricing rule against a flat-price baseline",
      "Report revenue lift net of any conversion drop, not gross revenue alone"
    ]
  },
  {
    "id": "IP-010",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Product Recommendation Engine (Collaborative Filtering at Scale)",
    "blurb": "Build the backbone of an e-commerce recommendation rail \u2014 collaborative filtering on implicit feedback (views, purchases), with a cold-start path for new users and items.",
    "difficulty": "Intermediate",
    "topics": [
      "Recommender Systems",
      "Collaborative Filtering",
      "Cold Start"
    ],
    "github": {
      "name": "NicolasHug/Surprise",
      "url": "https://github.com/NicolasHug/Surprise"
    },
    "youtube": {
      "name": "sentdex",
      "url": "https://www.youtube.com/@sentdex"
    },
    "book": {
      "title": "Recommender Systems Handbook",
      "author": "Ricci, Rokach, Shapira"
    },
    "paper": {
      "title": "Collaborative Filtering for Implicit Feedback Datasets",
      "authors": "Hu, Koren, Volinsky, 2008",
      "url": "http://yifanhu.net/PUB/cf.pdf"
    },
    "checklist": [
      "Source implicit-feedback data (views/purchases) rather than explicit ratings",
      "Build a user-item interaction matrix and train a matrix-factorization model",
      "Add a popularity- or content-based fallback for cold-start users/items",
      "Evaluate with ranking metrics (precision@k, recall@k) not RMSE",
      "Sanity-check recommendations by eye for a handful of real users"
    ],
    "kaggle": {
      "name": "Amazon Fine Food Reviews",
      "url": "https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews"
    }
  },
  {
    "id": "IP-011",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Insurance Claims Fraud Detection",
    "blurb": "Flag suspicious insurance claims the way a Special Investigations Unit would \u2014 combine structured claim features with anomaly scoring, and produce a ranked queue instead of a black-box yes/no.",
    "difficulty": "Intermediate",
    "topics": [
      "Fraud Detection",
      "Anomaly Detection",
      "Insurance"
    ],
    "github": {
      "name": "yzhao062/pyod",
      "url": "https://github.com/yzhao062/pyod"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Outlier Analysis",
      "author": "Charu C. Aggarwal"
    },
    "paper": {
      "title": "Anomaly Detection: A Survey",
      "authors": "Chandola, Banerjee, Kumar, 2009",
      "url": "https://www.vs.inf.ethz.ch/edu/HS2011/CPS/papers/chandola09_anomaly-detection-survey.pdf"
    },
    "checklist": [
      "Source claims data and identify features investigators actually check",
      "Score claims with an anomaly model alongside simple rule-based red flags",
      "Blend both scores into a single priority ranking, not two separate lists",
      "Validate the top-ranked claims against any known-fraud labels you have",
      "Package results as a reviewable case queue with the reasons attached"
    ],
    "kaggle": {
      "name": "Vehicle Insurance Claim Fraud Detection",
      "url": "https://www.kaggle.com/datasets/shivamb/vehicle-claim-fraud-detection"
    }
  },
  {
    "id": "IP-012",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Demand Forecasting for Retail Supply Chain",
    "blurb": "Forecast SKU-level demand the way a retailer's supply chain team would, and translate the forecast into a reorder policy that keeps shelves stocked without overbuying.",
    "difficulty": "Intermediate",
    "topics": [
      "Time Series",
      "Forecasting",
      "Inventory Optimization"
    ],
    "github": {
      "name": "facebook/prophet",
      "url": "https://github.com/facebook/prophet"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Forecasting: Principles and Practice",
      "author": "Hyndman & Athanasopoulos"
    },
    "paper": {
      "title": "Forecasting at Scale",
      "authors": "Taylor & Letham, 2017",
      "url": "https://peerj.com/preprints/3190/"
    },
    "checklist": [
      "Source SKU-level sales history and check for seasonality and promotions",
      "Fit a forecasting model per SKU or SKU-cluster, with a naive baseline for comparison",
      "Evaluate with a rolling-origin backtest, not a single train/test split",
      "Convert the forecast into a reorder point and safety-stock recommendation",
      "Report forecast error alongside stockout/overstock cost implications"
    ],
    "kaggle": {
      "name": "Store Item Demand Forecasting Challenge",
      "url": "https://www.kaggle.com/c/demand-forecasting-kernels-only"
    }
  },
  {
    "id": "IP-013",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Predictive Maintenance for Industrial Equipment (IoT Sensor Data)",
    "blurb": "Predict machine failure before it happens using sensor telemetry, the way a manufacturing plant's reliability team would \u2014 and set an alert threshold that balances false alarms against missed failures.",
    "difficulty": "Advanced",
    "topics": [
      "IoT",
      "Time Series",
      "Survival Analysis",
      "Sensor Data"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Practical Time Series Analysis",
      "author": "Aileen Nielsen"
    },
    "paper": {
      "title": "A Survey on Industrial Internet of Things: A Cyber-Physical Systems Perspective",
      "authors": "Xu, Duan, Heilig, 2018",
      "url": "https://arxiv.org/abs/1804.04053"
    },
    "checklist": [
      "Source multi-sensor telemetry with labeled failure/run-to-failure events",
      "Engineer rolling-window features (trend, variance) instead of raw readings",
      "Frame it as remaining-useful-life regression or failure-in-next-N-cycles classification",
      "Pick an alert threshold using a cost tradeoff between false alarms and missed failures",
      "Report lead time before failure the alert would realistically give a maintenance crew"
    ],
    "kaggle": {
      "name": "NASA Turbofan Jet Engine Degradation Simulation",
      "url": "https://www.kaggle.com/datasets/behrad3d/nasa-cmaps"
    }
  },
  {
    "id": "IP-014",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "End-to-End MLOps Pipeline (Train, Deploy, Monitor)",
    "blurb": "Build the plumbing around a model that actually ships \u2014 versioned training runs, a served endpoint, and drift monitoring, the way an ML platform team would set it up.",
    "difficulty": "Advanced",
    "topics": [
      "MLOps",
      "Model Deployment",
      "Monitoring",
      "CI/CD"
    ],
    "github": {
      "name": "mlflow/mlflow",
      "url": "https://github.com/mlflow/mlflow"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Designing Machine Learning Systems",
      "author": "Chip Huyen"
    },
    "paper": {
      "title": "Hidden Technical Debt in Machine Learning Systems",
      "authors": "Sculley et al., 2015",
      "url": "https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf"
    },
    "checklist": [
      "Track every training run's data version, params, and metrics automatically",
      "Package the winning model behind a versioned serving endpoint",
      "Add input and prediction logging so you can audit what shipped",
      "Set up a drift check that compares live feature distributions to training data",
      "Define a rollback path for when the monitor flags a bad model"
    ]
  },
  {
    "id": "IP-015",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Data Quality & Validation Pipeline for a Production Warehouse",
    "blurb": "Build the guardrails a data engineering team runs before data reaches dashboards \u2014 automated schema and quality checks that fail loudly instead of letting bad data through silently.",
    "difficulty": "Intermediate",
    "topics": [
      "Data Engineering",
      "Data Quality",
      "Pipelines"
    ],
    "github": {
      "name": "great-expectations/great_expectations",
      "url": "https://github.com/great-expectations/great_expectations"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Designing Data-Intensive Applications",
      "author": "Martin Kleppmann"
    },
    "paper": {
      "title": "Hidden Technical Debt in Machine Learning Systems",
      "authors": "Sculley et al., 2015",
      "url": "https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf"
    },
    "checklist": [
      "Pick a real (or realistic) messy dataset feeding a warehouse table",
      "Define schema, null, range and freshness expectations explicitly",
      "Wire the checks to run automatically on every new data load",
      "Fail the pipeline loudly on a broken expectation instead of loading bad rows",
      "Log validation results over time so quality trends are visible, not just pass/fail"
    ]
  },
  {
    "id": "IP-016",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Real-Time Trading Risk Dashboard (VaR & Stress Testing)",
    "blurb": "Build the dashboard a trading desk's risk manager watches all day \u2014 live position VaR, stress scenarios, and limit breaches surfaced the moment they happen.",
    "difficulty": "Advanced",
    "topics": [
      "Risk Management",
      "VaR",
      "Stress Testing",
      "Dashboards"
    ],
    "github": {
      "name": "dcajasn/Riskfolio-Lib",
      "url": "https://github.com/dcajasn/Riskfolio-Lib"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Value at Risk",
      "author": "Philippe Jorion"
    },
    "paper": {
      "title": "RiskMetrics Technical Document",
      "authors": "J.P. Morgan / Reuters, 1996",
      "url": "https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a"
    },
    "checklist": [
      "Compute historical or parametric VaR for a sample portfolio's live positions",
      "Define 2-3 stress scenarios (rate shock, vol spike) and reprice the book under each",
      "Set position and portfolio-level limits and detect breaches automatically",
      "Build a dashboard that refreshes VaR and breach status without a manual re-run",
      "Log every breach with a timestamp so the desk has an audit trail"
    ]
  },
  {
    "id": "IP-017",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Automated Regulatory Transaction Reporting System",
    "blurb": "Automate the kind of trade reporting a compliance team is required to file (MiFID II / Dodd-Frank style) \u2014 validate every field against the regulatory schema and flag exceptions before submission.",
    "difficulty": "Advanced",
    "topics": [
      "RegTech",
      "Compliance",
      "Data Validation"
    ],
    "github": {
      "name": "great-expectations/great_expectations",
      "url": "https://github.com/great-expectations/great_expectations"
    },
    "youtube": {
      "name": "freeCodeCamp.org",
      "url": "https://www.youtube.com/@freecodecamp"
    },
    "book": {
      "title": "Handbook of Financial Data and Risk Information",
      "author": "Margarita S. Brose (ed.)"
    },
    "paper": {
      "title": "Hidden Technical Debt in Machine Learning Systems",
      "authors": "Sculley et al., 2015",
      "url": "https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf"
    },
    "checklist": [
      "Pick a simplified regulatory reporting schema and study its required fields",
      "Map raw trade records to the schema and validate types/enums/required fields",
      "Flag records that fail validation instead of silently dropping or guessing",
      "Batch valid records into the report format and generate an exception report for the rest",
      "Log every submission with a timestamp and record count for audit purposes"
    ]
  },
  {
    "id": "IP-018",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Cryptocurrency Cross-Exchange Arbitrage Bot",
    "blurb": "Detect and simulate acting on price gaps for the same coin across exchanges, the way an arb desk would \u2014 and see how much of the 'free money' survives once fees, withdrawal times and slippage are added.",
    "difficulty": "Advanced",
    "topics": [
      "Arbitrage",
      "Crypto",
      "Exchange APIs",
      "Execution"
    ],
    "github": {
      "name": "freqtrade/freqtrade",
      "url": "https://github.com/freqtrade/freqtrade"
    },
    "youtube": {
      "name": "Hummingbot",
      "url": "https://www.youtube.com/@hummingbot"
    },
    "book": {
      "title": "Algorithmic Trading",
      "author": "Ernest P. Chan"
    },
    "paper": {
      "title": "Statistical Arbitrage in the U.S. Equities Market",
      "authors": "Avellaneda & Lee, 2010",
      "url": "https://www.math.nyu.edu/faculty/avellane/AvellanedaLeeStatArb20090616.pdf"
    },
    "checklist": [
      "Pull live or historical order books for the same pair across 2-3 exchanges",
      "Detect price spreads that exceed round-trip fees before flagging an opportunity",
      "Model withdrawal/transfer time and its effect on whether the spread still exists on arrival",
      "Simulate execution with realistic slippage instead of the quoted mid-price",
      "Report net P&L after fees, not the gross spread you started with"
    ]
  },
  {
    "id": "IP-019",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Options Market-Making Simulator with Greeks Hedging",
    "blurb": "Simulate quoting and delta-hedging an options book the way an options market maker would \u2014 price, hedge on every tick, and watch how hedging frequency trades off against transaction costs.",
    "difficulty": "Advanced",
    "topics": [
      "Options",
      "Greeks",
      "Delta Hedging",
      "Simulation"
    ],
    "github": {
      "name": "lballabio/QuantLib",
      "url": "https://github.com/lballabio/QuantLib"
    },
    "youtube": {
      "name": "QuantInsti",
      "url": "https://www.youtube.com/@QuantInsti"
    },
    "book": {
      "title": "Option Volatility and Pricing",
      "author": "Sheldon Natenberg"
    },
    "paper": {
      "title": "The Pricing of Options and Corporate Liabilities",
      "authors": "Black & Scholes, 1973",
      "url": "https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf"
    },
    "checklist": [
      "Price a small options book with Black-Scholes and compute delta/gamma/vega",
      "Simulate an underlying price path and re-hedge delta at a fixed frequency",
      "Compare hedging P&L at different rebalance frequencies (hourly vs. daily)",
      "Add transaction costs and find where more-frequent hedging stops paying off",
      "Report hedged P&L variance versus an unhedged baseline"
    ]
  },
  {
    "id": "IP-020",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Factor Investing Model (Fama-French Style Multi-Factor)",
    "blurb": "Build a systematic multi-factor equity strategy the way a quant asset manager would \u2014 construct value/momentum/quality factors, combine them, and backtest with proper risk controls.",
    "difficulty": "Intermediate",
    "topics": [
      "Factor Investing",
      "Multi-Factor Models",
      "Backtesting"
    ],
    "github": {
      "name": "stefan-jansen/machine-learning-for-trading",
      "url": "https://github.com/stefan-jansen/machine-learning-for-trading"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Quantitative Equity Portfolio Management",
      "author": "Chincarini & Kim"
    },
    "paper": {
      "title": "Common Risk Factors in the Returns on Stocks and Bonds",
      "authors": "Fama & French, 1993",
      "url": "https://www.bauer.uh.edu/rsusmel/phd/Fama-French_JFE1993.pdf"
    },
    "checklist": [
      "Construct 2-3 factors (value, momentum, quality) from fundamental/price data",
      "Rank the universe on each factor and form a combined composite score",
      "Build long-only or long-short portfolios from the top/bottom composite buckets",
      "Backtest with realistic rebalancing costs and sector/position limits",
      "Report factor exposures and performance attribution, not just total return"
    ]
  },
  {
    "id": "IP-021",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Automated ETF / Index Rebalancing System",
    "blurb": "Build the mechanics behind index-tracking \u2014 compute target weights on each rebalance date, generate the trade list, and account for tracking error and turnover costs.",
    "difficulty": "Intermediate",
    "topics": [
      "Index Tracking",
      "Rebalancing",
      "Tracking Error"
    ],
    "github": {
      "name": "robertmartin8/PyPortfolioOpt",
      "url": "https://github.com/robertmartin8/PyPortfolioOpt"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Common Sense on Mutual Funds",
      "author": "John C. Bogle"
    },
    "paper": {
      "title": "Portfolio Selection",
      "authors": "Markowitz, 1952",
      "url": "https://www.math.hkust.edu.hk/~maykwok/courses/ma362/07F/markowitz_JF.pdf"
    },
    "checklist": [
      "Pick a target index and compute its official constituent weights",
      "Build a fund holdings simulation that starts from an arbitrary initial weighting",
      "On each rebalance date, compute the trade list needed to close the weight gap",
      "Measure tracking error between the fund and the index over time",
      "Report turnover and estimated cost per rebalance versus tracking-error improvement"
    ]
  },
  {
    "id": "IP-022",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Sentiment-Driven Trading Signal Pipeline (News/Earnings \u2192 Alpha)",
    "blurb": "Turn news and earnings-call text into a trading signal the way a systematic fund's NLP desk would \u2014 score sentiment, align it to the right trading window, and test whether it actually predicts returns.",
    "difficulty": "Advanced",
    "topics": [
      "NLP",
      "Sentiment Analysis",
      "Event-Driven Trading"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos L\u00f3pez de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Source news headlines or earnings-call transcripts time-stamped to the second",
      "Score sentiment with a finance-tuned model rather than a generic one",
      "Align each sentiment score to the next tradeable window \u2014 mind market hours",
      "Backtest a simple long/short rule driven by the sentiment signal",
      "Check whether the signal survives transaction costs and a walk-forward split"
    ]
  },
  {
    "id": "IP-023",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Bank Customer Segmentation for Targeted Marketing",
    "blurb": "Segment a bank's customer base into behavior-driven groups the way a marketing analytics team would, and turn each cluster into an actual targeting recommendation, not just a scatter plot.",
    "difficulty": "Beginner",
    "topics": [
      "Clustering",
      "Customer Analytics",
      "Segmentation"
    ],
    "github": {
      "name": "scikit-learn/scikit-learn",
      "url": "https://github.com/scikit-learn/scikit-learn"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Data Science for Business",
      "author": "Foster Provost & Tom Fawcett"
    },
    "paper": {
      "title": "A Few Useful Things to Know about Machine Learning",
      "authors": "Domingos, 2012",
      "url": "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
    },
    "checklist": [
      "Source customer transaction and product-holding data",
      "Engineer RFM-style features (recency, frequency, monetary value)",
      "Cluster customers and choose cluster count with a metric, not by eye",
      "Profile each cluster in plain business language (who they are, what they buy)",
      "Recommend a targeted product or offer per segment"
    ],
    "kaggle": {
      "name": "Bank Marketing Dataset",
      "url": "https://www.kaggle.com/datasets/janiobachmann/bank-marketing-dataset"
    }
  },
  {
    "id": "IP-024",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Employee Attrition Prediction for HR Analytics",
    "blurb": "Predict which employees are flight-risks the way an HR analytics team would, and pair the model with a plain-language explanation of the top drivers per employee.",
    "difficulty": "Beginner",
    "topics": [
      "Classification",
      "HR Analytics",
      "Explainability"
    ],
    "github": {
      "name": "shap/shap",
      "url": "https://github.com/shap/shap"
    },
    "youtube": {
      "name": "CampusX",
      "url": "https://www.youtube.com/@campusx-official"
    },
    "book": {
      "title": "Data Science for Business",
      "author": "Foster Provost & Tom Fawcett"
    },
    "paper": {
      "title": "A Few Useful Things to Know about Machine Learning",
      "authors": "Domingos, 2012",
      "url": "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
    },
    "checklist": [
      "Source HR records with tenure, compensation, and engagement-style features",
      "Train a classifier to predict attrition within a defined time window",
      "Use SHAP or similar to explain the top drivers per at-risk employee",
      "Rank employees by attrition risk rather than a flat yes/no label",
      "Write a one-paragraph, non-technical summary an HR manager could act on"
    ],
    "kaggle": {
      "name": "IBM HR Analytics Employee Attrition & Performance",
      "url": "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset"
    }
  },
  {
    "id": "IP-025",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Automated Resume Screening & Ranking System",
    "blurb": "Build the first-pass filter a recruiting team runs candidates through \u2014 parse resumes, score fit against a job description, and stress-test it for the biases these systems are notorious for.",
    "difficulty": "Advanced",
    "topics": [
      "NLP",
      "Text Classification",
      "Fairness"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Fairness and Machine Learning",
      "author": "Barocas, Hardt, Narayanan"
    },
    "paper": {
      "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      "authors": "Devlin et al., 2018",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    "checklist": [
      "Parse resumes into structured fields (skills, experience, education)",
      "Score fit against a job description using text similarity or a fine-tuned model",
      "Rank candidates and inspect the top and bottom of the ranking by hand",
      "Test the ranking for proxy bias \u2014 does it silently favor a demographic pattern?",
      "Document the scoring logic in plain language for a recruiter to sanity-check"
    ]
  },
  {
    "id": "IP-026",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Customer Support Chatbot for Banking FAQs",
    "blurb": "Build a retrieval-based support chatbot the way a bank's customer-service team would deploy one \u2014 answer FAQ-style questions accurately and know when to hand off to a human instead of guessing.",
    "difficulty": "Intermediate",
    "topics": [
      "NLP",
      "Chatbots",
      "Retrieval-Augmented QA"
    ],
    "github": {
      "name": "huggingface/transformers",
      "url": "https://github.com/huggingface/transformers"
    },
    "youtube": {
      "name": "CodeEmporium",
      "url": "https://www.youtube.com/@CodeEmporium"
    },
    "book": {
      "title": "Speech and Language Processing",
      "author": "Jurafsky & Martin"
    },
    "paper": {
      "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      "authors": "Devlin et al., 2018",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    "checklist": [
      "Build an FAQ knowledge base and embed each entry for retrieval",
      "Retrieve the closest FAQ entries for an incoming question and rank them",
      "Generate or select an answer grounded in the retrieved entry, not free-form",
      "Set a confidence threshold below which the bot escalates to a human",
      "Log unanswered or escalated questions to grow the FAQ base over time"
    ]
  },
  {
    "id": "IP-027",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Real Estate Price Estimation Platform (Zestimate-Style)",
    "blurb": "Build an automated valuation model the way a real-estate platform would \u2014 predict a defensible price per listing and expose a confidence range instead of a single number.",
    "difficulty": "Beginner",
    "topics": [
      "Regression",
      "Feature Engineering",
      "Geospatial"
    ],
    "github": {
      "name": "geopandas/geopandas",
      "url": "https://github.com/geopandas/geopandas"
    },
    "youtube": {
      "name": "Krish Naik",
      "url": "https://www.youtube.com/@krishnaik06"
    },
    "book": {
      "title": "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
      "author": "Aur\u00e9lien G\u00e9ron"
    },
    "paper": {
      "title": "XGBoost: A Scalable Tree Boosting System",
      "authors": "Chen & Guestrin, 2016",
      "url": "https://arxiv.org/abs/1603.02754"
    },
    "checklist": [
      "Source listing data with location, size, and condition features",
      "Engineer geospatial features \u2014 distance to amenities, neighborhood clusters",
      "Train a regression model and report error in currency terms, not just R\u00b2",
      "Produce a prediction interval or confidence range, not a single point estimate",
      "Spot-check predictions against a few listings you can sanity-check by hand"
    ],
    "kaggle": {
      "name": "House Prices - Advanced Regression Techniques",
      "url": "https://www.kaggle.com/c/house-prices-advanced-regression-techniques"
    }
  },
  {
    "id": "IP-028",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "A/B Testing Platform for Product Experiments",
    "blurb": "Build the statistical engine behind a product team's experiment platform \u2014 run a proper significance test, watch for peeking and novelty effects, and ship a go/no-go recommendation.",
    "difficulty": "Intermediate",
    "topics": [
      "A/B Testing",
      "Statistics",
      "Experimentation"
    ],
    "github": {
      "name": "pymc-devs/pymc",
      "url": "https://github.com/pymc-devs/pymc"
    },
    "youtube": {
      "name": "StatQuest with Josh Starmer",
      "url": "https://www.youtube.com/@statquest"
    },
    "book": {
      "title": "Trustworthy Online Controlled Experiments",
      "author": "Kohavi, Tang, Xie"
    },
    "paper": {
      "title": "Peeking at A/B Tests: Why it Matters, and What to Do About It",
      "authors": "Johari et al., 2017",
      "url": "https://arxiv.org/abs/1602.01596"
    },
    "checklist": [
      "Define the metric, minimum detectable effect, and required sample size upfront",
      "Randomize assignment and check the split is actually balanced before analyzing",
      "Run a significance test appropriate to the metric type (proportion vs. continuous)",
      "Guard against peeking \u2014 decide the stopping rule before you start, not after",
      "Ship a go/no-go recommendation with the effect size and uncertainty stated plainly"
    ]
  },
  {
    "id": "IP-029",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "High-Frequency Trading Backtester with Realistic Microstructure",
    "blurb": "Build a backtester that models the limit order book realistically \u2014 queue position, partial fills, latency \u2014 the kind of realism that separates a paper-profitable HFT strategy from a real one.",
    "difficulty": "Advanced",
    "topics": [
      "HFT",
      "Limit Order Book",
      "Market Microstructure",
      "Backtesting"
    ],
    "github": {
      "name": "kernc/backtesting.py",
      "url": "https://github.com/kernc/backtesting.py"
    },
    "youtube": {
      "name": "Code Trading Cafe",
      "url": "https://www.youtube.com/@CodeTradingCafe"
    },
    "book": {
      "title": "Trading and Exchanges: Market Microstructure for Practitioners",
      "author": "Larry Harris"
    },
    "paper": {
      "title": "High-frequency Trading in a Limit Order Book",
      "authors": "Avellaneda & Stoikov, 2008",
      "url": "https://www.math.nyu.edu/~avellane/HighFrequencyTrading.pdf"
    },
    "checklist": [
      "Source order-book-level (not just trade-level) historical data",
      "Model queue position for resting orders instead of assuming instant fills",
      "Simulate partial fills and a realistic latency delay between signal and order",
      "Compare strategy P&L under naive full-fill assumptions vs. the realistic model",
      "Report how much of the 'edge' disappears once microstructure is modeled honestly"
    ]
  },
  {
    "id": "IP-030",
    "category": "industry-projects",
    "categoryLabel": "Industry Projects",
    "title": "Company Earnings Call Sentiment & Guidance Extraction",
    "blurb": "Parse earnings call transcripts the way a fundamental analyst's NLP tool would \u2014 extract sentiment shifts and forward guidance language, and line it up against the next day's price move.",
    "difficulty": "Advanced",
    "topics": [
      "NLP",
      "Sentiment Analysis",
      "Event Study"
    ],
    "github": {
      "name": "ProsusAI/finBERT",
      "url": "https://github.com/ProsusAI/finBERT"
    },
    "youtube": {
      "name": "PyQuant News",
      "url": "https://www.youtube.com/@pyquantnews"
    },
    "book": {
      "title": "Advances in Financial Machine Learning",
      "author": "Marcos L\u00f3pez de Prado"
    },
    "paper": {
      "title": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models",
      "authors": "Araci, 2019",
      "url": "https://arxiv.org/abs/1908.10063"
    },
    "checklist": [
      "Source earnings call transcripts and split into management vs. Q&A sections",
      "Score sentiment per section with a finance-tuned model",
      "Extract forward-looking guidance language separately from historical results",
      "Run an event study comparing sentiment/guidance shifts to next-day price moves",
      "Report whether the signal holds across multiple quarters, not just one"
    ]
  }
];
