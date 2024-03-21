
export const radar = {
    "title": "Tech Radar",
    "quadrants": [
        { "id": "infrastructure", "name": "Infrastructure" },
        { "id": "frameworks", "name": "Frameworks" },
        { "id": "languages", "name": "Languages" },
        { "id": "process", "name": "Process" }
    ],
    "rings": [
        { "id": "adopt", "name": "ADOPT", "color": "#5BA300", "description": "We feel strongly that the teams should be adopting these items. We use them when appropriate on our teams and projects." },
        { "id": "trial", "name": "TRIAL", "color": "#009EB0", "description": "Worth pursuing. Teams should try this technology on a project that can handle the risk." },
        { "id": "assess", "name": "ASSESS", "color": "#C7BA00", "description": "Worth exploring with the goal of understanding how it will affect your team." },
        { "id": "hold", "name": "HOLD", "color": "#E09B96", "description": "Proceed with caution. We recommend choosing and exploring other options when possible." }
    ],
    "entries": [
        { "key": "backstage", "id": "backstage", "title": "Backstage", "quadrant": "process", "description": "Backstage as a developer portal enables both discovery of existing capbilities and allow teams the autonomy to own the description and contents of their services.", "timeline": [{"moved": 0, "ringId": "adopt", "date": "2024-03-19", "description": ""}] },
        { "key": "hugo", "id": "hugo", "title": "Hugo", "quadrant": "languages", "description": "We have found that Hugo's markdown based syntax and flexible themeing to be easy and quick for standing up and maintaining a static site.", "timeline": [{"moved": 0, "ringId": "trial", "date": "2024-03-19", "description": ""}] }
    ]
}