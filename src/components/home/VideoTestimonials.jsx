import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { videoTestimonials } from '../../utils/data/videoTestimonials';

export const VideoTestimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const openVideo = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedVideo]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Close modal on Escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedVideo) {
                closeVideo();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedVideo]);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #002147 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
                            Watch Our Client Stories
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Hear directly from facility managers and healthcare professionals about their experience with TES Care Group
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {videoTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => openVideo(testimonial.videoUrl)}
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900">
                                    {/* Thumbnail */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={testimonial.thumbnail}
                                            alt={`${testimonial.name} testimonial`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-warm-beige">
                                                <Play size={32} className="text-navy ml-1" fill="currentColor" />
                                            </div>
                                        </div>

                                        {/* Duration badge */}
                                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                                            {testimonial.duration}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 bg-white">
                                        <p className="text-gray-700 italic mb-4 line-clamp-2">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="border-t pt-4">
                                            <h3 className="font-heading font-semibold text-navy text-lg">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.facility}, {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeVideo}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeVideo}
                                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
                                aria-label="Close video"
                            >
                                <X size={24} />
                            </button>

                            {/* Video player */}
                            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                                <video
                                    ref={videoRef}
                                    className="w-full h-auto"
                                    controls
                                    autoPlay
                                    playsInline
                                    src={selectedVideo}
                                    aria-label="Testimonial video"
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Mute toggle */}
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                            </div>

                            {/* Instructions */}
                            <p className="text-center text-white/70 text-sm mt-4">
                                Press ESC to close or click outside the video
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
