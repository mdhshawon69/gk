'use client';

import React from 'react';

import { HeroSection, DetailSection, CommentSection } from '@/components/StoryDetails';
import { RecentPost, WorkTogether } from '@/shared/components';
import { useFetch } from '@/shared/hook';
import { IStories } from '@/shared/types/stories';

const StoryDetails = async ({ params }: { params: { storyDetails: number } }) => {
  const id = Number(params.storyDetails);

  const story = await useFetch({ url: `/stories?category_id=${id}` });
  const stories = await useFetch({ url: '/stories', revalidateIn: 86400 });

  const heroSectionData = {
    title: story && story.data[0].title,
    subtitle: story && story.data[0].sub_title,
    image: story && story.data[0].banner_image
  };
  const detailData = {
    id: story && story.data[0].id,
    description: story && story.data[0].desc
  };
  const recentPostData = stories && stories.data.slice((data: IStories) => data.id === id);

  return (
    <>
      <HeroSection data={heroSectionData}/>
      <DetailSection data={detailData}/>
      <CommentSection storyId={id}/>
      <RecentPost data={recentPostData}/>
      <WorkTogether/>
    </>
  );
};

export default StoryDetails;
