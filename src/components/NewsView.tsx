import React, { useState } from 'react';
import { Calendar, User, Heart, MessageSquare, Send, ArrowRight, Share2, Sparkles } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  tag: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}

export default function NewsView() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 'p1',
      title: 'Safe Classrooms Act Clears House Committee with Bi-partisan Support',
      excerpt: 'In a major milestone for state student safety advocates, the new bill requiring schools to compile active bullying mitigation plans cleared the committee.',
      content: 'The legislative committee unanimously passed House Bill 402, widely known as the Safe Classrooms Act. Backed by extensive empirical study from Bullying Recovery & Awareness (BRA), the bill mandates structured timelines for school authorities to respond to, investigate, and record peer harassment. Under the new statute, school boards failing to protect students from documented cyberbullying can face severe administrative audits.',
      date: 'July 8, 2026',
      author: 'Michael Lin, Esq.',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=400',
      tag: 'Policy',
      likes: 124,
      liked: false,
      comments: [
        { id: 'c1', author: 'Principal Evans', text: 'This bill is a major help for educators. We need clear legal guidelines so we can act with authority.', date: 'July 9, 2026' },
        { id: 'c2', author: 'A Concerned Parent', text: 'Thank goodness! Overdue protections for our children.', date: 'July 9, 2026' }
      ]
    },
    {
      id: 'p2',
      title: 'Our Peer-Mentorship Circles Expand to 40 New High School Districts',
      excerpt: 'Following a successful pilot showing an 80% decrease in relational isolation, our peer-led student circles are officially launching in 40 schools.',
      content: 'We are thrilled to announce the official expansion of the BRA Peer-Mentorship Circles. After launching a pilot study in twelve regional school districts last September, clinical data indicated that students participating in regular circles reported an 80% decrease in feelings of relational trauma and exclusion. The expansion provides fully funded active-listening manuals, certified adult facilitators, and student coordinator training kits.',
      date: 'June 28, 2026',
      author: 'Dr. Evelyn Carter',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1521791136368-1a46827d0adb?auto=format&fit=crop&q=80&w=400',
      tag: 'Community',
      likes: 98,
      liked: false,
      comments: [
        { id: 'c3', author: 'Mentor_Amelia', text: 'Leading these circles has been life-changing. Watching kids reclaim their confidence is beautiful!', date: 'June 29, 2026' }
      ]
    },
    {
      id: 'p3',
      title: 'Cyberbullying and Teen Gaming: Platform Safety Alliances Formed',
      excerpt: 'BRA is collaborating with major game studios to implement immediate counseling shortcuts inside popular online multiplayer lobbys.',
      content: 'In response to escalating toxicity in online gaming spaces, BRA has brokered a groundbreaking partnership with three major video game developers. Starting next quarter, multiplayer platforms will integrate a direct shortcut in their reporting panels, directing targeted minors to BRA’s anonymous counseling guides and private safety planning interfaces. Our goal is to meet youth directly where they spend their free time.',
      date: 'June 15, 2026',
      author: 'Shirley Fafounne',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400',
      tag: 'Cyberbullying',
      likes: 156,
      liked: false,
      comments: []
    }
  ]);

  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPosts(posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          likes: p.liked ? p.likes - 1 : p.likes + 1,
          liked: !p.liked
        };
      }
      return p;
    }));
  };

  const handleAddComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText || !commentAuthor) return;

    setPosts(posts.map((p) => {
      if (p.id === postId) {
        const newComment: Comment = {
          id: `comment-${Date.now()}`,
          author: commentAuthor,
          text: commentText,
          date: 'Just now'
        };
        return {
          ...p,
          comments: [...p.comments, newComment]
        };
      }
      return p;
    }));

    setCommentText('');
    setCommentAuthor('');
  };

  const activePost = posts.find((p) => p.id === activePostId);

  return (
    <div id="news-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3D5647] font-semibold bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full">
          BRA Newsroom &amp; Stories
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          Developments in safety, advocacy, and legislation.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Stay informed on our regional expansions, legislative successes, public policy briefs, and stories from our peer circles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Post Grid/List */}
        <div className={`space-y-6 ${activePostId ? 'lg:col-span-6' : 'lg:col-span-12 max-w-5xl mx-auto w-full'}`}>
          <div className="border-b border-[#E4DFD3] pb-4">
            <h2 className="font-display text-xl font-bold text-[#222523] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#3D5647]" /> Recent Highlights
            </h2>
          </div>

          <div className={`grid gap-6 ${activePostId ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
            {posts.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                onClick={() => setActivePostId(post.id)}
                className={`glass-panel rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group transition-all border ${
                  activePostId === post.id
                    ? 'border-[#3D5647] bg-white'
                    : 'border-transparent hover:border-[#3D5647]/30 bg-white/50'
                }`}
              >
                <div>
                  {/* Card Image */}
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-wider text-[#3D5647] bg-[#E9EFEA] px-2 py-0.5 rounded border border-[#C5D7CC]">
                      {post.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#8C938D] font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-[#222523] group-hover:text-[#3D5647] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-[#555C57] text-xs md:text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 border-t border-[#E4DFD3] flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <button
                      id={`btn-like-post-${post.id}`}
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 transition-colors cursor-pointer ${
                        post.liked ? 'text-[#B85C40]' : 'text-[#555C57] hover:text-[#222523]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.liked ? 'fill-[#B85C40]/20' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-[#555C57]">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>

                  <span className="text-xs text-[#3D5647] font-bold flex items-center gap-1">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Full Post Detail Reader */}
        {activePost && (
          <div className="lg:col-span-6 animate-fade-in">
            <div id="news-post-reader-panel" className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 bg-white">
              
              {/* Back to list button */}
              <button
                id="btn-close-post-reader"
                onClick={() => setActivePostId(null)}
                className="text-xs text-[#3D5647] hover:text-[#2c3f34] font-mono flex items-center gap-1 hover:underline cursor-pointer"
              >
                &larr; Back to recent highlights
              </button>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-[#3D5647] uppercase bg-[#E9EFEA] border border-[#C5D7CC] px-2.5 py-1 rounded-full">
                  {activePost.tag}
                </span>

                <h1 className="font-display text-xl md:text-2xl font-bold text-[#222523] leading-tight">
                  {activePost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#555C57] border-b border-[#E4DFD3] pb-4">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#3D5647]" /> By {activePost.author}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activePost.date}</span>
                </div>
              </div>

              {/* Main article content text */}
              <div className="text-[#4A504C] text-xs md:text-sm leading-relaxed space-y-4 font-normal">
                <p>{activePost.content}</p>
                <p>
                  To receive direct briefings and updates on bills similar to this, subscribe to our newsletter below or get in touch with our advocacy division directly.
                </p>
              </div>

              {/* Comments Section */}
              <div className="border-t border-[#E4DFD3] pt-6 space-y-4">
                <h3 className="font-display text-sm font-bold text-[#222523] flex items-center gap-1.5">
                  <MessageSquare className="w-4.5 h-4.5 text-[#3D5647]" /> Discussion ({activePost.comments.length})
                </h3>

                {/* Comments List */}
                <div className="space-y-3.5 max-h-[180px] overflow-y-auto no-scrollbar pr-1">
                  {activePost.comments.length > 0 ? (
                    activePost.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-[#FAF9F6] border border-[#E4DFD3] rounded-xl p-3 space-y-1 text-xs"
                      >
                        <div className="flex justify-between font-mono text-[10px] text-[#8C938D]">
                          <span className="text-[#3D5647] font-bold">{comment.author}</span>
                          <span>{comment.date}</span>
                        </div>
                        <p className="text-[#4A504C] font-normal leading-normal">{comment.text}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[11px] font-mono text-[#8C938D] italic">No comments posted. Be the first to join the conversation.</p>
                  )}
                </div>

                {/* Comment Form */}
                <form onSubmit={(e) => handleAddComment(activePost.id, e)} className="space-y-2 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="Your Name / Handle"
                      className="w-full bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-3 py-2 text-xs text-[#222523] placeholder-[#8C938D] focus:outline-none"
                    />
                    <div className="flex gap-1.5 items-center justify-end text-[10px] font-mono text-[#3D5647]">
                      <Share2 className="w-3 h-3" /> Anonymous Posting Safe
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Post a supportive comment..."
                      className="flex-1 bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-3 py-2 text-xs text-[#222523] placeholder-[#8C938D] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#3D5647] hover:bg-[#32473a] border border-[#3D5647] text-white rounded-xl px-4 py-2 text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
