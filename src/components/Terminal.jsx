import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';
import './Terminal.css';

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [activePrompt, setActivePrompt] = useState(false);
    const initialized = useRef(false);

    // Command Sequence
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        let timeout;

        const sequence = async () => {
            // Initialize Font and Generate ASCII
            figlet.parseFont('Standard', standard);
            const asciiArt = figlet.textSync('Welcome', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            });

            // Show ASCII Art first
            setLines(prev => [...prev, { type: 'ascii-art', text: asciiArt, id: 'welcome' }]);

            // Wait a bit after welcome
            await new Promise(r => setTimeout(r, 800));

            // First Command: whoami
            setLines(prev => [...prev, { type: 'command', text: 'whoami', id: 1 }]);

            // Output for whoami
            await new Promise(r => setTimeout(r, 600));
            setLines(prev => [...prev,
            { type: 'output', text: '> Full Stack Developer', id: 2 },
            { type: 'output', text: '> MERN Stack Specialist', id: 3 },
            { type: 'output', text: '> Problem Solver', id: 4 },
            ]);

            // Next Command: cat about_me.txt
            await new Promise(r => setTimeout(r, 1200));
            setLines(prev => [...prev, { type: 'command', text: 'cat about_me.txt', id: 'cmd_about' }]);

            // Output Bio
            await new Promise(r => setTimeout(r, 800));
            setLines(prev => [...prev,
            { type: 'output', text: 'I\'m a passionate full-stack developer with a love for creating elegant solutions to complex problems. With expertise in the MERN stack and modern web technologies, I build scalable, performant applications that users love.', id: 'bio1' },
            ]);

            // Next Command: location
            await new Promise(r => setTimeout(r, 1500));
            setLines(prev => [...prev, { type: 'command', text: 'current-location', id: 5 }]);

            // Output
            await new Promise(r => setTimeout(r, 800));
            setLines(prev => [...prev, { type: 'output', text: '> "Earth" (Remote Capable)', id: 6 }]);

            // Next Command: contact
            await new Promise(r => setTimeout(r, 1500));
            setLines(prev => [...prev, { type: 'command', text: 'contact', id: 7 }]);

            // Output
            await new Promise(r => setTimeout(r, 800));
            setLines(prev => [...prev,
            { type: 'output', text: '> github.com/madhab2024', id: 8 },
            { type: 'output', text: '> linkedin.com/in/madhab-mondal/', id: 9 },
            { type: 'output', text: '> instagram.com/madhab_mondal_20/', id: 10 }
            ]);

            // Finish
            await new Promise(r => setTimeout(r, 500));
            setActivePrompt(true);
        };

        sequence();

        return () => clearTimeout(timeout);
    }, []);

    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <Card className="terminal-window">
            <CardHeader className="terminal-header">
                <div className="terminal-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                </div>
                <div className="terminal-title">
                    <FaTerminal className="terminal-icon" />
                    <span>portfolio — zsh</span>
                </div>
            </CardHeader>
            <CardContent className="terminal-body" ref={scrollRef}>
                {lines.map((line) => (
                    <motion.div
                        key={line.id}
                        initial={line.type === 'ascii-art' ? { opacity: 0 } : { opacity: 0, x: 10 }}
                        animate={line.type === 'ascii-art' ? { opacity: 1 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`terminal-line ${line.type}`}
                    >
                        {line.type === 'ascii-art' ? (
                            <pre className="ascii-content">{line.text}</pre>
                        ) : (
                            <>
                                {line.type === 'command' && <span className="prompt">$</span>}
                                <span className="text">{line.text}</span>
                            </>
                        )}
                    </motion.div>
                ))}
                {activePrompt && (
                    <motion.div
                        className="terminal-line command active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <span className="prompt">$</span>
                        <span className="cursor">_</span>
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
};

export default Terminal;
