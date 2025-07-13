import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github, Mail, ExternalLink } from "lucide-react";

const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Changed default to light mode
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState("me.png");

    useEffect(() => {
        // Loading animation duration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2600);

        return () => clearTimeout(timer);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleImage = () => {
        setCurrentImage(currentImage === "me.png" ? "me2.png" : "me.png");
    };

    const scrollToSection = sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    if (isLoading) {
        return (
            <div
                className={`fixed inset-0 ${
                    isDarkMode ? "bg-gray-900" : "bg-white"
                } flex items-center justify-center z-50`}
            >
                <div className="text-center">
                    <div className="relative">
                        {/* Minecraft-style letters with pixelated font - responsive sizing */}
                        <div
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-green-600 mb-8 select-none tracking-wider"
                            style={{ fontFamily: 'monospace, "Courier New"' }}
                        >
                            <div className="flex justify-center items-center">
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "0s" }}
                                >
                                    N
                                </span>
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    o
                                </span>
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "0.4s" }}
                                >
                                    r
                                </span>
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    D
                                </span>
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "0.8s" }}
                                >
                                    e
                                </span>
                                <span
                                    className="minecraft-letter animate-pixel-spawn"
                                    style={{ animationDelay: "1.0s" }}
                                >
                                    v
                                </span>
                            </div>
                        </div>

                        {/* Animated dots like Minecraft loading - responsive */}
                        <div className="text-lg sm:text-xl md:text-2xl text-green-700 font-mono">
                            <span className="animate-pulse">
                                Building world
                            </span>
                            <span className="animate-ping">.</span>
                            <span
                                className="animate-ping"
                                style={{ animationDelay: "0.3s" }}
                            >
                                .
                            </span>
                            <span
                                className="animate-ping"
                                style={{ animationDelay: "0.6s" }}
                            >
                                .
                            </span>
                        </div>

                        {/* Minecraft-style particles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-green-500 animate-bounce opacity-60"
                                    style={{
                                        left: `${20 + i * 10}%`,
                                        top: `${30 + (i % 3) * 20}%`,
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: `${
                                            1 + (i % 3) * 0.5
                                        }s`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .minecraft-letter {
                        display: inline-block;
                        text-shadow:
                            2px 2px 0px #16a34a,
                            4px 4px 0px #15803d,
                            6px 6px 0px #166534;
                        transform: scale(0) rotate(180deg);
                        opacity: 0;
                        filter: pixelated;
                        image-rendering: pixelated;
                        image-rendering: -moz-crisp-edges;
                        image-rendering: crisp-edges;
                    }

                    @keyframes pixel-spawn {
                        0% {
                            transform: scale(0) rotate(180deg);
                            opacity: 0;
                            filter: blur(4px);
                        }
                        50% {
                            transform: scale(1.3) rotate(90deg);
                            opacity: 0.8;
                            filter: blur(2px);
                        }
                        100% {
                            transform: scale(1) rotate(0deg);
                            opacity: 1;
                            filter: blur(0px);
                        }
                    }

                    .animate-pixel-spawn {
                        animation: pixel-spawn 0.6s
                            cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                isDarkMode ? "bg-gray-900" : "bg-green-50"
            }`}
        >
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-4 h-4 ${
                                isDarkMode ? "bg-green-400" : "bg-green-600"
                            } opacity-20 animate-pulse`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Header */}
            <header
                className={`fixed top-0 w-full z-40 transition-all duration-300 ${
                    isDarkMode
                        ? "bg-gray-800/90 backdrop-blur-md border-b border-green-500/20"
                        : "bg-white/90 backdrop-blur-md border-b border-green-600/20"
                }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            NorDev
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`hover:text-green-400 transition-colors ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className={`hover:text-green-400 transition-colors ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className={`hover:text-green-400 transition-colors ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className={`hover:text-green-400 transition-colors ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className={`hover:text-green-400 transition-colors ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Contact
                            </button>

                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg transition-colors ${
                                    isDarkMode
                                        ? "bg-gray-700 hover:bg-gray-600"
                                        : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            >
                                {isDarkMode ? (
                                    <Sun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg transition-colors ${
                                    isDarkMode
                                        ? "bg-gray-700 hover:bg-gray-600"
                                        : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            >
                                {isDarkMode ? (
                                    <Sun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            <button
                                onClick={toggleMenu}
                                className={`p-2 rounded-lg transition-colors ${
                                    isDarkMode
                                        ? "text-white hover:bg-gray-700"
                                        : "text-gray-800 hover:bg-gray-200"
                                }`}
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div
                            className={`md:hidden mt-4 py-4 border-t ${
                                isDarkMode
                                    ? "border-green-500/20"
                                    : "border-green-600/20"
                            }`}
                        >
                            <nav className="flex flex-col space-y-4">
                                <button
                                    onClick={() => scrollToSection("home")}
                                    className={`text-left hover:text-green-400 transition-colors ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className={`text-left hover:text-green-400 transition-colors ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection("skills")}
                                    className={`text-left hover:text-green-400 transition-colors ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className={`text-left hover:text-green-400 transition-colors ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className={`text-left hover:text-green-400 transition-colors ${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    Contact
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8 md:px-12 lg:px-24" // Added responsive padding
            >
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                            <h1
                                className={`text-5xl lg:text-7xl font-bold mb-6 ${
                                    isDarkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Hello, I'm{" "}
                                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
                                    Norway Mangorangca
                                </span>
                            </h1>
                            <p
                                className={`text-xl lg:text-2xl mb-8 ${
                                    isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                Full Stack Developer & Mobile App Developer
                            </p>
                            <p
                                className={`text-lg mb-8 ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-700"
                                }`}
                            >
                                Building exceptional digital experiences with
                                modern technologies and creative solutions.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl transform rotate-6 animate-pulse"></div>
                                <div
                                    className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl shadow-xl transform -rotate-6 flex items-center justify-center overflow-hidden cursor-pointer"
                                    onClick={toggleImage}
                                >
                                    <img
                                        src={`/${currentImage}`}
                                        alt="Norway Mangorangca"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className={`py-20 px-4 sm:px-8 md:px-12 lg:px-24 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                }`} // Added responsive padding
            >
                <div className="container mx-auto">
                    <h2
                        className={`text-4xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        About Me
                    </h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p
                            className={`text-lg mb-6 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            I'm a passionate full-stack developer with expertise
                            in modern web technologies. I love creating digital
                            experiences that are both functional and beautiful,
                            always staying up-to-date with the latest trends and
                            best practices.
                        </p>
                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            When I'm not coding, I enjoy playing online games,
                            watching anime, reading manga, sleeping, or spending
                            time with my cat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className={`py-20 px-4 sm:px-8 md:px-12 lg:px-24 ${
                    isDarkMode ? "bg-gray-900" : "bg-green-50"
                }`} // Added responsive padding
            >
                <div className="container mx-auto">
                    <h2
                        className={`text-4xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        Skills
                    </h2>

                    {/* Mobile View - Horizontal Scrollable Skills */}
                    <div className="md:hidden">
                        <div className="space-y-4 overflow-x-auto pb-4">
                            {/* First Row - Scroll Left */}
                            <div className="flex space-x-4 animate-[scrollLeft_20s_linear_infinite]">
                                {[
                                    {
                                        name: "React",
                                        icon: "/skills/react.png"
                                    },
                                    {
                                        name: "React Native",
                                        icon: "/skills/react-native.png"
                                    },
                                    { name: "HTML", icon: "/skills/html.png" },
                                    { name: "CSS", icon: "/skills/css.png" },
                                    {
                                        name: "JavaScript",
                                        icon: "/skills/javascript.png"
                                    },
                                    { name: "PHP", icon: "/skills/php.png" },
                                    {
                                        name: "Laravel",
                                        icon: "/skills/laravel.png"
                                    }
                                ].map(skill => (
                                    <div
                                        key={skill.name}
                                        className={`flex-shrink-0 w-32 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300 ${
                                            isDarkMode
                                                ? "bg-gray-800 hover:bg-gray-700"
                                                : "bg-white hover:bg-green-100"
                                        } shadow-lg hover:shadow-xl`}
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 flex items-center justify-center">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3
                                            className={`text-sm sm:text-base font-semibold ${
                                                isDarkMode
                                                    ? "text-white"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {skill.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                            {/* Second Row - Scroll Right */}
                            <div className="flex space-x-4 animate-[scrollRight_20s_linear_infinite]">
                                {[
                                    {
                                        name: "Node.js",
                                        icon: "/skills/nodejs.png"
                                    },
                                    {
                                        name: "Express",
                                        icon: "/skills/express.png"
                                    },
                                    {
                                        name: "Tailwind",
                                        icon: "/skills/tailwind.png"
                                    },
                                    {
                                        name: "Bootstrap",
                                        icon: "/skills/bootstrap.png"
                                    },
                                    {
                                        name: "MySQL",
                                        icon: "/skills/mysql.png"
                                    },
                                    {
                                        name: "PostgreSQL",
                                        icon: "/skills/postgresql.png"
                                    },
                                    { name: "Git", icon: "/skills/git.png" }
                                ].map(skill => (
                                    <div
                                        key={skill.name}
                                        className={`flex-shrink-0 w-32 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300 ${
                                            isDarkMode
                                                ? "bg-gray-800 hover:bg-gray-700"
                                                : "bg-white hover:bg-green-100"
                                        } shadow-lg hover:shadow-xl`}
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 flex items-center justify-center">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3
                                            className={`text-sm sm:text-base font-semibold ${
                                                isDarkMode
                                                    ? "text-white"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {skill.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop View - Animated Grid */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {[
                                { name: "React", icon: "/skills/react.png" },
                                {
                                    name: "React Native",
                                    icon: "/skills/react-native.png"
                                },
                                { name: "HTML", icon: "/skills/html.png" },
                                { name: "CSS", icon: "/skills/css.png" },
                                {
                                    name: "JavaScript",
                                    icon: "/skills/javascript.png"
                                },
                                { name: "PHP", icon: "/skills/php.png" },
                                {
                                    name: "Laravel",
                                    icon: "/skills/laravel.png"
                                },
                                { name: "Node.js", icon: "/skills/nodejs.png" },
                                {
                                    name: "Express",
                                    icon: "/skills/express.png"
                                },
                                {
                                    name: "Tailwind",
                                    icon: "/skills/tailwind.png"
                                },
                                {
                                    name: "Bootstrap",
                                    icon: "/skills/bootstrap.png"
                                },
                                { name: "MySQL", icon: "/skills/mysql.png" },
                                {
                                    name: "PostgreSQL",
                                    icon: "/skills/postgresql.png"
                                },
                                { name: "Git", icon: "/skills/git.png" }
                            ].map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={`p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300 ${
                                        isDarkMode
                                            ? "bg-gray-800 hover:bg-gray-700"
                                            : "bg-white hover:bg-green-100"
                                    } shadow-lg hover:shadow-xl animate-[float_4s_ease-in-out_infinite]`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3
                                        className={`text-sm sm:text-base font-semibold ${
                                            isDarkMode
                                                ? "text-white"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {skill.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scrollLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    @keyframes scrollRight {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    @keyframes float {
                        0%,
                        100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                `}</style>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className={`py-20 px-4 sm:px-8 md:px-12 lg:px-24 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                }`} // Added responsive padding
            >
                <div className="container mx-auto">
                    <h2
                        className={`text-4xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                title: "NorAnime",
                                description:
                                    "Note: On-going project. An anime discovery platform where you can search trending animes, view their details, and see popularity rankings.",
                                technologies: ["React", "Rest API", "Tailwind"],
                                image: "/projects/noranime.png",
                                link: "https://noranime-nu.vercel.app/"
                            },
                            {
                                id: 2,
                                title: "DoTrack",
                                description:
                                    "A simple yet powerful todo list application to help you organize and track your daily tasks.",
                                technologies: [
                                    "HTML",
                                    "JavaScript",
                                    "CSS",
                                    "PHP"
                                ],
                                image: "/projects/dotrack.png",
                                link: "https://dotrack-nordev.rf.gd/"
                            },
                            {
                                id: 3,
                                title: "Catchy",
                                description:
                                    "Note: Front-end only. Catchy is a React Native mobile application developed as a midterm project, showcasing modern mobile development practices. It features a clean UI, smooth animations, and efficient state management.",
                                technologies: ["React Native"],
                                image: "/projects/catchy.png",
                                link: "https://apkpure.com/p/com.norway012.norway"
                            }
                        ].map(project => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode ? "bg-gray-700" : "bg-gray-50"
                                } block`}
                            >
                                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className={`text-xl font-semibold mb-2 ${
                                            isDarkMode
                                                ? "text-white"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className={`mb-4 ${
                                            isDarkMode
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-green-500 text-white text-sm rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-green-500 hover:text-green-400" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className={`py-20 px-4 sm:px-8 md:px-12 lg:px-24 ${
                    isDarkMode ? "bg-gray-900" : "bg-green-50"
                }`} // Added responsive padding
            >
                <div className="container mx-auto">
                    <h2
                        className={`text-4xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        Get In Touch
                    </h2>
                    <div className="max-w-2xl mx-auto text-center">
                        <p
                            className={`text-lg mb-8 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            I'm always open to discussing new opportunities and
                            interesting projects. Let's create something amazing
                            together!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <a
                                href="mailto:occ.mangorangca.norway@gmail.com"
                                className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors px-4 py-2"
                            >
                                <Mail className="w-6 h-6" />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://github.com/npmFullStack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors px-4 py-2"
                            >
                                <Github className="w-6 h-6" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.facebook.com/share/1ECknLTzU9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-8 ${
                    isDarkMode
                        ? "bg-gray-800 border-t border-green-500/20"
                        : "bg-white border-t border-green-600/20"
                }`}
            >
                <div className="container mx-auto px-4 text-center">
                    <p
                        className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        © 2025 NorDev • Bringing ideas to life.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
