import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      title: 'SmartNotes AI',
      description:
        'A full-stack note-taking app powered by AI — summarizes, tags, and links notes intelligently. Built with Angular, Node.js, and the OpenAI API.',
      tags: ['Angular', 'Node.js', 'OpenAI', 'MongoDB'],
      github: 'https://github.com/alekdamnjanovic-byte',
      demo: '#',
      featured: true,
    },
    {
      title: 'Pathfinder Visualizer',
      description:
        'Interactive visualization of graph search algorithms (BFS, DFS, Dijkstra, A*). Helps students understand algorithmic thinking step by step.',
      tags: ['TypeScript', 'Canvas API', 'Algorithms'],
      github: 'https://github.com/alekdamnjanovic-byte',
      demo: '#',
      featured: true,
    },
    {
      title: 'DevTracker',
      description:
        'A CLI tool and dashboard for tracking daily coding sessions, goals, and project progress with beautiful terminal output.',
      tags: ['Python', 'SQLite', 'Rich CLI'],
      github: 'https://github.com/alekdamnjanovic-byte',
      featured: false,
    },
    {
      title: 'Inventory REST API',
      description:
        'A production-grade REST API for inventory management with JWT authentication, rate limiting, and full OpenAPI documentation.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/alekdamnjanovic-byte',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'This very portfolio — built with Angular 22, SCSS, and TypeScript. Fully responsive with a dark engineering theme.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/alekdamnjanovic-byte/Alek-Damnjanovic',
      demo: '#',
      featured: false,
    },
    {
      title: 'CompressIt',
      description:
        'Lossless file compression tool implementing Huffman coding in C++, with benchmarking and a comparison against zlib.',
      tags: ['C++', 'Algorithms', 'Data Structures'],
      github: 'https://github.com/alekdamnjanovic-byte',
      featured: false,
    },
  ];
}
