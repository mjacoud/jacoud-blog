'use client';

import { Post } from "./Post";
import { useWindowSize } from "../hooks/useWindowSize";
import {useQuery } from "@tanstack/react-query";

interface PostProps {
  id: number;
  title: string;
  slug: string;
  content: string;
  author_id: number;
  created_at: Date;
  updated_at: Date; 
  is_published: boolean; 
  img_src: string;
  tags: string[];
  total_articles: number;
}

interface ApiResponse {
  articles: PostProps[];
  pagination: {
    page: number;
    lastPage: number;
    prev_page: number | null;
    next_page: number | null;
  };
}

interface FeedProps {
  type: string;
}

export const Feed = ({ type }: FeedProps) => {

  const {isPending, error, data} = useQuery<ApiResponse>({
    queryKey: ['article'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4500/v1/articles');
      if (!response.ok) {
        return console.log('Failed to fetch articles'); 
    }
    
      return response.json();
    },
  });

  const olderPosts = data?.articles.slice(1) || [];
  const windowSize = useWindowSize();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (

      <div>
        {type === "recent" ? (
          <div className="xl:grid xl:grid-cols-2 xl:gap-12">
            <Post
              content={data.articles[0].content}
              date={data.articles[0].created_at}
              tags={data.articles[0].tags.map((tags)=> tags)}
              imgsrc={data.articles[0].img_src}
              title={data.articles[0].title}
              type="main"
            />
            <div>
              {olderPosts.map((post) => (
                <Post
                  content={post.content}
                  date={post.created_at}
                  tags={post.tags.map((tags)=> tags)}
                  imgsrc={post.img_src}
                  title={post.title}
                  key={post.title}
                  type={windowSize.width >= 768 ? "secondary" : "main"}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
            {olderPosts.map((post) => (
              <Post
                content={post.content}
                date={post.created_at}
                tags={post.tags}
                imgsrc={post.img_src}
                title={post.title}
                key={post.title}
                type="main"
              />
            ))}
          </div>
        )}
      </div>
    
  );
};