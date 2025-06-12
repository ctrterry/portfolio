// Project data structure
const projects = [
  {
    id: 'imdb-research',
    title: 'IMDB Research Paper',
    image: 'assets/img/research-paper.png',
    altText: 'IMDB Research Paper Cover',
    tags: ['Research', 'Data Analysis', 'Machine Learning'],
    description: `
      <strong>Research Paper on IMDB Dataset Analysis</strong><br>
      An in-depth analysis of movie data from the IMDB dataset, exploring patterns and trends in the film industry.
      This research paper presents comprehensive findings and insights derived from extensive data analysis.
    `,
    codeBlock: {
      title: 'Research Overview',
      content: `Key Research Areas:
    1. Data Collection and Preprocessing
    2. Statistical Analysis
    3. Pattern Recognition
    4. Trend Analysis
    5. Future Predictions`
    },
    githubLink: 'assets/research/IMDB_Research_paper.pdf',
    isResearch: true
  }, // End of IMDB Research Paper
  {
    id: 'cpu-cache',
    title: 'Digital Design of CPU and Cache Systems',
    image: 'assets/img/Cache.png',
    altText: 'CPU and Cache System Architecture Diagram',
    tags: ['Computer Architecture', 'Digital Design', 'Cache Systems'],
    description: `
      <strong>Developed CPU and cache architectures</strong> using logic gates and digital design techniques.<br>
      Applied logic-based approaches to optimize memory access and data flow within the cache.<br>
      Conducted simulations to test and validate performance, ensuring reliability and functionality.<br>
    `,
    codeBlock: {
      title: 'Key Components',
      content: `CPU Components:
    1. Program Counter (PC): Tracks the current instruction address
    2. Instruction Decoder: Decodes instructions to generate control signals
    3. Register File: Stores and manages register values for operations

Cache System:
    1. 8-entry Direct Mapped Cache
    2. Valid Bit: Indicates if data is loaded in the cache line
    3. Dirty Bit: Marks whether cache data has been modified
    4. TAG: Identifies cached data address
    5. Cache Data: Actual data stored within cache lines`
    },
    githubLink: 'https://github.com/ctrterry/Computer-Architecture'
  }, // End of CPU and Cache Systems
  {
    id: 'lstore-db',
    title: 'Database System Project: L-Store Implementation',
    image: 'assets/img/database.png',
    altText: 'L-Store Database System Architecture',
    tags: ['Database Systems', 'Multi-threading', 'L-Store'],
    description: `
      <strong>Single-Threaded Implementation:</strong> Built a foundational in-memory database using L-Store architecture 
      with base/tail pages for efficient data storage; implemented SQL-like operations 
      (INSERT, SELECT, UPDATE, DELETE).<br><br>
      <strong>Multi-threading Enhancement:</strong> Introduced concurrent processing with a thread pool and 
      synchronization primitives to handle simultaneous transactional (OLTP) 
      and analytical (OLAP) queries.
    `,
    codeBlock: {
      title: 'System Architecture',
      content: `'''
    #  Version | Version_Tail | MIN rid range | MAX rid range 
    #   FOR BASE PAGES
    #   example: 5 columns
    #   i += 5, for each page increment by 5 for easy book keeping

    # --Indirection | --Column Pages--- |
    #   meta0-tail  | Page 0  | Page 1  | and so on
    #   meta1-tail  | Page 5  | Page 6  |
    #   meta2-tail  | Page 10 | Page 11 |
    #   meta3-tail  | Page 15 | Page 16 |
    #   meta4-tail  | Page 20 | Page 21 |
'''`
    },
    githubLink: 'https://github.com/ctrterry/Durable-LStore-Database'
  }, // End of L-Store Database Implementation
];

// Function to create project tags HTML
function createTagsHTML(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('\n');
}

// Function to render a single project
function renderProject(project) {
  const linkText = project.isResearch ? 'View Research Paper' : 'View Project on GitHub';
  const linkClass = project.isResearch ? 'project-link research-link' : 'project-link';
  
  return `
    <div class="project-card" id="${project.id}">
      <img src="${project.image}" alt="${project.altText}" loading="lazy">
      <div class="project-details">
        <h2>${project.title}</h2>
        <div class="project-tags">
          ${createTagsHTML(project.tags)}
        </div>
        <p>${project.description}</p>
        <div class="code-block">
          <h3>${project.codeBlock.title}</h3>
          <pre><code>${project.codeBlock.content}</code></pre>
        </div>
        <a href="${project.githubLink}" target="_blank" class="${linkClass}">${linkText}</a>
      </div>
    </div>
  `;
}

// Function to render all projects
function renderProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(project => renderProject(project)).join('\n');
  }
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects); 