import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eraser, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import styles from './HealingCanvas.module.css';

export default function HealingCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = Math.min(window.innerWidth - 40, 600);
            canvas.height = 400;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#D4AF37'; // Gold color
                ctx.lineWidth = 3;
                setContext(ctx);
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        if (context) context.beginPath();
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || !context || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        // Handle both mouse and touch events
        const x = ('clientX' in e ? e.clientX : e.touches[0].clientX) - rect.left;
        const y = ('clientY' in e ? e.clientY : e.touches[0].clientY) - rect.top;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    };

    const clearCanvas = () => {
        if (context && canvasRef.current) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    };

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.title}
            >
                Healing Canvas
            </motion.h1>
            <p className="text-white/80 mb-6 text-center">Draw a heart, sign your name, or leave a mark of our love.</p>

            <div className={styles.canvasWrapper}>
                <canvas
                    ref={canvasRef}
                    className={styles.canvas}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseMove={draw}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchEnd={stopDrawing}
                    onTouchMove={draw}
                />
            </div>

            <div className={styles.controls}>
                <Button onClick={clearCanvas} variant="outline" size="sm">
                    <Eraser size={16} className="mr-2" />
                    Clear
                </Button>
                <Button onClick={() => {
                    const canvas = canvasRef.current;
                    if (canvas) {
                        const link = document.createElement('a');
                        link.download = 'healing-heart-art.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    }
                }} size="sm">
                    <Download size={16} className="mr-2" />
                    Save & Send to Him 📥
                </Button>
            </div>
        </div>
    );
}
