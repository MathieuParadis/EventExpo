# Event'EXPO
Welcome to the Event'EXPO! This project aims to create a public-facing event page that showcases various events organized by your company. The page will feature an indication of public interest for each event, allowing visitors to express their interest with a simple click.


## Introduction
The Event Manager Portal is designed to provide a seamless experience for both administrators and the public. Administrators can effortlessly create, edit, and delete events, while the public can explore upcoming events and express their interest in attending.


## Installation and Setup
1. Clone this repository to your local machine
```
	git clone https://github.com/MathieuParadis/EventExpo.git
```

2. Navigate to the project directory
```bash
  cd EventExpo
```

3. Install the package dependencies by running
```
  npm install
```

4. Create and seed the database
```
  npx prisma migrate dev --name init
```

5. Start the server by running
```
  npm dev
```

6. Open your web browser and navigate to `http://localhost:3000`.


## Technologies Used
* NextJS
* HTML5
* CSS3
* Tailwind CSS


## Enhancements
1. **Data Caching:** Implement caching to improve performance by reducing database queries, but ensure data is refreshed periodically to maintain accuracy.
2. **Validation Schema:** Develop a robust validation schema for the event creation form to ensure data integrity and user input accuracy.
