// Project data structure
const projects = [
  // % ---------------- Machine Learning Coursework part ------------------------------>
  {
    id: 'machine-learning-course',
    title: 'Machine Learning',
    image: 'assets/img/ml-course.png', // (optional, update as needed)
    altText: 'Machine Learning Concepts',
    tags: [
      'Machine Learning', 'Regression', 'Classification', 'Clustering', 'Neural Networks', 'Python'
    ],
    description: `
      <strong>Hands-on training in core machine learning algorithms and evaluation methods:</strong>
      <ul>
        <li>Regression: Linear, Polynomial, Regularization</li>
        <li>Classification: Logistic Regression, Perceptron, Neural Networks (ANN, DNN)</li>
        <li>Probabilistic Models: Naïve Bayes, Bayesian Networks</li>
        <li>Tree-Based Methods: Decision Trees, Random Forest</li>
        <li>Clustering: K-means, Fuzzy C-Means, Hierarchical</li>
        <li>Dimensionality Reduction: PCA</li>
        <li>Model Evaluation: Cross-validation, Precision, Recall, F1 Score</li>
      </ul>
      <em>All work implemented and validated in Python (Jupyter Notebook, scikit-learn, pandas, numpy).</em>
    `,
    codeBlock: {
      title: 'Core Skills Practiced',
      content: `
  - Regression & Classification Algorithms
  - Clustering & Dimensionality Reduction
  - Neural Networks
  - Model Evaluation Metrics
  - Python, scikit-learn, pandas, numpy
      `.trim()
    },
    githubLink: '', 
    isResearch: false
  },
  
  // % ---------------- AI Project: Uninformed Search Algorithms part ------------------------------>
  {
    id: 'ai-uninformed-search',
    title: 'AI Project: Uninformed Search Algorithms ',
    image: 'assets/img/AI_img.png', // <-- Add a relevant image for this project
    altText: 'Uninformed Search AI Project',
    tags: [
      'AI', 'Search Algorithms', 'Breadth-First Search', 'Depth-First Search',
      'N-Queens', 'Puzzle Solving', 'Python'
    ],
    description: `
      <strong>Explored classic AI search problems and solutions</strong> using Python as part of ECS170: Uninformed Search.<br>
      <ul>
        <li><strong>N-Queens:</strong> Implemented generators for all valid queen placements using DFS, and functions for validating and counting unique configurations.</li>
        <li><strong>Lights Out Puzzle:</strong> Designed an object-oriented puzzle class with methods for scrambling, copying, successors, and BFS-based optimal solution search.</li>
        <li><strong>Linear Disk Movement:</strong> Solved disk movement puzzles (identical and distinct disks) using BFS to find optimal move sequences under movement constraints.</li>
      </ul>
      <em>Project emphasizes classic search strategies, puzzle representations, and efficient Python coding—fully compatible with Gradescope autograder requirements.</em>
    `,
    codeBlock: {
      title: 'Key Features & Methods',
      content: `
  1. N-Queens Problem
     - Functions to count placements and validate board states
     - Depth-First Search generator for all valid solutions
  
  2. Lights Out Puzzle
     - Custom class for board representation and manipulation
     - Methods for performing moves, scrambling, checking solution
     - Successor state generation and BFS for optimal solutions
  
  3. Linear Disk Movement
     - BFS-based solvers for both identical and distinct disk puzzles
     - State encoding and efficient move generation
  
  4. Gradescope Ready
     - Python code structured per autograder template
     - Clean function signatures, robust testing, and compatibility
      `.trim()
    },
    githubLink: 'https://github.com/ctrterry', // <-- Update as needed
    isResearch: false
  },
  
// % ---------------- Deep Learing part ------------------------------>
{
  id: 'deep-learning-course-project',
  title: 'Deep Learning Project',
  image: 'assets/img/CNN_result.png',
  altText: 'Overview of Deep Learning Course Project',
  tags: [
    'Deep Learning', 'PyTorch', 'MLP', 'CNN', 'RNN', 'GCN',
    'Transformers', 'GAN', 'Graph Neural Networks', 'Research'
  ],
  description: `
  <strong>Deep learning project</strong> with PyTorch.<br>
  <ul>
    <li><strong>MLP:</strong> Multi-Layer Perceptron for multiclass classification tasks.</li>
    <li><strong>CNN:</strong> Convolutional Neural Networks for image recognition and object detection.</li>
    <li><strong>RNN/LSTM/GRU:</strong> Recurrent Neural Networks for text classification and generation.</li>
    <li><strong>GCN/GNN:</strong> Graph Convolutional Networks for node classification and graph embedding.</li>
    <li><strong>Transformer:</strong> Exploration of attention-based architectures.</li>
    <li><strong>GAN:</strong> Generative Adversarial Networks for synthetic data generation.</li>
  </ul>
  <em>Project integrates hands-on implementation, experiments, and reporting for each neural network family, grounded in influential research papers.</em>
  <br><br>
  <strong>Related Research Papers:</strong>
  <ul>
    <li><a href="assets/research/GCN.pdf" target="_blank">Semi-Supervised Classification with Graph Convolutional Networks</a></li>
    <li><a href="assets/research/Transformer.pdf" target="_blank">Attention Is All You Need (Transformer)</a></li>
    <li><a href="assets/research/RNN.pdf" target="_blank">Recurrent Neural Networks</a></li>
    <li><a href="assets/research/GAN.pdf" target="_blank">Generative Adversarial Nets</a></li>
    <li><a href="assets/research/Graph-Bert.pdf" target="_blank">Graph-BERT: Only Attention is Needed for Learning Graph Representations</a></li>
  </ul>
`,
codeBlock: {
  title: 'Project Pipeline & Highlights',
  content: `
1. MLPs for Classification
 - Architecture tuning and metric evaluation

2. CNNs for Image Recognition
 - Experimented with different datasets and architectures

3. RNNs for Text
 - Used RNN, LSTM, GRU for classification and sequence generation

4. GNNs for Graphs
 - Node classification on Cora, Pubmed, Citeseer datasets
  `.trim()
},
githubLink: 'https://github.com/ctrterry/GCN_Model', 
researchPapers: [
  'assets/research/GCN.pdf',
  'assets/research/Transformer.pdf',
  'assets/research/RNN.pdf',
  'assets/research/GAN.pdf',
  'assets/research/Graph-Bert.pdf'
],
},
// % ---------------- IMDB Research Paper part ------------------------------>
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


// % ---------------- Distributed File System part ------------------------------>
{
  id: 'distributed-fs',
  title: 'Operating System Project: Distributed File System',
  image: 'assets/img/os_system.png',
  altText: 'Distributed File System Architecture',
  tags: ['Operating Systems', 'Multi-threading', 'Distributed Systems', 'C++'],
  description: `
    <strong>Multi-threaded Distributed File System</strong> implemented in C++ to handle concurrent file operations efficiently.<br>
    Developed HTTP/REST API handlers (GET, PUT, DELETE) for files and directories.<br>
    Implemented thread pool and FIFO scheduling policy for optimal resource utilization.<br>
    Ensured data consistency and fault tolerance through transactional operations.
  `,
  codeBlock: {
    title: 'Key Features',
    content: `System Components:
  1. Multi-threaded Architecture
     - Thread pool implementation
     - FIFO scheduling policy
     - Concurrent request handling

  2. Synchronization
     - Mutex locks
     - Condition variables
     - Thread-safe operations

  3. File Operations
     - HTTP/REST API (GET, PUT, DELETE)
     - Transactional operations
     - Fault tolerance mechanisms

  4. Data Management
     - File distribution
     - Data consistency
     - Disk operations (begin, rollback, commit)`
  },
  githubLink: 'https://github.com/ctrterry/Multi-Thread-Concurrency-Control'
}, // End of Distributed File System

// % ---------------- Web Application part ------------------------------>
  {
    id: 'web-oauth-blog',
    title: 'Web Application with OAuth Integration and Database Management',
    image: '', 
    altText: 'OAuth and Web App Screenshot',
    tags: ['Web Development', 'Node.js', 'Express', 'SQLite', 'Handlebars', 'OAuth', 'Passport.js', 'API'],
    description: `
      <strong>Full-stack blogging platform</strong> with user authentication and post management.<br>
      <ul>
        <li>Developed with <strong>Node.js, Express, SQLite, and Handlebars</strong> for managing user-generated posts and profiles.</li>
        <li>Implemented <strong>Google OAuth 2.0</strong> authentication via Passport.js for secure user login and registration.</li>
        <li>Built custom APIs for fetching and displaying data (including emojis) from third-party services using <code>fetch</code>.</li>
      </ul>
    `,
    codeBlock: {
      title: 'Key Features',
      content: `
  1. Full-stack Design
     - Node.js backend with Express.js
     - Handlebars for templating and dynamic content
     - SQLite for persistent data storage
  
  2. Authentication
     - Google OAuth 2.0 integration (Passport.js)
     - Secure login and registration flow
  
  3. Custom API Integration
     - Fetches third-party data (e.g., emojis)
     - Displays user content and external data
  
  4. User & Post Management
     - CRUD for posts and profiles
     - Session management and flash messages
      `.trim()
    },
    githubLink: 'https://github.com/ctrterry/get-and-post'
  },
  
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