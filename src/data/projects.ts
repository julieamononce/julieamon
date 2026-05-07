export interface SubProjectVisual {
  src: string;
  alt: string;
  label: string;
  description?: string;
}

export interface SubProject {
  title: string;
  description: string;
  visuals: SubProjectVisual[];
  github?: string;
  live?: string;
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
import unet from "@/assets/unet.png";
import chart from "@/assets/CHART.png";
import dashboard from "@/assets/dashboard.png";
import journal from "@/assets/journal.png";
import ledger from "@/assets/ledger.png";
import statements from "@/assets/statements.png";
import taxplanner from "@/assets/taxplanner.png";
import busratios from "@/assets/busratios.png";

export const projects: Project[] = [
  {
    slug: "keepup",
    title: "KeepUp",
    description:
      "Modern Accounting Software for Small Businesses: KeepUp is a full-stack bookkeeping and financial management application designed to help small businesses track transactions, manage accounts, and generate core financial statements with clarity and confidence.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "AWS"],
    github: "https://github.com/mcneilkimberly/KeepUp.git",
    live: "https://keepupbookkeeping.netlify.app/login",
    subProjects: [
      {
        title: "Dashboard",
        description: "After logging in, users are taken to the dashboard where they can view their financial overview, including key metrics, recent transactions, and visualizations of their financial data. The dashboard provides a snapshot of the business's financial health and allows users to quickly access important information.",
        visuals: [
          {src: dashboard, alt: "Dashboard", label: "Dashboard", description: "The main dashboard view where users can see an overview of their financial data." }
        ],
      },
      {

        title: "Journal",
        description: "Users can create, view, and manage journal entries to record their financial transactions. The journal entry interface allows users to input transaction details, categorize expenses and income, and maintain financial records.",
        visuals: [
          {src: journal, alt: "Journal Entries", label: "Journal Entries", description: "The journal entries view where users can create, view, and manage their financial transactions." }
        ],
      },
      {

        title: "Ledger",
        description: "The ledger provides a comprehensive view of all financial transactions, allowing users to track income and expenses, categorize entries, and maintain financial records.",
        visuals: [
          {src: ledger, alt: "Ledger", label: "Ledger", description: "The ledger view where users can track all financial transactions in detail." }
        ],
      },
      {

        title: "Business Statements",
        description: "The business statements provide an overview of the company's financial performance, including income statements, balance sheets, and cash flow statements.",
        visuals: [
          {src: statements, alt: "Business Statements", label: "Business Statements", description: "The business statements view where users can see an overview of their financial performance, including income statements, balance sheets, and cash flow statements." }
        ],
      },
      {

        title: "Tax Planner",
        description: "The tax planner helps users estimate and plan their tax liabilities",
        visuals: [
          {src: taxplanner, alt: "Tax Planner", label: "Tax Planner", description: "The tax planner view where users can estimate and plan their tax liabilities." }
        ],
      },
      {

        title: "Business Ratios",
        description: "The business ratios allow users to analyze key financial metrics and performance indicators, such as profitability ratios, liquidity ratios, and efficiency ratios, to gain insights into their business's financial health and make informed decisions.",
        visuals: [
          {src: busratios, alt: "Business Ratios", label: "Business Ratios", description: "The business ratios view where users can analyze key financial metrics and performance indicators." }
        ],
      },
    ],
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
        live: "https://manhattan-interactive-gis-map.netlify.app/",
        visuals: [
          { src: mapSS, alt: "Manhattan GIS story map", label: "Map", description: "From our map, we could visually see how the areas south of central park generally have a greater amount of income. This higher income and popular historic and business locations leads to a higher population and tourism. This vast increase in people and traffic (along with the romantisism of riding a bike in New York City), leads to the increase necessity for a way to easily travel. This results in bikes, bike trails, and bike parking." },
          { src: pres1, alt: "QGIS project screenshot", label: "Screenshot" }
        ],
      },
      {
        title: "Spatial Autocorrelation project",
        description: "Conducted a spatial autocorrelation analysis of New York’s 2023 county-level unemployment rates using Global Moran’s I and LISA cluster maps to identify statistically significant patterns of unemployment clustering and regional outliers.",
        github: "https://github.com/mcneilkimberly/Spatial-Autocorrelation-Analysis.git",
        visuals: [
          { src: lisa, alt: "LISA cluster map", label: "Map", description: "Based on the Local Spatial Autocorrelation (LISA) analysis performed, we can determine clusters of high and low values and spatial outliers by examining the generated Moran Cluster Map and understanding the quadrant classifications." },
          { src: moransp, alt: "MORANS PLOT", label: "Model output", description: "There is a statistically significant weak positive spatial autocorrelation in the unemployment rates! This indicates a tendency for counties with similar unemployment rates to be located near each other (clustering), though it’s not very strong." },
        ],
      },
      {
        title: "GeoAI Building Detection project",
        description: "Trained and compared U-Net, DeepLabV3, and SegFormer segmentation models on raster imagery and building footprint labels in Purchase, NY to evaluate which model most accurately detected buildings using IoU, Dice Score, and visual mask comparisons.",
        github: "https://github.com/mcneilkimberly/Spatial-AI-Model-Comparison-for-Building-Detection.git",
        visuals: [
          { src: gt, alt: "Ground Truth", label: "Map", description: "Ground truth building footprint labels used for training and evaluation." },
          { src: unet, alt: "U-Net output", label: "Model output", description: "U-Net achieved the highest IoU and Dice Score, indicating it was the most effective model for building detection in this project."  },
          { src: chart, alt: "Model comparison chart", label: "Chart", description: "Performance Analysis: U-Net outperformed the other models in terms of IoU and Dice Score."},
        ],
      },
    ],
  },
];
