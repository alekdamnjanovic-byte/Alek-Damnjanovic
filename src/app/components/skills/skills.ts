import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly categories: SkillCategory[] = [
    {
      category: 'Languages',
      icon: '{ }',
      skills: [
        { name: 'Python',      level: 90 },
        { name: 'TypeScript',  level: 82 },
        { name: 'JavaScript',  level: 85 },
        { name: 'C / C++',     level: 72 },
        { name: 'Java',        level: 70 },
      ],
    },
    {
      category: 'Frontend',
      icon: '◻',
      skills: [
        { name: 'Angular',     level: 80 },
        { name: 'HTML5/CSS3',  level: 88 },
        { name: 'SCSS/Sass',   level: 80 },
        { name: 'React',       level: 65 },
        { name: 'Tailwind CSS',level: 75 },
      ],
    },
    {
      category: 'Backend & DB',
      icon: '⚙',
      skills: [
        { name: 'Node.js',     level: 78 },
        { name: 'REST APIs',   level: 84 },
        { name: 'PostgreSQL',  level: 72 },
        { name: 'MongoDB',     level: 68 },
        { name: 'Firebase',    level: 70 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: '⚡',
      skills: [
        { name: 'Git / GitHub',level: 88 },
        { name: 'Docker',      level: 65 },
        { name: 'Linux/Bash',  level: 75 },
        { name: 'VS Code',     level: 92 },
        { name: 'Figma',       level: 60 },
      ],
    },
  ];
}
