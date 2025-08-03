My plan is to make a general AI agent. Teachable, adaptable, and capable of learning from experience. Primarily for the purposes of employment. The same way a human employee would be onboarded, trained, and then given tasks to do, I want to do the same with an AI agent.

In development of the POC/MVP, I will be using something like the following.
```
Nodejs
Express
Vanilla HTML, CSS, and JavaScript
Frontend Architecture: primitives > modules > sections > layouts > pages
OpenAI API
SQLite
Qdrant
```
### Frontend Architecture

The frontend follows a layered composition pattern that builds larger features from small, reusable pieces:

1. **Primitives** – Low-level UI elements such as buttons, inputs, and other single-purpose components.
2. **Modules** – Small groups of primitives that deliver a discrete piece of functionality, like a form field with validation.
3. **Sections** – Page fragments assembled from modules, for example a hero banner, footer, or product grid.
4. **Layouts** – Structural wrappers that arrange sections and provide shared page chrome like navigation or sidebars.
5. **Pages** – Complete screens composed of layouts and their sections for a specific route.

This hierarchy keeps the UI scalable and easy to reason about as features grow.

In production, I will be building in the AWS ecosystem.
