// components/home/EducationBackground.jsx
import React, { useState, useEffect } from 'react';
import {
    // Core Education & STEM icons (Relevant icons list - unchanged)
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

    // Increased Density for Desktop (unchanged from previous)
    const numRows = windowWidth < 768 ? 7 : 15; // More rows on desktop
    const numCols = windowWidth < 768 ? 10 : 25; // Significantly more columns on desktop
    const totalIcons = numRows * numCols;

    // KEY CHANGE: Removed random size generation
    const getFixedSize = () => {
        if (windowWidth < 768) {
            return 60; // Fixed size for mobile
        } else {
            return 40; // Fixed size for desktop
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

        // KEY CHANGE: Removed random offsets, now they are 0
        const randomOffsetX = 0;
        const randomOffsetY = 0;

        const finalTopWithOffset = `calc(${finalTop} + ${randomOffsetY}%)`;
        const finalLeftWithOffset = `calc(${finalLeft} + ${randomOffsetX}%)`;

        // KEY CHANGE: Removed random animation delay, now it's 0
        const animationDelay = 0; // Or index * 0.05 for a sequential fade-in

        return {
            icon: item,
            style: {
                top: finalTopWithOffset,
                left: finalLeftWithOffset,
                // KEY CHANGE: Removed random rotation, now it's 0deg
                transform: `translate(-50%, -50%) rotate(0deg)`,
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
                        size={getFixedSize()} // KEY CHANGE: Using fixed size
                    />
                );
            })}
        </div>
    );
}