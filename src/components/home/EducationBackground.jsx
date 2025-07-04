// components/home/EducationBackground.jsx
import React, { useState, useEffect } from 'react';
import {
    // Core Education & STEM (Relevant icons list - unchanged from last iteration)
    Book, Compass, PenTool, Ruler, FlaskConical, Lightbulb,
    GraduationCap,
    Microscope, Calculator, Globe, Atom, Code,
    BarChart2, MessageSquare, Brain, Clipboard, Puzzle,
    Laptop, Monitor, Server, Database, Wrench, Settings,
    Sigma, PieChart, TrendingUp, TrendingDown, HelpCircle, Info,
    Layers, Library, Rocket, Star, Target,
    Pencil,
    TestTube,
    LightbulbOff,
    Award,
    Users,
    Speech,
    Bug,
    Keyboard,
    MousePointer2,
    Table,
    Briefcase,
    Dna,
    CircuitBoard,
    Shield,
} from 'lucide-react';

export default function EducationBackground() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const edgeBuffer = 0.1; // 10% buffer on each side
    const virtualRange = 1 + 2 * edgeBuffer;

    // *** Increased Density for Desktop ***
    const numRows = windowWidth < 768 ? 7 : 15; // More rows on desktop
    const numCols = windowWidth < 768 ? 10 : 25; // Significantly more columns on desktop
    const totalIcons = numRows * numCols;

    const getRandomSize = () => {
        if (windowWidth < 768) {
            return Math.floor(Math.random() * (80 - 40 + 1)) + 40;
        } else {
            // Slightly smaller max size for desktop to accommodate higher density
            return Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Sizes between 20px and 50px
        }
    };

    const allIcons = [
        Book, Compass, PenTool, Ruler, FlaskConical, Lightbulb,
        GraduationCap,
        Microscope, Calculator, Globe, Atom, Code,
        BarChart2, MessageSquare, Brain, Clipboard, Puzzle,
        Laptop, Monitor, Server, Database, Wrench, Settings,
        Sigma, PieChart, TrendingUp, TrendingDown, HelpCircle, Info,
        Layers, Library, Rocket, Star, Target, Pencil, TestTube,
        LightbulbOff, Award, Users, Speech, Bug, Keyboard,
        MousePointer2, Table, Briefcase, Dna, CircuitBoard, Shield
    ];

    const iconsToRender = Array.from({ length: totalIcons }).map((_, i) => {
        return allIcons.length > 0 ? allIcons[i % allIcons.length] : null;
    }).filter(Boolean);

    const backgroundIcons = iconsToRender.map((item, index) => {
        const row = Math.floor(index / numCols);
        const col = index % numCols;

        const baseTopVirtual = (numRows > 1 ? (row / (numRows - 1)) : 0.5) * virtualRange * 100;
        const baseLeftVirtual = (numCols > 1 ? (col / (numCols - 1)) : 0.5) * virtualRange * 100;

        const finalTop = `calc(${baseTopVirtual}% - ${edgeBuffer * 100}%)`;
        const finalLeft = `calc(${baseLeftVirtual}% - ${edgeBuffer * 100}%)`;

        // *** Reduced Random Offset Range ***
        const randomOffsetRangeX = (100 / numCols) * 0.15; // Offset up to 15% of cell width
        const randomOffsetRangeY = (100 / numRows) * 0.15; // Offset up to 15% of cell height

        const randomOffsetX = (Math.random() * randomOffsetRangeX) - (randomOffsetRangeX / 2);
        const randomOffsetY = (Math.random() * randomOffsetRangeY) - (randomOffsetRangeY / 2);

        const finalTopWithOffset = `calc(${finalTop} + ${randomOffsetY}%)`;
        const finalLeftWithOffset = `calc(${finalLeft} + ${randomOffsetX}%)`;

        const animationDelay = Math.random() * 20;

        return {
            icon: item,
            style: {
                top: finalTopWithOffset,
                left: finalLeftWithOffset,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
                animationDelay: `${animationDelay}s`,
            }
        };
    });

    return (
        <div className="education-background">
            {backgroundIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <IconComponent
                        key={index}
                        className="bg-icon"
                        style={item.style}
                        size={getRandomSize()}
                    />
                );
            })}
        </div>
    );
}