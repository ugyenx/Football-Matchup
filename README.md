# ⚽ Football MatchUp

**The ultimate platform for amateur football players to find teammates, challenge opponents, and balance teams.**

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### ✅ Implemented (MVP)

- **🏠 Landing Page**: Eye-catching hero section with gradient effects and feature highlights
- **👤 Player Registration**: Multi-step wizard for creating detailed player profiles
  - Basic information (name, age, email, location)
  - Football identity (position, preferred foot)
  - Skill ratings (speed, dribbling, passing, shooting, stamina, defense, physicality)
- **🔐 Authentication**: Login page with email/password and Google OAuth UI
- **🔍 Find Players**: Search and filter players by position, location, and availability
- **👥 Teams**: Browse teams, view stats, and create new teams
- **⚔️ Matchmaking**: Find and challenge opponent teams
- **⚖️ Team Balancer** (Key Feature):
  - Auto-balance algorithm using snake draft
  - Manual team assignment
  - Real-time rating comparison
  - Balance indicator

### 🎨 Design Highlights

- **Premium Dark Theme**: Sleek black background with neon accents
- **Glassmorphism**: Frosted glass effects throughout
- **Vibrant Colors**: Neon Lime (#D4FF00) and Electric Blue (#00F0FF)
- **Modern Typography**: Outfit for headings, Inter for body text
- **Smooth Animations**: CSS transitions and keyframe animations
- **Fully Responsive**: Mobile-first design

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
football-matchup/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/page.tsx        # Login page
│   ├── register/page.tsx     # Registration wizard
│   ├── players/page.tsx      # Find players
│   ├── teams/page.tsx        # Browse teams
│   ├── matchmaking/page.tsx  # Find matches
│   ├── balancer/page.tsx     # Team balancer ⭐
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & theme
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── ui/
│       ├── Button.tsx        # Reusable button
│       ├── Input.tsx         # Reusable input
│       └── Slider.tsx        # Rating slider
└── public/                   # Static assets
```

## 🎯 Key Pages

### 1. Landing Page (`/`)
- Hero section with animated gradients
- Feature cards
- Call-to-action sections

### 2. Registration (`/register`)
- **Step 1**: Basic Info (name, age, email, location)
- **Step 2**: Football Identity (position, preferred foot)
- **Step 3**: Skill Ratings (7 attributes rated 1-10)

### 3. Team Balancer (`/balancer`) ⭐
- View all available players
- Auto-balance teams with one click
- Manually assign players to Team A or Team B
- Real-time rating comparison
- Balance indicator when teams are fair

### 4. Find Players (`/players`)
- Search by name or location
- Filter by position (GK, DF, MF, FW)
- View player stats and ratings
- Availability indicators

### 5. Teams (`/teams`)
- Browse all teams
- View team stats (members, rating, W/L record)
- Create new teams

### 6. Matchmaking (`/matchmaking`)
- Find opponent teams
- View match details (location, time, players)
- Challenge teams

## 🎨 Design System

### Colors

```css
/* Dark Mode (Default) */
--background: #050505
--foreground: #ededed
--primary: #D4FF00      /* Neon Lime */
--secondary: #00F0FF    /* Electric Blue */
--surface: #121212
--surface-highlight: #1E1E1E
```

### Typography

- **Display Font**: Outfit (headings, titles)
- **Body Font**: Inter (paragraphs, UI text)

### Components

All components use the glassmorphism style:
```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📋 Roadmap

### Phase 1: Backend Integration
- [ ] Set up API routes
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real authentication (NextAuth.js)
- [ ] User sessions

### Phase 2: Enhanced Features
- [ ] Player profile detail pages
- [ ] Team roster management
- [ ] Match scheduling calendar
- [ ] Real-time notifications
- [ ] Chat system

### Phase 3: Advanced Features
- [ ] Leaderboards
- [ ] Player achievements
- [ ] Tournament system
- [ ] Match history
- [ ] Statistics dashboard

### Phase 4: Mobile App
- [ ] React Native app
- [ ] Push notifications
- [ ] Offline mode

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your needs!

## 📄 License

MIT License - feel free to use this project for learning or as a template.

## 🎯 Product Vision

Football MatchUp aims to solve the common problem of organizing amateur football matches:
- **Finding Players**: Connect with players in your area
- **Fair Teams**: Use ratings to create balanced matchups
- **Easy Scheduling**: Organize matches effortlessly
- **Community Building**: Grow local football communities

---

**Built with ❤️ for the football community**

