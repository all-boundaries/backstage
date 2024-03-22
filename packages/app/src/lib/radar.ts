
const languages = [
    {
        "key": "hugo",
        "id": "hugo",
        "title": "Hugo",
        "quadrant": "languages",
        "description": "We have found that Hugo's markdown based syntax and flexible themeing to be easy and quick for standing up and maintaining a static site.",
        "timeline": [
          {
            "moved": 0,
            "ringId": "trial",
            "date": "2024-03-19",
            "description": ""
          }
        ]
      }
]

const platforms = [
    {
        "key": "backstage",
        "id": "backstage",
        "title": "Backstage",
        "quadrant": "platform",
        "description": "Backstage as a developer portal enables both discovery of existing capbilities and allow teams the autonomy to own the description and contents of their services.",
        "timeline": [
          {
            "moved": 0,
            "ringId": "adopt",
            "date": "2024-03-19",
            "description": ""
          }
        ]
      }
]

const tools = [
    {
        "key": "google_cloud_trace",
        "id": "google_cloud_trace",
        "title": "Google Cloud Trace",
        "quadrant": "tools",
        "description": "While it's great to see Google with a native offering for distributed tracing, it just doesn't fulfill the full need for effective observability. Filtering is difficult and restrictive; lack of automatic performance dashboards; and a the difficulty of integrating observability with Google's own products such as pub/sub and long operations. Overall, leaves a lot more to be desired.",
        "timeline": [
            {
                "moved": 0,
                "ringId": "hold",
                "date": "2024-03-22",
                "description": ""
            }
        ]
    },
    {
        "key": "code_with_me",
        "id": "code_with_me",
        "title": "Code With Me",
        "quadrant": "tools",
        "description": "Code With Me is the JetBrains product for realtime collaboration straight in the IDE. The pairing experience has been very positive, with low latency on mouse and keyboard interactions. No more awkward switching driver position or painful micro-management of your pair across a Zoom or Team's channel to tell your pair exactly the spot you're trying to communicate. It does also have screen sharing capabilities, but we've found it quite buggy and so have been using Teams alongside our Code With Me for when we need to look at documentation or other screens together.",
        "timeline": [
            {
                "moved": 0,
                "ringId": "trial",
                "date": "2024-03-22",
                "description": ""
            }
        ]
    }
]

const techniques = [
    {
        "key": "pair_programming",
        "id": "pair_programming",
        "title": "Pair Programming",
        "quadrant": "techniques",
        "description": "We stand by frequent and consistent collaboration is the best way to break down barriers, establish team norms, upskill as a team, and ensure context is shared equally across the team.",
        "timeline": [
          {
            "moved": 0,
            "ringId": "adopt",
            "date": "2024-03-22",
            "description": ""
          }
        ]
    },
    {
        "key": "tech_blurb",
        "id": "tech_blurb",
        "title": "Tech Blurbs",
        "quadrant": "techniques",
        "description": "Brief tech blurbs are short, not text heavy, writings for teams to communicate anything they've found worth sharing. In organizations with more than a handful of teams, lessons learned by one team doesn't always make the rounds to be learned by another. Short blurbs use concise language and diagrams to communicate lessons learned. While we've seen some positive feedback from teams, it's unclear if the energy will be sustained, especially in organizations inundated by emails already.",
        "timeline": [
          {
            "moved": 0,
            "ringId": "assess",
            "date": "2024-03-22",
            "description": ""
          }
        ]
    }
]

export const radar = {
    "title": "Tech Radar",
    "quadrants": [
      {
        "id": "platform",
        "name": "Platform"
      },
      {
        "id": "tools",
        "name": "Tools"
      },
      {
        "id": "languages",
        "name": "Languages & Frameworks"
      },
      {
        "id": "techniques",
        "name": "Techniques"
      }
    ],
    "rings": [
      {
        "id": "adopt",
        "name": "ADOPT",
        "color": "#5BA300",
        "description": "We feel strongly that the teams should be adopting these items. We use them when appropriate on our teams and projects."
      },
      {
        "id": "trial",
        "name": "TRIAL",
        "color": "#009EB0",
        "description": "Worth pursuing. Teams should try this technology on a project that can handle the risk."
      },
      {
        "id": "assess",
        "name": "ASSESS",
        "color": "#C7BA00",
        "description": "Worth exploring with the goal of understanding how it will affect your team."
      },
      {
        "id": "hold",
        "name": "HOLD",
        "color": "#E09B96",
        "description": "Proceed with caution. We recommend choosing and exploring other options when possible."
      }
    ],
    "entries": [
      ...languages,
      ...platforms,
      ...tools,
      ...techniques
    ]
  }