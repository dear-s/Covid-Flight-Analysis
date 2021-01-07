# DSCI 554 Project

## Team

Team name:

Team members:

- Chia-Chi Dai <chiachid@usc.edu>
- Prajakta Khandve <khandve@usc.edu>
- Sanya Singh <sanyasin@usc.edu>
- Simran Makandar <makandar@usc.edu>

---

## Artifacts

**🍿 Proposal presentation** [Transcript](presentations/proposal/TRANSCRIPT.md) | [PDF](presentations/proposal/presentation.pdf)

**🍿 Final presentation** [Transcript](presentations/final/TRANSCRIPT.md) | [PDF](presentations/final/presentation.pdf)

**📄 Paper** [Overleaf read only link](https://www.overleaf.com/read/rgqpmghvbqbj) | [PDF](paper/paper.pdf)

**🎥 Video** [Transcript](video/TRANSCRIPT.md) | [YouTube link](https://www.youtube.com/watch?v=Jm7HcUimZLM&feature=youtu.be)

**🚢 Demo** [Transcript](video/TRANSCRIPT.md) | [Demo link](http://pdms.usc.edu/dsci-554-projects/project-quaranteam/)

---

## Project Summary

As we are living through pandemic and with much of the world closed for business, it may be months before airlines could operate flights as they did before. Multiple airlines have already gone bankrupt and are out of business, we have Avianca, Virgin Australia Trans States Airlines and a few more. Our viz shows the changes in the number of flights, when the drop actually happened (April, May and June) and also user can visualize the steady recovery of travel.

---

## Contributions

## Proposal presentation

- [Chia-Chi Dai](mailto:chiachid@usc.edu)  
  Research on project ideas, Hunt for datasets, Creation of presentation, Adding to Transcripts.md.
- [Prajakta Khandve](mailto:khandve@usc.edu)
  Research on project ideas, Hunt for datasets, Creation of presentation, Presenter, Adding to Transcripts.md.
- [Sanya Singh](mailto:sanyasin@usc.edu)  
  Research on project ideas, Hunt for datasets, Creation of presentation, Adding to Transcripts.md.
- [Simran Makandar](mailto:makandar@usc.edu)  
  Research on project ideas, Hunt for datasets, Creation of presentation, Adding to Transcripts.md.

## Final presentation

- [Chia-Chi Dai](mailto:chiachid@usc.edu)  
  worked on React deployment and d3 map (that shows the flights in the form of arcs)
- [Prajakta Khandve](mailto:khandve@usc.edu)
  worked on Data Cleaning and Region Wise Dashboard. Also, integrated mapbox with react environment
- [Sanya Singh](mailto:sanyasin@usc.edu)  
  worked on Airport and Airlines Dashboard and data for Mapbox.
- [Simran Makandar](mailto:makandar@usc.edu)  
  worked on home page and visual presenting.

## Paper

- [Chia-Chi Dai](mailto:chiachid@usc.edu)  
  worked on the motivation for this project
- [Prajakta Khandve](mailto:khandve@usc.edu)
  worked on explaining how dataset has been handled and explained the design
- [Sanya Singh](mailto:sanyasin@usc.edu)  
  took care of llncs format, related work, resources and compilation
- [Simran Makandar](mailto:makandar@usc.edu)  
  worked on proof reading

## Demo

- [Chia-Chi Dai](mailto:chiachid@usc.edu)  
  worked on React deployment and d3 map (that shows the flights in the form of arcs)
- [Prajakta Khandve](mailto:khandve@usc.edu)
  worked on Data Cleaning and Region Wise Dashboard. Also, integrated mapbox with react environment
- [Sanya Singh](mailto:sanyasin@usc.edu)  
  worked on Airport and Airlines Dashboard and data for Mapbox.
- [Simran Makandar](mailto:makandar@usc.edu)  
  worked on home page and visual presenting using video recording.

### List of visualizations

| Requirement                          | Label       |
| ------------------------------------ | ----------- |
| responsive d3 chart                  | responsive  |
| interactive d3 chart                 | interactive |
| d3 chart with an animated transition | animated    |
| d3 layout                            | layout      |
| d3 map                               | map         |
| Mapbox map                           | mapbox      |

Table 1: Table of minimum requirements, 1 of each category is required.

In Table2, list all the charts and tables in your pages including minimum requirements labels when applicable.

| Page name       | Chart description | Libraries used | Requirement label |
| --------------- | ----------------- | -------------- | ----------------- |
| Map             | main map          | d3, topojson   | map               |
| Region-wise     | Multi-line chart  | d3             | responsive        |
| Region-wise     | Arc diagram       | d3             | interactive       |
| Region-wise     | Bar graph         | d3             | animated          |
| Region-wise     | Arc Diagram       | d3             | layout            |
| Airports-Mapbox | Mapbox map        | d3, mapbox-gl  | mapbox            |
| Airports        | Radial Graphs     | d3             |                   |
| Airports        | Donut Charts      | d3             |                   |
| Airports        | Stream Graph      | d3             |                   |

Table2: Table of visualizations

## Important Note

Due to unforeseen reason and the lack of time to figure out the deployment issue, there's an issue with the map page where the **arc on deployed website are not shown properly as running on localhost**. Therefore, Please kindly run it on localhost to check the arcs on map locally. Thank you very much! 
![Localhost Map Page](localhost.jpg)
![Deployed Map Page](deployment.jpg)