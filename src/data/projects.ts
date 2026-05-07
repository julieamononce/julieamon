export interface SubProjectVisual {
  src: string;
  alt: string;
  label: string;
}

export interface SubProject {
  title: string;
  description: string;
  visuals: SubProjectVisual[];
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  subProjects?: SubProject[];
}

import mapSS from "@/assets/MapSS.png";
import pres1 from "@/assets/Pres1.png";
import moransp from "@/assets/MORANSPLOT.png";
import lisa from "@/assets/LISA.png";
import gt from "@/assets/GT.png";
import unet from "@/assets/UNET.png";
import chart from "@/assets/CHART.png";

export const projects: Project[] = [
  {
    slug: "keepup",
    title: "KeepUp",
    description:
      "Modern Accounting Software for Small Businesses: KeepUp is a full-stack bookkeeping and financial management application designed to help small businesses track transactions, manage accounts, and generate core financial statements with clarity and confidence.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "AWS"],
    github: "https://github.com/mcneilkimberly/KeepUp.git",
    live: "https://keepupbookkeeping.netlify.app/login",
  },
  {
    slug: "balance",
    title: "Balance",
    description:
      "Balance is a web-based AI assistant with two interaction modes — Reflect and Focus — built to explore how tone, intent, and context shape chat-based user experiences.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "OpenAI API",
      "Canvas LMS API",
    ],
    github: "https://github.com/julieamononce/Balance--Final-Project.git",
  },
  {
    slug: "tracy-the-track-master",
    title: "Tracy the Track Master",
    description:
      "Tracy — The Task Master is a full-stack CRUD application built to store, retrieve, update, and delete data in JSON format. The project provides a clean and minimal UI where you can manage tasks using a table-based interface.",
    tech: ["HTML", "JavaScript", "CSS", "Node.js", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/julieamononce/Tracy--The-Track-Master.git",
  },
  {
    slug: "geospatial-data-science",
    title: "Geospatial Data Science Project",
    description:
      "This geospatial data science project explored how spatial data, statistical analysis, and GeoAI can be used to understand urban patterns and make evidence-based decisions. I created a Manhattan GIS story map connecting income, transportation, tourism, and bike infrastructure; analyzed unemployment clustering across New York counties using Moran’s I and LISA maps; and trained multiple segmentation models to detect buildings from raster imagery. Together, these projects strengthened my skills in GIS mapping, spatial statistics, Python-based geospatial analysis, and AI model evaluation for real-world urban and environmental applications.",
    tech: ["Python Notebook", "GeoAI", "Geopandas", "Numpy", "Matplotlib", "QGIS", "PySAL", "Scikit-learn", "Rasterio", "U-Net", "DeepLabV3", "SegFormer"],
    subProjects: [
      {
        title: "QGIS project",
        description: "Developed an interactive Manhattan GIS story map combining census income data, bike infrastructure, tourism locations, and transportation layers to explore spatial relationships between economic status and eco-friendly transportation access",
        github: "https://github.com/mcneilkimberly/Manhattan-Interactive-GIS-Story-Map.git",
        visuals: [
          { src: mapSS, alt: "Manhattan GIS story map", label: "Map" },
          { src: pres1, alt: "QGIS project screenshot", label: "Screenshot" }
        ],
      },
      {
        title: "Spatial Autocorrelation project",
        description: "Conducted a spatial autocorrelation analysis of New York’s 2023 county-level unemployment rates using Global Moran’s I and LISA cluster maps to identify statistically significant patterns of unemployment clustering and regional outliers.",
        github: "https://github.com/mcneilkimberly/Spatial-Autocorrelation-Analysis.git",
        visuals: [
          { src: lisa, alt: "LISA cluster map", label: "Map" },
          { src: moransp, alt: "MORANSPLOT", label: "Screenshot" },
        ],
      },
      {
        title: "GeoAI Building Detection project",
        description: "Trained and compared U-Net, DeepLabV3, and SegFormer segmentation models on raster imagery and building footprint labels in Purchase, NY to evaluate which model most accurately detected buildings using IoU, Dice Score, and visual mask comparisons.",
        github: "https://github.com/mcneilkimberly/Spatial-AI-Model-Comparison-for-Building-Detection.git",
        visuals: [
          { src: gt, alt: "Ground Truth", label: "Map" },
          { src: unet, alt: "U-Net output", label: "Model output" },
          { src: chart, alt: "Model comparison chart", label: "Chart" },
        ],
      },
    ],
  },
];
